# CONTEXT — MXOS Simulador de Questões

> Este arquivo é para o agente que vai trabalhar neste projeto.
> Leia antes de qualquer ação.

---

## O que é este projeto

Simulador de questões para alunos da UNINTER com gabarito protegido no servidor.
O aluno faz login pelo RU (sem senha), escolhe um simulado e responde as questões.
A correção acontece no backend — o gabarito nunca é exposto no frontend.

**Site em produção:** https://simulado.mxos.com.br

---

## Stack

- **Backend:** Node.js + Express (porta 4000)
- **Banco de dados:** SQLite (better-sqlite3)
- **Frontend:** HTML5 + CSS3 + JavaScript puro (SPA em um único arquivo)
- **Servidor:** Contabo VPS Ubuntu — IP: 158.220.125.233
- **Processo:** PM2 — nome do processo: `mxos`
- **Proxy reverso:** Nginx
- **CI/CD:** GitHub Actions — push na main faz deploy automático

---

## Estrutura do projeto
uninter-mxos-simulador/
├── backend/
│   ├── server.js          → Servidor Express (porta 4000)
│   ├── database.js        → Conexão SQLite
│   ├── seed.js            → Popula o banco com as questões
│   ├── middleware/
│   │   └── auth.js        → Autenticação por RU
│   └── routes/
│       ├── auth.js        → Login por RU
│       ├── temas.js       → Lista simulados disponíveis
│       ├── questoes.js    → Retorna questões sem gabarito
│       ├── responder.js   → Valida resposta (gabarito protegido)
│       ├── historico.js   → GET /api/simulado/historico
│       ├── ranking.js     → GET /api/simulado/ranking/:topicId
│       └── tutor.js       → POST /api/simulado/tutor (Gemini 2.5 Flash)
├── frontend/
│   └── index.html         → SPA completa (CSS e JS embutidos)
├── .github/
│   └── workflows/
│       └── deploy.yml     → CI/CD GitHub Actions
│   ├── config.js          → Configurações centralizadas (JWT, porta, payload)
├── .gitignore
├── README.md
└── CONTEXT.md             → Este arquivo

---

## Rotas da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | /api/auth/login | Login por RU |
| GET | /api/simulado/temas | Lista todos os simulados |
| GET | /api/simulado/temas/:id/questoes | Retorna questões sem gabarito |
| POST | /api/simulado/responder | Valida resposta — retorna { isCorrect, explanation, source } |
| POST | /api/simulado/finalizar | Finaliza simulado — retorna resultado completo |
| GET | /api/simulado/historico | Retorna histórico de simulados do aluno logado |
| GET | /api/simulado/ranking/:topicId | Retorna top 10 alunos por tema |
| POST | /api/simulado/tutor | Agente tutor IA — recebe dúvida + contexto e responde com Gemini |

---


## Servidor — informações importantes

- **Acesso SSH:** `ssh -i C:\Users\maxwe\.ssh\id_ed25519 root@158.220.125.233`
- **Pasta do projeto:** `/root/mxos-simulador/uninter-mxos-simulador/`
- **Processo PM2:** `mxos` (usar `pm2 reload mxos` para zero downtime)
- **Banco de dados:** `backend/mxos.db` — NÃO vai para o GitHub
- **node_modules:** NÃO vai para o GitHub — rodar `npm install` no servidor

---

## CI/CD — como funciona

1. Push na branch `main`
2. GitHub Actions roda automaticamente
3. Job 1 — verifica se `backend/server.js` e `frontend/index.html` existem
4. Job 2 — entra no servidor via SSH e executa:
   - `git pull origin main`
   - `npm install --production`
   - `pm2 restart mxos`

**Secrets configurados no GitHub:**
- `SERVER_HOST` → IP do servidor
- `SERVER_USER` → root
- `SERVER_SSH_KEY` → chave privada SSH

---

## Simulados disponíveis (8 no total — 240 questões)

| # | Tema | ID | Cor |
|---|------|----|-----|
| 1 | Certificações em Segurança Cibernética | aula01 | #7c3aed |
| 2 | Formação Cidadã Contemporânea | aula02 | #d97706 |
| 3 | Formação Inicial em Educação a Distância | aula03 | #0891b2 |
| 4 | Segurança de Redes e Comunicações | aula04 | #16a34a |
| 5 | Português Elementar | aula05 | #0891b2 |
| 6 | Sistemas de Segurança na Informação | aula06 | #dc2626 |
| 7 | Sistemas de Informações Gerenciais | aula07 | #16a34a |
| 8 | Tecnologias Digitais para Segurança Cibernética | aula08 | #7c3aed |

---

## Melhorias anotadas (backlog)

- [x] Agente Tutor IA com Gemini 2.5 Flash ✅
- [x] Migração do projeto para Kali Linux ✅
- [x] Correção do conflito Nginx sistema vs Nginx Proxy Manager ✅
- [x] Tutor com memória de sessão completa ✅
- [x] Método socrático com dicas progressivas ✅
- [x] Tutor proativo — lê a questão automaticamente ao abrir o chat ✅
- [x] Tutor detecta mudança de questão e comenta automaticamente ✅
- [x] Tutor com gabarito completo — sabe a resposta e explica quando pedido ✅
- [x] Professor direto — se adapta ao ritmo do aluno ✅
- [x] Chat redimensionável — botão ⤡ no canto inferior esquerdo ✅
- [ ] Melhorar personalidade do tutor — mais natural e menos robótico
- [x] Trocar `pm2 restart` por `pm2 reload` no deploy.yml para zero downtime ✅
- [x] Adicionar 4 novas matérias do módulo ✅
- [x] Corrigir 6 vulnerabilidades de segurança no responder.js ✅
- [x] Corrige N+1 Queries em questoes.js com LEFT JOIN ✅
- [x] Reorganiza namespace das rotas — /api/auth e /api/simulado ✅
- [x] Padroniza todas as chaves JSON para inglês camelCase ✅
- [x] Proteção contra cache antigo do localStorage ✅
  - Divisão por zero na nota
  - typeof aceita arrays
  - Whitelist em alternativa_letra
  - Bug de chave número vs string
  - Submissões duplicadas no /finalizar
  - Confirmado passingScore correto no schema
- [x] Refatoração de qualidade — análise completa do backend ✅
  - Padronizado error (inglês) em todas as rotas
  - JWT_SECRET centralizado em config.js
  - Check de duplicata movido para antes dos cálculos
  - CORS restrito para simulado.mxos.com.br
  - Payload limitado a 100kb via config.js
  - Double require corrigido no server.js
- [x] 10 questões aleatórias por simulado ✅
- [x] sessionQuestionIds — validação segura no /finalizar ✅
- [x] Histórico de simulados por aluno ✅
- [x] Ranking top 10 por matéria ✅
- [x] Índices de performance no banco ✅
- [x] salvarDebounced para concorrência ✅
- [x] README profissional com screenshots reais do projeto ✅
- [x] Arquivo APRESENTACAO.md criado com roteiro para entrevistas ✅
- [x] Bug fix: resultado em cache sempre mostrava mesmo placar ✅
- [x] Sistema de retentativa — aluno pode refazer simulado (UPDATE no banco) ✅
- [x] Agente tutor confirmado sem interferência no fluxo de respostas ✅
- [ ] Exportar resultado em PDF

---

## Agente Tutor IA — Documentação Completa

### Arquitetura do Tutor
O tutor é composto por 3 camadas:

**Backend (backend/routes/tutor.js)**
- Rota: POST /api/simulado/tutor
- Autenticação: JWT obrigatório
- Recebe: question, alternatives, subject, studentQuestion, history, questionId
- Busca gabarito no banco: SELECT resposta_correta, explicacao, fonte FROM questoes WHERE id = ?
- Chama Gemini 2.5 Flash via @google/generative-ai
- Usa startChat({ history }) para memória de conversa
- Retorna: { answer }

**Frontend (frontend/index.html)**
- Botão flutuante 🤖 aparece apenas na tela do quiz
- Chat redimensionável — botão ⤡ no canto inferior esquerdo
- Tamanho salvo no localStorage (mxos-tutor-w, mxos-tutor-h)
- Memória de toda a sessão via tutorHistory[]
- Tutor proativo: ao abrir o chat envia [SYSTEM_INIT_PROACTIVE] automaticamente
- Ao mudar de questão com chat aberto, tutor comenta nova questão automaticamente
- getQuizContext() captura: questionText, alternatives, subject, questionId

**IA (Gemini 2.5 Flash)**
- Modelo: gemini-2.5-flash
- Persona: professor experiente e direto
- Conhece a resposta correta da questão atual
- Adapta-se ao ritmo do aluno: se pedir resposta, dá a resposta
- Memória de conversa via startChat() com histórico formatado
- Flag especial [SYSTEM_INIT_PROACTIVE] para início proativo

### Configuração em Produção
- Chave da API: GEMINI_API_KEY no arquivo backend/.env do servidor
- O .env NUNCA vai para o GitHub
- Após qualquer deploy, verificar se .env existe no servidor:
  cat /root/mxos-simulador/uninter-mxos-simulador/backend/.env
- Para recriar: echo "GEMINI_API_KEY=SUA_CHAVE" >> /root/mxos-simulador/uninter-mxos-simulador/backend/.env
- Após adicionar a chave: pm2 reload mxos --update-env

### Variáveis de ambiente críticas
| Variável | Onde | Descrição |
|----------|------|-----------|
| GEMINI_API_KEY | backend/.env | Chave da API do Google AI Studio |
| JWT_SECRET | backend/config.js | Segredo para assinar tokens JWT |

---

## Fluxo de trabalho

| Situação | Ferramenta | Por quê |
|----------|------------|---------|
| Planejar feature nova | Claude (claude.ai) | Estratégia e arquitetura |
| Implementar feature | Gemini 3.1 Pro High | Execução de código e git |
| Analisar segurança | Claude Sonnet 4.6 Think (sub-agente) | Análise profunda |
| Bug complexo com teste | Claude Code | Executa, testa e corrige diretamente |
| Decisão arquitetural | Claude Opus 4.6 Think | Análise crítica |
| Deploy e servidor | Terminal / Claude Code | Acesso direto ao servidor |

---

## Como adicionar novas questões

> ⚠️ **ATENÇÃO:** Após o deploy, sempre rodar o seed manualmente no servidor:
> `ssh -i C:\Users\maxwe\.ssh\id_ed25519 root@158.220.125.233 "cd /root/mxos-simulador/uninter-mxos-simulador/backend && node seed.js"`
> O deploy (GitHub Actions) copia os arquivos mas NÃO roda o seed automaticamente.


1. Preparar os dados no formato correto (ver seed.js)
2. Atualizar o seed.js com as novas questões
3. Fazer push na main
4. GitHub Actions faz o deploy automaticamente
5. Rodar o seed no servidor:
   `ssh -i C:\Users\maxwe\.ssh\id_ed25519 root@158.220.125.233 "cd /root/mxos-simulador/uninter-mxos-simulador/backend && node seed.js"`


---

## Análise de segurança — histórico

| Data | Arquivo | Ferramenta | Resultado |
|------|---------|------------|-----------|
| 2026-06 | backend/routes/responder.js | Claude (sub-agente) | 6 vulnerabilidades corrigidas |
| 2026-06 | backend/ (todos os arquivos) | Claude (sub-agente) | Análise de qualidade — 10 melhorias mapeadas, 6 aplicadas |
| 2026-06 | backend/routes/questoes.js | Gemini 3.1 Pro | N+1 Queries corrigido com LEFT JOIN |
| 2026-06 | Todos os arquivos | Sonnet 4.6 Think | Padronização JSON camelCase — 41 pontos migrados |

---

## Lições aprendidas

### Bug Crítico — Resultado sempre igual independente das respostas
**Data:** 2026-07-07
**Causa:** O endpoint /finalizar tinha um bloco que, ao detectar simulado já 
finalizado anteriormente, retornava o placar antigo sem recalcular.
Qualquer nova tentativa mostrava sempre o mesmo resultado da primeira vez.

**Diagnóstico:** Claude Code entrou no servidor, seedou um banco do zero,
simulou 2 tentativas (todas certas depois todas erradas) e confirmou o bug.

**Correção:** Removido o bloco de cache que retornava placar antigo.
Agora o /finalizar sempre recalcula e faz UPDATE no registro existente.
Cada tentativa sobrescreve o resultado anterior com o placar real.

**Lição:** Para bugs complexos que precisam de teste real, usar o Claude Code
diretamente — ele consegue executar, testar e corrigir sem loop de análise.

### Simulado — Bug de envio duplicado no /finalizar
Se o aluno clicasse múltiplas vezes seguidas no botão "Finalizar" (ou se o
timer esgotasse exatamente no momento do clique), o frontend disparava
várias requisições simultâneas para o backend. O backend rejeitava as
subsequentes com "Simulado já finalizado", causando um erro silencioso
no frontend.
Solução: adicionar uma guarda `if (state.isCompleted) return;` no topo
da função `finishQuiz()` e desabilitar o botão visualmente (`disabled = true`)
assim que acionado a primeira vez.

### Tutor IA — overflow hidden quebra o resize
O handle de resize do chat não pode ficar dentro de um container com overflow:hidden.
Solução: wrapper interno .tutor-chat-inner com overflow:hidden,
e o handle fora desse wrapper com position:absolute no #tutorChat (overflow:visible).

### Tutor IA — SYSTEM_INIT_PROACTIVE
Para fazer o tutor iniciar a conversa automaticamente sem mostrar
a mensagem do sistema para o aluno, usamos a flag [SYSTEM_INIT_PROACTIVE].
O frontend envia essa flag oculta ao backend quando o chat abre ou
quando muda de questão. O SYSTEM_PROMPT instrui o Gemini a ignorar
a flag e iniciar uma conversa natural sobre a questão atual.

### Bug — window.state vs state no tutor
O objeto state do frontend não está disponível via window.state.
Sempre referenciar diretamente como state?.currentTheme?.title.
window.state retorna undefined e quebra o envio do campo subject.

### Nginx Proxy Manager vs Nginx do sistema
NUNCA configurar o Nginx do sistema neste servidor.
O NPM (Docker) gerencia todos os domínios via painel em http://158.220.125.233:81
Qualquer configuração em /etc/nginx/sites-enabled/ causa conflito de porta.
Se isso acontecer:
1. rm /etc/nginx/sites-enabled/ARQUIVO
2. systemctl stop nginx && systemctl disable nginx  
3. cd /root/nginx && docker compose down && docker compose up -d

### Variáveis globais no frontend
O objeto state no frontend não está disponível via window.state —
é uma const no escopo do script. Referenciar window.state retorna undefined.
Sempre usar state diretamente.

### Chave API não vai para o GitHub
O arquivo backend/.env nunca é commitado.
Após qualquer deploy novo no servidor, recriar manualmente.

### Git — push pendente não detectado
Em 2026-06-16, após commitar o README atualizado localmente, o GitHub
continuou mostrando o conteúdo antigo. O problema era que o push não
havia sido executado (branch local à frente de origin/main por 1 commit).
Solução: sempre rodar git status antes de confirmar que o GitHub foi atualizado.
Prevenção: após qualquer commit, verificar com git status se a branch
local está sincronizada com origin/main antes de considerar a tarefa concluída.

### README com imagens
Imagens no README do GitHub precisam estar commitadas no repositório
e referenciadas com caminho relativo correto (docs/screenshots/nome.png).
O Gemini deve sempre verificar se as imagens foram commitadas antes
de confirmar que o README está pronto.
