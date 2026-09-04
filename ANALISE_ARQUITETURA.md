# Análise de Arquitetura — MXOS Simulador

> Documento gerado por análise estática do código-fonte em `/home/max/Documentos/Kali Linux/uninter-mxos-simulador`, sem modificações no projeto. Data da análise: 2026-09-04.

## Sumário executivo

O MXOS é um simulador de questões para alunos da UNINTER: SPA em um único arquivo HTML consumindo uma API REST em Node.js/Express, com SQLite embutido via `sql.js` (WASM, sem dependência nativa) e um tutor de IA (Gemini 2.5 Flash) acoplado ao fluxo de quiz. O projeto é pequeno, coeso e sem over-engineering — mas tem uma decisão central que domina o perfil de risco do sistema: **autenticação apenas por RU, sem senha** (`backend/routes/auth.js:13-46`). Esse é um trade-off consciente e já documentado pelo mantenedor (ver `CONTEXT.md:10-12`), não um descuido — mas suas consequências de segurança precisam estar claras à medida que o projeto ganha mais usuários/matérias.

Fora isso, os principais achados são: ausência total de testes automatizados reais, um pipeline de dados (`seed.js`) que não roda em produção automaticamente, documentação (`CONTEXT.md`) parcialmente desatualizada em relação ao código (menciona `better-sqlite3`, mas o código usa `sql.js`), e um frontend monolítico de ~2200 linhas que já mostra sinais de que vai ficar difícil de manter conforme cresce.

---

## 1. Estrutura e responsabilidades

### 1.1 Backend (`backend/`)

| Arquivo | Responsabilidade |
|---|---|
| `backend/server.js` | Bootstrap do Express: CORS, `express.json`, serve estático do `frontend/`, monta todas as rotas sob `/api/*`, inicializa o banco antes de subir o `listen()`. |
| `backend/config.js` | Config centralizada: `JWT_SECRET` (com fallback hardcoded), `JWT_EXPIRES_IN`, `PORT`, `PAYLOAD_LIMIT`. |
| `backend/database.js` | Camada de acesso a dados: inicializa `sql.js`, cria schema (`criarTabelas`), expõe helpers `dbAll/dbGet/dbRun` no estilo `better-sqlite3`, persiste em arquivo via `salvarDebounced()`. |
| `backend/middleware/auth.js` | Middleware único de autenticação: valida header `Authorization: Bearer <jwt>`, popula `req.usuario`. |
| `backend/routes/*.js` | Um arquivo por domínio de rota (auth, temas, questoes, responder, historico, ranking, tutor) — ver seção 3. |
| `backend/seed.js` | Script standalone (não é rota) que popula o banco com 12 "aulas" (`AULA01`..`AULA12`), 360 questões e 6 alunos fixos. ~6600 linhas, dados inline como literais JS. |
| `backend/scripts/convert-material-bruto.js` | Utilitário CLI que faz parsing de exports brutos de provas (pasta `material-bruto/`, não versionada) e gera um arquivo `AULA09..AULA12` pronto para colar no `seed.js`. |
| `backend/scripts/output/aulas-09-12.js` | Artefato de build gerado pelo script acima — não é `require`ado por nada (confirmado via grep), é resíduo de um processo manual de copy-paste para dentro do `seed.js`. |

### 1.2 Frontend (`frontend/index.html`)

SPA de arquivo único (~2213 linhas): `<style>` (CSS custom properties para tema dark/light) + `<script>` (vanilla JS, sem framework, sem build step). Estrutura interna:

- **Estado global** — objeto `state` (`frontend/index.html:1362-1373`) guarda tema atual, questões, índice, respostas, timer.
- **Camada de API** — função única `apiRequest()` (`frontend/index.html:1341-1357`) injeta o `Authorization: Bearer` e centraliza tratamento de erro.
- **Views** — troca de telas via `showView()` sobre um dicionário de elementos (`frontend/index.html:1376-1384`): login, landing, temas, quiz, resultado, histórico, ranking.
- **Persistência client-side** — `localStorage` para token (`mxos-token`), usuário (`mxos-user`), tema visual (`mxos-theme`) e dimensões do chat do tutor (`mxos-tutor-w/h`).
- **Renderização** — construção de HTML via template strings + `innerHTML` (ex.: `frontend/index.html:1608`, `1751`, `1923`, `1944`) — sem componentização, sem virtual DOM.

### 1.3 Banco de dados

SQLite rodando inteiramente em JS via `sql.js` (compilado para WASM), não `better-sqlite3` como a documentação do projeto ainda afirma (`CONTEXT.md:21` — desatualizado, ver seção 4). Schema (`backend/database.js:46-99`):

```
alunos(id, ru UNIQUE, nome, senha_hash, ativo, created_at)
temas(id, title, shortTitle, description, accent, icon, total, passingScore)
questoes(id, tema_id→temas, numero, pergunta, resposta_correta, explicacao, fonte)
alternativas(id, questao_id→questoes, letra, texto)
resultados(id, aluno_id→alunos, tema_id→temas, acertos, erros, total, nota, status, respostas JSON, created_at)
```

Índices em `resultados(aluno_id)`, `resultados(tema_id)` e `resultados(tema_id, nota DESC)` — os dois últimos usados por `historico.js` e `ranking.js` respectivamente.

Persistência: todo o banco vive em memória (`sql.js`) e é serializado para `backend/mxos.db` a cada escrita, com debounce de 500ms (`backend/database.js:40-44`). O arquivo `.db` está no `.gitignore` — cada ambiente (dev/produção) tem seu próprio banco, isolado do controle de versão.

### 1.4 Rotas (API)

Todas montadas em `backend/server.js:41-47`:

| Rota | Método | Arquivo | Auth |
|---|---|---|---|
| `/api/auth/login` | POST | `routes/auth.js` | não |
| `/api/simulado/temas` | GET | `routes/temas.js` | não |
| `/api/simulado/temas/:id` | GET | `routes/temas.js` | não |
| `/api/simulado/temas/:id/questoes` | GET | `routes/questoes.js` | JWT |
| `/api/simulado/responder` | POST | `routes/responder.js` | JWT |
| `/api/simulado/finalizar` | POST | `routes/responder.js` | JWT |
| `/api/simulado/historico` | GET | `routes/historico.js` | JWT |
| `/api/simulado/ranking/:topicId` | GET | `routes/ranking.js` | JWT |
| `/api/simulado/tutor` | POST | `routes/tutor.js` | JWT |
| `/api/health` | GET | `server.js` | não |

Observação estrutural: `temasRoutes` e `questoesRoutes` são montados no mesmo prefixo (`/api/simulado/temas`, `server.js:42-43`) — funciona porque um define `/` e `/:id` e o outro `/:id/questoes`, mas o acoplamento de dois routers no mesmo prefixo é uma escolha frágil: uma futura rota `GET /:id/algumacoisa` em qualquer um dos dois arquivos pode colidir silenciosamente com o outro sem que isso fique óbvio olhando um arquivo isolado.

### 1.5 Scripts

- `npm start` → `node server.js`
- `npm run seed` → `node seed.js` (idempotente? **não** — cada execução faz `INSERT` sem `DELETE`/`UPGRADE` prévio; rodar duas vezes duplica temas/questões, pois `temas.id` e `questoes.id` são `TEXT PRIMARY KEY` e um segundo `INSERT` com mesmo `id` vai falhar em runtime, interrompendo o seed no meio — não há tratamento de conflito).
- CI/CD (`.github/workflows/deploy.yml`) — dois jobs: `test` (verifica apenas que `backend/server.js` e `frontend/index.html` existem — não é um teste funcional) e `deploy` (SSH → `git pull` → `npm install --production` → `pm2 reload mxos`). **Não roda `node seed.js`** — dado novo só chega em produção com intervenção manual via SSH.

---

## 2. Fluxos principais

### 2.1 Autenticação

1. Frontend envia `{ ru }` para `POST /api/auth/login` (`routes/auth.js:13`).
2. Backend busca `alunos` por `ru` com `ativo = 1` (`routes/auth.js:21`) — **nenhuma senha é verificada**, apesar de a tabela `alunos` ter a coluna `senha_hash` (`database.js:51`), que nunca é lida nem escrita (confirmado por grep: nenhum uso de `bcryptjs` no código, apesar de estar como dependência em `backend/package.json:13`).
3. Se o RU existe, emite JWT (`{ id, ru, name }`, expira em 8h — nota: essa constante local em `auth.js:11` sobrepõe o `JWT_EXPIRES_IN` de 24h definido em `config.js:6`, ou seja, existem duas fontes de verdade para o mesmo conceito).
4. Frontend guarda `token` e `student` em `localStorage` (`index.html:1466-1467`) e injeta `Authorization: Bearer <token>` em toda chamada subsequente via `apiRequest()`.
5. Todas as rotas protegidas usam o middleware único `autenticar` (`middleware/auth.js:8-32`), que apenas valida assinatura/expiração do JWT — não há verificação adicional (ex.: se o aluno ainda está `ativo=1` no banco no momento da requisição; um JWT de um aluno desativado após o login continua válido até expirar).

### 2.2 Questões (montagem do simulado)

1. `GET /api/simulado/temas/:id/questoes` (JWT obrigatório) — `routes/questoes.js:9`.
2. Query única com subquery + `LEFT JOIN`: seleciona 10 questões aleatórias do tema (`ORDER BY RANDOM() LIMIT 10`) e suas alternativas, evitando N+1 (documentado como otimização já aplicada — ver `CONTEXT.md:136`).
3. Resposta nunca inclui `resposta_correta` nem `explicacao` — o gabarito de fato não trafega nessa etapa.
4. O array `sessionQuestionIds` retornado é devolvido pelo frontend depois no `/finalizar`, funcionando como um "ticket" da sessão de 10 questões sorteadas — mas ele **não é assinado nem persistido no servidor** entre a montagem e a finalização (ver risco em 4.2).

### 2.3 Respostas

Dois endpoints com propósitos distintos:

- `POST /responder` (`routes/responder.js:10-45`) — feedback imediato por questão individual: recebe `questionId` + `answerLetter`, valida contra `questoes.resposta_correta`, sempre retorna `explanation`/`source`, e só retorna a letra correta (`correctAnswerLetter`) quando o aluno acertou. Não grava nada no banco — é puramente uma consulta de correção.
- `POST /finalizar` (`routes/responder.js:47-143`) — fecha o simulado: valida que `sessionQuestionIds` tem exatamente 10 IDs pertencentes ao `topicId` informado (`routes/responder.js:64-70`, mitigação against payload forjado), recalcula acertos/erros/nota (nota = `acertos/10*10`), grava em `resultados` via `UPSERT` manual (`SELECT` seguido de `UPDATE` ou `INSERT`, `routes/responder.js:110-124`) — isso é o que permite refazer o simulado e sobrescrever o resultado anterior (comportamento intencional, documentado em `CONTEXT.md:161-162` como correção de um bug anterior de "placar congelado").

### 2.4 Histórico

`GET /historico` (`routes/historico.js:6-22`) — `JOIN` simples entre `resultados` e `temas` filtrado por `aluno_id` do JWT, ordenado por `created_at DESC`. Sem paginação — cresce linearmente com o número de simulados do aluno (hoje inofensivo com 12 temas, mas sem limite embutido).

### 2.5 Ranking

`GET /ranking/:topicId` (`routes/ranking.js:6-33`) — top 10 por tema, ordenado por `nota DESC, acertos DESC`, usa o índice composto `idx_resultados_nota`. Expõe `name` e `ru` de outros alunos para qualquer aluno autenticado — aceitável dado que é um ranking de turma pequena e fechada, mas é exposição de dado de terceiro (RU) sem consentimento explícito modelado no sistema.

### 2.6 Temas

`GET /temas` e `GET /temas/:id` (`routes/temas.js`) — leitura simples, sem autenticação, retornando metadados (`title`, `accent`, `icon`, `total`, `passingScore`). Nota: o campo `passingScore` armazenado por tema (ex.: 21/30) é **vestigial** — o fluxo real de quiz sempre usa 10 questões com `passingScore` fixo em 7, hardcoded em `routes/questoes.js:52` e `routes/responder.js:105` (memória de projeto já registra isso). Ou seja, o schema promete uma regra de negócio por tema que o código ignora.

### 2.7 Tutor IA

1. Frontend captura contexto da questão atual (`getQuizContext()`) e abre um chat lateral.
2. `POST /tutor` (`routes/tutor.js:31-105`, JWT obrigatório) recebe `question`, `alternatives`, `subject`, `studentQuestion`, `history`, `questionId`.
3. Backend trunca todos os campos de texto (`slice(0,1000)`, `slice(0,500)`, `slice(0,100)` — `tutor.js:45-47`) e busca o gabarito real no banco por `questionId` (`tutor.js:58-63`) para injetar no `systemInstruction` dinâmico enviado ao Gemini.
4. Chama `gemini-2.5-flash` via SDK oficial (`@google/generative-ai`), com histórico da conversa remapeado (`tutor.js:66-69`) e `startChat()` para manter contexto multi-turno.
5. O prompt de sistema instrui o modelo a revelar a resposta correta quando o aluno pedir diretamente (`tutor.js:13-29`) — decisão pedagógica deliberada ("professor direto"), não um vazamento acidental.
6. Erros de configuração de API key retornam 503 genérico (`tutor.js:100-101`) sem expor detalhes.

---

## 3. Decisões arquiteturais aparentes e consequências

| Decisão | Onde | Consequência |
|---|---|---|
| **Login só por RU, sem senha** | `routes/auth.js:13-46` | Simplifica onboarding (não há fluxo de cadastro/recuperação de senha), mas qualquer pessoa que descubra/adivinhe um RU válido pode se autenticar como aquele aluno indefinidamente (RUs de 7 dígitos parecem sequenciais nos dados de seed, `seed.js:6580-6586`). É um trade-off aceitável para uma turma pequena e fechada, mas não escala para um público maior ou anônimo sem reavaliação. |
| **SQLite via `sql.js` (WASM) em vez de binário nativo** | `database.js:7-31` | Elimina dependência de compilação nativa (bom para portabilidade entre SOs/CI), mas todo o banco é carregado em memória e reserializado no disco a cada escrita — não escala para bancos grandes nem para múltiplas instâncias do processo (sem lock/concorrência entre processos). |
| **Frontend SPA em arquivo único, sem build step** | `frontend/index.html` (2213 linhas) | Zero complexidade de tooling (deploy = copiar um arquivo), mas já no tamanho atual mistura CSS, estado, roteamento de views e lógica de negócio no mesmo escopo global — qualquer nova tela authenticamente aumenta o custo de manutenção quase linearmente. |
| **Seed de dados como script standalone, não migração versionada** | `seed.js` (6611 linhas, dados inline) | Fácil de rodar localmente, mas não é idempotente, não versiona mudanças incrementais de schema/dados, e exige execução manual pós-deploy em produção (já documentado no histórico do projeto). |
| **JWT sem refresh/rotação, TTL curto (8h) e duplicado em duas configs** | `config.js:6` (24h) vs `routes/auth.js:11` (8h, efetivamente usado) | Sessões expiram sem aviso durante um simulado longo; a duplicidade de configuração é uma fonte de bug futuro se alguém for alterar o TTL só em um dos dois lugares. |
| **Correção de questão feita 100% no servidor** | `routes/questoes.js` (nunca envia gabarito), `routes/responder.js` | Boa decisão de segurança básica — impede leitura trivial do gabarito no DevTools do navegador. |
| **`sessionQuestionIds` como prova de sessão, sem estado server-side** | `routes/responder.js:55-70` | Evita precisar de tabela de sessões/Redis, mas transfere a integridade da lista de questões para o cliente; a validação atual (todos os IDs pertencem ao tema, e são exatamente 10) mitiga adulteração grosseira, mas não impede um aluno de montar manualmente uma lista de 10 IDs "fáceis" do mesmo tema fora da amostra que o servidor originalmente sorteou para ele. |
| **Tutor IA com acesso ao gabarito completo da questão ativa** | `routes/tutor.js:56-82` | Decisão de produto (professor "direto"), coerente com o público-alvo, mas significa que o único controle contra "cola" é o prompt de sistema — não há barreira técnica; um `history` forjado ou uma mudança de prompt engineering do lado do aluno tem superfície para tentar extrair o gabarito de questões antes de responder (a rota não impede que `studentQuestion` peça a resposta antes do `POST /responder`). |

---

## 4. Pontos fortes

- **Gabarito nunca trafega antes da resposta do aluno** — verificado em `questoes.js` (sem `resposta_correta`/`explicacao` no payload) e reforçado por `responder.js` (só revela a letra correta quando o aluno já acertou).
- **CORS restritivo** — lista explícita de origens (`server.js:28-32`), não usa `*`.
- **Payload limitado** — `express.json({ limit: '100kb' })` (`config.js:8`, `server.js:33`) mitiga payloads abusivos.
- **Validação defensiva pragmática nas rotas críticas** — `responder.js` valida `answerLetter` contra whitelist `^[A-E]$` (linha 25), valida `sessionQuestionIds` como array de exatamente 10 IDs pertencentes ao tema (linhas 55-70) antes de confiar no payload do cliente.
- **Query otimizada com JOIN único** em `questoes.js`, com comentário explícito de que substitui N+1 — mostra que o time já passou por uma iteração de tuning.
- **Índices de banco alinhados com os padrões de acesso reais** (`historico` por aluno, `ranking` por tema+nota).
- **Config centralizada** (`config.js`) em vez de secrets espalhados pelo código.
- **Documentação viva do projeto** (`CONTEXT.md`) com histórico de bugs, decisões e lições aprendidas — prática rara e valiosa em projetos pequenos, embora esteja parcialmente desatualizada (ver seção 5).
- **Escopo enxuto por rota** — cada arquivo de rota faz uma coisa, sem abstrações prematuras (nenhum ORM, nenhuma camada de "service" desnecessária para o tamanho atual do projeto).

---

## 5. Riscos

### 5.1 Segurança

1. **Autenticação sem prova de posse** (`routes/auth.js:13-46`) — o único fator é conhecer um RU. Não há CAPTCHA, rate limiting ou bloqueio por tentativas (nenhum middleware de rate limiting está instalado — confirmado: sem `express-rate-limit` em `package.json`). Um script simples poderia enumerar RUs sequenciais (`1234567`..`9999999`) e sequestrar sessões de alunos reais.
2. **`JWT_SECRET` com fallback hardcoded em código versionado** (`config.js:5`: `'mxos-secret-key-dev'`) — se `JWT_SECRET` não estiver setado no `.env` de produção (algo que já aconteceu antes com `GEMINI_API_KEY`, segundo `CONTEXT.md:200-205`), tokens de produção seriam assinados com um segredo público no GitHub, permitindo forjar tokens para qualquer `aluno_id`.
3. **Dependência morta que sinaliza autenticação incompleta** — `bcryptjs` está em `package.json:13` e a coluna `alunos.senha_hash` existe no schema (`database.js:51`), mas nada no código as usa. Isso é evidência de que a autenticação por senha foi removida em algum momento sem limpar os vestígios — risco de alguém reintroduzir um fluxo de senha inconsistente (ex.: um endpoint de "trocar senha" que escreve em `senha_hash` sem que o `login` jamais o leia).
4. **Sem cabeçalhos de segurança HTTP** — nenhum `helmet` ou equivalente; sem `Content-Security-Policy`, `X-Frame-Options`, etc.
5. **Sem rate limiting em nenhuma rota**, inclusive `/tutor` (custo de API do Gemini) e `/finalizar` — abre superfície para abuso de custo (spam de chamadas ao Gemini) e brute-force de login.
6. **`GET /api/simulado/temas/:id` sem autenticação** expõe estrutura de temas (mas não questões) publicamente — impacto baixo, mas é uma rota que não segue o mesmo padrão de proteção das demais sem justificativa documentada.
7. **Exposição de dado de terceiros no ranking** (`ranking.js:20-27`) — nome e RU de colegas visíveis para qualquer aluno autenticado, sem opção de opt-out.

### 5.2 Manutenção

1. **Zero testes automatizados reais** — o job `test` do CI (`deploy.yml:9-36`) só confere que dois arquivos existem; não há `jest`/`mocha`/`supertest` no projeto. Qualquer regressão (como o bug histórico do "placar congelado", `CONTEXT.md:258-272`) só é pega manualmente, em produção ou por inspeção humana.
2. **Documentação desalinhada do código** — `CONTEXT.md:21` declara `better-sqlite3` como banco, mas o código real usa `sql.js` (`database.js:7`). Isso é perigoso justamente porque `CONTEXT.md` é usado como fonte de verdade para os agentes de IA que trabalham no projeto (conforme a própria seção "Fluxo de trabalho" do arquivo) — uma IA que confiar cegamente nesse trecho pode sugerir APIs incompatíveis (`better-sqlite3` é síncrono/nativo; `sql.js` tem semântica distinta de persistência).
3. **`package-lock.json` no `.gitignore`** (`.gitignore:6`) — instala com `npm install --production` no deploy (`deploy.yml:58`), não `npm ci`; builds não são reprodutíveis entre dev e produção, e uma atualização transitiva de dependência pode quebrar produção sem que nada tenha mudado no repositório.
4. **Artefato de build versionado sem uso** (`backend/scripts/output/aulas-09-12.js`, 3172 linhas) — não é `require`ado por nada; é resíduo do fluxo manual "gerar → copiar para `seed.js`". Mesmo padrão que já causou confusão antes com os órfãos `aula05-08.js` (removidos em `3b375cb`, segundo o histórico de memória do projeto).
5. **`seed.js` não é idempotente** — reexecutar sem resetar o banco quebra por violação de chave primária; não há comando de "reset" documentado além de apagar o arquivo `.db` manualmente.
6. **Frontend monolítico de 2213 linhas em um único arquivo** sem separação de módulos — o próprio time já reconhece (na memória do projeto) que isso vai ficar mais difícil de manter conforme crescem as telas.
7. **Duas fontes de verdade para o TTL do JWT** (`config.js:6` vs `routes/auth.js:11`) — mudança feita em um lugar não reflete no outro.
8. **Deploy não roda o seed** — todo push de novas questões exige um passo manual via SSH (`CONTEXT.md:230-232`), processo propenso a esquecimento (já aconteceu, segundo a memória do projeto sobre o deploy de 2026-08-17).

### 5.3 Escalabilidade

1. **Banco em memória serializado por processo** (`sql.js`) — não suporta múltiplas instâncias do backend (ex.: PM2 em modo cluster, ou múltiplos servidores atrás de um load balancer) porque cada processo teria sua própria cópia do banco em memória, divergindo silenciosamente.
2. **Escrita com debounce de 500ms sem fila/lock** (`database.js:41-44`) — sob concorrência alta (muitos alunos finalizando simulados ao mesmo tempo), há uma janela onde `db.export()` pode ser chamado enquanto outra escrita está em andamento; não há teste de carga documentado para validar o comportamento sob esse cenário.
3. **`/historico` sem paginação** (`historico.js:8-16`) — cresce sem limite por aluno; hoje irrelevante (máx. 12 registros/aluno), mas é uma bomba-relógio se o número de temas crescer significativamente.
4. **Custo de API do Gemini sem controle** — sem rate limiting nem cache de respostas do tutor, o custo por aluno é proporcional ao uso, sem teto configurável.

### 5.4 Experiência do usuário

1. **Sessão de 8h sem refresh silencioso** — um aluno no meio de um simulado longo (improvável, mas o timer do frontend é de 1800s = 30min, `index.html:1369`) não deveria esgotar o JWT, mas não há mecanismo de renovação automática caso o aluno deixe uma aba aberta por mais tempo entre sessões.
2. **Nenhuma confirmação de identidade além do RU** — se dois alunos compartilharem/perderem RUs (não incomum em ambiente educacional informal), não há como o sistema distinguir ou recuperar acesso.
3. **Erros de rede genéricos** — `apiRequest()` (`index.html:1341-1357`) propaga `data.error || 'Erro na requisição'`, o que é razoável, mas não há tratamento diferenciado para timeout/offline (ex.: aluno finalizando simulado com internet instável).
4. **`passingScore` por tema exibido mas não aplicado** (seção 2.6) — se algum lugar da UI mostrar o `passingScore` vindo de `temas` (21, por exemplo) ao lado do resultado real (que sempre usa 7/10), há risco de confundir o aluno sobre qual é o critério de aprovação real.

---

## 6. Melhorias recomendadas

### Prioridade alta

1. **Reforçar autenticação** — no mínimo, adicionar rate limiting (`express-rate-limit`) em `/api/auth/login` para mitigar enumeração de RU; avaliar se a decisão de "sem senha" ainda faz sentido para o público-alvo atual do sistema, ou se um segundo fator leve (ex.: e-mail institucional + código, ou senha simples) é justificável agora que a base de temas/alunos cresceu.
2. **Garantir `JWT_SECRET` obrigatório em produção** — falhar o boot do servidor se `process.env.JWT_SECRET` não estiver definido, em vez de cair silenciosamente no fallback hardcoded de `config.js:5`.
3. **Remover ou reativar `bcryptjs`/`senha_hash`** — decidir explicitamente: apagar a dependência e a coluna morta, ou implementar de fato um fluxo de senha. Deixar como está é o pior dos três cenários (ambiguidade para quem lê o código).
4. **Adicionar testes automatizados mínimos** — cobrir pelo menos os fluxos críticos já historicamente bugados (`/finalizar` idempotência, cálculo de nota, validação de `sessionQuestionIds`) com `supertest` + `jest`/`vitest`, substituindo o job `test` do CI que hoje só verifica existência de arquivo.
5. **Corrigir `CONTEXT.md`** para refletir `sql.js` em vez de `better-sqlite3` — evita que futuras sessões de IA (que leem esse arquivo como fonte de verdade) proponham APIs incompatíveis.

### Prioridade média

6. **Unificar a configuração de TTL do JWT** em um único ponto (`config.js`), removendo a constante duplicada em `routes/auth.js:11`.
7. **Tornar `seed.js` idempotente** — `DELETE`/`UPSERT` antes de inserir, ou checar existência por `id` antes de cada `INSERT`, permitindo reexecução segura em produção.
8. **Adicionar rate limiting em `/tutor`** — protege contra custo inesperado de API e uso abusivo do chat.
9. **Versionar `package-lock.json`** e trocar `npm install --production` por `npm ci --production` no `deploy.yml`, para builds reprodutíveis.
10. **Remover o artefato órfão** `backend/scripts/output/aulas-09-12.js` do controle de versão (ou documentar explicitamente por que ele deve continuar lá).
11. **Adicionar `helmet`** ao Express para cabeçalhos de segurança básicos, custo de implementação muito baixo.
12. **Resolver a ambiguidade do `passingScore` por tema** — ou aplicar de fato o valor por tema no cálculo de aprovação, ou remover o campo do schema/exibição para não confundir.

### Prioridade baixa

13. **Automatizar o seed pós-deploy** — adicionar um step no `deploy.yml` (ou um hook `postinstall` condicional) que rode `node seed.js` de forma idempotente após o `npm install`, eliminando o passo manual via SSH.
14. **Paginar `/historico`** antecipando crescimento do número de temas.
15. **Modularizar o frontend** — mesmo sem introduzir um framework, dividir `index.html` em `app.js`/`api.js`/`views/*.js` carregados como `<script type="module">` reduziria o acoplamento, preparando o terreno para crescimento futuro sem exigir reescrita completa.
16. **Cache leve de respostas do tutor** para perguntas repetidas na mesma questão, reduzindo custo de API.

---

## 7. Plano de evolução incremental

| Etapa | Escopo | Ganho esperado | Risco de implementação |
|---|---|---|---|
| **1. Fechar lacunas de segurança de baixo custo** | `JWT_SECRET` obrigatório no boot, `helmet`, rate limiting em `/login` e `/tutor` | Reduz drasticamente a superfície de ataque mais barata de explorar (enumeração de RU, custo de API, token forjável) sem tocar em fluxo de produto | **Baixo** — mudanças isoladas, aditivas, não alteram contrato de API existente |
| **2. Higiene de repositório e CI** | Corrigir `CONTEXT.md`, remover `aulas-09-12.js` órfão, versionar `package-lock.json`, trocar `npm install` por `npm ci` no deploy | Reduz risco de builds não-reprodutíveis e de IAs/desenvolvedores futuros tomarem decisões erradas com base em doc desatualizada | **Baixo** — mudanças de infraestrutura/documentação, sem impacto funcional; único cuidado é gerar o lockfile correto antes de versionar |
| **3. Testes automatizados dos fluxos críticos** | `supertest`/`jest` cobrindo login, `/finalizar` (idempotência e recálculo), validação de `sessionQuestionIds`, tutor (mock do Gemini) | Job `test` do CI passa a ter valor real; reduz recorrência de bugs já vistos no histórico (placar congelado, submissão duplicada) | **Médio** — exige estruturar banco de teste isolado (banco `sql.js` em memória por execução) e mocks de API externa (Gemini); não deve tocar em código de produção, só adicionar |
| **4. Consolidar autenticação** | Decidir e implementar: reativar senha (`bcryptjs` já é dependência) OU documentar formalmente "sem senha" como decisão aceita com mitigação (2FA leve, RU não-sequencial, etc.) | Remove a maior fonte de risco do sistema; alinha código com intenção real do produto | **Médio-alto** — toca no fluxo mais usado do sistema (login) e pode exigir migração de dados de alunos existentes; deve ser feito com deploy gradual e comunicação aos usuários |
| **5. Tornar `seed.js` idempotente e automatizar no deploy** | Reescrever `seed()` com `UPSERT`, adicionar step condicional no `deploy.yml` | Elimina o passo manual via SSH, reduzindo risco de esquecimento já documentado no histórico do projeto | **Médio** — precisa de cuidado para não sobrescrever `resultados` de alunos reais ao reexecutar; testar exaustivamente em ambiente de staging antes de produção |
| **6. Modularização do frontend** | Quebrar `index.html` em módulos ES (`api.js`, `state.js`, `views/*.js`) mantendo zero build step | Facilita manutenção e onboarding de outras IAs/colaboradores no frontend; prepara para crescimento de telas | **Médio** — risco de regressão visual/funcional por ser refactor amplo de um arquivo grande; mitigar com testes manuais de todas as views antes/depois, idealmente após a etapa 3 já ter alguma cobertura de backend |
| **7. Escalabilidade horizontal do backend** | Migrar de `sql.js` para um SQLite real (`better-sqlite3` ou `libsql`) ou Postgres gerenciado, permitindo múltiplas instâncias | Só necessário se a base de usuários crescer a ponto de justificar mais de uma instância do Node — hoje é otimização prematura | **Alto** — mudança de camada de dados é a mais arriscada da lista; só deve ser priorizada se houver evidência real de gargalo (não há hoje) |

---

## Referências de arquivos citados

- `backend/server.js`
- `backend/config.js`
- `backend/database.js`
- `backend/middleware/auth.js`
- `backend/routes/auth.js`
- `backend/routes/temas.js`
- `backend/routes/questoes.js`
- `backend/routes/responder.js`
- `backend/routes/historico.js`
- `backend/routes/ranking.js`
- `backend/routes/tutor.js`
- `backend/seed.js`
- `backend/scripts/convert-material-bruto.js`
- `backend/scripts/output/aulas-09-12.js`
- `backend/package.json`
- `frontend/index.html`
- `.github/workflows/deploy.yml`
- `.gitignore`
- `CONTEXT.md`

---

## 8. Revisão técnica independente

> Revisão realizada em 2026-09-04 por inspeção independente do código-fonte, sem alterar a aplicação. Veredito geral: o relatório é majoritariamente preciso e bem calibrado — os 7 fluxos, a estrutura, as decisões arquiteturais e a maior parte dos riscos conferem com o código, inclusive os números de linha citados. Porém há **1 erro factual relevante** (comportamento do `seed.js`), **1 erro factual menor** (`material-bruto/`), **3 atribuições/citações imprecisas** e **lacunas operacionais concretas** não cobertas. Correções e complementos abaixo.

### 8.1 Correções — afirmações que não correspondem ao código

1. **O seed não é "não idempotente" — ele é destrutivo por reset.** `backend/seed.js:191-196` executa `DELETE FROM alternativas/resultados/questoes/temas/alunos` antes de inserir tudo de novo. Consequências:
   - A afirmação das seções 1.5 e 5.2.5 ("rodar duas vezes duplica e quebra por violação de chave primária") é **incorreta** — reexecutar não viola chave nenhuma; o seed faz reset completo e re-insere.
   - O risco real, mais grave e não relatado: **rodar o seed em produção apaga o histórico (`resultados`) de todos os alunos e remove qualquer aluno que não esteja entre os 6 fixos do script** (alunos reais cadastrados manualmente no banco somem). O `CONTEXT.md:230-232` instrui rodar o seed após cada deploy sem alertar para esse efeito colateral destrutivo.
   - A etapa 5 do plano de evolução ("tornar seed idempotente… cuidado para não sobrescrever resultados de alunos reais") parte de premissa invertida: o código atual já é mais destrutivo do que o relatório descreve. A melhoria correta é o contrário do que está escrito — **tornar o seed não-destrutivo** (preservar `alunos`/`resultados`), não "adicionar UPSERT para permitir reexecução".
   - Detalhe operacional adicional: o seed roda em processo separado do servidor. Com o servidor no ar (o caso padrão do fluxo via SSH), a cópia em memória do processo antigo permanece antiga e **qualquer escrita dele após o seed sobrescreve o `mxos.db` recém-seedado** (última escrita vence). O procedimento seguro é seed → `pm2 reload mxos` imediatamente, sem atividade de usuários no intervalo — isso não está documentado em lugar nenhum.
2. **`material-bruto/` é versionado.** Os 8 arquivos brutos (4 matérias × 2 APOLs) estão trackeados no git (`git ls-files` confirma), ao contrário do que afirma a seção 1.1 ("pasta não versionada"). A conclusão sobre o artefato órfão permanece (única referência a `aulas-09-12.js` é o próprio gerador, `convert-material-bruto.js:270`), mas a fonte dos dados está no repositório.
3. **Atribuição de índices trocada (seção 1.3).** `idx_resultados_aluno` é o índice usado por `historico.js` (`WHERE r.aluno_id = ?`) e pelo check de duplicata do `/finalizar`; `idx_resultados_nota` (`tema_id, nota DESC`) é o usado por `ranking.js`. O índice simples `idx_resultados_tema` não é usado por nenhuma rota atual e é redundante — o composto já cobre o prefixo `tema_id`.
4. **Citações off-by-one.** `bcryptjs` está em `backend/package.json:12` (não `:13`, citado nas seções 2.1 e 5.1.3); `package-lock.json` está na linha 4 do `.gitignore` (não `:6`).
5. **Risco 5.3.2 mal formulado.** Num processo único não existe a janela de concorrência descrita: Node é single-threaded e `salvar()` é síncrono — `db.export()` nunca intercala com outra escrita do mesmo processo. O risco real de perda de escrita é outro, e é concreto: **`closeDatabase()` não é ligado a SIGINT/SIGTERM em `server.js`** (confirmado por grep) — um `pm2 reload` nos últimos 500 ms após uma escrita perde a gravação pendente do debounce. Correção barata: handler de shutdown chamando `closeDatabase()`/`salvar()`.
6. **Risco 5.4.4 não se materializa.** O frontend nunca lê nem exibe `passingScore` (grep em `frontend/index.html`: zero ocorrências); o único valor que chega à tela é o `passingScore: 7` fixo retornado por `/finalizar`. A ambiguidade é só de API/schema, sem risco de confundir o aluno hoje. A recomendação 12 permanece válida, mas com urgência menor.
7. **Evidência dos "RUs sequenciais" qualificada.** Os RUs em escada (`1234567`→`5678901`) são os 5 alunos *fake* do seed — placeholders de teste, não evidência sobre RUs reais. O risco de enumeração se sustenta independentemente (espaço de 7 dígitos + zero rate limiting), mas a linha de evidência usada na seção 3 deve ser lida com essa ressalva.

### 8.2 Lacunas — achados que o relatório não cobriu

1. **Colheita de gabarito via `/responder`.** O ponto forte "gabarito nunca trafega antes da resposta" é verdadeiro quanto ao payload de `/questoes`, mas não é uma barreira: `POST /responder` aceita qualquer `questionId` e revela `correctAnswerLetter` quando o aluno acerta — basta testar A–E (≤5 chamadas por questão, sem rate limit) para extrair o gabarito das 360 questões. Para um app de estudo isso é aceitável (coerente com a decisão do tutor "professor direto"), mas o ponto forte da seção 4 deveria ser qualificado e `/responder` incluído no escopo do rate limiting.
2. **Token JWT em `localStorage` + renderização via `innerHTML` sem CSP.** Combinação sensível a XSS: qualquer injeção no HTML expõe o token de sessão. Hoje os dados renderizados vêm do banco (seed-controlado, risco baixo), mas a recomendação 11 (`helmet`) também mitiga o impacto do roubo de token — vale registrar essa conexão.
3. **Campo `alunos.ativo` é inoperável.** Só o login o lê (`routes/auth.js:21`); não existe rota para desativar aluno. A única forma prática de revogar acesso hoje é editar o banco manualmente ou reativar o fluxo de senha — isso reforça a prioridade da etapa 4 do plano.
4. **O drift do `CONTEXT.md` é maior que o citado.** Além do `better-sqlite3` (linha 21): a seção CI/CD (linha 92) ainda diz `pm2 restart` enquanto o deploy usa `reload` (inconsistência interna — a linha 133 do próprio arquivo registra a troca); as lições aprendidas (linhas 274-282) descrevem o backend rejeitando `/finalizar` duplicado com "Simulado já finalizado", comportamento que não existe mais no código (hoje recalcula e faz UPDATE); a árvore do projeto (linha 51) pendura `config.js` sob `.github/workflows/`; e a linha 211 sugere que `JWT_SECRET` fica "em config.js" quando na verdade vem do ambiente com fallback hardcoded. A recomendação 5 ("corrigir CONTEXT.md") tem escopo maior do que o relatório estima.
5. **Validação assimétrica em `/finalizar`.** `answers` é validado apenas como objeto (valores fora de A–E contam como erro — sem risco de inflar nota), e o campo `respostas` gravado em `resultados` é o payload bruto do cliente (`JSON.stringify(answers)`), não os detalhes calculados pelo servidor — divergência sutil caso o campo seja usado para auditoria no futuro.

### 8.3 Reavaliação das prioridades

A ordenação geral do plano de evolução (etapas 1–7) está sensata e é mantida, com estes ajustes:

- **Etapa 1 (segurança de baixo custo) — estender o escopo:** incluir `/responder` e `/finalizar` no rate limiting (cobre a colheita de gabarito de 8.2.1 e spam de escrita), e adicionar graceful shutdown (8.1.5) — custo de poucas linhas.
- **Etapa 5 (seed) — reformular e subir de prioridade:** o problema não é idempotência; é **destrutividade sobre dado real** (`resultados`/`alunos`). Enquanto não for corrigido, o procedimento em produção deveria incluir backup do `mxos.db` antes de rodar o seed. Com a leitura correta, o custo da correção cai de "médio" para "baixo" (não deletar `resultados`/`alunos`, ou copiar o arquivo antes do reset).
- **Recomendação 12 (passingScore) — rebaixar:** sem impacto visível ao aluno hoje (8.1.6); pode virar tarefa de higiene de schema.
- **Etapa 4 (autenticação) — mantida como a decisão central**, agora reforçada por 8.2.3 (não há mecanismo de revogação operável).

### 8.4 Confirmações

Verificados e confirmados como corretos contra o código: os 7 fluxos da seção 2 (incluindo as referências de linha); a caracterização das decisões arquiteturais da seção 3; os pontos fortes da seção 4 (com a ressalva de 8.2.1); os riscos de segurança 5.1.1–5.1.7 (com a ressalva de 8.1.7); a análise de escalabilidade (5.3.1, 5.3.3, 5.3.4); os números de linha do frontend (`apiRequest` 1341-1357, `state` 1362-1373, `views` 1376-1384, `localStorage` 1466-1467, `innerHTML` em 1608/1751/1923/1944); as citações do `CONTEXT.md` (10-12, 21, 136, 161-162, 200-205, 230-232, 258-272); e as contagens (seed 6611 linhas, frontend 2213, artefato 3172, 12 aulas/360 questões/6 alunos). Nenhum código da aplicação foi alterado nesta revisão.
