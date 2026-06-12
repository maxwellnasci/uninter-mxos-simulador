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
│       └── responder.js   → Valida resposta (gabarito protegido)
├── frontend/
│   └── index.html         → SPA completa (CSS e JS embutidos)
├── .github/
│   └── workflows/
│       └── deploy.yml     → CI/CD GitHub Actions
├── .gitignore
├── README.md
└── CONTEXT.md             → Este arquivo

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
- [ ] Painel de histórico de simulados por aluno
- [ ] Ranking de pontuações
- [ ] Exportar resultado em PDF

---

## Fluxo de trabalho

- **Claude** → estrategista, planeja, estrutura prompts e decisões
- **Gemini no Antigravity** → executor local (código, git, arquivos na máquina)
- **Você no PowerShell** → comandos pontuais no servidor quando necessário
- **GitHub Actions** → deploy automático após cada push

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
