# MXOS — Simulador de Questões

> Plataforma web de simulados com **gabarito protegido no servidor**, correção automática e feedback imediato. Desenvolvido para alunos da UNINTER.

🌐 **Demo ao vivo:** [simulado.mxos.com.br](https://simulado.mxos.com.br)

---

## ✨ Funcionalidades

- 🔐 Login por RU — sem necessidade de senha
- 📚 4 simulados com 30 questões cada (120 questões no total)
- ⏱️ Timer de 30 minutos por simulado
- ✅ Correção automática com feedback imediato
- 📖 Revisão comentada ao final com explicação e fonte bibliográfica
- 🗺️ Mapa de progresso visual das questões respondidas
- 🌙 Tema Dark / Light alternável
- 📱 Design responsivo — funciona em celular, tablet e desktop
- 🔒 Gabarito protegido — nunca exposto no código-fonte do frontend

---

## 📚 Simulados Disponíveis

| # | Tema | Questões |
|---|------|----------|
| 1 | Certificações em Segurança Cibernética | 30 |
| 2 | Formação Cidadã Contemporânea | 30 |
| 3 | Formação Inicial em Educação a Distância | 30 |
| 4 | Segurança de Redes e Comunicações | 30 |

---

## 🛠️ Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Backend | Node.js + Express |
| Banco de dados | SQLite |
| Frontend | HTML5 + CSS3 + JavaScript puro |
| Servidor | Contabo VPS (Ubuntu) |
| Proxy reverso | Nginx |
| CI/CD | GitHub Actions |

---

## 📁 Estrutura do Projeto
uninter-mxos-simulador/
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── seed.js
│   ├── middleware/
│   └── routes/
├── frontend/
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
└── README.md

---

## 🔐 Segurança

- Gabarito armazenado exclusivamente no banco SQLite do servidor
- Endpoint de questões nunca retorna a resposta correta
- Validação 100% no servidor — inspecionar o código-fonte não revela respostas

---

## 🚀 CI/CD

Push na branch `main` dispara automaticamente:
1. Verificação do projeto
2. Deploy no servidor via SSH
3. Restart do PM2

---

## 🧑💻 Autor

Desenvolvido por **Maxwell Nasci**

- GitHub: [@maxwellnasci](https://github.com/maxwellnasci)
- Deploy: [simulado.mxos.com.br](https://simulado.mxos.com.br)
