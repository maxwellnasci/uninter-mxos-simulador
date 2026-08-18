# Aprendizados

Registro de decisões e descobertas durante o desenvolvimento que não são óbvias a partir do código.

## 2026-08-17

### Redesign "premium" do frontend — descartado
Foi gerada uma prévia de redesign visual mais "premium" para o frontend, mas optamos por manter o
design original: ele já atende perfeitamente às necessidades do usuário. Não vale reintroduzir essa
ideia sem um motivo concreto (feedback de alunos, problema de usabilidade real etc.).

### `seed.js` local não afeta produção
Rodar `node backend/seed.js` na máquina local **não** atualiza o site em produção. O motivo é que o
arquivo do banco (`mxos.db`, SQLite) está no `.gitignore` e portanto não é versionado nem enviado pelo
deploy automático do GitHub Actions — cada ambiente (local e servidor) tem seu próprio `mxos.db`
independente.

### Como publicar novas matérias/questões no site em produção
O deploy automático (push na `main` → GitHub Actions) atualiza o código, mas **não** popula ou
atualiza o banco de dados do servidor. Para levar novas matérias/questões ao ar (ex.: as 4 matérias
que completaram os 12 slots da plataforma), foi necessário:

1. Acessar o servidor Contabo via SSH (`158.220.125.233`).
2. Rodar `node seed.js` diretamente no servidor, dentro do diretório do backend.
3. Reiniciar o processo com PM2 (`pm2 restart mxos`) para o servidor Express carregar os dados atualizados.

Vale considerar no futuro automatizar esse passo (ex.: um step de seed condicional no workflow de
deploy), mas por ora o processo é manual.
