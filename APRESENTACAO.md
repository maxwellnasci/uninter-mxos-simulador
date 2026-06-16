# Como apresentar o MXOS Simulador em uma entrevista

> Leia este arquivo em voz alta pelo menos 3 vezes antes de uma entrevista.
> O objetivo não é decorar — é entender e falar com suas próprias palavras.

---

## 1. O que é o projeto (30 segundos)

"Desenvolvi um simulador de questões para alunos da UNINTER.
O sistema permite que o aluno faça login pelo número de matrícula,
escolha uma matéria e responda 10 questões aleatórias.
No final recebe a nota, pode ver o histórico de simulados anteriores
e comparar o desempenho com outros alunos no ranking."

---

## 2. Qual problema resolve (30 segundos)

"O problema era que simuladores comuns expõem o gabarito no código-fonte
— qualquer aluno abre o F12 no navegador e vê as respostas.
Resolvi isso mantendo o gabarito exclusivamente no servidor.
O frontend nunca recebe a resposta correta — só envia a escolha do aluno
e o servidor devolve se acertou ou errou."

---

## 3. Como funciona por dentro (1-2 minutos)

"A aplicação tem duas partes:

O backend é feito em Node.js com Express. Ele gerencia a API,
protege o gabarito e salva os resultados no banco de dados SQLite.
Tem 7 rotas organizadas em dois grupos:
- /api/auth — para login
- /api/simulado — para temas, questões, respostas, histórico e ranking

O frontend é uma SPA — Single Page Application — feita em HTML,
CSS e JavaScript puro, sem frameworks. Todas as telas são carregadas
uma vez só e a navegação acontece sem recarregar a página.

O servidor roda em uma VPS da Contabo com Ubuntu, usando PM2
para manter o processo ativo e Nginx como proxy reverso.
O domínio é simulado.mxos.com.br."

---

## 4. O que é CI/CD e por que você usou (1 minuto)

"CI/CD significa Integração Contínua e Deploy Contínuo.
Na prática significa que quando faço uma alteração no código
e envio para o GitHub, o sistema automaticamente:
1. Verifica se os arquivos essenciais existem
2. Conecta no servidor via SSH
3. Baixa o código novo
4. Reinicia o servidor sem derrubar o site

Usei o GitHub Actions para configurar esse fluxo.
Isso garante que o site em produção está sempre atualizado
sem precisar entrar manualmente no servidor toda vez."

---

## 5. Decisões técnicas que você tomou (1 minuto)

"Algumas decisões importantes:

Gabarito no servidor — nunca exposto no frontend.
Isso exigiu criar um endpoint específico que recebe a resposta
do aluno e devolve apenas verdadeiro ou falso.

10 questões aleatórias — cada simulado sorteia 10 das 30 questões
do banco. Isso evita que o aluno memorize a ordem das respostas.
Usei ORDER BY RANDOM() no SQLite e envio os IDs sorteados
para o servidor validar — assim o aluno não consegue manipular
quais questões foram sorteadas.

Query otimizada com JOIN — o sistema faz uma única consulta
ao banco para buscar questões e alternativas juntas,
em vez de fazer uma consulta separada para cada questão.
Isso reduziu de 31 consultas para 1 por simulado."

---

## 6. O que você aprendeu (30 segundos)

"Aprendi na prática como funciona um sistema web completo —
desde a configuração do servidor até a segurança da API.
O maior aprendizado foi pensar em segurança desde o início:
como proteger dados, validar entradas e organizar o código
de forma que outros desenvolvedores consigam entender e dar continuidade."

---

## 7. Perguntas comuns em entrevistas

**"Por que Node.js?"**
"É eficiente para APIs com muitas requisições simultâneas
por causa do modelo assíncrono. Além disso, uso JavaScript
tanto no frontend quanto no backend — menos contexto para trocar."

**"Por que SQLite e não MySQL ou PostgreSQL?"**
"Para o volume atual — 240 questões e poucos alunos simultâneos —
o SQLite é suficiente e simplifica o deploy. Se o sistema crescer,
a migração para PostgreSQL seria o próximo passo natural."

**"O que você faria diferente?"**
"Adicionaria autenticação com senha além do RU,
implementaria testes automatizados e consideraria
migrar o frontend para React conforme o projeto crescer."

**"Quantos usuários simultâneos suporta?"**
"Fizemos uma análise técnica e estimamos entre 50 e 100 usuários
simultâneos sem degradação de performance para o perfil atual de uso."

**"O que é o sessionQuestionIds?"**
"É um array com os IDs das 10 questões sorteadas para aquela sessão.
O frontend guarda esses IDs e envia junto com as respostas ao finalizar.
O servidor valida se os IDs pertencem ao tema antes de corrigir —
isso impede que o aluno manipule quais questões quer que sejam corrigidas."

---

## Dica final

Não tente decorar palavra por palavra.
Entenda a ideia de cada bloco e fale com suas próprias palavras.
Quanto mais você praticar em voz alta, mais natural vai ficando.

Projeto ao vivo: https://simulado.mxos.com.br
Código no GitHub: https://github.com/maxwellnasci/uninter-mxos-simulador
