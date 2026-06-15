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
│       └── ranking.js     → GET /api/simulado/ranking/:topicId
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
- [ ] Exportar resultado em PDF

---

## Fluxo de trabalho

| Agente | Onde | Uso ideal |
|--------|------|-----------|
| **Claude** | claude.ai | Estratégia, planejamento, prompts, decisões de arquitetura |
| **Gemini 3.1 Pro High** | Antigravity | Executor — código, git, arquivos, terminal |
| **DeepSeek V4 Flash Pensamento Profundo** | Antigravity | Análise de código, lógica, bugs, revisão técnica |
| **Sonnet 4.6 Think** | Antigravity (bônus semanal) | Análises profundas pontuais |
| **Opus 4.6 Think** | Antigravity (bônus semanal) | Decisões arquiteturais complexas |

> Quando o Gemini 3.5 Pro for lançado, atualizar esta tabela.

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
