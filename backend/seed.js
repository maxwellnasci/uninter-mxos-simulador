/* ================================================================
   MXOS — Seed: Popular banco com as 120 questões
   ================================================================ */
const { getDatabase, closeDatabase } = require('./database');

// ================================================================
// DADOS — 8 AULAS COM 30 QUESTÕES CADA
// ================================================================

const AULA01 = {
  "id": "aula01",
  "title": "Certificações em Segurança Cibernética",
  "shortTitle": "Segurança Cibernética",
  "description": "Certificações, frameworks, papéis de segurança e carreiras em cibersegurança.",
  "accent": "#7c3aed",
  "icon": "🛡️",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {"id":"q1","number":1,"prompt":"O CSX-P continua sendo a primeira e única certificação de desempenho abrangente que testa a capacidade de executar habilidades de segurança cibernética validadas globalmente, abrangendo cinco funções de segurança – Identificar, Proteger, Detectar, Responder e Recuperar – derivadas do Nist Cybersecurity Framework.\n\nDe acordo com o texto acima e os conteúdos abordados durante as aulas, como o CSX-P define a função \"Identificar\"?","alternatives":[{"letter":"A","text":"Compreende as ações de monitoração e detecção de eventos de segurança, seus respectivos alertas e acionamento de equipes."},{"letter":"B","text":"Compreende aos processos e atividades envolvidas na resposta de um evento de segurança."},{"letter":"C","text":"Compreende as ações de lições aprendidas e recuperação do depois do evento de segurança."},{"letter":"D","text":"Compreende reconhecer e identificar o ambiente de negócios de segurança da organização, entendendo seus riscos e vulnerabilidades."}],"answer":"D","explanation":"A função \"Identificar\" compreende reconhecer e identificar o ambiente de negócios de segurança da organização, entendendo seus riscos e vulnerabilidades.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 08."},
    {"id":"q2","number":2,"prompt":"Na aula 02, abordamos sobre as organizações de certificação Isaca e ISO, assim como as suas certificações no escopo de interesse de segurança cibernética. É muito importante que você visite os portais e websites dessas instituições e certificações para entender com mais detalhes e buscar mais informações e material de estudo para uma certificação.\n\nConforme os estudos realizados na disciplina e de acordo com o texto acima, o que abrange a Isaca a certificação Certified in Risk and Information Systems Control™ (CRISC®)?","alternatives":[{"letter":"A","text":"A certificação Crisc indica experiência na identificação e gerenciamento de riscos corporativos de TI e implementação e manutenção de controles de sistemas de informação."},{"letter":"B","text":"A certificação Crisc indica a experiência em governança de segurança da informação, desenvolvimento e gerenciamento de programas, gerenciamento de incidentes e gerenciamento de riscos."},{"letter":"C","text":"A certificação Crisc é mundialmente conhecida como o padrão de conquista para aqueles que auditam, controlam, monitoram e avaliam a tecnologia da informação e os sistemas de negócios de uma organização."},{"letter":"D","text":"A certificação Crisc indica a mentalidade necessária para avaliar, projetar, implementar e gerenciar sistemas corporativos de governança de TI alinhados com as metas gerais de negócios."}],"answer":"A","explanation":"A certificação Certified in Risk and Information Systems Control™ (CRISC®), da Isaca, indica experiência na identificação e gerenciamento de riscos corporativos de TI e implementação e manutenção de controles de sistemas de informação.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 04."},
    {"id":"q3","number":3,"prompt":"Desde a sua criação, a Isaca tornou-se uma organização global pioneira para profissionais de governança, controle, segurança e auditoria da informação. Os padrões de auditoria e controle de Segurança da Informação são seguidos por profissionais em todo o mundo. As pesquisas e corpos de conhecimento identificam questões profissionais que desafiam os associados profissionalmente.\n\nConforme os estudos realizados na disciplina, como é mundialmente conhecida a estrutura de governança criada pela Isaca?","alternatives":[{"letter":"A","text":"RON."},{"letter":"B","text":"RIVEST."},{"letter":"C","text":"Cobit."},{"letter":"D","text":"VPM."}],"answer":"C","explanation":"A estrutura de governança Cobit é mundialmente conhecida.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 03."},
    {"id":"q4","number":4,"prompt":"De todas as certificações disponíveis da Isaca, duas chamam muito a atenção para o mundo da segurança cibernética. São certificações alinhadas com o dia a dia das organizações, seja como um líder, seja com um especialista técnico. (Texto adaptado).\n\nDe acordo com o texto acima e os conteúdos abordados durante as aulas, quais são duas certificações que chamam a atenção para o mundo da segurança cibernética, citadas acima?","alternatives":[{"letter":"A","text":"CISM e CSX-P."},{"letter":"B","text":"CGEIT e IT."},{"letter":"C","text":"CET e ITCA."},{"letter":"D","text":"CDPSE e CRISC."}],"answer":"A","explanation":"De todas as certificações disponíveis da Isaca, duas chamam muito a atenção para o mundo da segurança cibernética: as certificações CISM e CSX-P.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 06."},
    {"id":"q5","number":5,"prompt":"O profissional de segurança cibernética deve enfrentar o desafio de se especializar, mas como que ele poderia ser reconhecido por isso? O que faz dele um especialista? É nesse momento que uma certificação profissional apoia e faz a diferença. (Texto adaptado).\n\nCom base na disciplina e no texto acima, responda: como surgiram as certificações profissionais em segurança cibernética?","alternatives":[{"letter":"A","text":"As certificações profissionais surgiram por meio da solicitação do Centro de Processamento de Dados."},{"letter":"B","text":"As certificações profissionais surgiram dentro da área de tecnologia como uma necessidade de especializar os profissionais dentro de um universo de conhecimentos disponíveis."},{"letter":"C","text":"As certificações profissionais surgiram mediante cursos experimentais."},{"letter":"D","text":"As certificações profissionais surgiram apenas para atender uma demanda momentânea de mercado."}],"answer":"B","explanation":"As certificações profissionais surgiram dentro da área de tecnologia como uma necessidade de especializar os profissionais dentro de um universo de conhecimentos disponíveis.","source":"Referência: Material de apoio – aula 01 – Prof. Luciano Johnson, p. 03."},
    {"id":"q6","number":6,"prompt":"Estudos independentes continuam a demonstrar que possuir uma certificação Isaca, reconhecida globalmente, aumenta a mobilidade profissional e o potencial de ganhos. Significa, para os empregadores e colegas, que você se dedica a altos padrões profissionais, conhecimentos e habilidades.\n\nCom base no texto acima, como é definido pela Isaca a certificação Cisa (Certified Information Systems Auditor)?","alternatives":[{"letter":"A","text":"A certificação Cisa indica experiência na identificação e gerenciamento de riscos corporativos de TI e implementação e manutenção de controles de sistemas de informação."},{"letter":"B","text":"A certificação Cisa indica a experiência em governança de segurança da informação, desenvolvimento e gerenciamento de programas, gerenciamento de incidentes e gerenciamento de riscos."},{"letter":"C","text":"A certificação Cisa é mundialmente conhecida como o padrão de conquista para aqueles que auditam, controlam, monitoram e avaliam a tecnologia da informação e os sistemas de negócios de uma organização."},{"letter":"D","text":"A certificação Cisa indica a mentalidade necessária para avaliar, projetar, implementar e gerenciar sistemas corporativos de governança de TI alinhados com as metas gerais de negócios."}],"answer":"C","explanation":"Cisa (Certified Information Systems Auditor) - a certificação Cisa é mundialmente conhecida como o padrão de conquista para aqueles que auditam, controlam, monitoram e avaliam a tecnologia da informação e os sistemas de negócios de uma organização.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 04."},
    {"id":"q7","number":7,"prompt":"A ISO é uma organização internacional não governamental independente, com a adesão de 167 órgãos nacionais de padronização. Por meio de seus membros, ela reúne especialistas para compartilhar conhecimento e desenvolver padrões internacionais voluntários, baseados em consenso e relevantes para o mercado, que apoiem a inovação e forneçam soluções para desafios globais.\n\nDe acordo com o texto acima, em que país é situada Secretaria Central da ISO?","alternatives":[{"letter":"A","text":"Suíça."},{"letter":"B","text":"Japão."},{"letter":"C","text":"China."},{"letter":"D","text":"Brasil."}],"answer":"A","explanation":"A Secretaria Central da ISO fica em Genebra, Suíça.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 09."},
    {"id":"q8","number":8,"prompt":"As equipes de segurança cibernética evoluíram e agora estão segregadas: RED TEAM, BLUE TEAM, SOC, por exemplo. Essas equipes são compostas por diferentes tipos de profissionais, com diferentes finalidades e, principalmente, com certificações profissionais diferentes.\n\nCom base no texto acima, quais são os objetivos das equipes RED TEAM? Leia e analise as assertivas abaixo, identificando-as como verdadeiras (V) ou falsas (F):\n\n( ) As equipes RED TEAM têm como objetivo identificar e tentar explorar as vulnerabilidades no ambiente de tecnologia, tentando validar a eficiência dos controles de segurança aplicados, simulando ataques, explorando brechas de configuração e relatando isso ao líder de segurança cibernética.\n\n( ) As equipes RED TEAM têm como objetivo analisar as fragilidades e vulnerabilidades encontradas, traçando planos de ação de correção e mantendo o ambiente seguro.\n\n( ) As equipes RED TEAM realizam projetos de segurança cibernética, buscam fornecedores e soluções de segurança, realizando POC (Provas de Conceitos) de soluções e ferramentas, que administram o dia a dia da segurança cibernética.\n\n( ) As equipes RED TEAM realizam a gerência dos sistemas de acesso e ativos do banco de dados.\n\nAgora, assinale a alternativa que corresponde à sequência correta:","alternatives":[{"letter":"A","text":"V, V, V, F."},{"letter":"B","text":"F, V, F, V."},{"letter":"C","text":"V, V, F, F."},{"letter":"D","text":"V, F, F, F."}],"answer":"D","explanation":"As equipes RED TEAM têm como objetivo identificar e tentar explorar as vulnerabilidades no ambiente de tecnologia, tentando validar a eficiência dos controles de segurança aplicados, simulando ataques, explorando brechas de configuração e relatando isso ao líder de segurança cibernética.","source":"Referência: Material de apoio – aula 01 – Prof. Luciano Johnson, p. 09."},
    {"id":"q9","number":9,"prompt":"De uma maneira geral, um profissional CSX-P precisa demonstrar capacidade para: usar processos de avaliação de vulnerabilidade e conjuntos de ferramentas de verificação para identificar e documentar vulnerabilidades com base na criticidade de ativos definida e nos impactos técnicos. Obter e agregar informações de várias fontes por exemplo: logs, dados de eventos, avaliações de rede para uso em inteligência de ameaças, detecção de incidentes de métricas e resposta.\n\nDe acordo com o texto acima e os conteúdos abordados durante as aulas, como o CSX-P define a função \"Recuperar\"?","alternatives":[{"letter":"A","text":"Compreende as ações de proteção desse computacional por meio de controles (soluções tecnológicas, processuais e organizacionais)."},{"letter":"B","text":"Compreende as ações de lições aprendidas e recuperação do ambiente depois do evento de segurança."},{"letter":"C","text":"Compreende as ações de monitoração e detecção de eventos de segurança, seus respectivos alertas e acionamento de equipes."},{"letter":"D","text":"Compreende aos processos e atividades envolvidas na resposta de um evento de segurança."}],"answer":"B","explanation":"A função \"Recuperar\" compreende as ações de lições aprendidas e recuperação do ambiente depois do evento de segurança.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 08."},
    {"id":"q10","number":10,"prompt":"O profissional que busca as Certificações Processuais está alinhado com os processos e governança da segurança cibernética, logo, ele não busca certificações em tecnologias, mas certificações de cunho organizacional. (Texto adaptado).\n\nConforme os estudos realizados na disciplina, quais são os requisitos procurados pelos profissionais de segurança cibernética, que buscam as Certificações Processuais de cunho organizacional?","alternatives":[{"letter":"A","text":"Frameworks de trabalho."},{"letter":"B","text":"Certified Ethical Hacking."},{"letter":"C","text":"SOC (Security Operation Center)."},{"letter":"D","text":"RED e BLUE."}],"answer":"A","explanation":"O profissional que busca as Certificações Processuais está alinhado com os processos e governança da segurança cibernética, baseadas em frameworks de trabalho.","source":"Referência: Material de apoio – aula 01 – Prof. Luciano Johnson, p. 13."},
    {"id":"q11","number":11,"prompt":"A certificações de liderança é a rota mais longa para um profissional de segurança cibernética, que compreende poucas certificações, mas muita experiência. Quando um profissional inicia na carreira ele vai enfrentar, em algum momento, o desafio de optar na carreira Y, ou continuar como especialista ou migrar para a gestão (liderança). (Texto adaptado).\n\nCom base no texto acima e nos estudos realizados na disciplina, qual é a certificação associadas ao perfil de liderança?","alternatives":[{"letter":"A","text":"CISM."},{"letter":"B","text":"SOC."},{"letter":"C","text":"RED."},{"letter":"D","text":"BLUE."}],"answer":"A","explanation":"As certificações associadas a esse perfil de liderança, como a CISM que comentamos durante a aula 01.","source":"Referência: Material de apoio – aula 01 – Prof. Luciano Johnson, p. 14."},
    {"id":"q12","number":12,"prompt":"O CSX-P continua sendo a primeira e única certificação de desempenho abrangente que testa a capacidade de executar habilidades de segurança cibernética validadas globalmente, abrangendo cinco funções de segurança – Identificar, Proteger, Detectar, Responder e Recuperar – derivadas do Nist Cybersecurity Framework.\n\nDe acordo com o texto acima e os conteúdos abordados durante as aulas, como o CSX-P define a função \"Identificar\"?","alternatives":[{"letter":"A","text":"Compreende aos processos e atividades envolvidas na resposta de um evento de segurança."},{"letter":"B","text":"Compreende as ações de lições aprendidas e recuperação do ambiente organizacional depois do evento de segurança."},{"letter":"C","text":"Compreende reconhecer e identificar o ambiente de negócios de segurança da organização, entendendo seus riscos e vulnerabilidades."},{"letter":"D","text":"Compreende as ações de proteção desse por meio de controles (soluções tecnológicas, processuais e organizacionais)."}],"answer":"C","explanation":"A função \"Identificar\" compreende reconhecer e identificar o ambiente de negócios de segurança da organização, entendendo seus riscos e vulnerabilidades.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 08."},
    {"id":"q13","number":13,"prompt":"A certificação de Liderança indica que o profissional possui um perfil de gestão de segurança, que aborda liderar uma equipe para identificar, proteger e responder a eventos de segurança cibernética. Geralmente essa liderança também tem um enfoque muito forte em gestão de riscos e, principalmente, em comunicação executiva dentro de uma organização. Olhando para a carreira, um profissional certificado em CISM, por exemplo, tem grandes chances de se tornar o CISO (Chief Information Security Officer – ou executivo de Segurança da Informação em tradução livre) de uma organização, ou seja, uma pessoa de liderança executiva em segurança da informação e cibernética.\n\nConforme os estudos realizados na disciplina, analise os itens abaixo e, depois, assinale a alternativa correta sobre as abordagens das certificações de Liderança:\n\nI. As certificações de Liderança não abordam temas técnicos (como fazer).\nII. As certificações de Liderança abordam temas organizacionais (porque fazer).\nIII. As certificações de Liderança abordam questões básicas.\nIV. As certificações de Liderança abordam questões intermediárias.\n\nEm relação às abordagens das certificações de Liderança, é correto afirmar que:","alternatives":[{"letter":"A","text":"Apenas os itens I e II estão corretos."},{"letter":"B","text":"Apenas o item IV está correto."},{"letter":"C","text":"Os itens III e IV estão corretos."},{"letter":"D","text":"Apenas os itens I e III estão corretos."}],"answer":"A","explanation":"Certificações de Liderança não abordam temas técnicos (como fazer), mas sim temas organizacionais (porque fazer).","source":"Referência: Material de apoio – aula 01 – Prof. Luciano Johnson, p. 05."},
    {"id":"q14","number":14,"prompt":"As equipes de segurança cibernética evoluíram e agora estão segregadas: RED TEAM, BLUE TEAM, SOC, por exemplo. Essas equipes são compostas por diferentes tipos de profissionais, com diferentes finalidades e, principalmente, com certificações profissionais diferentes.\n\nCom base no texto acima e nos estudos realizados na disciplina, analise as alternativas abaixo e assinale a que indica, corretamente, os objetivos das equipes BLUE TEAM?","alternatives":[{"letter":"A","text":"As equipes BLUE TEAM têm como objetivo identificar e tentar explorar as vulnerabilidades no ambiente de tecnologia, tentando validar a eficiência dos controles de segurança aplicados, simulando ataques, explorando brechas de configuração e relatando isso ao líder de segurança cibernética."},{"letter":"B","text":"O propósito das equipes BLUE TEAM é atuar na função de cracker, sendo que existe, inclusive, uma certificação específica para essa atividade, denominada Certified Ethical Hacking."},{"letter":"C","text":"As equipes BLUE TEAM têm como objetivo ser um Hacker Ético, que inclusive possui uma certificação dedicada para ele, a C|EH, Certified Ethical Hacking."},{"letter":"D","text":"As equipes BLUE TEAM têm como objetivo analisar as fragilidades e vulnerabilidades encontradas, traçando planos de ação de correção e mantendo o ambiente seguro."}],"answer":"D","explanation":"As equipes BLUE TEAM têm como objetivo analisar as fragilidades e vulnerabilidades encontradas, traçando planos de ação de correção e mantendo o ambiente seguro.","source":"Referência: Material de apoio – aula 01 – Prof. Luciano Johnson, p. 09."},
    {"id":"q15","number":15,"prompt":"A Isaca começou suas atividades em 1967 por um pequeno grupo de indivíduos com trabalhos semelhantes, auditando controles em sistemas de computador que estavam se tornando mais críticos para as operações de suas organizações. Este grupo viu a necessidade de uma fonte centralizada de informação e orientação na área e formalizou-se em 1969, constituindo-se como Associação de Auditores EDP. (Texto adaptado).\n\nConsiderando os estudos realizados na disciplina, como foi chamada a fundação educacional para empreender esforços de pesquisa em larga escala pela Associação de Auditores EDP?","alternatives":[{"letter":"A","text":"Information Systems Audit and Control Association®."},{"letter":"B","text":"Central de auditores internacional."},{"letter":"C","text":"Grupo de pesquisas educacionais."},{"letter":"D","text":"Centro de apoio da TI."}],"answer":"A","explanation":"Anteriormente conhecida como Information Systems Audit and Control Association®, a Isaca agora usa apenas seu acrônimo.","source":"Referência: Material de apoio – aula 02 – Prof. Luciano Johnson, p. 02."},
    {"id":"q16","number":16,"prompt":"Para fazer o exame C|CISO, os candidatos devem provar que têm 5 anos de experiência em pelo menos 3 dos 5 domínios do currículo.\n\nCom base no texto acima, quais são os domínios que os candidatos devem apresentar para fazer o exame C|CISO? Leia e analise as assertivas abaixo, identificando-as como verdadeiras (V) ou falsas (F):\n\n( ) Governança e Gestão de Risco.\n( ) Controles de Segurança da Informação, Conformidade e gestão de auditoria.\n( ) Gerência, autonomia, e conhecimento em Port Scanning Attack.\n( ) Gestão e Operação do Programa de Segurança, competências centrais de Segurança da Informação.\n( ) Planejamento Estratégico, Finanças, Aquisição e Gestão de Fornecedores.\n\nAgora, assinale a alternativa que corresponde à sequência correta:","alternatives":[{"letter":"A","text":"F, V, F, V, F."},{"letter":"B","text":"V, V, F, F, F."},{"letter":"C","text":"V, F, F, F, F."},{"letter":"D","text":"V, V, F, V, V."}],"answer":"D","explanation":"Os cinco domínios de conhecimento são: Governança e Gestão de Risco; Controles de Segurança da Informação, Conformidade e gestão de auditoria; Gestão e Operação do Programa de Segurança; Competências centrais de Segurança da Informação; Planejamento Estratégico, Finanças, Aquisição e Gestão de Fornecedores.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 04."},
    {"id":"q17","number":17,"prompt":"Assim como acontece com as principais certificações do mercado, o C|EH é credenciado e reconhecido pela norma, ou seja, ele apresenta uma estrutura formal de conselho que avalia e atualiza periodicamente os domínios de conhecimento do exame. Essa evolução faz com que novos conceitos e tecnologias do mercado sejam inseridos no programa, com a participação de novas abordagens, inclusive a execução de tarefas práticas. (Texto adaptado).\n\nCom base no texto acima e nos estudos realizados na disciplina, qual é a norma em que o C|EH é credenciado e reconhecido?","alternatives":[{"letter":"A","text":"ISO 45001."},{"letter":"B","text":"ISO 27001."},{"letter":"C","text":"ANSI 17024."},{"letter":"D","text":"ISO 9001."}],"answer":"C","explanation":"O C|EH é credenciado e reconhecido pela norma ANSI 17024.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 06."},
    {"id":"q18","number":18,"prompt":"O programa Certified Incident Handler (E|CIH) do EC-Council foi projetado e desenvolvido em colaboração com profissionais de segurança cibernética e tratamento e respostas a incidentes em todo o mundo.\n\nCom base no texto acima e nos estudos realizados na disciplina, analise as alternativas abaixo e assinale a que indica, corretamente, qual é o foco do programa Certified Incident Handler (E|CIH) do EC-Council:","alternatives":[{"letter":"A","text":"Oferecer conhecimentos, habilidades e atitudes necessários para responder a eventos de segurança cibernética."},{"letter":"B","text":"Oferecer certificação de instrutores aos candidatos, buscando que eles exercitem habilidades técnicas nas respostas a incidentes e possam ensinar novos alunos dentro de uma estrutura de SOC."},{"letter":"C","text":"Oferecer um programa intenso de três dias que cobre completamente os fundamentos das operações SOC."},{"letter":"D","text":"Oferecer conhecimento de gerenciamento e correlação de logs, além de implantação de SIEM, detecção avançada de incidentes e resposta a incidentes."}],"answer":"A","explanation":"O foco do programa é oferecer conhecimentos, habilidades e atitudes necessários para responder a eventos de segurança cibernética.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 08."},
    {"id":"q19","number":19,"prompt":"O programa Especialista em Segurança de Rede (NSE) da Fortinet é um programa de treinamento e certificação de oito níveis, projetado para fornecer aos profissionais técnicos interessados uma validação independente de suas habilidades e experiência em segurança de rede. O programa NSE inclui uma ampla gama de cursos de autoaprendizagem e cursos dirigidos por instrutores, assim como exercícios práticos e experimentais que demonstram o domínio de conceitos complexos de segurança de rede.\n\nDe acordo com o texto acima, qual é o objetivo dos três primeiros níveis de certificação NSE?","alternatives":[{"letter":"A","text":"Os três primeiros níveis de certificação NSE têm como objetivo a linguagem de programação."},{"letter":"B","text":"Os três primeiros níveis de certificação NSE têm como objetivo a limitação dos ataques cibernéticos na empresa."},{"letter":"C","text":"Os três primeiros níveis de certificação NSE têm como objetivo a orientação dos modelos de TI."},{"letter":"D","text":"Os três primeiros níveis de certificação NSE têm como objetivo a certificação de conscientização de segurança cibernética."}],"answer":"D","explanation":"Os três primeiros níveis de certificação NSE têm como objetivo a certificação de conscientização de segurança cibernética.","source":"Referência: Material de apoio – aula 05 – Prof. Luciano Johnson, p.11."},
    {"id":"q20","number":20,"prompt":"Grandes eventos da história geralmente trazem grandes mudanças no mundo, e isso não foi diferente com o EC-Council. Após os eventos de 11 de setembro de 2001, data marcada pelos ataques de aviões contra os edifícios do World Trade Center, o fundador de EC-Council, realizou uma pesquisa em empresas americanas para entender como elas teriam respondido caso o ataque tivesse sido realizado no campo cibernético. O resultado da pesquisa foi bem desanimador, uma vez que ficou claro que as organizações se mostraram despreparadas. (Texto adaptado).\n\nCom base nos estudos realizados na disciplina, qual é o nome do fundador de EC-Council?","alternatives":[{"letter":"A","text":"Jay Bavisi."},{"letter":"B","text":"Leonard Bosak."},{"letter":"C","text":"John Morgridge."},{"letter":"D","text":"Sandra Lerner."}],"answer":"A","explanation":"O fundador de EC-Council é Jay Bavisi.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 02."},
    {"id":"q21","number":21,"prompt":"A Cisco é reconhecida no mercado de tecnologia pelos seus equipamentos de infraestrutura de redes. Para além disso, ela também aplica tecnologia em segurança de redes em seus dispositivos.\n\nDe acordo com o texto acima, além da clássica certificação CCNA, qual é a certificação da Cisco específica para a segurança em redes?","alternatives":[{"letter":"A","text":"CCNA Security."},{"letter":"B","text":"Certified Identity and Access Manager (CIAM)."},{"letter":"C","text":"Microsoft Azure AD (Azure Active Directory)."},{"letter":"D","text":"Microsoft Certified."}],"answer":"A","explanation":"A Cisco tem uma certificação específica para a segurança em redes, a CCNA Security.","source":"Referência: Material de apoio – aula 06 – Prof. Luciano Johnson, p. 02."},
    {"id":"q22","number":22,"prompt":"O curso Cisco Networking Academy CCNA Security fornece um próximo passo para indivíduos que desejam aprimorar o seu conjunto de habilidades de nível CCNA. Ele ajuda a atender à crescente demanda por profissionais de segurança de redes.\n\nCom base no texto acima, assinale a alternativa correta, que aponta como a Cisco é reconhecida no mercado de tecnologia:","alternatives":[{"letter":"A","text":"A Cisco é reconhecida no mercado de tecnologia pelos seus equipamentos de infraestrutura de redes."},{"letter":"B","text":"A Cisco é reconhecida no mercado de tecnologia pela programação de software."},{"letter":"C","text":"A Cisco é reconhecida no mercado de tecnologia pela formação de gerentes em TI."},{"letter":"D","text":"A Cisco é reconhecida no mercado de tecnologia pela formação em analistas de sistemas."}],"answer":"A","explanation":"A Cisco é reconhecida no mercado de tecnologia pelos seus equipamentos de infraestrutura de redes.","source":"Referência: Material de apoio – aula 06 – Prof. Luciano Johnson, p. 02."},
    {"id":"q23","number":23,"prompt":"O programa C|TIA – Certified Threat Intelligence Analyst é uma opção avançada dentro do campo de segurança cibernética, pois exige uma mente analítica, com forte pensamento crítico. A área de inteligência avalia os cenários e situações em jogo, para gerar estratégias diferenciadas na proteção e na resposta a incidentes.\n\nCom base no texto acima e nos estudos realizados na disciplina, qual é a atitude que o profissional C|TIA precisa ter no mundo cibernético da organização?","alternatives":[{"letter":"A","text":"O profissional C|TIA precisa ter a atitude de Hunter."},{"letter":"B","text":"O profissional C|TIA precisa ter a atitude de programador."},{"letter":"C","text":"O profissional C|TIA precisa ter a atitude de um gestor de equipes."},{"letter":"D","text":"O profissional C|TIA precisa ter a atitude de um técnico empreendedor."}],"answer":"A","explanation":"O profissional C|TIA precisa ter a atitude de Hunter, ou seja, de caçador de problemas.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 11."},
    {"id":"q24","number":24,"prompt":"Buscar a certificação de gestão de identidades e acesso tem sido uma excelente oportunidade para vários profissionais, pois trata-se de uma disciplina executada em qualquer tipo e tamanho de empresa. Todos os usuários precisam ter acessos e permissões, o que faz com que a gestão de acesso seja considerada fator crítico na segurança da informação. Como já vimos na aula 06, as tecnologias de nuvem, como Azure, AWS e Google Cloud, apresentam alguns pilares de segurança. (Texto adaptado).\n\nConforme os estudos realizados na disciplina e de acordo com o texto acima, por meio das tecnologias de nuvem?","alternatives":[{"letter":"A","text":"Gestão de identidade e acessos."},{"letter":"B","text":"Concepção Lean de Produtos e Técnicas para criar soluções inovadoras e de aderência no mercado (Canvas, MVP, Design Thinking)."},{"letter":"C","text":"Product Backlog e a priorização de backlog."},{"letter":"D","text":"RoadMap, User Stories com INVEST, ATDD."}],"answer":"A","explanation":"As tecnologias de nuvem apresentam, entre os seus pilares de segurança, a gestão de identidade e acessos.","source":"Referência: Material de apoio – aula 06 – Prof. Luciano Johnson, p. 14."},
    {"id":"q25","number":25,"prompt":"Os candidatos à certificação Azure Security Engineer Associate devem ser especialistas na implementação de controles de segurança do Azure, que protegem a identidade, o acesso, os dados, os aplicativos e as redes em ambientes de nuvem e híbridos como parte de uma infraestrutura completa.\n\nConforme o texto acima e os conteúdos abordados na aula 05, qual é a experiência necessária para certificação Azure Security Engineer Associate?","alternatives":[{"letter":"A","text":"Os candidatos devem ter conhecimento com processos de operações gerencial, funcionalidades de sistemas de informação e serviços de nuvem."},{"letter":"B","text":"Os candidatos devem ter experiência com infraestrutura como código, processos de operações de segurança, funcionalidades de nuvem e serviços do Azure."},{"letter":"C","text":"Os candidatos devem ter conhecimentos teóricos de processos de operações de segurança, funcionalidades de nuvem e serviços."},{"letter":"D","text":"Os candidatos devem ter pré-conhecimentos de TI, processos de programação, funcionalidades de nuvem e serviços."}],"answer":"B","explanation":"Os candidatos devem ter experiência com infraestrutura como código, processos de operações de segurança, funcionalidades de nuvem e serviços do Azure.","source":"Referência: Material de apoio – aula 05 – Prof. Luciano Johnson, p. 06."},
    {"id":"q26","number":26,"prompt":"Para ser colocado na ponta da lança cibernética de sua organização, você deve ser confiante, proficiente em seu trabalho, com domínio de seu jogo. Você deve ser capaz de pensar e agir rapidamente, de forma apropriada e proporcional. O CEH Master oferece a oportunidade de provar, ao seu empregador e a seus colegas (e também a si mesmo) que você está preparado para enfrentar e superar os desafios encontrados na vida cotidiana de um hacker ético.\n\nCom base nos estudos realizados na disciplina e de acordo com o texto acima, qual a principal proposta por trás da certificação CEH Master?","alternatives":[{"letter":"A","text":"Testar os candidatos em um ambiente parecido com a realidade das empresas atuais, enfrentando os mesmos tipos de desafios."},{"letter":"B","text":"Testar os candidatos em um ambiente neutro, enfrentando os possíveis desafios."},{"letter":"C","text":"Testar os candidatos em um ambiente controlado, enfrentando os desafios primários do curso."},{"letter":"D","text":"Testar os candidatos em um ambiente escolar, enfrentando apenas os desafios delimitados pela instituição."}],"answer":"A","explanation":"A principal proposta do CEH Master é testar os candidatos em um ambiente parecido com a realidade das empresas atuais.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 07."},
    {"id":"q27","number":27,"prompt":"Como já vimos durante as aulas, o ambiente de nuvem tem crescido consideravelmente, e a demanda por profissionais especializados e certificados aumentou, principalmente para os profissionais de segurança cibernética. A nuvem na Amazon, a AWS, é uma das mais utilizadas para hospedar serviços de nuvem, e, por esta razão, a AWS disponibiliza um treinamento e uma certificação específica para profissionais de segurança cibernética.\n\nCom base no texto acima, qual é o exame que valida a capacidade de um candidato demonstrar, de forma eficaz, seu conhecimento sobre como proteger a plataforma da AWS?","alternatives":[{"letter":"A","text":"O exame Certified Information Systems Auditor."},{"letter":"B","text":"O exame CGEIT (Certified in the Governance of Enterprise IT)."},{"letter":"C","text":"O exame AWS Certified Security – Specialty (SCS-C01)."},{"letter":"D","text":"O exame ITCA (Information Technology Certified Associate)."}],"answer":"C","explanation":"O exame AWS Certified Security – Specialty (SCS-C01) valida a capacidade de proteger a plataforma da AWS.","source":"Referência: Material de apoio – aula 05 – Prof. Luciano Johnson, p. 02."},
    {"id":"q28","number":28,"prompt":"O EC-Council oferece três opções de certificação para o segmento de resposta a incidentes. Uma delas serve especificamente para analistas de SOC, um dos cargos mais ofertados na resposta a incidentes do mercado.\n\nCom base nos estudos realizados na disciplina e conforme o texto acima, assinale a alternativa correta em relação à certificação do EC-Council, projetada para analistas SOC Tier I e Tier II:","alternatives":[{"letter":"A","text":"Certificação EC-Council."},{"letter":"B","text":"Certificação Disaster Recovery."},{"letter":"C","text":"Certificação E|DRP."},{"letter":"D","text":"Certified SOC Analyst CSA."}],"answer":"D","explanation":"O programa Certified SOC Analyst CSA é projetado para analistas SOC Tier I e Tier II.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 10."},
    {"id":"q29","number":29,"prompt":"O programa Certified SOC Analyst CSA é o primeiro passo para ingressar em um centro de operações de segurança (SOC). Ele é projetado para analistas SOC Tier I e Tier II atuais e aspirantes, para obter proficiência na execução de operações de nível básico e intermediário.\n\nConforme os estudos realizados na disciplina, quantos dias de duração tem programa Certified SOC Analyst CSA?","alternatives":[{"letter":"A","text":"Três (03) dias intensos de duração."},{"letter":"B","text":"Cinco (05) dias intensos de duração."},{"letter":"C","text":"Sete (07) dias intensos de duração."},{"letter":"D","text":"Quinze (15) dias intensos de duração."}],"answer":"A","explanation":"É um programa intenso de três dias, cobrindo completamente os fundamentos das operações SOC.","source":"Referência: Material de apoio – aula 04 – Prof. Luciano Johnson, p. 10."},
    {"id":"q30","number":30,"prompt":"O AWS Certified Security – Specialty (SCS-C01) é um exame que resulta em aprovação ou reprovação. O exame é pontuado de acordo com um padrão mínimo estabelecido por profissionais da AWS que seguem as práticas recomendadas e as diretrizes do setor de certificação.\n\nCom base no texto acima e nos estudos realizados na disciplina, analise as assertivas abaixo, sobre quais comprovações o candidato poderá ter ao realizar o exame AWS Certified Security – Specialty (SCS-C01):\n\nI. Compreensão das classificações de dados especializadas e dos mecanismos de proteção de dados da AWS.\nII. Compreensão dos métodos de criptografia de dados e dos mecanismos da AWS para implementá-los.\nIII. Compreensão de protocolos seguros da Internet e dos mecanismos da AWS para implementá-los.\nIV. Conhecimento prático dos produtos e recursos de segurança da AWS para fornecer um ambiente de produção seguro.\nV. Competência de um ano de experiência em implantação de produção no uso dos produtos e recursos de segurança da AWS.\n\nAgora, assinale a alternativa que corresponde à sequência correta:","alternatives":[{"letter":"A","text":"Apenas os itens I e V estão corretos."},{"letter":"B","text":"Apenas o item V está correto."},{"letter":"C","text":"Os itens I, II, III e IV estão corretos."},{"letter":"D","text":"Apenas os itens I, II e III estão corretos."}],"answer":"C","explanation":"O exame comprova compreensão das classificações de dados, métodos de criptografia, protocolos seguros, conhecimento prático dos produtos AWS (itens I, II, III, IV). O item V é incorreto (são 2 anos ou mais).","source":"Referência: Material de apoio – aula 05 – Prof. Luciano Johnson, p. 02."}
  ]
};

const AULA02 = {
  "id": "aula02",
  "title": "Formação Cidadã Contemporânea",
  "shortTitle": "Formação Cidadã",
  "description": "Competências, valores, cultura, cidadania e desenvolvimento profissional.",
  "accent": "#d97706",
  "icon": "🌍",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {"id":"q2_1","number":1,"prompt":"No mercado de trabalho atual, as empresas valorizam tanto as habilidades técnicas quanto as comportamentais. Saber diferenciá-las é essencial para o desenvolvimento profissional. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente a diferença entre hard skills e soft skills:","alternatives":[{"letter":"A","text":"Hard skills são habilidades comportamentais e soft skills são conhecimentos técnicos."},{"letter":"B","text":"Hard skills são habilidades técnicas mensuráveis e soft skills são competências interpessoais e emocionais."},{"letter":"C","text":"Hard skills são habilidades inatas e soft skills são adquiridas por meio de cursos."},{"letter":"D","text":"Hard skills e soft skills são sinônimos e podem ser usados indistintamente."}],"answer":"B","explanation":"Hard skills são habilidades técnicas mensuráveis; soft skills são competências interpessoais e emocionais.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_2","number":2,"prompt":"A expressão cultural é uma das formas pelas quais os grupos sociais comunicam sua identidade, valores e tradições. Ela pode se manifestar por meio da arte, da música, da dança, da culinária, da linguagem e de outras práticas cotidianas. Em um mundo globalizado, essas expressões circulam entre diferentes culturas, promovendo tanto o reconhecimento quanto o risco de homogeneização cultural. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente o conceito de expressão cultural:","alternatives":[{"letter":"A","text":"É a imposição de valores culturais dominantes sobre grupos minoritários."},{"letter":"B","text":"É a forma como uma sociedade manifesta sua identidade por meio de práticas simbólicas e artísticas."},{"letter":"C","text":"É a padronização de comportamentos sociais promovida pela mídia de massa."},{"letter":"D","text":"É a reprodução de hábitos tradicionais sem transformação ao longo do tempo."}],"answer":"B","explanation":"Expressão cultural é a forma como uma sociedade manifesta sua identidade por meio de práticas simbólicas e artísticas.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 3."},
    {"id":"q2_3","number":3,"prompt":"Os valores individuais são influenciados por experiências pessoais, familiares, culturais e educacionais. Já os valores sociais são compartilhados por grupos e sociedades, contribuindo para a coesão e identidade coletiva. Com base nos conteúdos da disciplina, avalie qual alternativa expressa corretamente a relação entre valores individuais e sociais:","alternatives":[{"letter":"A","text":"Os valores sociais são imutáveis e independem dos valores individuais."},{"letter":"B","text":"Os valores individuais são formados por influências religiosas."},{"letter":"C","text":"Os valores individuais influenciam e são influenciados pelos valores sociais, em uma relação dinâmica e contínua."},{"letter":"D","text":"Os valores sociais são definidos por leis e desconectam-se de crenças pessoais."}],"answer":"C","explanation":"Valores individuais influenciam e são influenciados pelos valores sociais, em uma relação dinâmica e contínua.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_4","number":4,"prompt":"As hard skills são habilidades técnicas mensuráveis, adquiridas por meio de formação acadêmica, treinamentos e experiências práticas. Elas são fundamentais para o desempenho de tarefas específicas. Com base nos conteúdos da disciplina, identifique qual alternativa aplica corretamente o conceito de hard skills:","alternatives":[{"letter":"A","text":"Um advogado que utiliza empatia para compreender o sofrimento de seu cliente está demonstrando uma hard skill."},{"letter":"B","text":"Um programador que domina linguagens de programação e algoritmos está utilizando suas hard skills."},{"letter":"C","text":"Um médico que demonstra paciência ao lidar com pacientes está aplicando uma hard skill."},{"letter":"D","text":"Um gerente que lidera sua equipe com entusiasmo está demonstrando uma hard skill."}],"answer":"B","explanation":"Um programador que domina linguagens de programação e algoritmos está utilizando suas hard skills.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_5","number":5,"prompt":"Em um país com dimensões continentais como o Brasil, é comum observarmos variações culturais significativas entre regiões. Essas diferenças se manifestam em costumes, culinária, linguagem e modos de vida, influenciados por fatores históricos, sociais e econômicos. A identidade cultural, nesse contexto, é moldada por elementos que vão além da geografia, refletindo valores e experiências compartilhadas por grupos sociais. Com base nos conteúdos da disciplina, identifique qual alternativa expressa corretamente o conceito de identidade cultural:","alternatives":[{"letter":"A","text":"A identidade cultural é determinada biologicamente e permanece inalterada ao longo do tempo."},{"letter":"B","text":"A identidade cultural é formada por elementos religiosos e linguísticos."},{"letter":"C","text":"A identidade cultural é construída socialmente e moldada por valores, crenças e experiências compartilhadas."},{"letter":"D","text":"A identidade cultural é imposta por instituições estatais e se mantém inalterada pela convivência social."}],"answer":"C","explanation":"A identidade cultural é construída socialmente e moldada por valores, crenças e experiências compartilhadas.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 3."},
    {"id":"q2_6","number":6,"prompt":"O conceito de competência evoluiu ao longo do tempo, desde seu uso jurídico na Idade Média até sua aplicação na educação e gestão de pessoas. Essa evolução reflete mudanças nas exigências sociais e profissionais. Com base nos conteúdos da disciplina, analise qual alternativa apresenta corretamente a evolução histórica do conceito de competência:","alternatives":[{"letter":"A","text":"Na Idade Média, competência era entendida como a capacidade de aplicar conhecimentos técnicos em tribunais."},{"letter":"B","text":"No século XX, competência passou a ser usada na psicologia para avaliar inteligência."},{"letter":"C","text":"A partir da década de 1970, competência passou a ser vista como a capacidade de realizar tarefas com eficácia, integrando saber, saber-fazer e saber-ser."},{"letter":"D","text":"Atualmente, competência é sinônimo de aptidão natural e não exige formação ou experiência."}],"answer":"C","explanation":"A partir da década de 1970, competência passou a integrar saber, saber-fazer e saber-ser.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_7","number":7,"prompt":"A globalização intensificou a circulação de bens, ideias e práticas culturais entre diferentes países. Isso permitiu que culturas antes pouco conhecidas ganhassem visibilidade global. Ao mesmo tempo, esse processo pode gerar a padronização de comportamentos e a perda de identidades locais, o que levanta debates sobre os efeitos positivos e negativos da globalização cultural. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente uma consequência da globalização cultural:","alternatives":[{"letter":"A","text":"A globalização impede o contato entre culturas diferentes."},{"letter":"B","text":"A globalização cultural fortalece as culturas locais."},{"letter":"C","text":"A globalização cultural pode gerar tanto diversidade quanto homogeneização cultural."},{"letter":"D","text":"A globalização cultural elimina as influências estrangeiras nas culturas nacionais."}],"answer":"C","explanation":"A globalização cultural pode gerar tanto diversidade quanto homogeneização cultural.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 3."},
    {"id":"q2_8","number":8,"prompt":"O conceito de CHAVE propõe que o conhecimento é um dos pilares fundamentais para o desenvolvimento de competências. Ele está relacionado à formação escolar, acadêmica e ao domínio intelectual na área de atuação. Com base nos conteúdos da disciplina, identifique qual alternativa representa corretamente o papel do conhecimento no modelo CHAVE:","alternatives":[{"letter":"A","text":"O conhecimento é a capacidade de agir com ética e responsabilidade."},{"letter":"B","text":"O conhecimento é a habilidade de aplicar técnicas e ferramentas em situações práticas."},{"letter":"C","text":"O conhecimento é o domínio intelectual e a compreensão das informações adquiridas por meio de estudos e formação acadêmica."},{"letter":"D","text":"O conhecimento é a disposição para iniciar ações e tomar decisões."}],"answer":"C","explanation":"Conhecimento é o domínio intelectual e a compreensão das informações adquiridas por estudo e formação.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_9","number":9,"prompt":"A inteligência emocional é uma soft skill essencial para o sucesso profissional. Ela envolve a capacidade de reconhecer, compreender e gerenciar as próprias emoções e as dos outros. Com base nos conteúdos da disciplina, avalie qual alternativa apresenta corretamente um dos domínios da inteligência emocional segundo Goleman:","alternatives":[{"letter":"A","text":"A empatia é a capacidade de manter o foco em metas pessoais, mesmo diante de adversidades."},{"letter":"B","text":"A sociabilidade é a capacidade de reconhecer um sentimento quando ele ocorre."},{"letter":"C","text":"A autoconsciência é a capacidade de reconhecer, avaliar e expressar emoções de forma precisa."},{"letter":"D","text":"A automotivação é a habilidade de interpretar expressões não verbais e compreender os sentimentos dos outros."}],"answer":"C","explanation":"Autoconsciência é a capacidade de reconhecer, avaliar e expressar emoções de forma precisa.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_10","number":10,"prompt":"No contexto da educação superior, o desenvolvimento de competências é cada vez mais valorizado como parte da formação integral do estudante. Isso reflete uma mudança de paradigma, em que não basta apenas dominar conteúdos teóricos, mas também saber aplicá-los em situações reais. Com base nos conteúdos da disciplina, identifique qual alternativa expressa corretamente o conceito de competência segundo a perspectiva educacional contemporânea:","alternatives":[{"letter":"A","text":"A competência é a capacidade de memorizar conteúdos específicos de uma área do conhecimento."},{"letter":"B","text":"A competência é a aptidão natural que independe de formação ou experiência."},{"letter":"C","text":"A competência é a capacidade de aplicar conhecimentos, habilidades e atitudes em situações reais."},{"letter":"D","text":"A competência é o domínio de habilidades técnicas adquiridas no ambiente de trabalho."}],"answer":"C","explanation":"Competência é a capacidade de aplicar conhecimentos, habilidades e atitudes em situações reais.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_11","number":11,"prompt":"A inteligência emocional é composta por cinco domínios principais: autoconsciência, autocontrole, automotivação, empatia e sociabilidade. Cada um deles contribui para o equilíbrio emocional e a eficácia nas relações interpessoais. Com base nos conteúdos da disciplina, analise qual alternativa apresenta corretamente a relação entre os domínios da inteligência emocional:","alternatives":[{"letter":"A","text":"A empatia é desenvolvida a partir da automotivação e permite reconhecer as próprias emoções."},{"letter":"B","text":"A autoconsciência é a base para o autocontrole, pois permite identificar emoções antes de reagir a elas."},{"letter":"C","text":"A sociabilidade é independente dos demais domínios e distancia-se do controle emocional."},{"letter":"D","text":"A automotivação é a capacidade de reconhecer emoções nos outros e agir com empatia."}],"answer":"B","explanation":"Autoconsciência é a base para o autocontrole, permitindo identificar emoções antes de reagir.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_12","number":12,"prompt":"As emoções influenciam diretamente o comportamento, o desempenho e a capacidade de tomar decisões. No modelo CHAVE, elas são consideradas essenciais para o desenvolvimento pessoal e profissional. Com base nos conteúdos da disciplina, identifique qual alternativa expressa corretamente o papel das emoções no desenvolvimento de competências:","alternatives":[{"letter":"A","text":"Emoções são irrelevantes para o desempenho profissional, pois não afetam a tomada de decisão."},{"letter":"B","text":"Emoções são estados subjetivos que influenciam o pensamento, o comportamento e a capacidade de se relacionar com os outros."},{"letter":"C","text":"Emoções são habilidades técnicas que podem ser mensuradas por meio de testes objetivos."},{"letter":"D","text":"Emoções são crenças pessoais que orientam o comportamento ético."}],"answer":"B","explanation":"Emoções são estados subjetivos que influenciam o pensamento, comportamento e relacionamentos.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_13","number":13,"prompt":"Os valores orientam o comportamento ético e responsável dos indivíduos. Eles são formados por experiências pessoais, educação, cultura e religião, e influenciam diretamente as decisões e ações no ambiente profissional. Com base nos conteúdos da disciplina, analise qual alternativa apresenta corretamente um fator que contribui para a formação de valores:","alternatives":[{"letter":"A","text":"Os valores são formados por normas legais e não sofrem influência cultural."},{"letter":"B","text":"A formação de valores ocorre apenas na fase adulta, quando o indivíduo já tem autonomia."},{"letter":"C","text":"A educação contribui para o desenvolvimento de valores mais amplos e inclusivos, ao expor o indivíduo a diferentes perspectivas."},{"letter":"D","text":"Os valores são imutáveis e não se alteram com novas experiências ou contextos."}],"answer":"C","explanation":"A educação contribui para o desenvolvimento de valores mais amplos e inclusivos.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_14","number":14,"prompt":"A atitude, dentro do modelo CHAVE, representa a disposição para agir após a tomada de decisão. Ela envolve iniciativa, superação e coragem para assumir riscos, sendo essencial para o desempenho profissional em ambientes dinâmicos. Com base nos conteúdos da disciplina, avalie qual alternativa representa corretamente o papel da atitude no desenvolvimento de competências:","alternatives":[{"letter":"A","text":"A atitude é a capacidade de aplicar conhecimentos técnicos em situações práticas."},{"letter":"B","text":"A atitude é a disposição para iniciar ações, assumir riscos e agregar valor após a tomada de decisão."},{"letter":"C","text":"A atitude é a habilidade de reconhecer emoções nos outros e responder com empatia."},{"letter":"D","text":"A atitude é o conjunto de crenças que orienta o comportamento ético do indivíduo."}],"answer":"B","explanation":"Atitude é a disposição para iniciar ações, assumir riscos e agregar valor após a tomada de decisão.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_15","number":15,"prompt":"A comunicação efetiva é uma das soft skills mais valorizadas no ambiente profissional. Ela envolve clareza, escuta ativa e empatia, sendo essencial para o trabalho em equipe e a resolução de conflitos. Com base nos conteúdos da disciplina, avalie qual alternativa representa corretamente um aspecto da comunicação como soft skill:","alternatives":[{"letter":"A","text":"A comunicação efetiva depende do domínio técnico da linguagem."},{"letter":"B","text":"A comunicação efetiva é a capacidade de transmitir informações sem considerar o contexto ou o interlocutor."},{"letter":"C","text":"A comunicação efetiva exige clareza, escuta ativa e empatia para promover entendimento mútuo."},{"letter":"D","text":"A comunicação efetiva é uma habilidade inata que permanece estagnada."}],"answer":"C","explanation":"Comunicação efetiva exige clareza, escuta ativa e empatia para promover entendimento mútuo.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 1."},
    {"id":"q2_16","number":16,"prompt":"A sustentabilidade e a segurança alimentar são temas interligados que exigem soluções integradas. A produção de alimentos deve respeitar os limites do meio ambiente e garantir o acesso equitativo a alimentos nutritivos, promovendo saúde e justiça social. Com base nos conteúdos da disciplina, identifique qual alternativa propõe corretamente uma solução integrada para promover sustentabilidade e segurança alimentar:","alternatives":[{"letter":"A","text":"Incentivar o uso de fertilizantes químicos para aumentar a produtividade agrícola."},{"letter":"B","text":"Estimular a agricultura familiar com práticas agroecológicas e acesso a mercados locais."},{"letter":"C","text":"Reduzir a fiscalização ambiental para facilitar a expansão agrícola."},{"letter":"D","text":"Priorizar a exportação de alimentos como estratégia de crescimento econômico."}],"answer":"B","explanation":"Estimular agricultura familiar com práticas agroecológicas integra sustentabilidade e segurança alimentar.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_17","number":17,"prompt":"A sustentabilidade é um conceito que envolve o equilíbrio entre o desenvolvimento econômico, a preservação ambiental e a justiça social. Políticas públicas sustentáveis são fundamentais para garantir esse equilíbrio no longo prazo. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente um princípio fundamental da sustentabilidade:","alternatives":[{"letter":"A","text":"Exploração intensiva de recursos naturais para acelerar o crescimento econômico."},{"letter":"B","text":"Redução da biodiversidade para facilitar o uso agrícola do solo."},{"letter":"C","text":"Equilíbrio entre crescimento econômico, justiça social e preservação ambiental."},{"letter":"D","text":"Substituição de áreas verdes por empreendimentos urbanos de grande porte."}],"answer":"C","explanation":"Equilíbrio entre crescimento econômico, justiça social e preservação ambiental é o tripé da sustentabilidade.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_18","number":18,"prompt":"A sustentabilidade depende de políticas públicas que conciliem desenvolvimento econômico e preservação ambiental. A escolha de estratégias adequadas é fundamental para garantir o futuro das próximas gerações. Com base nos conteúdos da disciplina, identifique qual alternativa exemplifica corretamente uma política pública voltada ao desenvolvimento sustentável:","alternatives":[{"letter":"A","text":"Subsidiar combustíveis fósseis para garantir o abastecimento energético nacional."},{"letter":"B","text":"Incentivar o uso de energias renováveis por meio de isenções fiscais."},{"letter":"C","text":"Reduzir a fiscalização ambiental para atrair investimentos estrangeiros."},{"letter":"D","text":"Priorizar o crescimento urbano desordenado para gerar empregos imediatos."}],"answer":"B","explanation":"Incentivar energias renováveis por meio de isenções fiscais é uma política pública sustentável.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_19","number":19,"prompt":"A biodiversidade é essencial para o equilíbrio ecológico e a sobrevivência humana. No entanto, a ação humana tem acelerado sua perda, o que exige reflexão crítica sobre os fatores que contribuem para esse cenário. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente um fator que contribui diretamente para a perda da biodiversidade no cenário contemporâneo:","alternatives":[{"letter":"A","text":"A expansão de áreas verdes urbanas, promovendo corredores ecológicos."},{"letter":"B","text":"A implementação de políticas públicas de reflorestamento em áreas degradadas."},{"letter":"C","text":"A intensificação do desmatamento para expansão agrícola e urbana."},{"letter":"D","text":"A criação de unidades de conservação ambiental em regiões de risco."}],"answer":"C","explanation":"A intensificação do desmatamento para expansão agrícola e urbana contribui para perda de biodiversidade.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_20","number":20,"prompt":"Os povos indígenas no Brasil possuem direitos assegurados pela Constituição Federal de 1988, incluindo o reconhecimento de suas terras, línguas, culturas e formas de organização social. No entanto, esses direitos são frequentemente violados por interesses econômicos e políticos que ameaçam seus territórios e modos de vida. A demarcação das terras indígenas é uma das principais pautas de luta desses povos, pois garante não apenas sua sobrevivência física, mas também a preservação de sua identidade cultural. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente um direito garantido às populações indígenas pela Constituição de 1988:","alternatives":[{"letter":"A","text":"A obrigação de abandonar suas tradições para se integrar à sociedade nacional."},{"letter":"B","text":"O direito originário às terras tradicionalmente ocupadas."},{"letter":"C","text":"A submissão obrigatória às normas religiosas da maioria."},{"letter":"D","text":"A proibição de uso de tecnologias modernas em suas comunidades."}],"answer":"B","explanation":"A Constituição de 1988 garante o direito originário dos indígenas às terras tradicionalmente ocupadas.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 6."},
    {"id":"q2_21","number":21,"prompt":"A segurança alimentar e nutricional exige políticas que garantam o acesso a alimentos saudáveis, em quantidade suficiente e de forma sustentável. Aplicar esse conceito na prática é um desafio para governos e sociedade. Com base nos conteúdos da disciplina, identifique qual alternativa representa corretamente uma ação que contribui para a segurança alimentar e nutricional:","alternatives":[{"letter":"A","text":"Incentivo à monocultura de exportação em larga escala."},{"letter":"B","text":"Distribuição de alimentos ultraprocessados em programas sociais."},{"letter":"C","text":"Apoio à agricultura familiar com foco em produção diversificada e local."},{"letter":"D","text":"Redução de subsídios para feiras e mercados locais."}],"answer":"C","explanation":"Apoio à agricultura familiar com foco em produção diversificada e local contribui para segurança alimentar.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_22","number":22,"prompt":"A sustentabilidade depende da adoção de políticas públicas que promovam o equilíbrio entre desenvolvimento econômico, justiça social e preservação ambiental. Aplicar esse conhecimento a situações práticas é essencial para a cidadania ativa. Com base nos conteúdos da disciplina, identifique qual alternativa representa corretamente uma política pública voltada à sustentabilidade:","alternatives":[{"letter":"A","text":"Incentivo à monocultura para aumentar a produtividade agrícola."},{"letter":"B","text":"Redução de áreas de preservação para expansão urbana."},{"letter":"C","text":"Criação de programas de educação ambiental nas escolas públicas."},{"letter":"D","text":"Isenção fiscal para empresas que utilizam combustíveis fósseis."}],"answer":"C","explanation":"Criação de programas de educação ambiental nas escolas públicas é política de sustentabilidade.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_23","number":23,"prompt":"As migrações internacionais são motivadas por diversos fatores, como conflitos armados, perseguições políticas, crises econômicas e desastres naturais. Os migrantes forçados, como os refugiados, são pessoas que se deslocam involuntariamente em busca de proteção e melhores condições de vida. A distinção entre migrantes voluntários e forçados é essencial para compreender os direitos e necessidades específicas desses grupos, especialmente no contexto das políticas internacionais de acolhimento e assistência humanitária. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente a condição de migrante internacional forçado:","alternatives":[{"letter":"A","text":"Pessoa que migra por vontade própria em busca de novas oportunidades profissionais."},{"letter":"B","text":"Indivíduo que se desloca por motivos turísticos e retorna ao país de origem."},{"letter":"C","text":"Pessoa que é obrigada a deixar seu país devido a fatores como guerra, perseguição ou desastres naturais."},{"letter":"D","text":"Trabalhador que se muda para outro país por meio de contrato temporário."}],"answer":"C","explanation":"Migrante forçado é a pessoa obrigada a deixar seu país devido a guerra, perseguição ou desastres naturais.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 5."},
    {"id":"q2_24","number":24,"prompt":"A intervenção humana no meio ambiente tem gerado impactos significativos, como a perda de biodiversidade e a degradação de ecossistemas. Compreender essas consequências é essencial para a formação de uma consciência crítica e cidadã. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente uma consequência da intervenção humana sobre o meio ambiente:","alternatives":[{"letter":"A","text":"Aumento da diversidade de espécies em áreas urbanas."},{"letter":"B","text":"Estabilização dos ciclos naturais por meio da industrialização."},{"letter":"C","text":"Aceleração da perda de biodiversidade devido ao desmatamento e à poluição."},{"letter":"D","text":"Recuperação espontânea de ecossistemas após a ocupação humana."}],"answer":"C","explanation":"A intervenção humana acelera a perda de biodiversidade devido ao desmatamento e poluição.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_25","number":25,"prompt":"A acessibilidade é um direito fundamental que garante a todas as pessoas, especialmente às pessoas com deficiência (PcD), o acesso seguro e autônomo a espaços, serviços e oportunidades. No Brasil, a Convenção sobre os Direitos das Pessoas com Deficiência, ratificada em 2006, estabeleceu diretrizes para a promoção da inclusão e da igualdade. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente o conceito de acessibilidade:","alternatives":[{"letter":"A","text":"Conjunto de normas que restringem o acesso de pessoas com deficiência a espaços públicos."},{"letter":"B","text":"Condição que permite o uso de espaços e serviços por todas as pessoas, com segurança e autonomia."},{"letter":"C","text":"Política de segregação de pessoas com deficiência em ambientes adaptados."},{"letter":"D","text":"Medida provisória para atender emergencialmente pessoas com deficiência."}],"answer":"B","explanation":"Acessibilidade é a condição que permite o uso de espaços e serviços por todas as pessoas com segurança e autonomia.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 5."},
    {"id":"q2_26","number":26,"prompt":"A promoção da saúde vai além do tratamento de doenças. Ela envolve ações educativas, ambientais e sociais que visam melhorar a qualidade de vida e prevenir enfermidades antes que elas ocorram. Com base nos conteúdos da disciplina, identifique qual alternativa expressa corretamente uma estratégia de promoção da saúde:","alternatives":[{"letter":"A","text":"Construção de hospitais especializados em doenças raras."},{"letter":"B","text":"Distribuição gratuita de medicamentos para doenças crônicas."},{"letter":"C","text":"Campanhas educativas sobre alimentação saudável e atividade física."},{"letter":"D","text":"Aumento da produção de vacinas para exportação."}],"answer":"C","explanation":"Campanhas educativas sobre alimentação saudável e atividade física são estratégias de promoção da saúde.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_27","number":27,"prompt":"A sociedade brasileira é marcada por profundas desigualdades que se manifestam em diferentes esferas: étnico-raciais, de classe, de gênero e de orientação sexual. Essas desigualdades têm raízes históricas na colonização, escravidão e exclusão sistemática de determinados grupos. A marginalização de minorias sociais é um reflexo da estrutura social que perpetua privilégios e limita o acesso a direitos básicos para grande parte da população. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente um fator que contribui para a marginalização de grupos considerados minorias sociais no Brasil:","alternatives":[{"letter":"A","text":"A predominância de políticas públicas voltadas para grupos privilegiados."},{"letter":"B","text":"A igualdade de acesso à educação e saúde entre todos os grupos sociais."},{"letter":"C","text":"A valorização das culturas afrodescendentes e indígenas nas instituições públicas."},{"letter":"D","text":"A ampla representatividade de mulheres e pessoas LGBTQIAPN+ em cargos políticos."}],"answer":"A","explanation":"A predominância de políticas públicas voltadas para grupos privilegiados contribui para marginalização de minorias.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 6."},
    {"id":"q2_28","number":28,"prompt":"A segurança alimentar vai além da produção de alimentos: envolve acesso justo, qualidade nutricional e respeito ao meio ambiente. Analisar os desafios contemporâneos nesse campo é essencial para a cidadania crítica. Com base nos conteúdos da disciplina, identifique qual alternativa analisa corretamente um desafio contemporâneo relacionado à segurança alimentar:","alternatives":[{"letter":"A","text":"A produção em larga escala garante automaticamente o acesso equitativo aos alimentos."},{"letter":"B","text":"A monocultura intensiva contribui para a diversidade alimentar e nutricional."},{"letter":"C","text":"A distribuição desigual de alimentos compromete o acesso de populações vulneráveis."},{"letter":"D","text":"O uso de agrotóxicos em larga escala melhora a qualidade nutricional dos alimentos."}],"answer":"C","explanation":"A distribuição desigual de alimentos compromete o acesso de populações vulneráveis.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 4."},
    {"id":"q2_29","number":29,"prompt":"A relação entre campo e cidade passou por profundas transformações ao longo da história, especialmente após a Revolução Industrial. O êxodo rural e a urbanização acelerada modificaram a paisagem e a dinâmica social, econômica e cultural dos territórios. Atualmente, os conceitos de campo e cidade são complementados pelas noções de rural e urbano. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente uma característica do espaço rural:","alternatives":[{"letter":"A","text":"Concentração de indústrias e serviços financeiros."},{"letter":"B","text":"Predominância de atividades do setor primário, como agricultura e pecuária."},{"letter":"C","text":"Elevada densidade populacional e verticalização urbana."},{"letter":"D","text":"Presença de centros comerciais e redes de transporte integradas."}],"answer":"B","explanation":"O espaço rural é caracterizado pela predominância de atividades do setor primário.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 5."},
    {"id":"q2_30","number":30,"prompt":"A Declaração Universal dos Direitos Humanos, adotada pela ONU em 1948, estabelece que todos os seres humanos têm direito à liberdade, igualdade e dignidade, sem distinção de raça, cor, sexo, religião ou origem. Esses princípios são fundamentais para a proteção das minorias sociais. Com base nos conteúdos da disciplina, identifique qual alternativa apresenta corretamente um princípio da Declaração Universal dos Direitos Humanos:","alternatives":[{"letter":"A","text":"A distinção entre pessoas com base em sua origem social é permitida em sociedades democráticas."},{"letter":"B","text":"Todos os seres humanos têm direito à liberdade e igualdade, sem discriminação."},{"letter":"C","text":"Os direitos humanos são aplicáveis a cidadãos de países desenvolvidos."},{"letter":"D","text":"A dignidade humana é um valor relativo, sujeito às leis locais."}],"answer":"B","explanation":"Todos os seres humanos têm direito à liberdade e igualdade, sem discriminação — princípio da DUDH.","source":"Hashimoto, M. S. Formação Cidadã Contemporânea, Aula 6."}
  ]
};

const AULA03 = {
  "id": "aula03",
  "title": "Formação Inicial em Educação a Distância",
  "shortTitle": "Educação a Distância",
  "description": "EaD, autonomia, tutoria, ambientes virtuais e aprendizagem colaborativa.",
  "accent": "#2563eb",
  "icon": "💻",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {"id":"q3_1","number":1,"prompt":"A autoaprendizagem é um dos fundamentos da EaD, exigindo do aluno uma postura ativa diante do material didático e das orientações pedagógicas. O estudante é responsável por construir seu próprio conhecimento, organizando sua rotina de estudos, aproveitando os ambientes virtuais de aprendizagem para interagir, discutir, transformar o alvo de estudo e desenvolver competências essenciais para sua formação. Considerando o conceito de autoaprendizagem na EaD, analise as alternativas e assinale aquela que melhor representa essa prática, segundo o material de estudo.","alternatives":[{"letter":"A","text":"Aguardar que o professor oriente cada etapa do processo de aprendizagem, adotando postura receptiva e pouco participativa."},{"letter":"B","text":"Priorizar o estudo individual e independente, evitando a participação em discussões e atividades coletivas."},{"letter":"C","text":"Utilizar predominantemente materiais impressos, com pouca exploração dos ambientes virtuais."},{"letter":"D","text":"Planejar e conduzir a própria rotina de estudos, participar ativamente das atividades virtuais, interagir com colegas e buscar soluções de forma autônoma e responsável."}],"answer":"D","explanation":"A autoaprendizagem envolve planejar a própria rotina, participar ativamente, interagir e buscar soluções de forma autônoma.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 2."},
    {"id":"q3_2","number":2,"prompt":"As Tecnologias de Informação e Comunicação (TICs) desempenham papel central na transformação da Educação a Distância, promovendo inovação, multiplicidade de novos termos e práticas educacionais. O material destaca que as TICs ampliam as possibilidades de ensino, tornando a EaD dinâmica e adaptável às mudanças sociais e tecnológicas. Considerando o impacto das TICs na EaD, analise as alternativas e assinale aquela que melhor representa esse impacto.","alternatives":[{"letter":"A","text":"Tornam a EaD ultrapassada, dificultando a adaptação às novas demandas sociais."},{"letter":"B","text":"Geram inovação constante e multiplicidade de novos termos, tornando a EaD dinâmica e adaptável."},{"letter":"C","text":"Limitam o acesso à educação, restringindo as oportunidades de aprendizagem."},{"letter":"D","text":"Reduzem a autonomia dos estudantes, tornando o processo de aprendizagem mais dependente do professor."}],"answer":"B","explanation":"As TICs geram inovação constante e multiplicidade de novos termos, tornando a EaD dinâmica e adaptável.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 1."},
    {"id":"q3_3","number":3,"prompt":"A Educação a Distância tem se consolidado como uma modalidade que amplia o acesso ao conhecimento, promovendo a personalização do atendimento, a redução de custos e a formação de comunidades virtuais. Por meio da tecnologia padrão da internet, a EaD permite a transmissão em rede, a atualização constante e o compartilhamento imediato de informações. Considerando os benefícios da aprendizagem em EaD, analise as alternativas e assinale aquela que melhor representa essa modalidade.","alternatives":[{"letter":"A","text":"A EaD limita o acesso à informação ao horário das aulas síncronas, restringindo a autonomia dos alunos."},{"letter":"B","text":"A EaD promove a formação de comunidades virtuais, facilita o acesso contínuo à informação e contribui para a construção coletiva do conhecimento."},{"letter":"C","text":"A EaD é caracterizada pela ausência de interação entre os participantes, priorizando o estudo individual."},{"letter":"D","text":"A EaD mantém os custos e estrutura do ensino presencial, sendo apenas uma alternativa tecnológica sem vantagens adicionais."}],"answer":"B","explanation":"A EaD promove formação de comunidades virtuais, acesso contínuo à informação e construção coletiva do conhecimento.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 3."},
    {"id":"q3_4","number":4,"prompt":"A autonomia do estudante é uma das principais características da Educação a Distância, permitindo que cada indivíduo defina seu ritmo, local e forma de estudo. O material enfatiza que essa autonomia é fundamental para o sucesso do processo de aprendizagem. Com base nas discussões sobre autonomia na EaD, avalie as alternativas e identifique aquela que representa corretamente esse conceito.","alternatives":[{"letter":"A","text":"O estudante depende exclusivamente do professor para aprender, seguindo um cronograma rígido."},{"letter":"B","text":"O estudante escolhe o ritmo e o local de estudo conforme sua necessidade, podendo adaptar o processo de aprendizagem à sua realidade."},{"letter":"C","text":"O ensino ocorre apenas em ambientes escolares tradicionais, limitando as possibilidades de aprendizagem."},{"letter":"D","text":"O material didático é dispensável no processo de aprendizagem, sendo o estudante responsável por buscar todas as informações."}],"answer":"B","explanation":"O estudante escolhe o ritmo e o local de estudo conforme sua necessidade na EaD.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 1."},
    {"id":"q3_5","number":5,"prompt":"Na Educação a Distância, o papel do professor tutor vai além da simples transmissão de conteúdos. Ele atua como mediador pedagógico, promovendo acolhimento, escuta ativa, orientação acadêmica e estímulo à autonomia dos estudantes. Considerando o papel do professor tutor na EaD, analise as alternativas e assinale aquela que melhor representa sua atuação.","alternatives":[{"letter":"A","text":"Focar exclusivamente na avaliação das atividades dos alunos, garantindo o cumprimento de prazos."},{"letter":"B","text":"Adotar postura neutra e distante, evitando envolvimento afetivo com os alunos."},{"letter":"C","text":"Atuar como facilitador da aprendizagem, promovendo interação, orientação acadêmica, escuta ativa e apoio contínuo."},{"letter":"D","text":"Limitar sua atuação à tutoria presencial nos polos, sem participar das atividades virtuais."}],"answer":"C","explanation":"O tutor atua como facilitador, promovendo interação, orientação, escuta ativa e apoio contínuo.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 3."},
    {"id":"q3_6","number":6,"prompt":"A universidade, ao atuar na formação superior por meio da Educação a Distância (EaD), assume responsabilidades que vão além da simples transmissão de conteúdos. Seu papel envolve a promoção de uma educação de qualidade, capaz de contribuir para o desenvolvimento ético e profissional dos estudantes. Considerando o papel fundamental da universidade na oferta do ensino superior na modalidade a distância, identifique aquela que melhor representa uma de suas principais funções no contexto da EaD.","alternatives":[{"letter":"A","text":"Focar exclusivamente na transmissão de conteúdos teóricos, sem considerar a experiência dos alunos."},{"letter":"B","text":"Prover suporte teórico e pedagógico, promovendo a interatividade e a colaboração entre alunos e professores."},{"letter":"C","text":"Limitar o acesso dos alunos às tecnologias digitais, restringindo o ambiente de aprendizagem."},{"letter":"D","text":"Priorizar atividades presenciais, desconsiderando os benefícios da EaD."}],"answer":"B","explanation":"A universidade deve prover suporte teórico e pedagógico, promovendo interatividade e colaboração.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 2."},
    {"id":"q3_7","number":7,"prompt":"A trajetória da Educação a Distância (EaD) é marcada por diferentes momentos históricos, nos quais a busca por ampliar o acesso ao ensino foi impulsionada por transformações sociais, culturais e tecnológicas. Considerando o processo de desenvolvimento da EaD, identifique qual evento é reconhecido como o marco inicial dessa modalidade de ensino no contexto mundial.","alternatives":[{"letter":"A","text":"O surgimento de cursos transmitidos por rádio, que permitiram a difusão do conhecimento para regiões remotas."},{"letter":"B","text":"A oferta de aulas por correspondência por Caleb Philips em 1728, que enviava lições semanais aos alunos inscritos."},{"letter":"C","text":"A fundação do Instituto Universal Brasileiro, que democratizou o acesso à educação no Brasil."},{"letter":"D","text":"A criação das universidades virtuais, que possibilitaram o ensino online em larga escala."}],"answer":"B","explanation":"O marco inicial da EaD foi a oferta de aulas por correspondência por Caleb Philips em 1728.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 1."},
    {"id":"q3_8","number":8,"prompt":"O Ambiente Virtual de Aprendizagem (AVA) é um espaço estruturado para comportar a aprendizagem colaborativa, permitindo ao aluno equilibrar suas necessidades e habilidades pessoais por meio de atividades em grupo e do fortalecimento dos aspectos interativos. Considerando as características do AVA, identifique aquela que melhor representa sua função.","alternatives":[{"letter":"A","text":"Restringir o acesso dos estudantes aos conteúdos e espaços interativos, priorizando o controle do uso do ambiente."},{"letter":"B","text":"Disponibilizar diferentes recursos, como videoaulas, fóruns, chats, biblioteca virtual e calendário acadêmico, promovendo a organização dos estudos e a colaboração."},{"letter":"C","text":"Priorizar atividades presenciais como principal meio de interação, utilizando o AVA apenas como repositório de materiais."},{"letter":"D","text":"Estabelecer canais de comunicação limitados entre alunos e professores, mantendo a interação apenas para fins administrativos."}],"answer":"B","explanation":"O AVA disponibiliza recursos como videoaulas, fóruns, chats e biblioteca virtual, promovendo organização e colaboração.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 2."},
    {"id":"q3_9","number":9,"prompt":"A Educação a Distância desempenhou papel fundamental na democratização do acesso à educação no Brasil, especialmente em regiões menos favorecidas. O material destaca instituições que foram referência internacional, contribuindo para a expansão da EaD. Com base nas informações do material de estudo, identifique qual instituição brasileira foi reconhecida mundialmente por sua atuação na democratização da EaD.","alternatives":[{"letter":"A","text":"Instituto Universal Brasileiro (IUB), que se destacou como referência internacional na oferta de cursos a distância."},{"letter":"B","text":"Rádio Sociedade do Rio de Janeiro, que contribuiu para a difusão do conhecimento por programas educativos."},{"letter":"C","text":"Associação Brasileira de Teleducação, que promoveu debates sobre o ensino a distância."},{"letter":"D","text":"Ministério da Educação (MEC), que regulamentou a EaD no Brasil."}],"answer":"A","explanation":"O Instituto Universal Brasileiro (IUB) foi referência internacional na democratização da EaD.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 1."},
    {"id":"q3_10","number":10,"prompt":"Na era do conhecimento, as instituições de ensino assumem papel fundamental na produção, manipulação e compartilhamento do saber, promovendo inovação, trabalho colaborativo e desenvolvimento de uma inteligência coletiva. Com base nas informações do material de estudo, assinale a alternativa que indica uma das principais funções das instituições de ensino na sociedade do conhecimento.","alternatives":[{"letter":"A","text":"Restringir o acesso ao conhecimento, limitando as oportunidades de aprendizagem."},{"letter":"B","text":"Produzir e compartilhar conhecimento, promovendo inovação e desenvolvimento social."},{"letter":"C","text":"Focar apenas em métodos tradicionais de ensino, desconsiderando as novas demandas sociais."},{"letter":"D","text":"Priorizar a memorização em detrimento da criatividade, limitando o potencial dos estudantes."}],"answer":"B","explanation":"Instituições de ensino produzem e compartilham conhecimento, promovendo inovação e desenvolvimento social.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 1."},
    {"id":"q3_11","number":11,"prompt":"Com a introdução de sistemas de comunicação mediada por computador, o ambiente da sala de aula virtual se diferencia do presencial, exigindo do professor novas habilidades e posturas. O docente deixa de ser apenas expositor de conteúdos e passa a atuar como orientador e facilitador da aprendizagem. Considerando os desafios enfrentados pelo professor na EaD, assinale a alternativa que melhor representa essa transformação.","alternatives":[{"letter":"A","text":"Manter-se exclusivamente como expositor oral, sem promover a autonomia dos alunos."},{"letter":"B","text":"Adotar uma postura de orientador e facilitador da aprendizagem, valorizando a experiência dos alunos."},{"letter":"C","text":"Restringir a comunicação apenas ao ambiente presencial, ignorando as ferramentas digitais."},{"letter":"D","text":"Focar apenas na avaliação tradicional, sem considerar o desenvolvimento de competências."}],"answer":"B","explanation":"O professor na EaD deve ser orientador e facilitador, valorizando a experiência dos alunos.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 2."},
    {"id":"q3_12","number":12,"prompt":"A integração entre ensino presencial e Educação a Distância tornou-se uma prática comum, especialmente diante de desafios como a pandemia, ampliando as possibilidades de aprendizagem e promovendo novas formas de organização do trabalho educacional. Considerando as discussões sobre a convergência entre ensino presencial e EaD, assinale a alternativa que melhor representa essa tendência.","alternatives":[{"letter":"A","text":"A EaD se tornará ultrapassada com o retorno do presencial."},{"letter":"B","text":"Tornar-se uma prática corriqueira em todos os sistemas educacionais, promovendo a integração de diferentes modalidades de ensino."},{"letter":"C","text":"Extinção do ensino presencial, com predominância exclusiva da EaD."},{"letter":"D","text":"Restrição da EaD a cursos técnicos, limitando sua abrangência."}],"answer":"B","explanation":"A convergência entre presencial e EaD tende a se tornar prática corriqueira nos sistemas educacionais.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 1."},
    {"id":"q3_13","number":13,"prompt":"A autonomia é considerada um dos pilares da Educação a Distância, permitindo ao aluno tomar decisões sobre seu processo de aprendizagem, organizar sua rotina de estudos e desenvolver habilidades para utilizar os recursos tecnológicos disponíveis. Considerando o conceito de autonomia na EaD, identifique a alternativa que melhor representa essa característica.","alternatives":[{"letter":"A","text":"Apoiar-se continuamente nas orientações do professor, com pouca iniciativa para ajustar o próprio ritmo."},{"letter":"B","text":"Gerenciar o próprio processo de aprendizagem, exercendo autodisciplina, senso de responsabilidade e capacidade de adaptação, assumindo papel ativo e protagonista."},{"letter":"C","text":"Cumprir as atividades conforme o cronograma, sem refletir sobre estratégias pessoais de estudo."},{"letter":"D","text":"Manter o foco apenas em leituras obrigatórias e tarefas avaliativas."}],"answer":"B","explanation":"Autonomia envolve gerenciar o próprio processo de aprendizagem com autodisciplina e protagonismo.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 2."},
    {"id":"q3_14","number":14,"prompt":"A EaD exige do estudante uma postura ativa e responsável diante do processo de aprendizagem. A flexibilidade proporcionada por essa modalidade implica o desenvolvimento de competências como organização do tempo, disciplina, autonomia e participação colaborativa. Considerando as responsabilidades do aluno na EaD, assinale a alternativa que melhor representa uma conduta adequada.","alternatives":[{"letter":"A","text":"Estabelecer metas pessoais, organizar o tempo de estudo, interagir com os colegas e acessar frequentemente o ambiente virtual de aprendizagem."},{"letter":"B","text":"Aguardar orientações detalhadas do professor para iniciar os estudos, evitando decisões autônomas."},{"letter":"C","text":"Priorizar apenas as atividades avaliativas, deixando em segundo plano a leitura dos textos e a participação em fóruns."},{"letter":"D","text":"Concentrar os estudos em um único dia da semana, aproveitando a flexibilidade para realizar tudo de forma intensiva."}],"answer":"A","explanation":"Estabelecer metas, organizar tempo, interagir e acessar frequentemente o AVA são condutas adequadas.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 3."},
    {"id":"q3_15","number":15,"prompt":"O estudante da EaD precisa desenvolver competências que vão além do domínio de conteúdos. A modalidade exige habilidades cognitivas, afetivas e organizacionais, como a capacidade de compreender e aplicar conhecimentos, manter-se motivado, lidar com críticas, administrar o tempo e criar um ambiente de estudo adequado. Considerando as competências exigidas do estudante na EaD, assinale a alternativa que melhor representa uma conduta adequada.","alternatives":[{"letter":"A","text":"Concentrar os estudos apenas nos momentos de avaliação, priorizando a memorização rápida dos conteúdos."},{"letter":"B","text":"Evitar solicitar ajuda para não demonstrar insegurança, mantendo postura independente."},{"letter":"C","text":"Focar exclusivamente nas atividades individuais, evitando interações que comprometam o ritmo pessoal."},{"letter":"D","text":"Desenvolver habilidades de leitura, escrita, organização do tempo, administração do estresse e interação com colegas e tutores."}],"answer":"D","explanation":"Desenvolver leitura, escrita, organização do tempo e interação são competências essenciais na EaD.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 3."},
    {"id":"q3_16","number":16,"prompt":"A capacitação docente em tecnologias digitais é um processo contínuo, que envolve atualização, treinamento e superação de desafios como acesso à internet, adaptação a novas plataformas e resistência a mudanças. Com base nos desafios da capacitação docente em tecnologias, identifique a alternativa que melhor representa uma atitude adequada do professor:","alternatives":[{"letter":"A","text":"Resistir às mudanças, mantendo práticas convencionais e evitando o uso de novas ferramentas."},{"letter":"B","text":"Buscar formação continuada, participar de treinamentos e adaptar-se às novas demandas do ensino remoto."},{"letter":"C","text":"Depender exclusivamente de plataformas gratuitas, sem buscar alternativas para melhorar o ensino."},{"letter":"D","text":"Ignorar as dificuldades dos alunos, focando apenas na transmissão de conteúdos."}],"answer":"B","explanation":"O professor deve buscar formação continuada, participar de treinamentos e adaptar-se às novas demandas.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 5."},
    {"id":"q3_17","number":17,"prompt":"Durante a pandemia, pesquisas realizadas pela ABMES em parceria com a Educa Insights revelaram que os estudantes passaram a aceitar o ensino remoto como uma alternativa viável. A comodidade de estudar em casa, a economia de tempo e recursos, e a possibilidade de conciliar trabalho e estudo foram fatores que contribuíram para essa mudança de percepção. Considerando a adesão dos estudantes ao ensino remoto, assinale a alternativa que melhor representa essa mudança.","alternatives":[{"letter":"A","text":"Os estudantes rejeitaram o ensino remoto por completo, preferindo aguardar o retorno das aulas presenciais."},{"letter":"B","text":"Os estudantes passaram a valorizar o ensino remoto, destacando benefícios como comodidade, economia e interação."},{"letter":"C","text":"Os estudantes abandonaram os estudos por falta de acesso à tecnologia e ausência de alternativas educacionais."},{"letter":"D","text":"Os estudantes consideraram o ensino remoto inviável, principalmente por falta de interação com os professores."}],"answer":"B","explanation":"Estudantes passaram a valorizar o ensino remoto destacando comodidade, economia e interação.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 6."},
    {"id":"q3_18","number":18,"prompt":"A pandemia de Covid-19 acelerou a adoção da EaD, exigindo adaptação de professores e alunos, superação de desigualdades e uso intensivo de tecnologias digitais. Considerando os desafios enfrentados pela EaD durante a pandemia, assinale a alternativa que melhor representa uma consequência positiva desse processo:","alternatives":[{"letter":"A","text":"Rejeição total do ensino remoto por parte dos estudantes."},{"letter":"B","text":"Ampliação do acesso à educação, comodidade e interação entre professores e alunos."},{"letter":"C","text":"Exclusão de alunos sem acesso à internet, sem alternativas educacionais."},{"letter":"D","text":"Retorno imediato ao ensino presencial, sem considerar os avanços da EaD."}],"answer":"B","explanation":"A EaD ampliou o acesso à educação, proporcionando comodidade e interação durante a pandemia.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 6."},
    {"id":"q3_19","number":19,"prompt":"Em março de 2020, a pandemia de Covid-19 provocou o fechamento de escolas em escala global, afetando quase um bilhão de crianças e jovens. Diante desse cenário, os Ministérios da Educação em diversos países buscaram alternativas para manter a educação ativa. Considerando o impacto da pandemia na educação mundial, assinale a alternativa que melhor representa esse contexto.","alternatives":[{"letter":"A","text":"A pandemia teve impacto apenas em países em desenvolvimento, sem afetar o sistema educacional global."},{"letter":"B","text":"A pandemia provocou o fechamento de escolas em todo o mundo, levando à adoção da EaD como alternativa educacional."},{"letter":"C","text":"A pandemia não alterou os métodos de ensino, pois as escolas permaneceram abertas com medidas de segurança."},{"letter":"D","text":"A pandemia eliminou a necessidade de políticas educacionais, já que os alunos passaram a estudar de forma autônoma."}],"answer":"B","explanation":"A pandemia fechou escolas no mundo todo, levando à adoção da EaD como alternativa educacional.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 6."},
    {"id":"q3_20","number":20,"prompt":"A formação docente para atuar na EaD exige domínio de conteúdos, habilidades digitais e capacidade de mediar o processo de aprendizagem com o uso de tecnologias. O professor deve ser capaz de criar ambientes acolhedores, promover a interação e adaptar metodologias às necessidades dos alunos. Considerando os desafios da formação docente para a EaD, assinale a alternativa que melhor representa uma competência essencial do professor nesse contexto:","alternatives":[{"letter":"A","text":"Priorizar apenas métodos tradicionais, sem utilizar recursos digitais."},{"letter":"B","text":"Dominar conteúdos, habilidades digitais e promover ambientes interativos e acolhedores."},{"letter":"C","text":"Limitar o uso de tecnologias à transmissão de conteúdos prontos."},{"letter":"D","text":"Focar exclusivamente na avaliação técnica dos alunos, sem considerar aspectos afetivos."}],"answer":"B","explanation":"O professor deve dominar conteúdos, habilidades digitais e promover ambientes interativos e acolhedores.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 5."},
    {"id":"q3_21","number":21,"prompt":"A educação a distância tem se consolidado como tendência, com previsão de permanência do ensino híbrido, uso de tecnologias, novas formas de avaliação, incentivo à autonomia dos alunos e educação humanizada. Com base nas tendências futuras da EaD, identifique a alternativa que melhor representa uma dessas tendências:","alternatives":[{"letter":"A","text":"Restrição da EaD a cursos técnicos, sem abrangência em outras áreas."},{"letter":"B","text":"Extinção do ensino presencial, com predominância exclusiva da EaD."},{"letter":"C","text":"Desvalorização da tecnologia, priorizando métodos tradicionais."},{"letter":"D","text":"Incentivo à autonomia dos alunos, personalização da aprendizagem e uso intensivo de tecnologias."}],"answer":"D","explanation":"O futuro da EaD envolve incentivo à autonomia, personalização da aprendizagem e uso intensivo de tecnologias.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 6."},
    {"id":"q3_22","number":22,"prompt":"Além dos prejuízos acadêmicos, a pandemia afetou profundamente a saúde mental dos estudantes. O medo do contágio, as perdas familiares, o desemprego e a incerteza sobre o futuro acadêmico geraram altos níveis de ansiedade, estresse e tristeza. Considerando os efeitos da pandemia na saúde mental dos estudantes, assinale a alternativa que melhor representa uma ação recomendada pela OMS:","alternatives":[{"letter":"A","text":"Ignorar os impactos emocionais da pandemia, focando exclusivamente na recuperação dos conteúdos escolares."},{"letter":"B","text":"Substituir o acompanhamento psicológico por atividades físicas."},{"letter":"C","text":"Reduzir o tempo de aula para evitar sobrecarga, sem ações específicas para saúde mental."},{"letter":"D","text":"Implementar programas de promoção de competências socioemocionais e estratégias de remediação para lidar com os traumas da pandemia."}],"answer":"D","explanation":"Programas de promoção de competências socioemocionais e estratégias de remediação são recomendados pela OMS.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 6."},
    {"id":"q3_23","number":23,"prompt":"As tecnologias digitais têm desempenhado papel fundamental na construção de uma teoria integrada para a Educação a Distância. Embora existam críticas quanto à superficialidade de algumas propostas tecnológicas, reconhece-se que, quando bem utilizadas, essas ferramentas podem potencializar a autonomia dos estudantes. Considerando as contribuições das tecnologias para uma teoria integrada na EaD, assinale a alternativa que apresenta corretamente essa relação:","alternatives":[{"letter":"A","text":"As tecnologias digitais devem ser evitadas na EaD, pois dificultam o desenvolvimento humano."},{"letter":"B","text":"As tecnologias digitais devem ser utilizadas apenas como suporte técnico, sem interferência na mediação pedagógica."},{"letter":"C","text":"As tecnologias digitais devem substituir completamente o papel do professor."},{"letter":"D","text":"As tecnologias digitais, quando bem aplicadas, favorecem o acesso à informação, a personalização do ritmo de aprendizagem e a construção autônoma do conhecimento."}],"answer":"D","explanation":"Tecnologias bem aplicadas favorecem acesso à informação, personalização do ritmo e construção autônoma do conhecimento.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 4."},
    {"id":"q3_24","number":24,"prompt":"A pandemia impulsionou a busca por cursos on-line por diversos públicos além dos estudantes formais. Pessoas interessadas em melhorar sua formação profissional, iniciar novos negócios ou explorar áreas de interesse pessoal passaram a utilizar a EaD como ferramenta de aprendizado. Considerando a expansão da EaD durante a pandemia, assinale a alternativa que melhor representa esse fenômeno:","alternatives":[{"letter":"A","text":"A EaD passou a atender diferentes perfis de alunos, incluindo profissionais, empreendedores e pessoas interessadas em áreas de afinidade."},{"letter":"B","text":"A EaD foi restrita a cursos técnicos, sem oferta de conteúdos voltados ao autoconhecimento ou à criatividade."},{"letter":"C","text":"A EaD perdeu relevância durante a pandemia, sendo substituída por métodos presenciais adaptados."},{"letter":"D","text":"A EaD foi utilizada exclusivamente por estudantes universitários, sem impacto em outros públicos."}],"answer":"A","explanation":"A EaD passou a atender diferentes perfis de alunos durante a pandemia, incluindo profissionais e empreendedores.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 6."},
    {"id":"q3_25","number":25,"prompt":"Os ambientes virtuais de aprendizagem (AVAs) oferecem múltiplos recursos que favorecem a interação, a autonomia e o desenvolvimento de competências nos estudantes. A utilização de fóruns, chats, videoconferências, jogos digitais e outras ferramentas permite que o aluno participe ativamente do processo educativo. Considerando o uso de recursos tecnológicos nos ambientes de aprendizagem da EaD, assinale a alternativa que melhor representa essa prática:","alternatives":[{"letter":"A","text":"O uso de tecnologias deve ser restrito a atividades avaliativas, evitando distrações e interações."},{"letter":"B","text":"A mediação tecnológica deve ser substituída por métodos tradicionais para maior controle do professor."},{"letter":"C","text":"O ambiente virtual deve ser utilizado apenas para disponibilizar conteúdos, sem necessidade de interação."},{"letter":"D","text":"Os recursos tecnológicos devem ser utilizados para promover a interação, o prazer de aprender e o desenvolvimento de competências associadas à realidade dos alunos."}],"answer":"D","explanation":"Recursos tecnológicos devem promover interação, prazer de aprender e desenvolvimento de competências.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 5."},
    {"id":"q3_26","number":26,"prompt":"A prática pedagógica na EaD exige do aluno disciplina, autonomia e envolvimento contínuo com o ambiente virtual de aprendizagem (AVA). Para que a aprendizagem ocorra de forma significativa, é necessário que o estudante organize sua rotina, participe das atividades propostas e interaja com professores e colegas. Considerando a prática pedagógica em EaD, assinale a alternativa que melhor representa uma conduta adequada do estudante:","alternatives":[{"letter":"A","text":"Acessar o AVA apenas em dias de avaliação, priorizando o estudo individual e evitando interações."},{"letter":"B","text":"Utilizar o AVA como espaço de socialização, compartilhando ideias, dúvidas e materiais, e desenvolvendo habilidades cognitivas e afetivas."},{"letter":"C","text":"Ignorar os recursos interativos do AVA, focando apenas na leitura dos textos e atividades obrigatórias."},{"letter":"D","text":"Depender exclusivamente do tutor para organizar sua rotina de estudos e esclarecer dúvidas."}],"answer":"B","explanation":"Usar o AVA para compartilhar ideias, dúvidas e desenvolver habilidades cognitivas e afetivas é conduta adequada.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 4."},
    {"id":"q3_27","number":27,"prompt":"Na Educação a Distância, o conectivismo oferece uma nova perspectiva sobre o processo de aprendizagem, ao considerar que o conhecimento circula em redes e que o aprendizado ocorre por meio da interação com múltiplas fontes. Considerando as aplicações práticas do conectivismo na EaD, assinale a alternativa que melhor representa essa abordagem:","alternatives":[{"letter":"A","text":"O aluno deve desenvolver a capacidade de identificar conexões entre ideias, atualizar conhecimentos e aprender com redes de colaboração."},{"letter":"B","text":"O aluno deve seguir um plano de estudos fixo, com foco em conteúdos estáticos e sem necessidade de atualização."},{"letter":"C","text":"O aluno deve evitar o uso de redes sociais e ambientes digitais."},{"letter":"D","text":"O aluno deve depender exclusivamente do professor para acessar e interpretar o conhecimento."}],"answer":"A","explanation":"O conectivismo valoriza identificar conexões, atualizar conhecimentos e aprender com redes de colaboração.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 4."},
    {"id":"q3_28","number":28,"prompt":"A pedagogia na Educação a Distância exige a construção de modelos que articulem teoria, prática e tecnologia, respeitando o perfil do aluno contemporâneo. A proposta pedagógica deve considerar aspectos organizacionais, conteúdos, atividades e definição do ambiente virtual de aprendizagem. Considerando os elementos pedagógicos da EaD, assinale a alternativa que melhor representa essa abordagem:","alternatives":[{"letter":"A","text":"A pedagogia na EaD deve priorizar a reprodução de conteúdos prontos, sem considerar o perfil do aluno."},{"letter":"B","text":"A pedagogia na EaD deve ser construída com base na Arquitetura Pedagógica, integrando aspectos organizacionais, conteúdos, atividades e tecnologias."},{"letter":"C","text":"A pedagogia na EaD deve excluir o uso de tecnologias digitais, mantendo os métodos tradicionais."},{"letter":"D","text":"A pedagogia na EaD deve limitar-se à aplicação de avaliações padronizadas, sem considerar a interação."}],"answer":"B","explanation":"A pedagogia na EaD deve ser baseada na Arquitetura Pedagógica integrando aspectos organizacionais, conteúdos, atividades e tecnologias.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 5."},
    {"id":"q3_29","number":29,"prompt":"Na Educação a Distância mediada por tecnologias digitais, o papel do professor vai além da simples transmissão de conteúdos. A pedagogia humanizadora, nesse contexto, valoriza a afetividade, a empatia e a criação de ambientes virtuais que favoreçam a aprendizagem significativa. Considerando o papel do professor na EaD com uso de tecnologias digitais, assinale a alternativa que melhor representa essa atuação:","alternatives":[{"letter":"A","text":"O professor deve manter uma postura neutra e distante, priorizando a objetividade técnica."},{"letter":"B","text":"O professor deve atuar como tutor e mediador, promovendo a interação, o acolhimento e a aprendizagem significativa por meio das tecnologias digitais."},{"letter":"C","text":"O professor deve limitar sua atuação à aplicação de conteúdos prontos, sem interferência no processo de aprendizagem."},{"letter":"D","text":"O professor deve delegar todas as funções pedagógicas às ferramentas tecnológicas."}],"answer":"B","explanation":"O professor deve atuar como tutor e mediador promovendo interação, acolhimento e aprendizagem significativa.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 5."},
    {"id":"q3_30","number":30,"prompt":"As transformações sociais e tecnológicas da contemporaneidade provocaram mudanças significativas nas teorias educacionais. A Educação a Distância, ao incorporar mídias digitais e ambientes virtuais, passou a demandar novas concepções sobre o processo de ensino e aprendizagem. Considerando as teorias contemporâneas da aprendizagem e sua relação com a EaD, assinale a alternativa que melhor representa essa abordagem:","alternatives":[{"letter":"A","text":"A EaD fundamenta-se exclusivamente em métodos tradicionais de ensino, com foco na memorização e transmissão de conteúdos prontos."},{"letter":"B","text":"A EaD utiliza tecnologias digitais apenas como suporte técnico, sem influência nas concepções teóricas da aprendizagem."},{"letter":"C","text":"A EaD favorece a aprendizagem situada e o construtivismo social, promovendo a participação em comunidades de prática e a construção colaborativa do saber."},{"letter":"D","text":"A EaD limita-se à aplicação do behaviorismo, com foco em estímulo-resposta e controle do comportamento do aluno."}],"answer":"C","explanation":"A EaD favorece a aprendizagem situada e o construtivismo social com participação em comunidades de prática.","source":"FARIAS, A. A. Formação Inicial em Educação a Distância. Aula 4."}
  ]
};

const AULA04 = {
  "id": "aula04",
  "title": "Segurança de Redes e Comunicações",
  "shortTitle": "Redes e Comunicações",
  "description": "Modelo OSI, TCP/IP, firewalls, VPNs, criptografia e segurança de redes.",
  "accent": "#059669",
  "icon": "🔐",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {"id":"q4_1","number":1,"prompt":"O padrão WEP está baseado em um processo de criptografia baseado em chaves simétricas, ou seja, a mesma chave deve ser configurada no terminal e no AP. O processo também é conhecido como PSK (Pre-shared Key). Conforme os estudos realizados na disciplina, como também é conhecido o processo em chaves simétricas?","alternatives":[{"letter":"A","text":"PSK (Pre-shared Key)."},{"letter":"B","text":"Eavesdropping."},{"letter":"C","text":"Ransomware."},{"letter":"D","text":"Spyware."}],"answer":"A","explanation":"O padrão WEP usa chaves simétricas, também conhecido como PSK (Pre-shared Key).","source":"Material de apoio – aula 03 – Prof. Luis José Rohling, p. 07."},
    {"id":"q4_2","number":2,"prompt":"Muitas vezes, quando você está navegando na internet, está acessando vários conteúdos (sites) simultaneamente, abrindo várias abas em seu navegador (browser) e para que isso seja possível, cada nova aba (camada) que você está abrindo necessita estabelecer uma nova comunicação com um site diferente. Com base no texto acima e nos estudos realizados na disciplina, analise as alternativas abaixo e assinale a correta, que indica qual é a camada que necessita estabelecer uma nova comunicação com um site diferente:","alternatives":[{"letter":"A","text":"Camada de sessão."},{"letter":"B","text":"Camada de apresentação."},{"letter":"C","text":"Camada de encapsulamento."},{"letter":"D","text":"Camada de transporte."}],"answer":"A","explanation":"A camada de sessão é responsável por abrir novas conexões com diferentes destinos.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 08."},
    {"id":"q4_3","number":3,"prompt":"Para implementar os mecanismos de segurança em redes de dados, é necessário conhecer o funcionamento destas redes e todos os protocolos envolvidos no processo de comunicação. Para identificar a operação de cada um destes protocolos e suas funções neste processo, existem modelos de referência publicados por organizações de normatização. Conforme os estudos realizados na disciplina, na área de redes existem diversos institutos internacionais que publicam normas pertinentes à segurança em redes de dados. Analise os itens: I. ISO, II. IETF, III. IEEE, IV. TIA, V. EPEA. Em relação aos principais institutos que publicam normas pertinentes à segurança em redes de dados, assinale a alternativa correta:","alternatives":[{"letter":"A","text":"Apenas os itens I e V estão corretos."},{"letter":"B","text":"Apenas o item V está correto."},{"letter":"C","text":"Os itens I, II, III e IV estão corretos."},{"letter":"D","text":"Apenas os itens I, II e V estão corretos."}],"answer":"C","explanation":"Os principais institutos são ISO, IETF, IEEE e TIA.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 02."},
    {"id":"q4_4","number":4,"prompt":"Um dos principais modelos utilizados nas redes de dados foi definido pela ISO (International Organization for Standardization) em 1970, e descreve um modelo em sete camadas. Talvez você já tenha tido a experiência de não conseguir abrir um determinado arquivo ou conteúdo, recebendo a mensagem de que ele não foi localizado. Isso acontece quando o método utilizado para codificar os dados pelo transmissor não é conhecido pelo receptor. Com base nos estudos realizados na disciplina e conforme o texto acima, em qual camada o processo utilizado para codificar os dados pelo transmissor não é conhecido pelo receptor?","alternatives":[{"letter":"A","text":"Camada de apresentação."},{"letter":"B","text":"Camada de encapsulamento."},{"letter":"C","text":"Camada de domínio.com.br."},{"letter":"D","text":"Camada de enlace de dados."}],"answer":"A","explanation":"O processo de codificação e identificação do CODEC acontece na camada de apresentação.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 08."},
    {"id":"q4_5","number":5,"prompt":"A ISO é uma organização internacional que publica normas para os mais diversos segmentos, não se restringindo à área de redes e tecnologia da informação. Com base nos estudos realizados na disciplina, qual é o modelo publicado pela ISO, utilizado por todos os profissionais da área de redes como referência para os diversos protocolos e tecnologias empregados nas redes de dados?","alternatives":[{"letter":"A","text":"Modelo OSI."},{"letter":"B","text":"Modelo CMM."},{"letter":"C","text":"Modelo SGA."},{"letter":"D","text":"Modelo CMMI."}],"answer":"A","explanation":"A ISO publicou o Modelo OSI, referência para protocolos e tecnologias de redes.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 02."},
    {"id":"q4_6","number":6,"prompt":"Graças à criação dos protocolos TPI/IP, a disseminação das redes foi possível, uma vez que são esses protocolos que permitem a conexão entre diferentes dispositivos sem o uso de sistemas e equipamentos especiais. Os diversos tipos de rede possuem uma característica especial, além de se diferenciarem pela topologia, meios físicos, tecnologia de suporte e ambiente ao qual são destinados. De acordo com os estudos realizados, assinale a alternativa que indica a redes em que a segurança é gerenciada pelas operadoras dos serviços de comunicação de longa distância:","alternatives":[{"letter":"A","text":"VPN e RAN."},{"letter":"B","text":"WAN e MAN."},{"letter":"C","text":"LAN e VPN."},{"letter":"D","text":"WAN e WIFI."}],"answer":"B","explanation":"Em redes WAN e MAN, a segurança é gerenciada pelas operadoras de comunicação.","source":"Material de apoio – aula 01 – Prof. Luis José Rohling, p. 09."},
    {"id":"q4_7","number":7,"prompt":"Os dispositivos intermediários são aqueles que estão interligados, formando efetivamente a rede que permitirá a comunicação entre os dispositivos finais. Os dispositivos intermediários mais utilizados são os roteadores e os switches. Conforme o texto acima, assinale a alternativa que indica o dispositivo que permite a conexão dos dispositivos finais por meio de redes sem fio, tais como o WiFi:","alternatives":[{"letter":"A","text":"Access Points."},{"letter":"B","text":"Switche Level 5."},{"letter":"C","text":"HUB."},{"letter":"D","text":"Antena Digital."}],"answer":"A","explanation":"Access Points (APs) permitem a conexão de dispositivos finais por redes sem fio.","source":"Material de apoio – aula 01 – Prof. Luis José Rohling, p. 07."},
    {"id":"q4_8","number":8,"prompt":"Quando você está acessando um servidor web, para verificar se está sendo utilizada a criptografia dos dados, com o uso do protocolo HTTPS, basta verificar na tela do browser. Conforme os estudos realizados na disciplina e de acordo com o texto acima, qual ícone devemos verificar no browser, para saber se está sendo utilizada a criptografia dos dados?","alternatives":[{"letter":"A","text":"Cadeado."},{"letter":"B","text":"Lupa."},{"letter":"C","text":"Chave."},{"letter":"D","text":"Triângulo."}],"answer":"A","explanation":"O ícone de cadeado no browser indica que a conexão é segura (HTTPS).","source":"Material de apoio – aula 03 – Prof. Luis José Rohling, p. 14."},
    {"id":"q4_9","number":9,"prompt":"Na camada de rede é que temos o processo de encaminhamento do tráfego entre os terminas. Assim como no processo de comunicação através da rede telefônica, cada terminal deve ter o seu identificador único e exclusivo, para que possa ser localizado dentro da rede. Com base nos estudos realizados na disciplina e de acordo com o texto acima, responda: qual é o protocolo utilizado para a comunicação entre os dispositivos na internet?","alternatives":[{"letter":"A","text":"Protocolo Internet (IP – Internet Protocol)."},{"letter":"B","text":"Protocolo de envio de e-mails."},{"letter":"C","text":"Protocolo de servidor."},{"letter":"D","text":"Protocolo VPM."}],"answer":"A","explanation":"O Protocolo Internet (IP) é utilizado para comunicação entre dispositivos na internet.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 11."},
    {"id":"q4_10","number":10,"prompt":"Como podemos ter diversas sessões abertas simultaneamente, a camada tem que identificar cada uma delas de modo que quando as respostas retornarem, ela possa entregar os dados para a aplicação correta. Conforme os estudos realizados na disciplina, como é feita essa identificação para que possa entregar os dados para a aplicação correta?","alternatives":[{"letter":"A","text":"Essa identificação é feita com o uso do chamado número de porta."},{"letter":"B","text":"Essa identificação é feita com o uso da UDR."},{"letter":"C","text":"Essa identificação é feita com o uso do chamado hard disk."},{"letter":"D","text":"Essa identificação é feita com o uso do chamado Processadores AND."}],"answer":"A","explanation":"A identificação das sessões na camada de transporte é feita pelo número de porta.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 09."},
    {"id":"q4_11","number":11,"prompt":"O que permite a utilização de diversos serviços simultaneamente é a estrutura em camadas, que define como cada protocolo, executando suas tarefas específicas, faça a integração com os protocolos das camadas adjacentes, garantido o processo de comunicação. Então, quando abrimos um navegador para acessar uma página web, estamos utilizando o protocolo HTTP. Conforme os estudos realizados na disciplina, qual camada utilizamos quando abrimos um navegador para acessar uma página web utilizando o protocolo HTTP?","alternatives":[{"letter":"A","text":"Camada de aplicação."},{"letter":"B","text":"Camada de apresentação."},{"letter":"C","text":"Camada de inicial."},{"letter":"D","text":"Camada TCP."}],"answer":"A","explanation":"O protocolo HTTP opera na camada de aplicação.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 15."},
    {"id":"q4_12","number":12,"prompt":"A rede local (LAN) é uma rede com uma administração local. Assim, os mecanismos de segurança a serem implementados serão de responsabilidade do administrador da rede local. Sempre que você está acessando a internet, provavelmente estará conectado a uma LAN, seja no ambiente corporativo, residencial ou em um ambiente público. De acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica a rede que é mais susceptível aos ataques e à captura de dados:","alternatives":[{"letter":"A","text":"Rede WiFi."},{"letter":"B","text":"Rede VPN."},{"letter":"C","text":"Rede LAN."},{"letter":"D","text":"Rede MAN."}],"answer":"A","explanation":"A rede WiFi é mais susceptível a ataques e captura de dados.","source":"Material de apoio – aula 01 – Prof. Luis José Rohling, p. 09."},
    {"id":"q4_13","number":13,"prompt":"As fibras ópticas como meio de transmissão, em função de sua maior capacidade em relação à quantidade de dados trafegada e à distância dos circuitos, também têm um meio de transmissão muito mais seguro. A diferença entre a MAN e a WAN está associada às tecnologias utilizadas, sendo que o protocolo Ethernet também pode ser utilizado em redes MAN. De acordo com os estudos realizados na disciplina e levando em consideração o texto acima, assinale a alternativa que indica o alcance das interfaces ópticas usadas nas redes MAN:","alternatives":[{"letter":"A","text":"Alcance na ordem de 20 km."},{"letter":"B","text":"Alcance na ordem de 100 km."},{"letter":"C","text":"Alcance na ordem de 120 km."},{"letter":"D","text":"Alcance na ordem de 32 km."}],"answer":"A","explanation":"Interfaces ópticas em redes MAN têm alcance na ordem de 20 km.","source":"Material de apoio – aula 01 – Prof. Luis José Rohling, p. 11."},
    {"id":"q4_14","number":14,"prompt":"Os protocolos são conjuntos de regras, que devem ser seguidas pelos elementos das redes para garantir que a mensagem seja transmitida entre o emissor e o receptor e que o processo de comunicação seja efetivo. Ou seja, servem para que a mensagem enviada pelo transmissor seja corretamente interpretada pelo receptor. Com base no texto acima, para que isso ocorra, os protocolos devem estabelecer quais requisitos no processo de comunicação? ( ) Identificação do emissor e do receptor. ( ) Linguagem utilizada. ( ) Velocidade de transmissão. ( ) Mecanismos de confirmação do recebimento. ( ) Entendimento da mensagem criptografada.","alternatives":[{"letter":"A","text":"V, V, V, V, F."},{"letter":"B","text":"F, V, F, V, F."},{"letter":"C","text":"V, V, F, F, V."},{"letter":"D","text":"V, F, V, F, V."}],"answer":"A","explanation":"Os requisitos fundamentais são: identificação, linguagem, velocidade e confirmação.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 05."},
    {"id":"q4_15","number":15,"prompt":"O IETF é a organização que publica todas as normas pertinentes ao funcionamento da internet. O protocolo que é a base de toda esta rede é o IP (Internet Protocol) e é um padrão do IETF. Para caracterizar os processos e protocolos na rede de dados, o IETF publicou um modelo mais resumido, focado no funcionamento da internet. Com base na disciplina e no texto acima, responda: como é chamado o modelo publicado pelo IETF, para caracterizar os processos e protocolos na rede de dados focado no funcionamento da internet?","alternatives":[{"letter":"A","text":"Modelo TCP/IP."},{"letter":"B","text":"Modelo Trend Micro."},{"letter":"C","text":"Modelo Bitdefender."},{"letter":"D","text":"Modelo Norton."}],"answer":"A","explanation":"O IETF publicou o modelo TCP/IP para caracterizar processos na internet.","source":"Material de apoio – aula 02 – Prof. Luis José Rohling, p. 03."},
    {"id":"q4_16","number":16,"prompt":"Como o Firewall em geral está posicionado na entrada da rede, alguns destes equipamentos também já fazem uma inspeção do tráfego em busca dos códigos maliciosos já conhecidos, que são os vírus. Ou seja, além da proteção dos equipamentos dos usuários com o antivírus, podemos ter já uma primeira linha de defesa feita pelo Firewall. Tendo como base os conceitos abordados durante a disciplina e o contexto acima, analise as assertivas e assinale a alternativa que indica o nome dados aos equipamentos com maiores recursos e maior capacidade de processamento e que consegue fazer uma filtragem de maneira muito mais efetiva:","alternatives":[{"letter":"A","text":"IPsec (IP Security Protocol)."},{"letter":"B","text":"NGFW (Next Generation Firewall)."},{"letter":"C","text":"IPS (Intrusion Prevention System)."},{"letter":"D","text":"UTM (Unified Threat Management)."}],"answer":"B","explanation":"NGFW (Next Generation Firewall) são equipamentos com maior capacidade de filtragem.","source":"Aula 6, Tema 4."},
    {"id":"q4_17","number":17,"prompt":"Um dos parâmetros utilizados para identificar as intrusões é quantidade de tráfego vindo e um único endereço de destino, que poderia caracterizar uma tentativa de ataque, seja de reconhecimento ou de acesso. Para o correto funcionamento do IDS, é necessário ajustar a chamada sensibilidade do IDS. Tendo como base os conceitos abordados durante a disciplina e o contexto acima, analise as assertivas abaixo e assinale a alternativa que indica o parâmetro usado pelo IDS para identificar um ataque:","alternatives":[{"letter":"A","text":"A intrusão também está associada a vulnerabilidade das portas."},{"letter":"B","text":"A análise também está associada à variável tamanho dos pacotes."},{"letter":"C","text":"A contagem também está associada à velocidade do link."},{"letter":"D","text":"A contagem também está associada à variável tempo, ou seja, quantos pacotes foram recebidos em um determinado intervalo de tempo."}],"answer":"D","explanation":"O IDS contabiliza quantos pacotes foram recebidos em um determinado intervalo de tempo.","source":"Aula 6, Tema 1."},
    {"id":"q4_18","number":18,"prompt":"Você sabia que os ataques hackers estão acontecendo com cada vez mais frequência? Esses ataques têm evoluído dia após dia e usam estratégias sofisticadas para roubar dinheiro e dados de organizações em todo mundo. Vale ressaltar que as empresas têm a informação como seu bem mais precioso, por esse motivo precisam manter seus dados em segurança. Conforme os estudos realizados na disciplina, assinale a alternativa correta sobre o ataque que utiliza a exploração de confiança, pois consiste em explorar um elemento mais vulnerável da rede e, a partir desse dispositivo, realizar o acesso ao sistema pretendido:","alternatives":[{"letter":"A","text":"Ataque de acesso."},{"letter":"B","text":"Engenharia Social."},{"letter":"C","text":"Estouro de buffer."},{"letter":"D","text":"Ataque DoS."}],"answer":"A","explanation":"O ataque de acesso explora um elemento vulnerável da rede para acessar sistemas.","source":"Material de apoio – aula 05 – Prof. Luis José Rohling, p. 08."},
    {"id":"q4_19","number":19,"prompt":"A COVID-19 não está se apresentando somente com uma ameaça para os sistemas de saúde de todo o mundo, mas também para os computadores e dispositivos dos usuários. Segundo empresas de cibersegurança, criminosos estão se aproveitando da desinformação e temor com a doença para fazer vítimas em golpes. De acordo com os estudos realizados na disciplina, qual é a técnica utilizada para capturar as credenciais do usuário, para então realizar o ataque de acesso, que consiste na manipulação do usuário de forma que ele forneça os dados necessários para o hacker executar o ataque?","alternatives":[{"letter":"A","text":"Ataque de dicionário."},{"letter":"B","text":"Engenharia Social."},{"letter":"C","text":"Estouro de buffer."},{"letter":"D","text":"Ataque DoS."}],"answer":"B","explanation":"Engenharia Social é a manipulação do usuário para obter dados necessários ao ataque.","source":"Material de apoio – aula 05 – Prof. Luis José Rohling, p. 09."},
    {"id":"q4_20","number":20,"prompt":"As tecnologias de WAN utilizadas pelas operadoras também evoluíram com o passar do tempo, pois primeiro utilizaram o protocolo Frame-Relay, depois o ATM e, mais recentemente, o protocolo IP/MPLS. Para garantir a segurança do tráfego através da rede WAN, a solução ideal é a contratação do serviço de redes privadas. Porém, em alguns casos, é necessária também a conexão com as redes LAN de terceiros, tais como clientes e fornecedores. Conforme os estudos realizados na disciplina, assinale a alternativa que indica o nome do modelo de conexão de redes apresentado no texto acima:","alternatives":[{"letter":"A","text":"Rede WIFI."},{"letter":"B","text":"Rede pública."},{"letter":"C","text":"Rede privada."},{"letter":"D","text":"Extranet."}],"answer":"D","explanation":"A conexão de LANs de terceiros à rede é chamada de extranet.","source":"Material de apoio – aula 04 – Prof. Luis José Rohling, p. 04."},
    {"id":"q4_21","number":21,"prompt":"Além do IDS, que foi uma das primeiras implementações de segurança em redes, temos o IPS (Intrusion Prevention System), que é uma evolução do IDS, pois além de detectar uma intrusão, também age para bloquear esta intrusão de forma automática. De acordo com os estudos realizados, analise as assertivas abaixo e assinale a alternativa que indica uma característica do IPS:","alternatives":[{"letter":"A","text":"O IPS é um elemento passivo, que apenas analisa ao tráfego e gera os alarmes."},{"letter":"B","text":"O IPS é um elemento ativo, que além de detectar o acesso indevido, também bloqueia esse tráfego."},{"letter":"C","text":"O IPS é um elemento passivo, que além de detectar o acesso indevido, também bloqueia esse tráfego."},{"letter":"D","text":"O IPS é um elemento ativo, que além de detectar o acesso indevido e não bloqueia esse tráfego."}],"answer":"B","explanation":"O IPS é um elemento ativo que detecta e bloqueia acessos indevidos automaticamente.","source":"Aula 6, Tema 2."},
    {"id":"q4_22","number":22,"prompt":"A sigla VPN significa Virtual Private Network, ou Rede Virtual Privada. Ela é formada por um grupo de computadores que se conectam usando uma rede pública: a internet. Algumas empresas usam VPNs para conectar centros de dados distantes. Funcionários podem se conectar às VPNs para acessar a rede local da empresa sem estar fisicamente lá. De acordo com os estudos realizados, assinale a alternativa que indica os dois tipos de VPNs:","alternatives":[{"letter":"A","text":"Peer-to-peer e frame relay."},{"letter":"B","text":"ARP e NAT."},{"letter":"C","text":"Rede ATM e XWIFI."},{"letter":"D","text":"Site-to-site e client-to-site."}],"answer":"D","explanation":"Os dois tipos de VPNs são site-to-site e client-to-site.","source":"Material de apoio – aula 04 – Prof. Luis José Rohling, p. 05."},
    {"id":"q4_23","number":23,"prompt":"O firewall permite que projetos sejam desenvolvidos e entregues de forma remota, reduzindo o tempo, custo e estrutura de algumas atividades realizadas pelas organizações. A internet é um enorme facilitador para a execução de tarefas e, também, uma das principais preocupações dos setores de TI dentro de uma empresa. Quanto à topologia, tendo como base os conceitos abordados durante a disciplina e o contexto acima, analise as assertivas e assinale a alternativa que indica onde normalmente é instalado o firewall:","alternatives":[{"letter":"A","text":"Entre a rede interna e o roteador que faz a conexão com a rede WAN."},{"letter":"B","text":"Entre a rede interna e o roteador que faz a conexão com a rede LAN."},{"letter":"C","text":"Entre a rede interna e o roteador que faz a conexão com a rede WIFI."},{"letter":"D","text":"Entre a rede externa e o roteador que faz a conexão com a rede WIFI."}],"answer":"A","explanation":"O firewall é instalado entre a rede interna e o roteador de conexão com a WAN.","source":"Aula 6, Tema 4."},
    {"id":"q4_24","number":24,"prompt":"O mecanismo utilizado para proteger os dados é a utilização de uma técnica de criptografia, que consiste em alterar os dados de forma que não possam ser decodificados sem a chave correta. Assim, mesmo que os dados fossem capturados, o hacker necessitaria conhecer a chave utilizada para poder decodificar os dados. De acordo com os estudos realizados, analise as assertivas abaixo e assinale a alternativa que indica o ataque que consiste no uso de equipamentos computacionais com antenas de alto ganho:","alternatives":[{"letter":"A","text":"DDoS."},{"letter":"B","text":"Spoofing."},{"letter":"C","text":"Engenharia Social."},{"letter":"D","text":"War driving."}],"answer":"D","explanation":"O ataque war driving usa equipamentos com antenas de alto ganho para capturar dados.","source":"Aula 3, Tema 2."},
    {"id":"q4_25","number":25,"prompt":"Quanto à topologia, o firewall normalmente é instalado entre a rede interna e o roteador que faz a conexão com a rede WAN. Para a conexão com rede interna, normalmente temos dois tipos de conexões distintas: a rede segura, onde estão os usuários internos, e a rede DMZ, onde estão os servidores que necessitam ser acessados também da rede WAN. Nesse cenário de acordo com os estudos realizados na disciplina, analise as assertivas abaixo e assinale a alternativa que indica como é chamada a rede desmilitarizada:","alternatives":[{"letter":"A","text":"IPS (Intrusion Prevention System)."},{"letter":"B","text":"UTM (Unified Threat Management)."},{"letter":"C","text":"DMZ (DeMilitarized Zone)."},{"letter":"D","text":"IDS (Intrusion Detection System)."}],"answer":"C","explanation":"DMZ (DeMilitarized Zone) é a rede desmilitarizada com regras especiais de acesso externo.","source":"Aula 6, Tema 13."},
    {"id":"q4_26","number":26,"prompt":"Um dos efeitos indesejados no uso do IPS é que ele pode bloquear tráfego válido, quando estiver configurado para um nível maior de segurança, no caso dos falsos positivos. Já o IDS, no caso dos falsos positivos, apenas geraria um alarme indevido, não prejudicando a comunicação. Os mecanismos de ataque também têm evoluídos, portanto, de acordo com os estudos realizados, analise as assertivas abaixo e assinale a alternativa que indica o cuidado que temos que ter com o IPS para evitar novos ataques:","alternatives":[{"letter":"A","text":"Existe a necessidade de comprar novas licenças dos IPS."},{"letter":"B","text":"Além dos IPS existe a necessidade de ter switch level 3."},{"letter":"C","text":"Os IPS necessitam ter seus padrões de assinatura constantemente atualizados."},{"letter":"D","text":"Além dos IPS existe a necessidade de ter switch level 3 e roteadores com Firewall."}],"answer":"C","explanation":"Os IPS precisam ter seus padrões de assinatura constantemente atualizados.","source":"Aula 6, Tema 2."},
    {"id":"q4_27","number":27,"prompt":"O termo malware é uma contração das palavras inglesas malicious software (software malicioso, em tradução livre). Simplificando, malware é qualquer parte de um software que tenha sido codificada com o objetivo de danificar dispositivos, roubar dados e causar danos às pessoas. Conforme os estudos realizados na disciplina, assinale a alternativa que indica o método utilizado pelos malwares para obter informações sensíveis, de forma não autorizada:","alternatives":[{"letter":"A","text":"Ataque de reconhecimento."},{"letter":"B","text":"Ataque de acesso."},{"letter":"C","text":"Ataque de negação de serviço (DoS)."},{"letter":"D","text":"Ataque de força bruta."}],"answer":"A","explanation":"O ataque de reconhecimento obtém informações sensíveis de forma não autorizada.","source":"Material de apoio – aula 05 – Prof. Luis José Rohling, p. 03."},
    {"id":"q4_28","number":28,"prompt":"O ataque de negação de serviço é uma tentativa de fazer com que aconteça uma sobrecarga em um servidor ou computador comum para que recursos do sistema fiquem indisponíveis para seus utilizadores. Para isso, o atacante utiliza técnicas enviando diversos pedidos de pacotes para o alvo com a finalidade de que ele fique tão sobrecarregado que não consiga mais responder a nenhum pedido de pacote. Conforme os estudos realizados na disciplina, assinale a alternativa que indica qual é o ataque que consiste em enviar o comando ICMP de echo request, porém, com um tamanho maior que o permitido pelo protocolo IP:","alternatives":[{"letter":"A","text":"Ataque request."},{"letter":"B","text":"Ataque de força bruta."},{"letter":"C","text":"Ataque IP."},{"letter":"D","text":"Ping da morte."}],"answer":"D","explanation":"Ping da morte envia ICMP echo request com tamanho maior que o permitido.","source":"Material de apoio – aula 05 – Prof. Luis José Rohling, p. 14."},
    {"id":"q4_29","number":29,"prompt":"Outros parâmetros a serem considerados é a largura de banda total e a quantidade de conexão com a internet, pois o firewall escolhido deve possuir a quantidade de interfaces necessárias, bem como a velocidade das portas, que devem ser iguais ou superiores aos serviços contratados. Se a empresa possuir um link de internet do tipo dedicada, com velocidade de 50Mbps e dois links do tipo banda larga de 100Mbps, de acordo com os estudos realizados, analise as assertivas abaixo e assinale a alternativa que indica a largura da banda que o Throughput precisa ter:","alternatives":[{"letter":"A","text":"O Throughput deve ser maior ou igual a 300Mbps."},{"letter":"B","text":"O Throughput deve ser maior ou igual a 180Mbps."},{"letter":"C","text":"O Throughput deve ser maior ou igual a 200Mbps."},{"letter":"D","text":"O Throughput deve ser maior ou igual a 250Mbps."}],"answer":"D","explanation":"O Throughput deve ser maior ou igual à soma dos links (50+100+100=250Mbps).","source":"Aula 6, Tema 4."},
    {"id":"q4_30","number":30,"prompt":"De acordo com os estudos realizados na disciplina, assinale a alternativa que indica dois modelos diferentes de redes em que podem ser implementadas interligações para comunicação e troca de dados:","alternatives":[{"letter":"A","text":"Redes públicas e redes privadas."},{"letter":"B","text":"Redes WIFI apenas."},{"letter":"C","text":"Redes LE."},{"letter":"D","text":"Redes Low Energy."}],"answer":"A","explanation":"Redes públicas e privadas são dois modelos para interligação de LANs.","source":"Material de apoio – aula 04 – Prof. Luis José Rohling, p. 03."}
  ]
};

// ================================================================
// FUNÇÃO PRINCIPAL
// ================================================================
async function seed() {
  const db = await getDatabase();
  const { dbRun } = require('./database');

  console.log('🌱 Iniciando seed do banco de dados...\n');

  // Limpar dados existentes
  db.run('DELETE FROM alternativas');
  db.run('DELETE FROM resultados');
  db.run('DELETE FROM questoes');
  db.run('DELETE FROM temas');
  db.run('DELETE FROM alunos');

const AULA05 = {
  "id": "aula05",
  "title": "Português Elementar",
  "shortTitle": "Português Elementar",
  "description": "Regência, prosódia, morfologia, sintaxe e recursos da língua portuguesa.",
  "accent": "#0891b2",
  "icon": "📝",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q5_1",
      "number": 1,
      "prompt": "Na língua portuguesa, a regência nominal trata da relação entre um nome (substantivo, adjetivo ou advérbio) e o termo que o complementa, geralmente intermediada por uma preposição. Por exemplo, na frase “Tenho admiração por meu pai”, o substantivo “admiração” exige a preposição “por” para ligar-se ao complemento. O domínio da regência nominal é fundamental para a produção de textos claros e adequados à norma-padrão, especialmente em contextos formais. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e nas informações apresentadas, assinale a alternativa que apresenta corretamente o uso da regência nominal, de acordo com a norma-padrão:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Tenho respeito com meus professores, pois sempre me ajudaram nas dificuldades."
        },
        {
          "letter": "B",
          "text": "Estava aflito por sua demora, pois precisava de uma resposta urgente."
        },
        {
          "letter": "C",
          "text": "O aluno tem receio para não passar no exame final."
        },
        {
          "letter": "D",
          "text": "Tenho devoção com minha família, pois ela é meu alicerce."
        }
      ],
      "answer": "B",
      "explanation": "O adjetivo “aflito” admite a preposição “por” (“aflito por”), conforme a regência nominal da norma-padrão.",
      "source": "Material da disciplina de Português Elementar - aula 3"
    },
    {
      "id": "q5_2",
      "number": 2,
      "prompt": "A ortoepia e a prosódia são áreas da fonética e da fonologia que ajudam na pronúncia correta das palavras. A ortoepia trata da forma como pronunciamos os sons, enquanto a prosódia está relacionada à sílaba tônica das palavras. Já palavras como pudico, rubrica e recorde costumam ser pronunciadas com a sílaba tônica errada, o que pode gerar confusão. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e no fragmento acima, qual alternativa apresenta a palavra com a sílaba tônica corretamente identificada, de acordo com a prosódia da norma padrão da língua portuguesa:",
      "alternatives": [
        {
          "letter": "A",
          "text": "REcorde, pois a pronúncia em português segue a mesma da língua inglesa."
        },
        {
          "letter": "B",
          "text": "ruBRIca, porque a sílaba mais forte ao pronunciar a palavra é a penúltima."
        },
        {
          "letter": "C",
          "text": "pudiCO, porque a pronúncia correta é com a última sílaba tônica."
        },
        {
          "letter": "D",
          "text": "SÚtil, afinal a prosódia respeita o registro ortográfico."
        }
      ],
      "answer": "B",
      "explanation": "Segundo a Aula 1, a prosódia correta é puDIco, ruBRIca e reCOrde.",
      "source": "Língua Portuguesa, aula1.pdf"
    },
    {
      "id": "q5_3",
      "number": 3,
      "prompt": "Ao estudar a língua portuguesa, percebemos que as palavras podem ser agrupadas de diferentes formas. Uma delas leva em conta o significado que as palavras apresentam, enquanto outra observa a forma que elas assumem. Essas formas de organização ajudam a compreender melhor o funcionamento da língua e a utilizar as palavras de maneira adequada em diferentes contextos. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e nos critérios de classificação das palavras estudados, assinale a alternativa que apresenta corretamente a diferença entre o critério semântico e o critério morfológico:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O critério semântico classifica as palavras de acordo com o significado que elas possuem, enquanto o critério morfológico considera a forma e a possibilidade de variação das palavras."
        },
        {
          "letter": "B",
          "text": "O critério semântico considera a função sintática das palavras, enquanto o critério morfológico analisa o contexto em que a palavra aparece."
        },
        {
          "letter": "C",
          "text": "O critério semântico agrupa as palavras pelo número de sílabas, e o critério morfológico pelo número de letras."
        },
        {
          "letter": "D",
          "text": "O critério morfológico classifica as palavras pelo seu significado, e o critério semântico pela sua flexão de gênero e número."
        }
      ],
      "answer": "A",
      "explanation": "Esta alternativa está correta, pois reflete exatamente a diferença entre os critérios conforme apresentado na aula.",
      "source": "Material da disciplina de Português Elementar - aula 2"
    },
    {
      "id": "q5_4",
      "number": 4,
      "prompt": "Em uma pesquisa escolar, Lucas encontrou um texto antigo com a palavra “pharmácia” e o utilizou em seu trabalho. Ao apresentá-lo, foi questionado sobre a grafia daquela palavra. Naquele momento, lembrou-se do conteúdo estudado na disciplina de Português Elementar, como, por exemplo, do texto explicativo sobre a padronização da escrita estabelecida a partir de análises que consideraram tanto os sons da língua quanto sua origem histórica, além de incluir grafias que se consolidaram pelo costume. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina e na situação descrita acima, responda como Lucas justificou o uso dessa grafia:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Afirmando que a grafia antiga é mais correta que a atual."
        },
        {
          "letter": "B",
          "text": "Dizendo que a palavra está errada e deve ser eliminada do texto."
        },
        {
          "letter": "C",
          "text": "Explicando que a ortografia é uma convenção social que muda com o tempo."
        },
        {
          "letter": "D",
          "text": "Justificando que a palavra foi escrita assim por erro de digitação."
        }
      ],
      "answer": "C",
      "explanation": "Aula 1 mostra que grafias antigas foram modificadas por convenções ortográficas.",
      "source": "Língua Portuguesa, aula 1.pdf"
    },
    {
      "id": "q5_5",
      "number": 5,
      "prompt": "As preposições e as conjunções desempenham o papel de unir elementos dentro da linguagem, como palavras, frases e orações. Elas atuam como conectores, estabelecendo vínculos entre partes do discurso. Quando isoladas, perdem seu significado, pois sua função está diretamente ligada à conexão entre os termos. Uma situação que pode nos levar a pensar a esse respeito é o caso em que durante uma viagem, Rui Barbosa ouviu um passageiro dizer que estava indo “pro Rio de Janeiro”. A conversa revelou que o uso correto das preposições pode alterar o sentido da frase e até causar confusões engraçadas. As preposições, apesar de pequenas, são essenciais para ligar palavras e dar clareza ao que se quer comunicar. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Imagine que você está escrevendo uma mensagem para um amigo contando sobre sua viagem. Assinale a alternativa em que a preposição foi usada corretamente, considerando o sentido pretendido. Fundamente sua resposta no conteúdo da disciplina de Português Elementar.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Vou ao Rio de Janeiro para visitar minha família."
        },
        {
          "letter": "B",
          "text": "Vou em Rio de Janeiro para visitar minha família."
        },
        {
          "letter": "C",
          "text": "Vou para o Rio de Janeiro ontem."
        },
        {
          "letter": "D",
          "text": "Vou de Rio de Janeiro para visitar minha família."
        }
      ],
      "answer": "A",
      "explanation": "O uso da preposição “a” (ao) indica deslocamento para um local específico, conforme a norma culta.",
      "source": "Material da disciplina de Português Elementar - aula 2"
    },
    {
      "id": "q5_6",
      "number": 6,
      "prompt": "Certos elementos expressivos, como a pausa, o tom de voz, a musicalidade e até o uso do silêncio, são exclusivos da comunicação falada. Para compensar essa ausência na escrita, recorremos à pontuação como forma de transmitir nuances e intenções. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e no fragmento acima, reflita sobre a seguinte situação: Em uma atividade de revisão textual, Maria escreveu a frase: “Vamos perder nada foi resolvido.” Ao ler em voz alta, ela percebeu que o sentido estava confuso. Qual seria a melhor orientação para Maria?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Reescrever a frase utilizando palavras mais difíceis para dar clareza."
        },
        {
          "letter": "B",
          "text": "Criar um parágrafo explicativo para a frase."
        },
        {
          "letter": "C",
          "text": "Substituir o ponto final por um ponto de interrogação."
        },
        {
          "letter": "D",
          "text": "Inserir a pontuação adequada para separar as ideias e tornar o texto claro."
        }
      ],
      "answer": "D",
      "explanation": "Aula 1 mostra que a pontuação organiza o texto e evita ambiguidades.",
      "source": "Língua Portuguesa, aula 1.pdf"
    },
    {
      "id": "q5_7",
      "number": 7,
      "prompt": "Decorar nomenclaturas ou a taxionomia não faz de ninguém detentor de saberes gramaticais; é preciso saber a função dessas nomenclaturas e saber usá-las em seus devidos contextos. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e no fragmento acima, reflita sobre a seguinte situação: Durante uma aula de redação, o professor propôs que os alunos escrevessem um texto opinativo sobre o uso das redes sociais. João, ao revisar seu texto, percebeu que havia utilizado estruturas gramaticais diferentes das que costuma ver em livros didáticos. Preocupado, perguntou se seu texto estava “errado”. Qual orientação é a mais adequada ao estudante João?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Afirmar que qualquer desvio da norma-padrão é considerado erro gramatical."
        },
        {
          "letter": "B",
          "text": "Explicar que a gramática serve para organizar a linguagem e que o uso depende do contexto."
        },
        {
          "letter": "C",
          "text": "Recomendar que João decore todas as regras gramaticais para evitar erros."
        },
        {
          "letter": "D",
          "text": "Sugerir que João reescreva o texto priorizando frases retiradas de gramáticas tradicionais."
        }
      ],
      "answer": "B",
      "explanation": "Aula 1 destaca que a gramática organiza a linguagem e não deve ser vista como um conjunto de regras absolutas.",
      "source": "Língua Portuguesa, aula 1.pdf"
    },
    {
      "id": "q5_8",
      "number": 8,
      "prompt": "Ao analisarmos frases em língua portuguesa, percebemos que uma mesma palavra pode exercer funções diferentes dependendo do contexto em que está inserida. Por exemplo, a palavra “animal” pode ser um substantivo em uma frase e um adjetivo em outra, de acordo com o sentido e a posição que ocupa. Esse fenômeno é estudado pela morfossintaxe, que considera tanto a forma quanto a função das palavras na oração. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar).  De acordo com o conteúdo da disciplina de Português Elementar e no fragmento acima, observe as frases abaixo e assinale a alternativa que apresenta corretamente a análise morfossintática da palavra destacada: I. “O cachorro é um animal dócil.” II. “Aquele jogo foi animal!”",
      "alternatives": [
        {
          "letter": "A",
          "text": "Em ambas as frases, “animal” é advérbio, pois modifica o sentido do verbo."
        },
        {
          "letter": "B",
          "text": "Em ambas as frases, “animal” é sempre substantivo, pois não pode mudar de classe gramatical."
        },
        {
          "letter": "C",
          "text": "Na frase I, “animal” é adjetivo; na frase II, “animal” é substantivo, pois indica algo bom."
        },
        {
          "letter": "D",
          "text": "Na frase I, “animal” é substantivo; na frase II, “animal” exerce função de adjetivo, qualificando o jogo."
        }
      ],
      "answer": "D",
      "explanation": "Em I, “animal” nomeia um ser; em II, caracteriza o jogo, assumindo valor adjetivo.",
      "source": "Material da disciplina de Português Elementar - aula 2"
    },
    {
      "id": "q5_9",
      "number": 9,
      "prompt": "O material da aula de Português Elementar explica que a prosódia trata da forma adequada sobre a acentuação das palavras, considerando a sílaba que recebe maior destaque na pronúncia. Ela analisa aspectos sonoros da linguagem falada que não são representados pela escrita convencional. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e no fragmento acima, analise o seguinte cenário: Em uma prova de português, Ana escreveu a palavra “rubrica” com acento na primeira sílaba (RÚbrica). A professora a corrigiu e explicou que essa palavra não leva acento gráfico. Por que a palavra “rubrica” não deve ser acentuada?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Porque a sílaba tônica está na penúltima posição e não se enquadra nas regras de acentuação."
        },
        {
          "letter": "B",
          "text": "Porque a palavra é estrangeira e não segue as regras da língua portuguesa."
        },
        {
          "letter": "C",
          "text": "Porque todas as palavras com três sílabas são acentuadas e esse caso não é diferente."
        },
        {
          "letter": "D",
          "text": "Porque a palavra tem vogal nasal e não pode ser acentuada."
        }
      ],
      "answer": "A",
      "explanation": "Aula 1 explica que palavras como “rubrica” são paroxítonas e não recebem acento gráfico.",
      "source": "Língua Portuguesa, aula 1.pdf"
    },
    {
      "id": "q5_10",
      "number": 10,
      "prompt": "No estudo das classes gramaticais, aprendemos que algumas palavras podem sofrer variações de gênero (masculino e feminino) e número (singular e plural), enquanto outras permanecem sempre com a mesma forma, independentemente do contexto. Essa característica é importante para a correta utilização das palavras na construção de frases. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e no fragmento acima, analise as alternativas a seguir e assinale aquela que apresenta apenas classes de palavras invariáveis na língua portuguesa:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Advérbios, preposições e conjunções."
        },
        {
          "letter": "B",
          "text": "Substantivos, artigos e verbos."
        },
        {
          "letter": "C",
          "text": "Pronomes, numerais e adjetivos."
        },
        {
          "letter": "D",
          "text": "Verbos, advérbios e artigos."
        }
      ],
      "answer": "A",
      "explanation": "Essas classes são invariáveis, ou seja, não sofrem flexão de gênero ou número.",
      "source": "Material da disciplina de Português Elementar - aula 2"
    },
    {
      "id": "q5_11",
      "number": 11,
      "prompt": "Em uma roda de conversa, um aluno afirma que “só fala português errado” porque não usa as mesmas expressões que vê nos livros didáticos. A professora, então, explica que a língua portuguesa possui diferentes variantes e que o padrão linguístico não é absoluto, mas sim uma convenção. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e no fragmento acima, qual seria a melhor explicação para o aluno?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A norma-padrão é uma convenção sociocultural e desconsidera outras formas legítimas de uso da língua."
        },
        {
          "letter": "B",
          "text": "O padrão linguístico é fixo e deve ser seguido em qualquer situação comunicativa."
        },
        {
          "letter": "C",
          "text": "A norma-padrão é a única forma correta de se comunicar em português."
        },
        {
          "letter": "D",
          "text": "A variação linguística deve ser evitada para garantir clareza textual."
        }
      ],
      "answer": "A",
      "explanation": "Aula 1 destaca que o padrão é uma convenção e que a língua abriga variantes legítimas.",
      "source": "Língua Portuguesa, aula 1.pdf"
    },
    {
      "id": "q5_12",
      "number": 12,
      "prompt": "Durante uma aula de Língua Portuguesa, a professora propôs aos alunos a análise de diferentes frases para identificar como o verbo atua na construção do sentido. Ela apresentou as frases: “O cachorro latiu durante a noite.” “Silêncio!” “As crianças brincam no parque.” Ao discutir com a turma, a professora destacou que, em algumas frases, o verbo é essencial para que haja sentido completo, enquanto em outras, o contexto pode garantir sentido mesmo sem verbo. Assim, os alunos perceberam que a presença ou ausência do verbo pode modificar a estrutura e o significado das frases. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e na situação apresentada anteriormente, assinale a alternativa que explica corretamente o papel do verbo na estrutura das frases e resolve o problema de identificar em qual delas o verbo é indispensável para a construção do sentido:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Em todas as frases apresentadas, o verbo é indispensável para que haja sentido completo, pois sem ele não é possível formar um enunciado."
        },
        {
          "letter": "B",
          "text": "A frase “Silêncio!” não possui verbo, mas ainda assim é compreendida, pois o contexto pode garantir sentido ao enunciado, diferentemente das frases “O cachorro latiu durante a noite.” e “As crianças brincam no parque.”, em que o verbo é essencial para a estrutura e o sentido."
        },
        {
          "letter": "C",
          "text": "O verbo só é necessário em frases interrogativas e exclamativas, sendo dispensável em frases declarativas."
        },
        {
          "letter": "D",
          "text": "A ausência do verbo em qualquer frase torna impossível a identificação do sujeito, independentemente do contexto."
        }
      ],
      "answer": "B",
      "explanation": "O verbo é indispensável nas frases 1 e 3, mas não na 2, pois o contexto supre a ausência do verbo.",
      "source": "Material da disciplina de Português Elementar - aula 3"
    },
    {
      "id": "q5_13",
      "number": 13,
      "prompt": "Certos elementos expressivos, como a pausa, o tom de voz, a musicalidade e até o uso do silêncio, são exclusivos da comunicação falada. Para compensar essa ausência na escrita, recorremos à pontuação como forma de transmitir nuances e intenções. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar e no fragmento acima, reflita sobre o cenário a seguir: Em uma atividade de reescrita, um estudante escreveu: “Não espere.” e depois “Não, espere.”. Ao comparar as frases, percebeu que o sentido havia mudado completamente. O que explica essa mudança de sentido?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A vírgula é usada para separar os elementos em listados."
        },
        {
          "letter": "B",
          "text": "A pontuação pouco interfere no sentido, ela prevalece na estética do texto."
        },
        {
          "letter": "C",
          "text": "A vírgula é opcional em ambos os casos."
        },
        {
          "letter": "D",
          "text": "A vírgula altera a entonação e o sentido da frase, funcionando como recurso de coesão textual."
        }
      ],
      "answer": "D",
      "explanation": "Aula 1 mostra que a pontuação pode mudar completamente o sentido de uma frase.",
      "source": "Língua Portuguesa, aula 1.pdf"
    },
    {
      "id": "q5_14",
      "number": 14,
      "prompt": "Durante uma atividade em sala de aula, a professora pediu que os alunos identificassem o sujeito e o predicado em diferentes frases. Um dos alunos trouxe a seguinte frase: “O cachorro latiu alto durante a noite.” No entanto, ele ficou em dúvida sobre como separar corretamente os termos essenciais da oração. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Considerando o conteúdo da disciplina de Português Elementar e a situação apresentada acima, assinale a alternativa que apresenta corretamente a separação do sujeito e do predicado na frase “O cachorro latiu alto durante a noite.” e justifique sua escolha:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Sujeito: latiu alto durante a noite Predicado: O cachorro."
        },
        {
          "letter": "B",
          "text": "Sujeito: O cachorro Predicado: latiu alto durante a noite."
        },
        {
          "letter": "C",
          "text": "Sujeito: O cachorro latiu Predicado: alto durante a noite."
        },
        {
          "letter": "D",
          "text": "Sujeito: alto durante a noite Predicado: O cachorro latiu."
        }
      ],
      "answer": "B",
      "explanation": "“O cachorro” é quem pratica a ação (sujeito), e “latiu alto durante a noite” é o que se declara sobre o sujeito (predicado).",
      "source": "Material da disciplina de Português Elementar - aula 2"
    },
    {
      "id": "q5_15",
      "number": 15,
      "prompt": "A regência verbal diz respeito à relação que se estabelece entre o verbo e os termos que o complementam, podendo ser objetos diretos, indiretos ou adjuntos adverbiais. Em muitos casos, a escolha da preposição correta é fundamental para garantir o sentido adequado da frase e o respeito à norma-padrão. Por exemplo, o verbo “assistir”, no sentido de “ver”, exige a preposição “a”: “Assisti ao filme ontem”. Do mesmo modo, o verbo “agradecer” pede a preposição “a” para indicar a quem se agradece: “Agradeci ao professor pela ajuda”. (Enunciado do elaborador da questão com base no material da disciplina de Português Elementar). Com base no conteúdo da disciplina de Português Elementar, assinale a alternativa em que o uso da regência verbal está de acordo com a norma-padrão da língua portuguesa:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O aluno agradeceu o professor pela explicação detalhada."
        },
        {
          "letter": "B",
          "text": "Ela assistiu o espetáculo com muita atenção."
        },
        {
          "letter": "C",
          "text": "Eles preferiram mais viajar do que ficar em casa."
        },
        {
          "letter": "D",
          "text": "O juiz participou da conciliação entre as partes envolvidas."
        }
      ],
      "answer": "D",
      "explanation": "O verbo “participar” exige a preposição “de” (“participou da conciliação”), e a frase está de acordo com a regência verbal da norma-padrão.",
      "source": "Material da disciplina de Português Elementar - aula 3"
    },
    {
      "id": "q5_16",
      "number": 16,
      "prompt": "Durante a leitura de um artigo sobre alimentação saudável, os alunos observaram que o autor utilizou dados estatísticos de pesquisas científicas, citações de especialistas da área da saúde e exemplos reais para fundamentar sua tese sobre os benefícios de uma dieta equilibrada. A professora explicou que, na escrita acadêmica, deve-se utilizar recursos que confiram credibilidade ao texto, permitindo que o autor dialogue com outros pesquisadores e defenda seu ponto de vista de forma consistente e ética. Considerando os elementos que caracterizam a argumentação na escrita acadêmica, qual estratégia está sendo utilizada pelo autor para sustentar sua tese no artigo sobre alimentação saudável?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Utilização de metáforas e figuras de linguagem."
        },
        {
          "letter": "B",
          "text": "Citação de fontes confiáveis."
        },
        {
          "letter": "C",
          "text": "Uso de linguagem informal."
        },
        {
          "letter": "D",
          "text": "Relato de experiências pessoais."
        }
      ],
      "answer": "B",
      "explanation": "A citação de fontes confiáveis é uma estratégia essencial para dar credibilidade à argumentação acadêmica.",
      "source": "Aula 6 – Língua Portuguesa"
    },
    {
      "id": "q5_17",
      "number": 17,
      "prompt": "Ao ler uma notícia sobre o aumento da temperatura global, um aluno concluiu que o uso excessivo de combustíveis fósseis contribui para o aquecimento do planeta, mesmo que isso não estivesse escrito diretamente no texto. Qual é o nome dado à habilidade de compreender informações que não estão explicitamente escritas no texto, mas podem ser deduzidas a partir do contexto?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Leitura literal."
        },
        {
          "letter": "B",
          "text": "Inferência."
        },
        {
          "letter": "C",
          "text": "Paráfrase."
        },
        {
          "letter": "D",
          "text": "Ambiguidade."
        }
      ],
      "answer": "B",
      "explanation": "A inferência é a capacidade de deduzir informações implícitas com base no contexto e na coerência do texto.",
      "source": "Brasil. Uninter. Português Elementar. aula 5."
    },
    {
      "id": "q5_18",
      "number": 18,
      "prompt": "Durante uma conversa entre colegas na saída da escola, um estudante comentou: “A gente vamos estudar para a prova amanhã.” Embora todos tenham entendido o que ele quis dizer, a construção da frase chamou atenção por apresentar um problema gramatical. Em contextos informais, esse tipo equívoco pode passar despercebido, mas em situações formais, como entrevistas, redações ou apresentações acadêmicas, o uso inadequado da norma culta pode comprometer a clareza e a credibilidade da comunicação. Esse tipo de desvio é conhecido como vício de linguagem e pode ocorrer por falta de atenção ou desconhecimento das regras gramaticais. Considerando os vícios de linguagem estudados, identifique a alternativa que apresenta corretamente qual é o vício presente na fala do estudante?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Pleonasmo vicioso."
        },
        {
          "letter": "B",
          "text": "Solecismo."
        },
        {
          "letter": "C",
          "text": "Barbarismo."
        },
        {
          "letter": "D",
          "text": "Ambiguidade."
        }
      ],
      "answer": "B",
      "explanation": "O solecismo é um erro de sintaxe, como o de concordância verbal. Na frase, o sujeito “a gente” exige o verbo no singular (“vai”), e não no plural (“vamos”).",
      "source": "Brasil. Centro Universitário Internacional – Uninter. Português Elementar. aula 4: vícios de linguagem. disponível em: https://univirtus.Uninter.com. Acesso em: 11 nov. 2025. Cunha, Celso; Cintra, Lindley. Nova gramática do português contemporâneo. 5. ed. Rio de Janeiro: Lexikon, 2008."
    },
    {
      "id": "q5_19",
      "number": 19,
      "prompt": "Durante uma atividade de leitura e análise sintática, a professora propôs que os alunos identificassem o número de orações presentes em diferentes frases. Um dos exemplos apresentados foi: “Maria chegou cedo.” Alguns estudantes afirmaram que se tratava de um período composto, por conter mais de uma ideia. A professora, então, explicou que a classificação correta de um período depende da quantidade de verbos ou locuções verbais presentes. Considerando os critérios de classificação de períodos, qual é a classificação correta da frase “Maria chegou cedo”? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Período simples."
        },
        {
          "letter": "B",
          "text": "Período composto por coordenação."
        },
        {
          "letter": "C",
          "text": "Período composto por subordinação."
        },
        {
          "letter": "D",
          "text": "Frase nominal."
        }
      ],
      "answer": "A",
      "explanation": "A frase apresenta apenas uma oração, com um único verbo (“chegou”), caracterizando um período simples.",
      "source": "Cunha, Celso; Cintra, Lindley. nova gramática do português contemporâneo. Brasil. Uninter. Português Elementar. aula 3."
    },
    {
      "id": "q5_20",
      "number": 20,
      "prompt": "Durante uma atividade de leitura em voz alta, um estudante se deparou com a frase: “Ela tinha uma alma tão pura que parecia um anjo.” Ao pronunciar rapidamente a sequência “parecia um”, o som produzido foi interpretado pelos colegas como “pareciam”, gerando risos e confusão. Esse tipo de situação evidencia como certos encontros sonoros podem comprometer a clareza da comunicação oral. De acordo com os estudos realizados, escolha a alternativa que aponta corretamente o vício de linguagem que ocorreu na situação descrita?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Solecismo."
        },
        {
          "letter": "B",
          "text": "Pleonasmo vicioso."
        },
        {
          "letter": "C",
          "text": "Barbarismo."
        },
        {
          "letter": "D",
          "text": "Cacofonia."
        }
      ],
      "answer": "D",
      "explanation": "A cacofonia é um vício de linguagem que ocorre quando a junção de sons ou palavras gera uma sonoridade desagradável ou ambígua, como no caso de “parecia um”.",
      "source": "Brasil. Centro Universitário Internacional – Uninter. Português Elementar. aula 4: vícios de linguagem. disponível em: https://univirtus.Uninter.com. Acesso em: 11 nov. 2025. Cunha, Celso; Cintra, Lindley. Nova gramática do português contemporâneo. 5. ed. Rio de Janeiro: Lexikon, 2008."
    },
    {
      "id": "q5_21",
      "number": 21,
      "prompt": "Joana é professora do 6º ano e propôs aos seus alunos a leitura de uma crônica sobre o cotidiano. Após a leitura, pediu que cada estudante explicasse o que o autor quis dizer com o texto. A maioria dos alunos respondeu com frases curtas, repetindo partes do texto, sem apresentar opiniões ou interpretações pessoais. Joana percebeu que os estudantes estavam apenas tentando entender a ideia principal do autor, sem fazer conexões com suas próprias vivências. Com base na situação descrita e nos estudos sobre concepções de leitura, qual concepção foi utilizada pelos alunos?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Reconhecer as intenções do autor."
        },
        {
          "letter": "B",
          "text": "Captar a ideia do autor."
        },
        {
          "letter": "C",
          "text": "Construir sentidos a partir da interação entre leitor e texto."
        },
        {
          "letter": "D",
          "text": "Decodificar os signos linguísticos sem considerar o contexto."
        }
      ],
      "answer": "B",
      "explanation": "Essa é a primeira concepção de leitura, em que o leitor busca entender o que o autor quis dizer, sem necessariamente interpretar ou interagir com o texto.",
      "source": "AULA 5 – Língua Portuguesa"
    },
    {
      "id": "q5_22",
      "number": 22,
      "prompt": "A escrita acadêmica exige do autor clareza, objetividade e domínio da norma-padrão da língua portuguesa. Além disso, é marcada por impessoalidade, uso de vocabulário técnico e ausência de marcas subjetivas. Expressões como “é possível observar que…”, “nota-se que…” e “pode-se perceber que…” são exemplos de modalização, recurso que permite ao autor apresentar ideias com cautela, evitando afirmações absolutas. Esses elementos são fundamentais para garantir a credibilidade e a coerência dos textos científicos, especialmente em ambientes universitários e de pesquisa. Com base nos estudos realizados sobre os elementos da escrita acadêmica, assinale a alternativa que apresenta uma característica essencial desse tipo de produção textual:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Utilização de linguagem informal para facilitar a comunicação com o leitor."
        },
        {
          "letter": "B",
          "text": "Impessoalidade e uso de modalizadores para evitar afirmações categóricas."
        },
        {
          "letter": "C",
          "text": "Presença de opiniões pessoais para enriquecer o conteúdo argumentativo."
        },
        {
          "letter": "D",
          "text": "Uso predominante da primeira pessoa do singular para reforçar a autoria."
        }
      ],
      "answer": "B",
      "explanation": "A impessoalidade e a modalização são marcas da escrita acadêmica, que busca objetividade e respeito à diversidade de interpretações.",
      "source": "aula 4 ética.pdf"
    },
    {
      "id": "q5_23",
      "number": 23,
      "prompt": "Durante uma aula de Língua Portuguesa, um aluno leu a frase “Está chovendo canivetes!” e ficou confuso, pois não via nenhum objeto cortante caindo do céu. A professora explicou que, para entender o sentido da frase, era necessário considerar o contexto em que foi dita. Expressões idiomáticas como essa não devem ser interpretadas literalmente, pois seu significado depende da situação comunicativa e do conhecimento compartilhado entre os interlocutores. Para compreender corretamente o sentido da expressão “Está chovendo canivetes!”, o que o leitor deve considerar?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A estrutura gramatical da frase."
        },
        {
          "letter": "B",
          "text": "O contexto em que a frase foi dita."
        },
        {
          "letter": "C",
          "text": "A pontuação utilizada."
        },
        {
          "letter": "D",
          "text": "A quantidade de palavras."
        }
      ],
      "answer": "B",
      "explanation": "O contexto é essencial para interpretar expressões idiomáticas e sentidos figurados.",
      "source": "Aula 6 – Português Elementar."
    },
    {
      "id": "q5_24",
      "number": 24,
      "prompt": "Durante a apresentação de um artigo sobre os impactos da pandemia na educação, escrito com base em dados de 2020, um estudante foi questionado por seus colegas sobre a atualidade das informações utilizadas. A professora aproveitou a situação para explicar que, na escrita acadêmica, é essencial considerar o contexto de produção e recepção do texto. Isso inclui a atualização dos dados, a adequação à norma-padrão da língua, a impessoalidade, a clareza e a objetividade. Esses elementos são fundamentais para garantir a credibilidade, a relevância e a compreensão do texto por diferentes leitores e em diferentes momentos históricos. Com base nos estudos realizados na disciplina, responda: por que é importante considerar o contexto na produção de um texto acadêmico?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Para garantir que o texto seja mais criativo e subjetivo."
        },
        {
          "letter": "B",
          "text": "Para assegurar que o conteúdo seja relevante, claro e adequado à situação de uso."
        },
        {
          "letter": "C",
          "text": "Para permitir que o autor utilize linguagem informal e coloquial."
        },
        {
          "letter": "D",
          "text": "Para que o texto possa ser interpretado de diferentes formas, conforme o leitor."
        }
      ],
      "answer": "B",
      "explanation": "O contexto de produção e recepção é essencial para garantir a atualidade, clareza e pertinência do texto acadêmico.",
      "source": "aula 4 ética.pdf"
    },
    {
      "id": "q5_25",
      "number": 25,
      "prompt": "Durante uma atividade de produção textual, um estudante escreveu a seguinte frase: “Estudei bastante, mas não fui bem na prova.” Ao analisar a construção, a professora destacou que o período contém duas orações ligadas por uma conjunção que expressa oposição. Ela aproveitou o exemplo para explicar que, quando há mais de uma oração em um período, é necessário observar como elas se relacionam. Analise a estrutura sintática da frase “Estudei bastante, mas não fui bem na prova” e assinale a alternativa que classifica corretamente o tipo de período apresentado, de acordo com os estudos realizados:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Período simples."
        },
        {
          "letter": "B",
          "text": "Período composto por coordenação."
        },
        {
          "letter": "C",
          "text": "Período composto por subordinação."
        },
        {
          "letter": "D",
          "text": "Frase nominal."
        }
      ],
      "answer": "B",
      "explanation": "A frase apresenta duas orações independentes ligadas pela conjunção “mas”, caracterizando um período composto por coordenação.",
      "source": "Cunha, Celso; Cintra, Lindley. Nova gramática do português contemporâneo. Brasil. Uninter. Português Elementar. aula 3."
    },
    {
      "id": "q5_26",
      "number": 26,
      "prompt": "Durante a elaboração de um trabalho de conclusão de curso (TCC), uma estudante precisou escrever uma introdução, desenvolver capítulos teóricos e apresentar uma conclusão. Ela também precisou seguir normas da ABNT e incluir referências bibliográficas. De acordo com as características descritas, identifique qual gênero textual está sendo produzido pela estudante e assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Resumo."
        },
        {
          "letter": "B",
          "text": "Resenha crítica."
        },
        {
          "letter": "C",
          "text": "Trabalho acadêmico (tcc)."
        },
        {
          "letter": "D",
          "text": "Artigo de opinião."
        }
      ],
      "answer": "C",
      "explanation": "O tcc é um gênero acadêmico que exige introdução, desenvolvimento, conclusão, normas técnicas e referências bibliográficas.",
      "source": "Brasil. Uninter. Português Elementar. aula 6."
    },
    {
      "id": "q5_27",
      "number": 27,
      "prompt": "Durante a produção de um artigo científico, um estudante utilizou dados estatísticos, citações de autores renomados e apresentou uma tese clara sobre os impactos da tecnologia na educação. A professora destacou que esses elementos são fundamentais para a construção de um texto argumentativo. Assim, é importante que o autor saiba apresentar e contra-argumentar ideias com credibilidade, evitando falácias e generalizações. Com base nos conteúdos estudados na disciplina, qual é o elemento essencial para garantir a credibilidade da argumentação na escrita acadêmica?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Utilizar linguagem subjetiva e emocional."
        },
        {
          "letter": "B",
          "text": "Apresentar evidências e respaldo teórico."
        },
        {
          "letter": "C",
          "text": "Fazer uso de clichês e opiniões pessoais."
        },
        {
          "letter": "D",
          "text": "Repetir ideias sem apresentar justificativas."
        }
      ],
      "answer": "B",
      "explanation": "A argumentação acadêmica exige fundamentação em dados, teorias e fontes confiáveis.",
      "source": "AULA 6.pdf – Tema 4: Argumentação na escrita acadêmica."
    },
    {
      "id": "q5_28",
      "number": 28,
      "prompt": "Durante uma campanha publicitária, uma empresa de saúde utilizou a imagem da Mona Lisa, famosa obra de Leonardo da Vinci, mas sem cabelos, para representar pacientes em tratamento contra o câncer. A imagem causou impacto e gerou discussões sobre o uso de obras clássicas em novos contextos. Esse tipo de recurso é comum em textos que se apropriam de outros já existentes para criar novos sentidos, seja por meio de citações, referências ou releituras. Como se chama o recurso linguístico que ocorre quando um texto faz referência a outro, estabelecendo um diálogo entre eles?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Coerência textual."
        },
        {
          "letter": "B",
          "text": "Intertextualidade."
        },
        {
          "letter": "C",
          "text": "Ambiguidade."
        },
        {
          "letter": "D",
          "text": "Paráfrase."
        }
      ],
      "answer": "B",
      "explanation": "A intertextualidade ocorre quando um texto faz referência a outro, criando conexões e ampliando significados.",
      "source": "Brasil. Uninter. Português Elementar. aula 5."
    },
    {
      "id": "q5_29",
      "number": 29,
      "prompt": "Durante uma aula de Língua Portuguesa, o professor apresentou aos alunos um texto que narrava a história de um menino que encontrou um animal ferido e cuidou dele até sua recuperação. O texto descrevia os acontecimentos em ordem cronológica, com personagens, enredo, tempo e espaço bem definidos. De acordo com os estudos realizados nesta disciplina, assinale a alternativa que apresenta a resposta correta para a seguinte pergunta: qual é o tipo textual predominante no texto apresentado pelo professor?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Narrativo."
        },
        {
          "letter": "B",
          "text": "Descritivo."
        },
        {
          "letter": "C",
          "text": "Dissertativo."
        },
        {
          "letter": "D",
          "text": "Injuntivo."
        }
      ],
      "answer": "A",
      "explanation": "O tipo narrativo é caracterizado por contar uma história com personagens, tempo e espaço definidos.",
      "source": "Brasil. Uninter. Português Elementar. aula 6."
    },
    {
      "id": "q5_30",
      "number": 30,
      "prompt": "Durante uma atividade de produção textual, os alunos do 7º ano foram convidados a escrever sobre o início de um dia ensolarado. Um dos estudantes escreveu: “O sol apareceu e os pássaros começaram a cantar.” A professora elogiou a construção e propôs à turma uma análise sintática da frase. Ela explicou que, para identificar o tipo de período, é necessário observar a presença de verbos e a quantidade de orações. Com base nos estudos realizados, examine e identifique a classificação do período apresentado na frase: “O sol apareceu e os pássaros começaram a cantar”:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Frase nominal."
        },
        {
          "letter": "B",
          "text": "Período simples."
        },
        {
          "letter": "C",
          "text": "Período composto."
        },
        {
          "letter": "D",
          "text": "Oração subordinada."
        }
      ],
      "answer": "C",
      "explanation": "A frase apresenta duas orações com dois verbos (“apareceu” e “começaram”), ligadas pela conjunção “e”, caracterizando um período composto.",
      "source": "Cunha, Celso; Cintra, Lindley. Nova gramática do português contemporâneo. 5. ed. rio de janeiro: Lexikon, 2008. Brasil. Centro Universitário Internacional – Uninter. Português Elementar. aula 3: frase, oração e período. disponível em: https://univirtus.Uninter.com. Acesso em: 11 nov. 2025."
    }
  ]
};


const AULA06 = {
  "id": "aula06",
  "title": "Sistemas de Segurança na Informação",
  "shortTitle": "Segurança na Informação",
  "description": "Qualidade da informação, segurança de dados, privacidade e sistemas de proteção.",
  "accent": "#dc2626",
  "icon": "🔒",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q6_1",
      "number": 1,
      "prompt": "Alguns procedimentos podem ser levados a cabo para se garantir a precisão e a confiabilidade dos dados. Há vários problemas possíveis, relacionados à coleta de grandes massas de dados de fontes variadas, como ocorre em cidades inteligentes. Nessa aplicação, potencialmente milhares de sensores coletam, constantemente, informações. Vários pontos de falhas podem perturbar a confiança nos dados, antes de seu armazenamento, para posterior consumo e transformação. Bettini et al. (2009) identificam em seus estudos os principais problemas relacionados a essas massas de dados. (Texto adaptado). Fonte: Rota de Aprendizagem 2 (Operações de conversão). De acordo com o texto acima e os estudos realizados, quais são os principais problemas relacionados às massas de dados identificados por Bettini et al. (2009)?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Imperfeição, inconsistência e discrepância."
        },
        {
          "letter": "B",
          "text": "Desorganização, falhas de sistema e erro humano."
        },
        {
          "letter": "C",
          "text": "Falta de acesso, distorção e fragmentação."
        },
        {
          "letter": "D",
          "text": "Ambiguidade, ausência de padrões e ineficiência."
        }
      ],
      "answer": "A",
      "explanation": "A alternativa (Imperfeição, inconsistência e discrepância.) está correta, pois, de acordo com o texto, os problemas relacionados às massas de dados identificados por Bettini et al. (2009) são imperfeição, inconsistência e discrepância.",
      "source": "Rota de Aprendizagem 2 (Operações de conversão)."
    },
    {
      "id": "q6_2",
      "number": 2,
      "prompt": "A formação do conhecimento a partir de informações de autenticidade duvidosa, sem garantia de integridade e de disponibilidade incontrolável, certamente não resultará em construções intelectuais plenamente válidas. Por outro lado, segundo Kolbe, 2017, a capacidade de coletar as informações corretas e transformá-las em conhecimento efetivo, torna-se o grande diferencial competitivo individual ou de uma organização da IS. Fonte: Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E CONHECIMENTO). De acordo com o texto acima e os estudos realizados na disciplina, escolha a alternativa que melhor reflete o ponto de vista sobre o impacto da qualidade das informações na formação do conhecimento e no diferencial competitivo.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A formação do conhecimento depende exclusivamente da integridade das informações, não sendo influenciada pela sua autenticidade ou disponibilidade."
        },
        {
          "letter": "B",
          "text": "Construções intelectuais válidas exigem informações de autenticidade garantida e integridade, enquanto o diferencial competitivo é definido pela habilidade de transformar informações corretas em conhecimento efetivo."
        },
        {
          "letter": "C",
          "text": "O diferencial competitivo de organizações na sociedade da informação (IS) é garantido pela quantidade de informações disponíveis, não pela qualidade ou transformação dessas informações."
        },
        {
          "letter": "D",
          "text": "Informações de autenticidade duvidosa são suficientes para a formação de conhecimento efetivo, desde que estejam disponíveis de forma controlada."
        }
      ],
      "answer": "B",
      "explanation": "Construções intelectuais válidas exigem informações de autenticidade garantida e integridade, enquanto o diferencial competitivo é definido pela habilidade de transformar informações corretas em conhecimento efetivo.",
      "source": "Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E CONHECIMENTO)."
    },
    {
      "id": "q6_3",
      "number": 3,
      "prompt": "Podemos definir banco de dados (BD) como a armazenagem organizada de dados e, eventualmente, arquivos, conservando o relacionamento mútuo que possibilite a consulta e a manipulação (Turbanet et al., 2005, p. 523). Fonte: Rota de Aprendizagem 3 (BANCO DE DADOS). Com base nos estudos ao longo da disciplina, qual foi a solução utilizada para suprir a necessidade dos primeiros bancos de dados?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Soluções não computacionais, como cadernetas de venda a prazo e listas telefônicas."
        },
        {
          "letter": "B",
          "text": "Algoritmos de aprendizado de máquina para organização manual de dados."
        },
        {
          "letter": "C",
          "text": "Computadores mecânicos e dispositivos eletrônicos primitivos."
        },
        {
          "letter": "D",
          "text": "Planilhas digitais armazenadas em servidores centrais."
        }
      ],
      "answer": "A",
      "explanation": "A alternativa (Soluções não computacionais, como cadernetas de venda a prazo e listas telefônicas.) está correta, pois o texto menciona explicitamente que os primeiros bancos de dados foram supridos por soluções não computacionais, exemplificando as cadernetas de venda a prazo e as listas telefônicas.",
      "source": "Rota de Aprendizagem 3 (BANCO DE DADOS)."
    },
    {
      "id": "q6_4",
      "number": 4,
      "prompt": "Considerando a necessária padronização, no âmbito computacional, todo dado será numérico. E não apenas isso: esses números devem ser binários, ou seja, devem ser convertidos para uma sequência de zeros e uns. Essas sequências binary, são de difícil leitura para o ser humano. (Texto adaptado). Fonte: Rota de Aprendizagem 2 (Tema: DADO DIGITAL). Com base no texto fornecido, escolha a alternativa que melhor descreve a relação entre algarismos hexadecimais e a visualização de dados.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A base hexadecimal simplifica a visualização de dados, representando cada nible por um único algarismo."
        },
        {
          "letter": "B",
          "text": "A base hexadecimal não tem impacto na visualização dos dados, pois a representação continua complexa."
        },
        {
          "letter": "C",
          "text": "Cada nible em hexadecimal é representado por dois algarismos, o que melhora a compreensão."
        },
        {
          "letter": "D",
          "text": "O uso de algarismos hexadecimais é irrelevante para a visualização dos dados, pois a base binária já é suficiente."
        }
      ],
      "answer": "A",
      "explanation": "A alternativa (A base hexadecimal simplifica a visualização de dados, representando cada nible por um único algarismo.) está correta, pois o texto, na íntegra, menciona que o uso de algarismos hexadecimais simplifica a visualização de dados, sintetizando cada nible (conjunto de 4 bits) em apenas um algarismo, tornando a visualização mais compreensível.",
      "source": "Rota de Aprendizagem 2 (Tema: DADO DIGITAL)."
    },
    {
      "id": "q6_5",
      "number": 5,
      "prompt": "Pixel é a menor unidade de uma imagem digital, independentemente de sua fonte. Se você pegar uma foto e fizer uma aproximação (zoom), verá uma série de quadradinhos que a compõem. Cada um desses pontos luminosos é um pixel. São milhões ou milhares deles. Fonte: O que é um pixel? Tecnoblog. Após esta avaliação, caso queira ler o artigo, acesse o link disponível em: https://tecnoblog.net/responde/o-que-e-um-pixel/. Acesso em 26/11/2024. De acordo com o material de estudos da disciplina e com base no texto fornecido acima, qual é o processo descrito para armazenar imagens em um computador?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A imagem é comprimida e armazenada como uma unidade compactada."
        },
        {
          "letter": "B",
          "text": "A imagem é transformada em uma representação vetorial, que descreve suas formas geométricas."
        },
        {
          "letter": "C",
          "text": "A imagem é dividida em cores primárias e armazenada com base nessas divisões."
        },
        {
          "letter": "D",
          "text": "A imagem é convertida em pixels, e cada pixel recebe um valor numérico baseado em sua cr ou intensidade luminosa, para posterior armazenamento."
        }
      ],
      "answer": "D",
      "explanation": "A alternativa correta explica que, ao transformar uma imagem em uma sequência de pixels, cada pixel recebe um valor numérico que corresponde à sua cor ou intensidade luminosa. Esses valores numéricos podem ser armazenados no computador.",
      "source": "Rota de Aprendizagem 2 (Tema: DADO DIGITAL)."
    },
    {
      "id": "q6_6",
      "number": 6,
      "prompt": "Dados quantitativos podem ser transformados em informações qualitativas. Um bom exemplo disso é a avaliação do bom ou mau desempenho de um produto baseada nos dados quantitativos de suas vendas. Fonte: Rota de Aprendizagem 2 (Tema: Informação quantitativa e informação qualitativa). Com base no texto fornecido e nos estudos anteriormente realizados na disciplina, escolha a alternativa que melhor representa o processo de transformação de dados quantitativos em informações qualitativas.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Dados quantitativos, como vendas, podem ser transformados em informações qualitativas ao avaliar o desempenho de um produto em relação a seus concorrentes ou ao histórico de vendas."
        },
        {
          "letter": "B",
          "text": "Dados qualitativos e quantitativos são sempre analisados de forma separada, sem interseção entre os dois tipos de informação."
        },
        {
          "letter": "C",
          "text": "A avaliação de desempenho de um produto com base em vendas é exclusivamente qualitativa, sem conexão com dados quantitativos."
        },
        {
          "letter": "D",
          "text": "A transformação de dados quantitativos em qualitativos é um processo desnecessário na tomada de decisão empresarial."
        }
      ],
      "answer": "A",
      "explanation": "Dados quantitativos, como vendas, podem ser transformados em informações qualitativas ao avaliar o desempenho de um produto em relação a seus concorrentes ou ao histórico de vendas. A alternativa é a correta, pois reflete com precisão o processo descrito no texto base.",
      "source": "Rota de Aprendizagem 2 (Tema: Informação quantitativa e informação qualitativa)."
    },
    {
      "id": "q6_7",
      "number": 7,
      "prompt": "Uma informação para ser consumida depende de um sistema que a transforme em conhecimento. Segundo Kolbe (2017, p. 53), essa transformação se dá, em uma organização empresarial, em três níveis, definidos pela necessidade dos usuários. Fonte: Rota de Aprendizagem 1 (Tema: HIERARQUIA DOS SISTEMAS DA INFORMAÇÃO). De acordo com o texto e o conteúdo estudado, qual é a principal característica das informações no nível operacional de uma organização?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Apoiam decisões estratégicas de alta complexidade."
        },
        {
          "letter": "B",
          "text": "Precisam ser detalhadas para execução de tarefas cotidianas."
        },
        {
          "letter": "C",
          "text": "Envolvem métodos de análise, como algoritmos de IA e BI."
        },
        {
          "letter": "D",
          "text": "Envolvem métodos de análise, como algoritmos de IA e BI."
        }
      ],
      "answer": "B",
      "explanation": "Uma informação para ser consumida depende de um sistema que a transforme em conhecimento. Segundo Kolbe (2017, p. 53), essa transformação se dá, em uma organização empresarial, em três níveis, definidos pela necessidade dos usuários. O primeiro nível é o operacional, composto pelo corpo técnico e administrativo da organização. Neste nível, as informações precisam ser detalhadas para que os colaboradores as utilizem na execução de tarefas cotidianas.",
      "source": "Rota de Aprendizagem 1 (Tema: HIERARQUIA DOS SISTEMAS DA INFORMAÇÃO)."
    },
    {
      "id": "q6_8",
      "number": 8,
      "prompt": "Entendemos que um dado, do ponto de vista técnico, é uma leitura do meio. A princípio, um dado não está necessariamente provido de um significado. De fato, o significado de um dado é frequentemente dito como um metadado. Um dado digital, ou digitalizado, é a representação, no meio computacional, de um dado (na verdade também de informações e conhecimento. Essa representação se dá de maneira bastante padronizada, como seria de se esperar, considerando que o computador é uma máquina eletrônica limitada. Fonte: Rota de Aprendizagem 2 (Tema: DADO DIGITAL). Com base no texto fornecido, escolha a alternativa que melhor descreve a relação entre dados digitais e sua padronização no âmbito computacional.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A padronização computacional permite que dados sejam representados em diversos formatos além do binário."
        },
        {
          "letter": "B",
          "text": "Todo dado digital é numérico e deve ser convertido em uma sequência de zeros e uns devido à padronização computacional."
        },
        {
          "letter": "C",
          "text": "Dados digitais são metadados que carregam o significado inerente ao dado original."
        },
        {
          "letter": "D",
          "text": "A representação de dados digitais no computador depende de sua leitura inicial no meio, sem a necessidade de padronização."
        }
      ],
      "answer": "B",
      "explanation": "A alternativa é a correta porque reflete a explicação do texto base, que destaca que, no âmbito computacional, todo dado deve ser numérico e convertido para uma sequência binária (zeros e uns) devido às limitações e à padronização das máquinas eletrônicas.",
      "source": "Rota de Aprendizagem 2 (Tema: DADO DIGITAL)."
    },
    {
      "id": "q6_9",
      "number": 9,
      "prompt": "O acesso a um dado na internet é um processo complexo tecnicamente. Trata-se de uma complexidade translúcida. Só percebemos a debilidade do processo quando ele entra em colapso, fato que, já sabemos empiricamente, não é raro. Desta forma, seguindo ainda as conclusões de Castells, a sociedade dependente da tecnologia, resultante, transfere o poder para aqueles que geram, transmitem e processam a informação para ser consumida por esta sociedade. (Texto adaptado). Fonte: Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E CONHECIMENTO). Com base no texto e no conteúdo da disciplina, identifique a alternativa que explica corretamente o conceito de \"complexidade translúcida\" e sua relação com o poder na sociedade dependente da tecnologia.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A complexidade translúcida se refere ao fato de que a maioria dos usuários percebe as falhas dos processos tecnológicos constantemente, mesmo sem colapsos."
        },
        {
          "letter": "B",
          "text": "A complexidade translúcida significa que, apesar de tecnicamente complexos, os processos tecnológicos são percebidos como simples pelos usuários, mas transferem poder para quem domina a geração e transmissão de informações."
        },
        {
          "letter": "C",
          "text": "A complexidade translúcida aponta que o acesso aos dados é simples tanto tecnicamente quanto para o usuário, garantindo um processo imune a falhas."
        },
        {
          "letter": "D",
          "text": "A complexidade translúcida implica que o poder está distribuído igualmente entre os usuários e os geradores de informação, devido à transparência dos processos tecnológicos."
        }
      ],
      "answer": "B",
      "explanation": "A complexidade translúcida significa que, apesar de tecnicamente complexos, os processos tecnológicos são percebidos como simples pelos usuários, mas transferem poder para quem domina a geração e transmissão de informações.",
      "source": "Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E CONHECIMENTO)."
    },
    {
      "id": "q6_10",
      "number": 10,
      "prompt": "Não é mais objeto de discussão a excessiva profusão de informações, válidas e inválidas, na qual estamos involuntariamente imersos. Qualquer tema, independentemente de sua complexidade, pode ser visitado em questão de milésimos de segundos, na rede, sob diversos aspectos, muitos, infelizmente, equivocados. Este não é um fenômeno novo, Peter Drucker, em 1966, no best-seller The Age of Discontinuity, cunha o termo “sociedade da informação” (IS, information society, em inglês). Fonte: Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E CONHECIMENTO). Com base no texto acima e no conteúdo estudado na disciplina, escolha a alternativa que descreve corretamente o conceito de \"sociedade da informação\" apresentado por Peter Drucker.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Peter Drucker utilizou o termo \"sociedade da informação\" para destacar o excesso de dados inválidos e informações equivocadas na era digital."
        },
        {
          "letter": "B",
          "text": "O termo \"sociedade da informação\", cunhado por Peter Drucker, descreve a popularização iminente de todo tipo de informação, prevista ainda na década de 1960."
        },
        {
          "letter": "C",
          "text": "Peter Drucker definiu a sociedade da informação como um fenômeno recente, impulsionado pelo avanço tecnológico e marcado pela exclusividade de dados válidos."
        },
        {
          "letter": "D",
          "text": "A ideia de sociedade da informação, segundo Peter Drucker, surgiu para criticar a dificuldade de acesso a informações rápidas e diversificadas."
        }
      ],
      "answer": "B",
      "explanation": "O termo \"sociedade da informação\", cunhado por Peter Drucker, descreve a popularização iminente de todo tipo de informação, prevista ainda na década de 1960.",
      "source": "Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E CONHECIMENTO)."
    },
    {
      "id": "q6_11",
      "number": 11,
      "prompt": "O trânsito e o consumo da informação estão ligados intimamente à tecnologia. Não concebemos mais acessar informações que não estejam mediadas pela tecnologia. Neste exato momento, nesta etapa, estamos discutindo informações mediadas por um sistema de publicação em nuvem, acessadas por um hardware computacional e exibidas em uma tela para você. Fonte: Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E TECNOLOGIA). Com base no texto e nos estudos realizados na disciplina, identifique a principal característica do consumo de informações na era tecnológica.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O trânsito da informação é amplamente desconectado das redes computacionais, mantendo-se perceptível ao usuário."
        },
        {
          "letter": "B",
          "text": "O consumo de informações hoje é mediado pela tecnologia, não há mais distinção perceptível entre o percurso da informação e as redes computacionais."
        },
        {
          "letter": "C",
          "text": "A tecnologia desempenha um papel irrelevante no acesso e no consumo de informações."
        },
        {
          "letter": "D",
          "text": "A mediação tecnológica torna o percurso da informação mais visível e facilmente identificável ao usuário."
        }
      ],
      "answer": "B",
      "explanation": "O consumo de informações hoje é mediado pela tecnologia, e não há mais distinção perceptível entre o percurso da informação e as redes computacionais.",
      "source": "Rota de Aprendizagem 1 (Tema: INFORMAÇÃO E TECNOLOGIA)."
    },
    {
      "id": "q6_12",
      "number": 12,
      "prompt": "Instituições privadas tem por finalidade o retorno financeiro sobre os investimento e esforço do empreendedor, desta forma, a evolução dos SIGs, nesses empreendimentos se deu na direção de incrementar os patamares de venda e lucratividade. Já nas primeiras implementações, verificou-se a necessidade de segregar a inteligência do algoritmo dos dados propriamente ditos. Surge então a ideia de constituir bancos de dados, reservatórios de informações que podem ser acessados por vários sistemas. Fonte: Rota de Aprendizagem 1 (Tema: Demandas por sistemas computacionais em empreendimentos privados). Qual dos seguintes sistemas busca entender o desempenho empresarial, segundo o texto e o conteúdo estudado nas aulas?",
      "alternatives": [
        {
          "letter": "A",
          "text": "SIGE (Sistemas Integrados de Gestão)."
        },
        {
          "letter": "B",
          "text": "BI (Business Intelligence)."
        },
        {
          "letter": "C",
          "text": "CRM (Customer Relationship Management)."
        },
        {
          "letter": "D",
          "text": "Sistema de folha de pagamento."
        }
      ],
      "answer": "B",
      "explanation": "A integração entre os vários aspectos controlados pelos inúmeros sistemas de gestão (sistema de faturamento, sistema de folha de pagamento) criou os conhecidos ERPs (Enterprise Resource Planning) ou SIGE (Sistemas Integrados de Gestão) em português. Outros sistemas surgiram como o CRM (Custumer Relationship Management), sistema de gerenciamento do relacionamento com clientes, em português, que tem por objetivo controlar o relacionamento comercial com cada cliente e BIs (Business Inteligence), sistemas de inteligência de negócios, que buscam entender o desempenho empresarial.",
      "source": "Rota de Aprendizagem 1 (Tema: Demandas por sistemas computacionais em empreendimentos privados)."
    },
    {
      "id": "q6_13",
      "number": 13,
      "prompt": "Ao realizar a conversão dos dados em informações, alguns cuidados podem auxiliar na garantia de ganho de valor. Seguindo ainda o preconizado por Kolbe Júnior (2017), essas operações podem ser resumidas em cinco tópicos. (Texto adaptado). Fonte: Rota de Aprendizagem 2 (Operações de conversão). De acordo com o material de estudos da disciplina e com base no texto fornecido, quais são os cinco tópicos mencionados por Kolbe Júnior (2017) que auxiliam na conversão dos dados em informações?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Categorização, processamento, otimização, simplificação e condensação."
        },
        {
          "letter": "B",
          "text": "Cálculo, organização, interpretação, compressão e correção."
        },
        {
          "letter": "C",
          "text": "Correção, categorização, armazenamento, previsão e condensação."
        },
        {
          "letter": "D",
          "text": "Contextualização, correção, categorização, cálculo e condensação."
        }
      ],
      "answer": "D",
      "explanation": "A alternativa (Contextualização, correção, categorização, cálculo e condensação.) está correta, pois o texto menciona diretamente os cinco tópicos essenciais para a conversão dos dados em informações: contextualização, correção, categorização, cálculo e condensação.",
      "source": "Rota de Aprendizagem 2 (Operações de conversão)."
    },
    {
      "id": "q6_14",
      "number": 14,
      "prompt": "Um banco de dados, após criado por um DBP, tende a existir por muitos anos. Desse modo, quando um dado é armazenado em BD, o SGBD deve implementar estratégias de preservação da integridade desse dado. Nem todas as providências relacionadas à integridade dos dados são gerenciadas pelo SGBD. A redundância de gravação em disco, por exemplo, é gerenciada pelos sistemas operacionais do servidor. Fonte: Rota de Aprendizagem 3 (Preservação de dados em BDs). De acordo com o texto e com os textos das aulas, qual é a função do SGBD em relação ao banco de dados (BD)?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Gerenciar o acesso remoto ao banco de dados."
        },
        {
          "letter": "B",
          "text": "Operacionalizar algoritmos para detectar e corrigir erros no banco de dados."
        },
        {
          "letter": "C",
          "text": "Armazenar exclusivamente informações em formato de texto."
        },
        {
          "letter": "D",
          "text": "Criar automaticamente backups diários do banco de dados."
        }
      ],
      "answer": "B",
      "explanation": "A alternativa (Operacionalizar algoritmos para detectar e corrigir erros no banco de dados.) é a correta, pois o texto destaca especificamente que cabe ao SGBD operacionalizar algoritmos para a detecção e correção de erros no BD.",
      "source": "Rota de Aprendizagem 3 (Preservação de dados em BDs)."
    },
    {
      "id": "q6_15",
      "number": 15,
      "prompt": "Um bom exemplo é o uso da tabela American Standard Code for Information Interchange (ASCii) ou código padrão americano para intercâmbio de informações, em português, que transforma caracteres em números binários. (Texto adaptado). Fonte: Rota de Aprendizagem 2 (Tema: DADO DIGITAL). Com base no texto fornecido e nos estudos realizados na disciplina, qual é a estratégia de conversão adotada para armazenar imagens em um computador?",
      "alternatives": [
        {
          "letter": "A",
          "text": "As imagens são convertidas em números binários que representam seus pixels, pequenos fragmentos da imagem."
        },
        {
          "letter": "B",
          "text": "As imagens são armazenadas como gráficos vetoriais, que não necessitam de conversão para armazenamento."
        },
        {
          "letter": "C",
          "text": "As imagens são convertidas em uma sequência de letras que representam sua composição visual."
        },
        {
          "letter": "D",
          "text": "As imagens são armazenadas como números inteiros diretamente, sem a necessidade de conversão."
        }
      ],
      "answer": "A",
      "explanation": "A alternativa (As imagens são convertidas em números binários que representam seus pixels, pequenos fragmentos da imagem.) está correta, pois o texto da Rota de Aprendizagem 2 (Tema: DADO DIGITAL), explica que as imagens são divididas em pequenos fragmentos chamados pixels, e esses pixels são representados por números binários para seu armazenamento.",
      "source": "Rota de Aprendizagem 2 (Tema: DADO DIGITAL)."
    },
    {
      "id": "q6_16",
      "number": 16,
      "prompt": "Uma ferramenta importante que compõe o SGSI é o Plano Diretor de Segurança. Alguns autores defendem que esse plano deve ser a origem do SGSI. Eles propõem que a alta direção da empresa deve definir as linhas gerais de defesa dos dados, criando um plano de conteúdo generalista, que delimita a intensidade e a consistência esperada, com a direção dos esforços de proteção e a preservação das informações corporativas. Fonte: Rota de Aprendizagem 4 (Tema: Plano diretor de segurança). Sobre o Plano Diretor de um Sistema de Gestão de Segurança da Informação (SGSI), de acordo com o conteúdo estudado, qual das afirmações a seguir está correta?",
      "alternatives": [
        {
          "letter": "A",
          "text": "O planejamento das ações e reações a ameaças e desastres é um aspecto secundário no Plano Diretor, pois a segurança da informação se baseia apenas na prevenção."
        },
        {
          "letter": "B",
          "text": "A criação de um código de ética e de políticas de segurança são elementos que podem ser considerados opcionais no Plano Diretor de um SGSI."
        },
        {
          "letter": "C",
          "text": "O plano diretor deve definir os componentes do SGSI, incluindo um código de ética, política de segurança e diretrizes para ações diante de ameaças e desastres."
        },
        {
          "letter": "D",
          "text": "A principal função do Plano Diretor é detalhar exclusivamente os controles técnicos da organização, sem considerar aspectos estratégicos ou organizacionais."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta: O plano diretor deve, ainda, definir os componentes do SGSI, considerando, por exemplo, a existência de um código de ética ou a criação de uma política de segurança. A definição sobre o planejamento das ações e reações em resposta a ameaças e desastres também deve estar indicada nesse plano.",
      "source": "Rota de Aprendizagem 4 (Tema: Plano diretor de segurança)."
    },
    {
      "id": "q6_17",
      "number": 17,
      "prompt": "Como já sabemos, cada organização terá uma sua PSI particular. Seus objetivos gerais e a sua extensão serão extraídos do plano diretor. Além do necessário alinhamento com o plano diretor de segurança e o SGSI, a PSI deve se submeter à legislação. Esse alinhamento jurídico e empresarial é chamado de compliance, ou conformidade. O compliance das ferramentas de segurança pode ser aferido por processos de auditoria independente. Essa prática de sujeição a certificações, pela análise dos procedimentos, facilita a “acreditação” da empresa em relação a entes públicos, clientes, fornecedores e a comunidade em geral. Fonte: Rota de Aprendizagem 4 (Tema: Componentes da PSI). De acordo com o texto e o conteúdo estudado, como será criada a Política de Segurança da Informação (PSI) dentro de uma organização?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A partir da consulta direta aos colaboradores para coletar sugestões sobre segurança, garantindo que todas as práticas sejam flexíveis e adaptáveis a cada indivíduo."
        },
        {
          "letter": "B",
          "text": "A partir do uso exclusivo de ferramentas tecnológicas que garantam a proteção dos dados, sem necessidade de documentos normativos."
        },
        {
          "letter": "C",
          "text": "A partir do Plano Diretor e do SGSI, a PSI pode incluir documentos como o código de conduta, termos de uso, políticas de redes sociais e regras de backup."
        },
        {
          "letter": "D",
          "text": "A partir da simples adoção de normas internacionais, sem necessidade de adequação à realidade organizacional ou integração com outros documentos internos."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta: A PSI será criada a partir do detalhamento das orientações do plano diretor e do SGSI. Ela pode ser composta por vários documentos de orientação. Segundo Pinheiro (2020), alguns elementos possíveis são: código de conduta, termos de uso, políticas de redes sociais, regras de perfil, métodos de comunicação interna e regras de backup.",
      "source": "Rota de Aprendizagem 4 (Tema: Componentes da PSI)."
    },
    {
      "id": "q6_18",
      "number": 18,
      "prompt": "Podemos conceituar a vulnerabilidade a partir da ideia de exposição de um dado ou informação. Retomando ao conceito de ciclo de vida da informação, reconhecemos que um dado precisa ser resguardado, desde a sua origem até o momento de descarte. A intensidade de preservação de um dado depende de seu valor, conforme já vimos em nossas aulas. Considerando, por exemplo, a valoração em função do grau de confidencialidade do dado, a exposição indevida fará com que o dado fique vulnerável. (Texto adaptado). Fonte: Rota de Aprendizagem 4 (Tema: Vulnerabilidade e ameaças). Com base no conceito apresentado na disciplina Sistemas de Segurança da Informação, podemos afirmar que a vulnerabilidade ocorre quando:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O dado é protegido imperativamente de acordo com seu nível de importância."
        },
        {
          "letter": "B",
          "text": "Existe um risco de exposição indevida do dado."
        },
        {
          "letter": "C",
          "text": "A confidencialidade do dado é mantida em todas as fases de seu ciclo de vida."
        },
        {
          "letter": "D",
          "text": "O descarte do dado ocorre seguindo normas de segurança estabelecidas pelo analista."
        }
      ],
      "answer": "B",
      "explanation": "A vulnerabilidade está relacionada à possibilidade de exposição indevida de um dado ou informação, tornando-o suscetível a acessos não autorizados. O enunciado reforça a necessidade de proteção do dado ao longo de seu ciclo de vida, destacando que a falha nessa proteção pode levar à sua vulnerabilidade.",
      "source": "Rota de Aprendizagem 4 (Tema: Vulnerabilidade e ameaças)."
    },
    {
      "id": "q6_19",
      "number": 19,
      "prompt": "Uma das características da informação segura é a garantia de autenticidade, que permite condicionar o não repúdio a uma transação, por exemplo. Fazer os dados se acompanharem de uma assinatura daquele que assegura sua autenticidade é uma estratégia eficiente. Para que entendamos, tecnicamente, o processo de assinatura digital, precisaríamos de conceitos de criptografia com múltiplas chaves, possíveis com o uso de teoremas matemáticos avançados, ligados à aritmética modular e determinação de primacidade de grandes números. Do ponto de vista funcional, entretanto, a compreensão é relativamente simples. A esse “aval” público à assinatura eletrônica denominamos certificação digital. (Texto adaptado). Fonte: Rota de Aprendizagem 6 (Assinatura digital). De acordo com o texto acima e os estudos realizados, qual é a definição correta de certificação digital, conforme descrito no texto?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Trata-se de um método para validar transações financeiras em tempo real, vinculado à verificação de identidade por meio de biometria."
        },
        {
          "letter": "B",
          "text": "É uma técnica que vincula uma pessoa, ou entidade, aos dados por ela assinados, sendo verificável de forma independente, com a participação de uma entidade certificadora pública."
        },
        {
          "letter": "C",
          "text": "Refere-se a um sistema de monitoramento de dados em tempo real, usado para garantir que todos os sistemas sigam as diretrizes de segurança."
        },
        {
          "letter": "D",
          "text": "É uma tecnologia que permite a criptografia de dados sensíveis, com foco em proteger informações privadas em redes corporativas."
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta: É uma técnica que vincula uma pessoa, ou entidade, aos dados por ela assinados, sendo verificável de forma independente, com a participação de uma entidade certificadora pública. O texto descreve a certificação digital como uma técnica que vincula uma pessoa ou entidade aos dados assinados, e esse vínculo deve ser verificável de forma independente, com o envolvimento de uma entidade certificadora pública.",
      "source": "Rota de Aprendizagem 6 (Assinatura digital)."
    },
    {
      "id": "q6_20",
      "number": 20,
      "prompt": "Uma vez conceituada a ameaça, podemos passar ao conceito de risco. Basicamente, risco é uma medida estatística que avalia a possibilidade de violação de uma informação segura. Os conceitos de vulnerabilidade e ameaça são variáveis categóricas de segurança, ou seja, não são representados diretamente em números, já o risco é uma variável quantitativa. Portanto, podemos conceituar risco como a probabilidade matemática de que uma ameaça obtenha sucesso em sua ação, mudando as características da informação. (Texto adaptado). Fonte: Rota de Aprendizagem 4 (Tema: Risco e impacto). Com base no exposto e no conteúdo estudado na disciplina, qual das alternativas melhor define o conceito de risco?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A chance mensurável de que uma ameaça comprometa a segurança da informação."
        },
        {
          "letter": "B",
          "text": "Uma ameaça já concretizada que causou prejuízo a um sistema."
        },
        {
          "letter": "C",
          "text": "Um evento aleatório que não pode ser quantificado ou previsto."
        },
        {
          "letter": "D",
          "text": "Um problema exclusivamente técnico relacionado à configuração de sistemas."
        }
      ],
      "answer": "A",
      "explanation": "A resposta correta é: A chance mensurável de que uma ameaça comprometa a segurança da informação. O enunciado define risco como uma medida estatística e uma probabilidade matemática associada ao sucesso de uma ameaça. Assim, risco é uma chance que pode ser quantificada.",
      "source": "Rota de Aprendizagem 4 (Tema: Risco e impacto)."
    },
    {
      "id": "q6_21",
      "number": 21,
      "prompt": "Quando avaliamos o risco de uma ameaça, devemos associá-lo ao impacto do incidente para a organização. O impacto avalia o grau de dano à segurança da informação. Esse processo de associação de uma estatística de risco e de um grau de impacto, considerando a vulnerabilidade e a ameaça, é conhecido como gestão de risco. (Texto adaptado). Fonte: Rota de Aprendizagem 4 (Tema: Risco e impacto). De acordo com o texto acima e os estudos realizados na disciplina, escolha a alternativa que melhor reflete o conceito de gestão de risco?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A criação de políticas rígidas para impedir completamente qualquer incidente de segurança."
        },
        {
          "letter": "B",
          "text": "A análise e o tratamento do risco com base em sua probabilidade e impacto."
        },
        {
          "letter": "C",
          "text": "Um processo focado apenas na detecção de ameaças, sem considerar suas consequências."
        },
        {
          "letter": "D",
          "text": "A aplicação de criptografia e outras soluções tecnológicas para garantir proteção total."
        }
      ],
      "answer": "B",
      "explanation": "A resposta correta é: A análise e o tratamento do risco com base em sua probabilidade e impacto. O enunciado define gestão de risco como o processo de associar estatísticas de risco ao impacto de incidentes, levando em conta vulnerabilidades e ameaças.",
      "source": "Rota de Aprendizagem 4 (Tema: Risco e impacto)."
    },
    {
      "id": "q6_22",
      "number": 22,
      "prompt": "No seio da área de tecnologia de informação, temos uma área que recentemente ganhou maior significância, em função da importância dos dados como ativos organizacionais e das alterações nos arcabouços legais de proteção à privacidade de dados. Trata-se da área de segurança de dados (ou Security Office). Segundo Kolbe (2017, p. 109), ao ser retirada do guarda-chuva de TI, essa área recebe atribuições próprias, como o objetivo de estabelecer mecanismos de segurança alinhados com as fronteiras de autoridade, orçamento e cultura da empresa. Fonte: Rota de Aprendizagem 4 (Tema: Security Office). Conforme mencionado no texto e estudado no conteúdo das aulas, qual das afirmativas abaixo melhor descreve o impacto da separação da área de segurança de dados da TI?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A separação permite que a segurança de dados tenha autonomia para definir políticas alinhadas à realidade da organização."
        },
        {
          "letter": "B",
          "text": "A segurança de dados passou a ser uma função exclusivamente técnica, sem influência de aspectos financeiros ou culturais."
        },
        {
          "letter": "C",
          "text": "A divisão entre segurança de dados e TI reduz a necessidade de ajustes estratégicos na organização."
        },
        {
          "letter": "D",
          "text": "A retirada da segurança de dados do guarda-chuva da TI significa que ela deixou de ter relação com a tecnologia da informação."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta: A separação permite que a segurança de dados tenha autonomia para definir políticas alinhadas à realidade da organização. O texto destaca que, ao ser retirada da TI, a segurança de dados passa a ter atribuições próprias e estabelece mecanismos alinhados com autoridade, orçamento e cultura organizacional, o que confere maior autonomia para adaptação às necessidades da empresa.",
      "source": "Rota de Aprendizagem 4 (Tema: Security Office)."
    },
    {
      "id": "q6_23",
      "number": 23,
      "prompt": "Comentamos que a evolução dos sistemas funcionais também se deu em direção à retirada de boa parte dos esforços de construção de conhecimento, com base nos dados empresariais, nas mãos humanas. Também já sabemos que o conhecimento é o bem mais valioso de um empreendimento. Fonte: Rota de Aprendizagem 5 (Tema: Sistemas de conhecimento). Conforme estudos realizados em aula e com o texto acima, como são os Sistemas Baseados em Conhecimento dentro de uma organização?",
      "alternatives": [
        {
          "letter": "A",
          "text": "São sistemas que armazenam dados sem qualquer processamento inteligente, apenas organizando informações de forma estática."
        },
        {
          "letter": "B",
          "text": "São ferramentas utilizadas apenas para análise financeira, sem aplicação em outras áreas do negócio."
        },
        {
          "letter": "C",
          "text": "São Sistemas baseados em conhecimento usam algoritmos para representar o conhecimento empresarial, como BIs, IA, sistemas especialistas, redes neurais e algoritmos evolucionários."
        },
        {
          "letter": "D",
          "text": "São soluções voltadas apenas para automação de tarefas operacionais simples, sem qualquer relação com inteligência de negócios ou inteligência artificial."
        }
      ],
      "answer": "C",
      "explanation": "Sistemas baseados em conhecimento são algoritmos concebidos para conter partes significativas do conhecimento do negócio da empresa. Normalmente são representados por sistemas de inteligência de negócios (BIs) ou aplicações de inteligência artificial (IA), como sistemas especialistas, redes neurais e algoritmos evolucionários naturais.",
      "source": "Rota de Aprendizagem 5 (Tema: Sistemas de conhecimento)."
    },
    {
      "id": "q6_24",
      "number": 24,
      "prompt": "Para que um dado tenha sua confidencialidade garantida o uso de técnicas de criptografia é a estratégia indicada. Processos criptográficos podem assegurar, com bom grau de eficiência, se escolhido o processo correto, que apenas aqueles que detêm as chaves e/ou algoritmos criptográficos acessem o conteúdo da informação. Fonte: Rota de Aprendizagem 6 (Criptografia). De acordo com o material de estudos da disciplina sobre os algoritmos criptográficos, é correto afirmar que:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Eles pertencem ao domínio da matemática e podem ter diferentes níveis de complexidade, dependendo da aplicação a que se destinam."
        },
        {
          "letter": "B",
          "text": "São de fácil compreensão e aplicabilidade, sendo usados exclusivamente para proteger informações pessoais."
        },
        {
          "letter": "C",
          "text": "Sua complexidade é sempre baixa, independentemente do tipo de aplicação."
        },
        {
          "letter": "D",
          "text": "São métodos que pertencem ao domínio da física e são utilizados para monitorar a qualidade de redes de comunicação."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta: Eles pertencem ao domínio da matemática e podem ter diferentes níveis de complexidade, dependendo da aplicação a que se destinam.",
      "source": "Rota de Aprendizagem 6 (Criptografia)."
    },
    {
      "id": "q6_25",
      "number": 25,
      "prompt": "Sistemas de controle e automação industriais enfrentam problemas de desatualização de maneira distinta que seus pares não fabris. Atualizar um sistema informacional qualquer depende apenas da escolha de horário, para reduzir eventuais impactos sobre usuários conectados. Sistemas de controle industrial, por sua vez, exigem paradas de máquina, que devem ser programadas com antecedência. O mesmo fenômeno ocorre com os hardwares de controle, obrigando a convivência da rede com equipamentos e aplicações antigos. Fonte: Rota de Aprendizagem 5 (Tema: Atualização de sistemas). Com base no texto fornecido e nos estudos realizados na disciplina, qual é o principal impacto das atualizações mal planejadas em sistemas operacionais e equipamentos?",
      "alternatives": [
        {
          "letter": "A",
          "text": "O aumento da eficiência e redução dos custos operacionais definidos exclusivamente pelo gestor."
        },
        {
          "letter": "B",
          "text": "O efeito negativo na produção e na qualidade dos produtos, caso as paradas não sejam bem planejadas."
        },
        {
          "letter": "C",
          "text": "A implementação de novas tecnologias sem necessidade de planejamento ou estudo técnico."
        },
        {
          "letter": "D",
          "text": "A otimização dos sistemas de controle sem afetar o funcionamento da produção ou a logística reversa."
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta: O efeito negativo na produção e na qualidade dos produtos, caso as paradas não sejam bem planejadas. O texto da aula, destaca que as atualizações mal planejadas podem afetar tanto a produção quanto a qualidade dos produtos.",
      "source": "Rota de Aprendizagem 5 (Tema: Atualização de sistemas)."
    },
    {
      "id": "q6_26",
      "number": 26,
      "prompt": "No levantamento das fraquezas, como comentamos como comentamos em nossas aulas, a ideia é investigar as fragilidades do processo de preservação da segurança, em busca de possíveis incidentes de comprometimento. Esse comprometimento é, entretanto, apenas potencial. Será necessário contar com um agente capaz de explorar a vulnerabilidade, e assim encontramos uma ameaça possível. Meditando sobre esse conceito, podemos concluir que uma ameaça pode ser voluntária, involuntária ou natural. (Texto adaptado). Fonte: Rota de Aprendizagem 4 (Tema: Vulnerabilidade e ameaças). Com base no texto acima e no conteúdo estudado na disciplina, análise a alternativa sobre qual das alternativas a seguir melhor define o conceito de ameaça?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A certeza de que um ataque acontecerá caso uma vulnerabilidade seja identificada."
        },
        {
          "letter": "B",
          "text": "Um risco hipotético, sem qualquer relação com a exploração real de vulnerabilidades."
        },
        {
          "letter": "C",
          "text": "A possibilidade de exploração de uma vulnerabilidade por um agente específico."
        },
        {
          "letter": "D",
          "text": "Um problema técnico que compromete diretamente a confidencialidade da informação."
        }
      ],
      "answer": "C",
      "explanation": "A resposta correta é: A possibilidade de exploração de uma vulnerabilidade por um agente específico. De acordo com o enunciado, a ameaça é a possibilidade real de exploração de uma vulnerabilidade.",
      "source": "Rota de Aprendizagem 4 (Tema: Vulnerabilidade e ameaças)."
    },
    {
      "id": "q6_27",
      "number": 27,
      "prompt": "Sabemos que vulnerabilidades são fraquezas no processo de preservação das características seguras da informação, capazes de gerar incidentes de comprometimento. A análise ou o levantamento de vulnerabilidades é uma atividade essencial para suportar os sistemas de preservação da segurança. Essa prática exige, do profissional, experiência no negócio e boa capacitação técnica. Fonte: Rota de Aprendizagem 4 (Tema: Vulnerabilidade e ameaças). Com base no exposto e na disciplina Sistemas de Segurança da Informação, identifique qual é o principal objetivo da análise de vulnerabilidades?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Identificar e classificar potenciais fragilidades nos sistemas e processos."
        },
        {
          "letter": "B",
          "text": "Garantir que um sistema esteja 100% seguro contra-ataques externos."
        },
        {
          "letter": "C",
          "text": "Substituir a necessidade de outras medidas de segurança, como criptografia."
        },
        {
          "letter": "D",
          "text": "Bloquear automaticamente qualquer tentativa de exploração por atacantes."
        }
      ],
      "answer": "A",
      "explanation": "A resposta correta é: Identificar e classificar potenciais fragilidades nos sistemas e processos. A análise de vulnerabilidades tem como objetivo reconhecer e categorizar possíveis falhas que podem comprometer a segurança da informação.",
      "source": "Rota de Aprendizagem 4 (Tema: Vulnerabilidade e ameaças)."
    },
    {
      "id": "q6_28",
      "number": 28,
      "prompt": "Comentamos anteriormente e nossas aulas, que o entendimento de complexos conjuntos de dados, como os presentes em uma base de dados de clientes e prospects, pode ser enfrentado por algoritmos de IA. Fonte: Rota de Aprendizagem 5 (Tema: Machine Learning (ML)). Com base no texto fornecido e nos estudos anteriormente realizados na disciplina, escolha a alternativa que melhor representa o que os algoritmos inteligentes de Machine Learning (ML) são capazes de fazer?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Organizar os dados de forma a gerar relatórios de performance."
        },
        {
          "letter": "B",
          "text": "Criar uma árvore de busca ou um conjunto de regras."
        },
        {
          "letter": "C",
          "text": "Armazenar grandes volumes de dados para consultas rápidas."
        },
        {
          "letter": "D",
          "text": "Classificar os dados sem necessidade de tratamentos prévios."
        }
      ],
      "answer": "B",
      "explanation": "A resposta correta é: Criar uma árvore de busca ou um conjunto de regras, isso para entender características dos dados tratados. De acordo com o texto da aula 05, algoritmos inteligentes de ML são capazes de criar uma árvore de busca ou um conjunto de regras com base em dados tratados para entender determinadas características destes dados.",
      "source": "Rota de Aprendizagem 5 (Tema: Machine Learning (ML))."
    },
    {
      "id": "q6_29",
      "number": 29,
      "prompt": "A norma NBR/ISO/IEC 27001, cujo título é Tecnologia da informação — Técnicas de segurança — Sistemas de gestão da segurança da informação — Requisitos, foi criada em 2005, no ISO, pela adaptação de um padrão britânico (BS7799) que elencava boas práticas de segurança da informação. Segundo Kolbe (2017, p. 176), o princípio geral da norma “é a adoção de um conjunto de processos, controles e requisitos que visam à gerência de riscos de uma organização”. Desta forma, a 27001 proporciona a adequação de melhores práticas na criação de um sistema de gestão de segurança de dados para cada negócio e porte empresarial. Fonte: Rota de Aprendizagem 6 (NORMA NBR/ISO/IEC 27001). Qual é a base fundamental da norma NBR/ISO/IEC 27001?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A base da norma é um procedimento comum em processos de gestão de qualidade, o ciclo de melhoria contínua, ou PDCA."
        },
        {
          "letter": "B",
          "text": "A base da norma é a criação de um plano de segurança inicial, sem foco na melhoria contínua."
        },
        {
          "letter": "C",
          "text": "A base da norma é um conjunto de regras rígidas para o controle de dados sensíveis."
        },
        {
          "letter": "D",
          "text": "A base da norma é a utilização exclusiva de criptografia avançada."
        }
      ],
      "answer": "A",
      "explanation": "A resposta correta é: A base da norma é um procedimento comum em processos de gestão de qualidade, o ciclo de melhoria contínua, ou PDCA. A resposta correta é diretamente extraída do texto, que diz: \"tem por base um procedimento comum em processos de gestão de qualidade, o ciclo de melhoria contínua, ou PDCA.\"",
      "source": "Rota de Aprendizagem 6 (Recomendações da Norma)."
    },
    {
      "id": "q6_30",
      "number": 30,
      "prompt": "Standardization Organization) é uma organização não governamental que congrega a opinião técnica de profissionais voluntários na busca de padrões consensuais para os mais diversos aspectos científicos e de mercado. A ela se vinculam 167 associações nacionais voltadas a padronização de procedimentos (ISO, 2022). Fonte: Rota de Aprendizagem 6 (Normas ISO). De acordo com o texto e com os conteúdos abordados em nossas aulas, qual é a principal recomendação de todas as normas da família ISO 27000 sobre segurança da informação?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Todas as normas recomendam a criação de um sistema de gestão de segurança da informação, visando à melhoria contínua para garantir a segurança."
        },
        {
          "letter": "B",
          "text": "Todas as normas recomendam a implementação de tecnologias específicas para garantir a segurança da informação."
        },
        {
          "letter": "C",
          "text": "Todas as normas recomendam que as empresas adotem sistemas de monitoramento externo para a proteção dos dados."
        },
        {
          "letter": "D",
          "text": "Todas as normas recomendam a contratação de consultores externos para garantir a segurança das informações."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta: Todas as normas recomendam a criação de um sistema de gestão de segurança da informação, focado na melhoria contínua, como forma de garantir a segurança das informações e sistemas, independentemente do porte ou modelo de gestão da organização.",
      "source": "Rota de Aprendizagem 6 (Normas ISO)."
    }
  ]
};


const AULA07 = {
  "id": "aula07",
  "title": "Sistemas de Informações Gerenciais",
  "shortTitle": "Sistemas Gerenciais",
  "description": "SAD, SIG, Business Intelligence, tomada de decisão e gestão da informação.",
  "accent": "#16a34a",
  "icon": "📊",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q7_1",
      "number": 1,
      "prompt": "Alguns gerentes são “super usuários” e analistas de negócios interessados, que desejam criar seus próprios relatórios e utilizar modelos e análise sofisticados para encontrar padrões nos dados, modelar cenários de negócios alternativos ou testar hipóteses específicas. LAUDON, K. C.; LAUDON, J.P. Sistemas de Informação Gerenciais. revisão técnica Belmiro do Nascimento João; [tradução Célia Taniwaki]. – São Paulo: Pearson Education do Brasil, 2014. (adaptado). Abaixo, assinale a alternativa que apresenta os sistemas que compõem a plataforma de entrega de inteligência empresarial para essa categoria de usuários.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Data Warehouse"
        },
        {
          "letter": "B",
          "text": "SAE (Sistema de Apoio à Executivos)"
        },
        {
          "letter": "C",
          "text": "B.I. (Business Intelligence)"
        },
        {
          "letter": "D",
          "text": "SAD (Sistema de Apoio à Decisão)"
        }
      ],
      "answer": "D",
      "explanation": "SAD - Sistema de Apoio à Decisão (Rota 3. Pág. 6). São softwares que permitem fazer modelagem de problemas. Com recursos para ajudar na solução de cenários complexos e com dados não estruturados.",
      "source": "Rota 3. Pág. 6"
    },
    {
      "id": "q7_2",
      "number": 2,
      "prompt": "Dados são coletados em grande quantidade e seu formato não é adequado para utilização direta. Para resolver esse problema, os dados devem passar por uma reformatação, de maneira que seus utilizadores os interpretem mais facilmente e consigam ser convertidos em informações úteis. Leia as frases a seguir e assinale V para verdadeiro e F para falso.\n( ) Na fase de filtragem os dados são coletados de fontes internas e externas.\n( ) No processo de reformatação dos dados são empregadas três fases: coleta, filtragem e processamento.\n( ) Na fase de processamento são realizadas as totalizações, sumarização, percentuais e médias.\nAssinale a alternativa que corresponde as respostas CORRETAS.",
      "alternatives": [
        {
          "letter": "A",
          "text": "V, F, V"
        },
        {
          "letter": "B",
          "text": "V, F, F"
        },
        {
          "letter": "C",
          "text": "F, V, V"
        },
        {
          "letter": "D",
          "text": "F, F, V"
        }
      ],
      "answer": "A",
      "explanation": "(V,F,V) ROTA 1, p. 10 e 11. A reformatação de dados ocorre por meio de três fases: filtragem, processamento e apresentação. Na fase de filtragem ocorre a seleção dos dados relevantes para a análise. Na fase de processamento ocorrem as totalizações, sumarização, percentuais e médias.",
      "source": "ROTA 1, p. 10 e 11"
    },
    {
      "id": "q7_3",
      "number": 3,
      "prompt": "O usuário necessita de senha para acessar informações e esqueceu a senha de acesso ao sistema. O sistema não pode informar a senha sem ter a certeza de que a pessoa que está perguntando é a pessoa que esqueceu a senha, porque o sistema ficaria vulnerável. Um aspecto importante a ser considerado é sobre a segurança necessária ao se tratar com guarda e disponibilização de informações. Considerando a importância das informações para as organizações, leia as frases a seguir:\nI. As informações devem circular nas empresas.\nII. Os colaboradores de áreas operacionais não necessitam de informações para executar suas tarefas.\nIII. Os sistemas de informações não devem ser transparentes para garantir a segurança das informações.\nEstão corretas as frases:",
      "alternatives": [
        {
          "letter": "A",
          "text": "I apenas"
        },
        {
          "letter": "B",
          "text": "II apenas"
        },
        {
          "letter": "C",
          "text": "III apenas"
        },
        {
          "letter": "D",
          "text": "II e III apenas"
        }
      ],
      "answer": "A",
      "explanation": "I. As informações devem circular nas empresas, caso contrário elas não têm sentido. II. Os colaboradores de áreas operacionais também dependem de informações para executar suas atividades. III. Os sistemas de informação devem ser eficazes e transparentes.",
      "source": "Rota 1, página 5"
    },
    {
      "id": "q7_4",
      "number": 4,
      "prompt": "Para administrar, era preciso informações: informações sobre cada trabalhador, suas tarefas, seus horários, sua produtividade, sobre o produto e suas características etc. Mas essa informação ainda não era fator de produção. Com a produção mecanizada, a produtividade em níveis mais altos e o custo em níveis mais baixos, o mercado passou de vendedor a comprador. Com a concorrência em alta e um consumidor mais exigente e específico, fatores antes inexistentes começaram a influenciar na produção: a qualidade do produto e os desejos e preferências do consumidor. A economia de serviço começava a ser mais importante que a economia do produto. Fonte: MIRANDA, Silvânia Vieira. Identificando competências informacionais. Ciência da informação, v. 33, n. 2, p. 112-122, 2004. Considerando as ideias do texto acima, que destaca a importância da informação para as organizações, avalie as afirmações a seguir.\nI. O volume de dados passou a crescer exponencialmente, cresce a cada dia mais. A gestão dessas informações é uma atividade simples, podendo ser realizada sem o suporte de tecnologia.\nII. Com a chegada da era da informação, a sua gestão, a gestão do conhecimento e do capital intelectual, passou a ser uma preocupação das organizações.\nIII. Muitas organizações passaram a fazer seus planejamentos estratégicos baseados na gestão da informação e nos sistemas de informação, pois trata-se de uma fator-chave de sucesso.\nÉ correto o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II, apenas"
        },
        {
          "letter": "B",
          "text": "III, apenas"
        },
        {
          "letter": "C",
          "text": "I e III"
        },
        {
          "letter": "D",
          "text": "II e III"
        }
      ],
      "answer": "D",
      "explanation": "I. FALSO. A gestão dessas informações é uma atividade complexa, necessitando do suporte de tecnologia. II. VERDADEIRO. III. VERDADEIRO.",
      "source": "Rota 3, página 9"
    },
    {
      "id": "q7_5",
      "number": 5,
      "prompt": "Em se tratando de informações, uma empresa precisa ter a segurança e o controle como prioridades. A segurança abarca as políticas, os procedimentos e as medidas técnicas usadas para impedir acesso não autorizado, alteração, roubo ou danos físicos a sistemas de informação. LAUDON, K. C.; LAUDON, J.P. Sistemas de Informação Gerenciais. revisão técnica Belmiro do Nascimento João ; [tradução Célia Taniwaki]. – São Paulo: Pearson Education do Brasil, 2014. (Adaptado). Considerando as ideias do texto, analise a seguinte situação hipotética. Uma empresa possui políticas que definem os critérios do acesso às informações, como exemplo de uma de suas políticas, a empresa optou por não disponibilizar para quem trabalha na linha de produção os dados dos clientes. Com base nessas informações, avalie as asserções a seguir e a relação proposta entre elas.\nI. A empresa tomou uma decisão assertiva, pois esses colaboradores não têm contato com os clientes. Informações de clientes servem para uso dos colaboradores e setores que necessitam fazer contatos com clientes.\nPORQUE\nII. Não se trata de censura ou algo do tipo, mas sim de preservar informações importantes, que devem ser divulgadas a quem interessa e no momento certo para que não prejudique as atividades e planejamento da organização.\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        }
      ],
      "answer": "A",
      "explanation": "Assertiva I é verdadeira. Cada colaborador precisa das informações úteis e necessárias para suas atividades, não de informações desnecessárias para que ele cumpra suas tarefas. A II justifica a I, pois as informações devem ser disponibilizadas a quem interessa e no momento certo.",
      "source": "Rota 1, página 5 e 6"
    },
    {
      "id": "q7_6",
      "number": 6,
      "prompt": "Um gestor, diretor ou qualquer pessoa que ocupe um cargo de comando em uma empresa, tem como atribuição tomar decisões. Considerando o processo de tomada de decisão leia as frases a seguir:\nI. As informações puras e simples são suficientes para fundamentar as decisões tomadas.\nII. As informações precisam ser analisadas para ser apresentadas aos gestores de forma correta.\nIII. As informações têm que ser disponibilizadas de maneira igual em todos níveis hierárquicos.\nIV. As atividades gerenciais involvem a busca e o tratamento das informações.\nÉ CORRETO o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II e III somente"
        },
        {
          "letter": "B",
          "text": "II e IV somente"
        },
        {
          "letter": "C",
          "text": "III e IV somente"
        },
        {
          "letter": "D",
          "text": "I, II e III"
        }
      ],
      "answer": "B",
      "explanation": "As informações pura e simples não bastam. As atividades gerenciais, nas grandes corporações ou nas pequenas e médias empresas, envolvem a busca e o tratamento de informações. As informações requerem análises prévias para que sejam apresentadas aos decisores de modo correto, a fim de que se propicie a melhor tomada de decisão possível. Quanto aos níveis de gerência: estratégico, tático e operacional. Cada um desses níveis olha e tem informações diferentes.",
      "source": "Rota 1, página 4"
    },
    {
      "id": "q7_7",
      "number": 7,
      "prompt": "A United Parcel Service (UPS) tornou-se a maior empresa mundial de distribuição de encomendas, por via terrestre e por via aérea. Hoje é uma organização global, com cerca de 400 mil empregados, 96 mil veículos e a nona maior companhia aérea do mundo. Manteve a liderança investindo pesado em tecnologia de informação avançada. Tudo começa com a etiqueta com código de barras colada a um pacote, que contém informações detalhadas sobre o remetente, o destino e a data prevista de entrega. Os clientes podem baixar e imprimir suas próprias etiquetas usando um software especial fornecido pela UPS ou acessando o site da empresa. As informações da etiqueta “inteligente” são transmitidas a uma das redes de computadores da UPS e enviadas ao centro de distribuição mais próximo de seu destino. Os entregadores nesses centros copiam os dados da etiqueta e utilizam um software especial para criar a rota de entrega mais eficiente para cada motorista, considerando o tráfego, as condições climáticas, bem como a localização de cada parada. As informações de rastreamento do pacote são, então, transmitidas para a rede de computadores da UPS para armazenagem e processamento. A partir daí, as informações podem ser acessadas de qualquer lugar do mundo, tanto para fornecer protocolo de entrega aos clientes quanto para responder às suas consultas. LAUDON, K. C.; LAUDON, J.P. Sistemas de Informação Gerenciais. revisão técnica Belmiro do Nascimento João ; [tradução Célia Taniwaki]. – São Paulo: Pearson Education do Brasil, 2014. Em relação a esse texto, avalie as afirmações a seguir.\nI. O sistema recebe entradas de algum ambiente (externo ou interno) e essas entradas não influenciam o sistema.\nII. O sistema compõe-se de entrada e saída, sem necessidade de realimentação.\nIII. O sistema tem elementos que processam as entradas das informações e as transformam em saídas.\nÉ correto apenas o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II somente."
        },
        {
          "letter": "B",
          "text": "III somente."
        },
        {
          "letter": "C",
          "text": "I e III."
        },
        {
          "letter": "D",
          "text": "I e II."
        }
      ],
      "answer": "B",
      "explanation": "I. O sistema recebe entradas de algum ambiente (externo ou interno) e essas entradas influenciam o sistema. II. O sistema compõe-se de entrada e saída. O sistema da UPS necessita de realimentação, que são as entradas dos dados dos clientes. III. O sistema tem elementos que processam as entradas das informações e as transformam em saídas.",
      "source": "Rota 2, página 4"
    },
    {
      "id": "q7_8",
      "number": 8,
      "prompt": "A necessidade de tomar decisões não estão restritas aos níveis hierárquicos superiores. Atualmente, colaboradores de níveis mais baixos são responsáveis por algumas dessas decisões na medida em que os sistemas de informação tornam os dados disponíveis para as camadas mais elementares da empresa. Cada um desses níveis tem diferentes necessidades de informação para apoiar suas decisões e é responsável por diferentes tipos de decisão. A tomada de decisão envolve o processo decisório. Segundo Herbert Simon (apud FURTADO, Rota 2), o processo decisório envolve as etapas:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Análise, testes, verificação e conclusão."
        },
        {
          "letter": "B",
          "text": "Planejamento, análise, comportamento e seleção."
        },
        {
          "letter": "C",
          "text": "Inteligência, concepção, seleção e revisão."
        },
        {
          "letter": "D",
          "text": "Análise, planejamento, seleção e execução."
        }
      ],
      "answer": "C",
      "explanation": "Herbert Simon, em seu livro Comportamento Administrativo: um estudo do processo decisório nas organizações, afirma que o processo decisório é composto por quatro etapas: inteligência, concepção, seleção e revisão.",
      "source": "Rota 2, p. 11 e 12"
    },
    {
      "id": "q7_9",
      "number": 9,
      "prompt": "As TICs – Tecnologias da Informação e Comunicação - são utilizadas das mais diversas formas, na indústria (no processo de automação), no comércio (no gerenciamento, nas diversas formas de publicidade), no setor de investimentos (informação simultânea, comunicação imediata) e na educação (no processo de ensino aprendizagem, na Educação a Distância). O desenvolvimento de hardwares e softwares garante a operacionalização da comunicação e dos processos decorrentes em meios virtuais. No entanto, foi a popularização da internet que potencializou o uso das TICs em diversos campos. A democratização da informação, aliada à inclusão digital, pode se tornar um marco dessa civilização. Contudo, é necessário que se diferencie informação de conhecimento. Sem dúvida, vivemos na Era da Informação. Fonte:Thais Pacievitch. Disponível em: https://www.infoescola.com/informatica/tecnologia-da-informacao-e-comunicacao/. Acesso em: 14/02/2021. No texto acima, a autora cita as aplicações das TICs e explica que foi a popularização da internet que potencializou o uso das TICs em diversas áreas. Abaixo selecione a alternativa que é uma definição de Tecnologia da Informação e Comunicação – TIC.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Conjunto de grandes datacenters e a computação em nuvem para armazenamento das informações."
        },
        {
          "letter": "B",
          "text": "Conjunto formado por hardware, software, tecnologia de armazenamento e tecnologia de comunicações."
        },
        {
          "letter": "C",
          "text": "Conjunto formado pelos gigantes da tecnologia Google, Amazon e Microsoft."
        },
        {
          "letter": "D",
          "text": "Conjunto de tecnologias de cabeamento de redes e redes de dados."
        }
      ],
      "answer": "B",
      "explanation": "Conjunto formado por hardware, software, tecnologia de armazenamento e tecnologia de comunicações.",
      "source": "Rota 3, página 3"
    },
    {
      "id": "q7_10",
      "number": 10,
      "prompt": "Conforme Laudon e Laudon (2010) e Abreu e Rezende (2013), as informações se apresentam em diferentes tipos e formatos, dependendo do Nível funcional e dos contextos de decisão vivenciadas pelos gestores. A respeito do contexto de informações, decisões e níveis gerenciais, relacione a primeira coluna com a segunda:\n(1) Nível operacional\n(2) Nível tático ou gerencial\n(3) Nível Estratégico\n( ) Empresa decide diversificar seus segmentos de negócios.\n( ) Fazer manutenção periódica num equipamento.\n( ) Projetar vendas para o próximo trimestre.\n( ) Decide a data de lançamento de modelo de carro novo.\n( ) Necessita combinar e analisar informações numéricas e qualitativas em conjunto.\n( ) Tomar decisões complexas e incertas.\n( ) Gerenciar a produção de 1.000 carros diários.\nAssinale a opção com a resposta CORRETA:",
      "alternatives": [
        {
          "letter": "A",
          "text": "3-1-2-2-2-3-1"
        },
        {
          "letter": "B",
          "text": "1-1-2-3-3-1-2"
        },
        {
          "letter": "C",
          "text": "3-1-1-2-2-1-3"
        },
        {
          "letter": "D",
          "text": "2-3-1-2-2-1-3"
        }
      ],
      "answer": "A",
      "explanation": "Nos níveis operacionais, as situações são mais previsíveis, que ocorrem diariamente e as decisões costumam ter efeitos imediatos. Nesse nível as informações em geral são quantitativas... No nível médio (tático), as informações não são apenas compostas de números. É comum também que existam informações qualitativas... No nível estratégico as decisões são bem mais complexas e incertas...",
      "source": "Rota 1, página 4 e 5"
    },
    {
      "id": "q7_11",
      "number": 11,
      "prompt": "Sistemas baseados em relatórios apoiam a tomada de decisões rotineiras de gerentes de situações operacionais. Abaixo, assinale a alternativa que apresenta os sistemas que compõem a plataforma de entrega para essa categoria de usuários.",
      "alternatives": [
        {
          "letter": "A",
          "text": "SIG (Sistemas de Informações Gerenciais)"
        },
        {
          "letter": "B",
          "text": "Data Warehouse"
        },
        {
          "letter": "C",
          "text": "SAE (Sistema de Apoio à Executivos)"
        },
        {
          "letter": "D",
          "text": "B.I. (Business Intelligence)"
        }
      ],
      "answer": "A",
      "explanation": "Os SIG se destinam a gerência das situações operacionais, com base em relatórios.",
      "source": "Rota 3. Pág. 6"
    },
    {
      "id": "q7_12",
      "number": 12,
      "prompt": "A United Parcel Service (UPS) começou sua operação em 1907, com seu escritório em um porão do tamanho de um cubículo. Jim Casey e Claude Ryan — dois adolescentes de Seattle munidos de duas bicicletas e um telefone — prometiam “o melhor serviço e o preço mais baixo”. A UPS tem usado essa fórmula com sucesso há mais de um século para se tornar a maior empresa mundial de distribuição de encomendas, por via terrestre e por via aérea. Tudo começa com a etiqueta com código de barras colada a um pacote, que contém informações detalhadas sobre o remetente, o destino e a data prevista de entrega. Os entregadores nesses centros copiam os dados da etiqueta e utilizam um software especial para criar a rota de entrega mais eficiente para cada motorista, considerando o tráfego, as condições climáticas, bem como a localização de cada parada. As informações de rastreamento do pacote são, então, transmitidas para a rede de computadores da UPS para armazenagem e processamento. A partir daí, as informações podem ser acessadas de qualquer lugar do mundo, tanto para fornecer protocolo de entrega aos clientes quanto para responder às suas consultas. LAUDON, K. C.; LAUDON, J.P. Sistemas de Informação Gerenciais. revisão técnica Belmiro do Nascimento João ; [tradução Célia Taniwaki]. – São Paulo: Pearson Education do Brasil, 2014. Com base no texto anterior, leia as asserções a seguir e a relação proposta entre elas.\nI. A administração da UPS é responsável pelos níveis e custos dos serviços de monitoração e pela promoção da estratégia da empresa, que combina baixo custo e serviço de qualidade superior. A administração decidiu usar a automação para tornar ainda mais fácil enviar uma encomenda via UPS e para verificar a situação de entrega, reduzindo assim seus custos e aumentando as receitas de vendas. A UPS tornou-se a maior empresa mundial de distribuição de encomendas, por via terrestre e por via aérea.\nPORQUE\nII. O sucesso da UPS deve-se ao uso da tecnologia utilizada. A administração da UPS considerou a tecnologia como a única dimensão do sistema de informação.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        },
        {
          "letter": "B",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição falsa, e II é uma proposição verdadeira."
        },
        {
          "letter": "D",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "B",
      "explanation": "A asserção I é verdadeira e a asserção II é falsa. Os sistemas de informações possuem três dimensões: organizações, tecnologias e pessoas. O sucesso da UPS deve-se ao fato de a administração ter considerado as três dimensões, considerando sua cultura organizacional, os clientes, os processos envolvidos e a tecnologia necessária.",
      "source": "Rota 3. Pág. 7"
    },
    {
      "id": "q7_13",
      "number": 13,
      "prompt": "Os sistemas de informações devem contar com mecanismos de segurança de acesso informacional que reproduzam as políticas de acesso à informação da empresa. Essa política determina como as informações devem ser recuperadas e distribuídas, dentro e fora da organização. Fonte: FURTADO. L., 2020. Rota de Aprendizagem 1. Sistemas de Informações. Uninter. Considerando o texto acima, leias as frases abaixo:\nI. Os fluxos informacionais perpassam do nível estratégico ao nível operacional, impactando nos processos que compõe a organização.\nII. As informações informais tem regras e canais formais para acontecerem.\nIII. As informações formais devem circular conforme regras e políticas da empresa.\nEstão corretas as frases:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II apenas"
        },
        {
          "letter": "B",
          "text": "III apenas"
        },
        {
          "letter": "C",
          "text": "II e III apenas"
        },
        {
          "letter": "D",
          "text": "I e III apenas"
        }
      ],
      "answer": "D",
      "explanation": "I. Os fluxos informacionais perpassam do nível estratégico ao nível operacional, impactando nos processos que compõe a organização. II. As informações informais não têm regras e canais formais. III. As informações formais devem circular conforme regras e políticas da empresa.",
      "source": "Rota 1, página 7"
    },
    {
      "id": "q7_14",
      "number": 14,
      "prompt": "O Walmart é o maior e mais bem sucedido varejista do mundo. Também é o maior vendedor de bens de consumo dos Estados Unidos. Ele criou um poderoso modelo de negócio baseado em uma excelente gestão da cadeia de fornecimento, que lhe permite manter preços baixos e gôndolas abastecidas. Seu sistema de reposição contínua de estoques envia pedidos de novas mercadorias diretamente aos fornecedores tão logo os consumidores paguem suas compras nos caixas. Ele não precisa gastar muito dinheiro em galpões, equipamentos e funcionários para estocar as grandes quantidades de produtos que são vendidos. O Walmart teve problemas com alimentos frescos, que constituíam 55% de seus negócios, em virtude desse tipo de produto necessitar de mais mão-de-obra para manuseio e estocagem, além do desperdício desse tipo de mercadoria. Para manter os preços competitivos, a gestão optou por não aumentar o quadro de pessoal. O Walmart implantou um novo sistema de gestão de estoque para os departamentos de produtos frescos em todo o país, que rastreia quantos dias um item esteve em trânsito, por quanto tempo poderá permanecer nas gôndolas e o que deve ser solicitado para repor os itens que estão sendo vendidos. O Walmart também está mudando as responsabilidades dos turnos de trabalho, de forma que alimentos frescos não sejam colocados nas gôndolas durante a noite e sinais sejam adicionados para ajudar os funcionários a identificar o que é fresco e o que não é. As lojas vão parar de expor produtos frescos em grandes quantidades, exibindo apenas quantidades reduzidas para demonstrar que novos produtos frescos estão chegando todo o tempo. LAUDON, K. C.; LAUDON, J.P. Sistemas de Informação Gerenciais. revisão técnica Belmiro do Nascimento João ; [tradução Célia Taniwaki]. – São Paulo: Pearson Education do Brasil, 2014. Com base no texto anterior, leia as asserções a seguir e a relação proposta entre elas.\nI. A implantação de um sistema de reposição contínua do Walmart possibilita à empresa ter operações eficientes e manter os custos de estoque os mais baixos possíveis.\nPORQUE\nII. Um sistema é um conjunto de elementos que interagem entre si, a fim de produzir um resultado específico.\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        },
        {
          "letter": "B",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição falsa, e II é uma proposição verdadeira."
        },
        {
          "letter": "D",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "A",
      "explanation": "Um sistema é um conjunto de elementos que interagem entre si, a fim de produzir um resultado específico. No caso do supermercado Walmart, é manter a liderança, ser competitivo, atender os clientes de forma ágil e com eficiência.",
      "source": "Rota 2, página 4"
    },
    {
      "id": "q7_15",
      "number": 15,
      "prompt": "Uma empresa do ramo do varejo elabora uma planilha de suas vendas. Identifica a equipe de vendas. Identifica os produtos, as metas de vendas. Apresentam informações das vendas mensais, de produtos que atingiram metas de vendas e dos que não atingiram. Realiza o tratamento de erros eventuais na planilha. Para a diretoria de vendas, informa que as vendas aumentaram 5% em relação ao mês anterior. Encaminha relatórios para os gestores das áreas pertinentes às vendas. Esse contexto apresenta ações de processamento de dados, que transformam dados em informações, que envolvem várias fases como filtragem, processamento e apresentação. As fases envolvem ações como contextualização, categorização, cálculo, correção, condensação, sumarização e roteamento. Nesse contexto leia as frases a seguir e assinale V para verdadeiro e F para falso.\n( ) Ao identificar os produtos que atingiram as metas, foi realizado uma categorização de dados.\n( ) Ao informar que as vendas aumentaram 10%, foi realizada uma contextualização de dados.\n( ) Ao realizar os cálculos necessários, como por exemplo o total de vendas de produtos, foi realizada o processamento de dados.\n( ) Ao realizar todos os cálculos da planilha foi realizado a sumarização da informação.\n( ) Ao encaminhar os relatórios para os gestores das áreas pertinentes às área de vendas, foi realizado o roteamento.\nAssinale a alternativa com as respostas CORRETAS.",
      "alternatives": [
        {
          "letter": "A",
          "text": "V, F, V, F, F"
        },
        {
          "letter": "B",
          "text": "V, F, V, F, V"
        },
        {
          "letter": "C",
          "text": "F, V, V, V, F"
        },
        {
          "letter": "D",
          "text": "F, F, V, V, F"
        }
      ],
      "answer": "B",
      "explanation": "Ao identificar os produtos que atingiram as metas, foi realizado uma categorização de dados. Verdadeiro. Ao informar que as vendas aumentaram 10%, foi realizada uma contextualização de dados. Falso. ( ) Ao realizar os cálculos necessários... Verdadeiro. ( ) Ao realizar todos os cálculos da planilha foi realizado a sumarização da informação. Falso. ( ) Ao encaminhar os relatórios... Verdadeiro.",
      "source": "ROTA 1, p. 10 a 13"
    },
    {
      "id": "q7_16",
      "number": 16,
      "prompt": "A Pitt Ohio, uma empresa de frete de US$ 700 milhões, se acostumou a pegar frete e entregá-lo aos clientes no dia seguinte. Mas graças à Amazon, os clientes esperam a entrega no mesmo dia. E eles esperam mais informações sobre seus pacotes. Usando dados históricos, análise preditiva e algoritmos que calculam uma variedade de peso de carga, distância de condução e outros fatores, em tempo real, a Pitt Ohio pode estimar o tempo que o motorista levará para chegar a um destino de entrega com uma taxa de precisão de 99%. A empresa estima que aumentou a receita por meio de pedidos repetidos (estimados em US$ 50.000 por ano) e reduziu o risco de perda de clientes (estimado em US$ 60.000 por ano). \"Há muitos dados em suas quatro paredes - seja inovador e procure maneiras desafiadoras de usá-los\", disse Sullivan. Disponível em: https://www.veradata.com.br/pt-br/blog/5-cases-de-sucesso-com-analise-de-dados-e-machine-learning. Acesso em 12/02/2021 (Adaptado). Tendo esse texto como referência e considerando a relação entre tecnologia e processos de trabalho, avalie as seguintes asserções e a relação proposta entre elas.\nI. A Pitt Ohio, para corresponder às expectativas dos clientes, optou por utilizar recursos tecnológicos: conectividade, análise de dados e aprendizagem de máquina, tornando seu serviço autômato.\nPORQUE\nII. Adotando a modernização na dinâmica do trabalho, garante maior sustentabilidade e coloca o cliente em primeiro lugar.\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa correta da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        }
      ],
      "answer": "A",
      "explanation": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
      "source": "Rota 5 , pgs 2 e 3"
    },
    {
      "id": "q7_17",
      "number": 17,
      "prompt": "Um sistema de informação (SI) pode ser definido tecnicamente como um conjunto de componentes inter-relacionados que coletam (ou recuperam), processam, armazenam e distribuem informações destinadas a apoiar a tomada de decisões, a coordenação e o controle em uma organização. Além disso, os sistemas de informação também auxiliam os gerentes e trabalhadores a analisar problemas, visualizar assuntos complexos e criar produtos. LAUDON, K. C.; LAUDON, J.P. Sistemas de Informação Gerenciais. revisão técnica Belmiro do Nascimento João; [tradução Célia Taniwaki]. – São Paulo: Pearson Education do Brasil, 2014. Com base no texto, analise a seguinte situação real: A Volkswagen México tinha em mãos o desafio de projetar e instalar a linha de montagem do novo Jetta, com $3,3 milhões, e um prazo de 21 meses. A solução para obter sucesso e atingir os objetivos, dentro do orçamento e prazo estabelecidos, seria empregar o uso de recursos tecnológicos. Fonte: Juliana Martins. Disponível em: https://vendasmarketing.wordpress.com/2015/03/15/gerenciamento-de-projetos-casos-de-sucesso/ Acesso em 25/3/2021 (adaptado). Com base nessas informações, avalie as asserções a seguir e a relação proposta entre elas.\nI. A Volkswagem deve utilizar um SIG para gestão de projetos. São sistemas que apoiam os gerentes e equipes de projetos, garantirão êxito da iniciativa e diminuirão a chance de fracassos.\nPORQUE\nII. Os SIGs utilizados para realizar a gestão de projetos permitem integrar a gestão de tarefas, e a gestão do orçamento com a gestão de colaboração, controles fundamentais para o êxito do projeto.\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        },
        {
          "letter": "B",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        },
        {
          "letter": "D",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "A",
      "explanation": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I.",
      "source": "Rota 6, página 13"
    },
    {
      "id": "q7_18",
      "number": 18,
      "prompt": "Os sistemas de informação vêm evoluindo, acompanhando o progresso da tecnologia da informação. Segundo Hirschheum e Klein (2012, p. 196), os SI tiveram até quatro gerações, cada uma influenciou as empresas na condução dos negócios. Sobre o estágio da “pré-adolescência” dos sistemas de informações, assinale a alternativa correta: Fonte: FURTADO. L., 2020. Rota de Aprendizagem 5. Sistemas de Informações. Uninter.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Neste estágio, surgiram os minicomputadores e computadores pessoais (PC). O hardware e o software ficam mais baratos e empresas de menor porte podem ter acesso à tecnologia."
        },
        {
          "letter": "B",
          "text": "Neste estágio, o objetivo era a automação dos processos financeiros, contábeis e engenharia."
        },
        {
          "letter": "C",
          "text": "Neste estágio, se popularizam as redes corporativas de dados, grande desenvolvimento de softwares, hardwares e equipamentos de telecomunicações."
        },
        {
          "letter": "D",
          "text": "Neste estágio, os bancos de dados são armazenados em servidores diversos, independente de local físico."
        }
      ],
      "answer": "A",
      "explanation": "Neste estágio, surgiram os minicomputadores e computadores pessoais (PC). O hardware e o software ficam mais baratos e empresas de menor porte podem ter acesso à tecnologia.",
      "source": "Rota 5, página 7"
    },
    {
      "id": "q7_19",
      "number": 19,
      "prompt": "Os sistemas de informação vêm evoluindo, acompanhando o progresso da tecnologia da informação. Segundo Hirschheum e Klein (2012, p. 196), os SI tiveram até quatro gerações, cada uma influenciou as empresas na condução dos negócios. Sobre o estágio da “adolescência” dos sistemas de informações, assinale a alternativa correta: Fonte: FURTADO. L., 2020. Rota de Aprendizagem 5. Sistemas de Informações. Uninter.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Neste estágio, surgiram os minicomputadores e computadores pessoais (PC). O hardware e o software ficam mais baratos e empresas de menor porte podem ter acesso à tecnologia."
        },
        {
          "letter": "B",
          "text": "Neste estágio, o objetivo era a automação dos processos financeiros, contábeis e engenharia."
        },
        {
          "letter": "C",
          "text": "Neste estágio, se popularizam as redes corporativas de dados, grande desenvolvimento de softwares, hardwares e equipamentos de telecomunicações."
        },
        {
          "letter": "D",
          "text": "Neste estágio, os bancos de dados são armazenados em servidores diversos, independente de local físico."
        }
      ],
      "answer": "C",
      "explanation": "Neste estágio, se popularizam as redes corporativas de dados, grande desenvolvimento de softwares, hardwares e equipamentos de telecomunicações.",
      "source": "Rota 5, página 7"
    },
    {
      "id": "q7_20",
      "number": 20,
      "prompt": "Os bancos de dados Não Relacionais podem ser encontrados em empresas como Amazon, Google, Netflix e Facebook. Porém, grandes sites geralmente usam uma variedade de bancos de dados, porque bancos de dados diferentes têm finalidades diferentes. Um levantamento, divulgado recentemente pelo International Data Corporation (IDC), afirma que a produção de dados dobra a cada dois anos, fato que afeta as empresas de tecnologias. Fonte: canaltech.com.br. Com base no texto anterior, leia as asserções a seguir e a relação proposta entre elas.\nI. Empresas como a Amazon, Google, Netflix e Facebook armazenam grandes quantidades de dados, com crescimento exponencial anual, por isso utilizam Banco de Dados Não Relacional.\nPORQUE\nII. Bancos de dados Não Relacionais não possuem um relacionamento rígido entre as tabelas de dados, assim são mais rápidos e trabalham com dados de vários tipos.\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa correta da I."
        },
        {
          "letter": "B",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição falsa, e II é uma proposição verdadeira."
        },
        {
          "letter": "D",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "A",
      "explanation": "Assertiva verdadeira, extraída do enunciado da questão. A II também é uma assertiva verdadeira e justifica a I.",
      "source": "Rota 4, página 7"
    },
    {
      "id": "q7_21",
      "number": 21,
      "prompt": "Os gerentes operacionais precisam de sistemas que monitorem as transações e as atividades básicas da organização, como vendas, recebimentos, depósitos em dinheiro, folhas de pagamento, decisões de crédito ou fluxo de materiais em uma fábrica. LAUDON, K. C.; LAUDON, J.P.Sistemas de Informação Gerenciais. revisão técnica Belmiro do Nascimento João; [tradução Célia Taniwaki]. – São Paulo: Pearson Education do Brasil, 2014. O exemplo acima se refere a um tipo de sistema específico, cuja sigla é:",
      "alternatives": [
        {
          "letter": "A",
          "text": "SAE"
        },
        {
          "letter": "B",
          "text": "SAD"
        },
        {
          "letter": "C",
          "text": "SPT"
        },
        {
          "letter": "D",
          "text": "B.I."
        }
      ],
      "answer": "C",
      "explanation": "O exemplo se refere ao SPT (Sistemas de Processamento de Transações).",
      "source": "Rota 6, páginas 3 e 4"
    },
    {
      "id": "q7_22",
      "number": 22,
      "prompt": "Uma grande rede de mercados norte-americana descobriu que um número razoável de compradores de fralda também comprava cerveja na véspera de finais de semana. Por meio de uma análise das transações de compra, os analistas de dados puderam perceber que os compradores eram homens que, ao comprarem fraldas para seus filhos, compravam também cerveja para consumo enquanto cuidavam das crianças e assistiam aos jogos na televisão durante o final de semana. Este exemplo ilustra a associação entre fraldas e cervejas. De acordo com a história, essa empresa utilizou o novo conhecimento para aproximar as gôndolas de fraldas e cervejas na rede de mercados, incrementando assim a venda conjunta dos dois produtos. Fonte: Ronaldo Goldschmidt e Eduardo Bezerra. Diversas técnicas são empregadas para o reconhecimento de padrões. O caso acima exposto é um exemplo do reconhecimento de um padrão de consumo. A respeito das tecnologias disponíveis, avalie as afirmações abaixo:\nI. Data Warehouse (DW) extrai dados do banco de dados interno da empresa unicamente.\nII. O OLAP analisa os dados do DW dinamicamente e de maneira multidimensional.\nIII. Data Mining explora os dados para encontrar padrões nesses dados.\nIV. O Banco de Dados relacional é multidimensional.\nÉ correto o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II e III apenas"
        },
        {
          "letter": "B",
          "text": "I e III apenas"
        },
        {
          "letter": "C",
          "text": "II e IV apenas"
        },
        {
          "letter": "D",
          "text": "III e IV apenas"
        }
      ],
      "answer": "A",
      "explanation": "I. ERRADO. O DW extrai dados de diversas fontes, internas e externas. II. CORRETO. III. CORRETO. IV. ERRADO. O Banco de Dados relacional possui apenas duas dimensões.",
      "source": "Rota 5, páginas 14 e 15"
    },
    {
      "id": "q7_23",
      "number": 23,
      "prompt": "A Samsung anunciou em 2019 a Family Hub, uma geladeira inteligente equipada com Tizen 4.0, que permite ao usuário conferir a qualquer momento o que tem dentro do eletrodoméstico, qual é a data de validade dos produtos e, além disso, criar uma programação para saber quais alimentos devem ser consumidos primeiro. O refrigerador conta com câmeras internas do recurso View Inside para que o usuário veja seu conteúdo, a posição de cada alimento e a validade, tudo isso diretamente do smartphone. Assim, o usuário pode conferir essas informações de qualquer lugar, inclusive quando estiver dentro do mercado, no momento das compras. Ao todo são três câmeras posicionadas na porta da geladeira, que fazem registros internos toda vez em que ela é aberta ou fechada. Ainda é possível conferir um histórico de alterações, que também pode ser consultado à distância. Fonte: Canal Tech. O tipo de tecnologia descrito acima que envolve refrigerador, utiliza algum tipo de sistema de informação e é conectado via web, possui o conceito:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Sistemas Especialistas."
        },
        {
          "letter": "B",
          "text": "IoT (Internet of Thinks – Internet das Coisas)."
        },
        {
          "letter": "C",
          "text": "Sistemas de Apoio Residenciais."
        },
        {
          "letter": "D",
          "text": "Sistema de Gerenciamento de Banco de Dados."
        }
      ],
      "answer": "B",
      "explanation": "Refere-se à IoT (Internet of Thinks – Internet das Coisas).",
      "source": "Rota 4, página 11"
    },
    {
      "id": "q7_24",
      "number": 24,
      "prompt": "O início da construção de um banco de dados começa com a modelagem de dados. A modelagem é a fase da definição de vários parâmetros. A respeito do modelo de dados apresentado no material da disciplina, que organiza os dados em tabelas bidimensionais contendo colunas e linhas, escolha a alternativa CORRETA:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O modelo de dados corresponde ao Banco de Dados em Rede."
        },
        {
          "letter": "B",
          "text": "O modelo de dados corresponde ao Banco de Dados Hierárquico."
        },
        {
          "letter": "C",
          "text": "O modelo de dados corresponde ao Banco de Dados em Grafos."
        },
        {
          "letter": "D",
          "text": "O modelo de dados corresponde ao Banco de Dados Relacional."
        }
      ],
      "answer": "D",
      "explanation": "O modelo de dados que organiza os dados em tabelas bidimensionais contendo colunas e linhas corresponde ao Banco de Dados Relacional.",
      "source": "Rota 4, página 12"
    },
    {
      "id": "q7_25",
      "number": 25,
      "prompt": "“A Petrobras concluiu a integração de suas áreas com o software de gestão da empresa alemã SAP, superando os obstáculos na jornada. Os cinco anos do processo de implementação custaram 260 milhões de dólares à empresa, que devem agora ser recompensados com uma economia estimada de 450 milhões de dólares (projeção para cinco anos). De acordo com a assessoria da estatal, a economia virá de substancial redução da burocracia interna e aquisições mais baratas.” O texto acima fala da experiência bem-sucedida da Petrobrás, na utilização de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Investimentos em treinamentos."
        },
        {
          "letter": "B",
          "text": "Sistemas integrados de gestão – ERP."
        },
        {
          "letter": "C",
          "text": "Terceirização de serviços."
        },
        {
          "letter": "D",
          "text": "Desfazimento de bens inservíveis."
        }
      ],
      "answer": "B",
      "explanation": "O texto fala da experiência bem-sucedida na utilização de Sistemas integrados de gestão – ERP.",
      "source": "Rota 6, página 14"
    },
    {
      "id": "q7_26",
      "number": 26,
      "prompt": "“Parcerias público-privadas, as famosas PPPs, são acordos entre os setores público e privado para a realização conjunta de determinado serviço ou obra de interesse da população. Em uma PPP, a empresa normalmente fica responsável pelo projeto, assim como seu financiamento, execução e operação. O Estado, em contrapartida, paga a empresa de acordo com o desempenho do serviço prestado. Uma vez vencido o contrato, tudo o que foi construído é do governo.” Com base no conceito acima, o Governo do Estado da Bahia contratou, em 2013, a Companhia do Metrô de Salvador, para a construção de duas linhas metroviárias no Estado, com 22 (vinte e duas) estações. Considerando que esta Companhia usará um sistema de informações gerenciais em projetos, para facilitar o acompanhamento da construção, este sistema precisará implementar:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Gestão de tarefas, orçamento e colaboração."
        },
        {
          "letter": "B",
          "text": "Gestão de marketing e vendas."
        },
        {
          "letter": "C",
          "text": "Gestão de infraestrutura de redes."
        },
        {
          "letter": "D",
          "text": "Gestão de banco de dados."
        }
      ],
      "answer": "A",
      "explanation": "O sistema precisará implementar gestão de tarefas, orçamento e colaboração.",
      "source": "Rota 6, página 13"
    },
    {
      "id": "q7_27",
      "number": 27,
      "prompt": "Quando um cliente faz um pedido, por exemplo, os dados fluem automaticamente para as partes da empresa que serão afetadas. A transação de pedido dispara uma ordem para que o depósito separe os produtos pedidos e programe o envio. O depósito, por sua vez, solicita à fábrica que reponha o que foi retirado. O departamento de contabilidade é notificado para enviar uma fatura ao cliente. A cada um desses passos, os representantes do serviço de atendimento ao cliente monitoram o andamento do pedido para manter os clientes informados. Os gerentes podem usar a informação integrada para tomar decisões mais precisas no momento apropriado com relação às operações diárias e ao planejamento a longo prazo. LAUDON, K. C.; LAUDON, J.P. Sistemas de Informação Gerenciais. O cenário acima só é possível de acontecer com o sistema:",
      "alternatives": [
        {
          "letter": "A",
          "text": "SAE"
        },
        {
          "letter": "B",
          "text": "SAD"
        },
        {
          "letter": "C",
          "text": "SPT"
        },
        {
          "letter": "D",
          "text": "ERP"
        }
      ],
      "answer": "D",
      "explanation": "O cenário acima só é possível de acontecer com o sistema ERP.",
      "source": "Rota 6, páginas 14"
    },
    {
      "id": "q7_28",
      "number": 28,
      "prompt": "Um sistema de CRM integra tecnologia e processos de negócios, para satisfazer as necessidades de clientes em qualquer interação, envolvendo a aquisição, análise e uso do conhecimento de clientes para venda mais eficiente de produtos e serviços. (Fonte: Madruga, 2010 apud FURTADO. L., 2020. Rota de Aprendizagem 6. Sistemas de Informações. Uninter.) Um sistema CRM abrange:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Marketing, vendas e atendimento."
        },
        {
          "letter": "B",
          "text": "Ofertas, atendimento e base de dados."
        },
        {
          "letter": "C",
          "text": "Atendimento, compras e clientes."
        },
        {
          "letter": "D",
          "text": "Vendas, estoque e produção."
        }
      ],
      "answer": "A",
      "explanation": "Um sistema CRM abrange marketing, vendas e atendimento.",
      "source": "Rota 6, página 10"
    },
    {
      "id": "q7_29",
      "number": 29,
      "prompt": "Os SIGs para manufatura são encontrados em indústrias. Auxiliam nas tarefas de planejamento e controle do processo de produção. São descendentes diretos dos sistemas MRP e MRP-II. A respeito dos SIGs de manufatura, avalie as assertivas abaixo:\nI. SiGs de manufatura, normalmente são módulos de sistemas ERP.\nII. O subsistema Treinamento e Desenvolvimento compõem o SIG de Manufatura.\nIII. SIGs de manufatura gerenciam também as instruções/especificação de trabalho e instalações.\nÉ correto o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "I apenas"
        },
        {
          "letter": "B",
          "text": "II apenas"
        },
        {
          "letter": "C",
          "text": "III apenas"
        },
        {
          "letter": "D",
          "text": "I e III apenas"
        }
      ],
      "answer": "D",
      "explanation": "I e III apenas. Os SiGs de manufatura normalmente são módulos de sistemas ERP e gerenciam instruções de trabalho e instalações.",
      "source": "Rota 6, páginas 11 e 12"
    },
    {
      "id": "q7_30",
      "number": 30,
      "prompt": "Os Sistemas de Informações podem ser classificados por diversos critérios. Os mais utilizados são a abrangência e o nível decisório. No primeiro, são considerados os setores da empresa atendidos pelo sistema. No segundo critério, o sistema é classificado conforme o nível organizacional no qual ele será utilizado. Fonte: FURTADO. L., 2020. Rota de Aprendizagem 5. Sistemas de Informações. Uninter. A respeito do nível decisório dos sistemas de informações, avalie as afirmações a seguir:\nI. Os Sistemas de Processamento de Transações fornecem relatórios gerenciais, um exemplo é um sistema de vendas, onde os gerentes podem observar o desempenho de vendedores e tomar decisões sobre o time de vendas ou sobre os produtos.\nII. Um exemplo de decisão de um Sistema de Informação Gerencial é a decisão de construir uma nova fábrica.\nIII. Os Sistemas de Apoio Executivo utilizam dados externos à empresa.\nIV. Os Sistemas de Apoio à Decisão utilizam soluções computacionais para das suporte às decisões complexas.\nÉ correto o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II e III apenas"
        },
        {
          "letter": "B",
          "text": "I e III apenas"
        },
        {
          "letter": "C",
          "text": "II e IV apenas"
        },
        {
          "letter": "D",
          "text": "III e IV apenas"
        }
      ],
      "answer": "D",
      "explanation": "III e IV apenas. Os Sistemas de Apoio Executivo utilizam dados externos à empresa. Os Sistemas de Apoio à Decisão utilizam soluções computacionais para das suporte às decisões complexas.",
      "source": "Rota 5, página 13"
    }
  ]
};


const AULA08 = {
  "id": "aula08",
  "title": "Tecnologias Digitais para Segurança Cibernética",
  "shortTitle": "Tecnologias Digitais",
  "description": "Certificados digitais, criptografia, redes seguras e tecnologias de proteção.",
  "accent": "#7c3aed",
  "icon": "💻",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q8_1",
      "number": 1,
      "prompt": "“Um certificado digital é uma prova de identidade no meio virtual. Podemos, desta forma, entendê-lo como uma “carteira de identidade” virtual. Esta analogia, no entanto, nos induz ao erro de imaginarmos que os certificados estariam vinculados somente a pessoas, mas, de fato, podem ser emitidos também para computadores, softwares ou empresas”. Fonte: Texto da Rota de Aprendizagem 3 (Tema: CERTIFICADOS DIGITAIS). Com base no que foi estudado na disciplina, como podemos descrever um certificado digital?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Um certificado digital é um documento físico impresso que contém a assinatura de um notário público."
        },
        {
          "letter": "B",
          "text": "Um certificado digital é um código de acesso temporário gerado para acesso a redes sociais e e-mails."
        },
        {
          "letter": "C",
          "text": "Um certificado digital é uma senha de uso único para autenticação em sistemas bancários off-line."
        },
        {
          "letter": "D",
          "text": "Podemos descrever um certificado digital como uma chave criptográfica a qual são associadas determinadas informações de validade."
        }
      ],
      "answer": "D",
      "explanation": "De maneira simplista, podemos descrever um certificado digital como uma chave criptográfica a qual são associadas determinadas informações de validade. Estas informações são importantes para que que o detentor do certificado tenha segurança quanto a vida útil de sua chave (lembre-se toda chave um dia será quebrada), assim como para que seja possível o controle da utilidade que se fará dos dados por ele certificados.",
      "source": "Texto da Rota de Aprendizagem 3 (Tema: CERTIFICADOS DIGITAIS)."
    },
    {
      "id": "q8_2",
      "number": 2,
      "prompt": "“Há poucas décadas a comunicação a distância se fazia parcamente por sistemas de radiocomunicação ou, quando necessária a transmissão de documentos, um fac simile (fax) podia ser usado. Estas primeiras comunicações digitais eram realizadas a taxas de transmissão inimagináveis na atualidade. Eram frequentes canais de comunicação, considerados de alto desempenho, com velocidade limitada a menos de um milésimo daquela que hoje temos disponível em nossos aparelhos celulares. Fenômeno equivalente ocorreu com a capacidade de processamento”. Fonte: Rota de Aprendizagem 1 (Tema: Tecnologia e Segurança). Considerando o conteúdo estudado em aula, assinale a alternativa que aponta corretamente a denominação do primeiro computador comercial:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O primeiro computador comercial, denominado Eniac, ocupava um andar inteiro de um prédio."
        },
        {
          "letter": "B",
          "text": "O primeiro computador comercial, denominado Apple iMac G3, ocupava um andar inteiro de um prédio."
        },
        {
          "letter": "C",
          "text": "O primeiro computador comercial, denominado Compaq Presario 5170, ocupava um andar inteiro de um prédio."
        },
        {
          "letter": "D",
          "text": "O primeiro computador comercial, denominado IBM ThinkPad 600, ocupava um andar inteiro de um prédio."
        }
      ],
      "answer": "A",
      "explanation": "O primeiro computador comercial, denominado Eniac, ocupava um andar inteiro de um prédio.",
      "source": "Rota de Aprendizagem 1 (Tema: Tecnologia e Segurança)."
    },
    {
      "id": "q8_3",
      "number": 3,
      "prompt": "Naturalmente, você já ouviu falar da memória disponível em dispositivos microprocessados, como um aparelho de telefonia celular digital. Uma memória de acesso randômico com algumas dezenas de gigabytes (GB) é um bom indicativo de que há espaço suficiente para armazenar suas informações no equipamento. (Texto adaptado). Fonte: Texto da Rota de Aprendizagem 2 (Tema: REPRESENTAÇÃO DE NÚMEROS EM MÁQUINAS COMPUTACIONAIS). Considerando o conteúdo estudado em aula, assinale a alternativa que indica corretamente o termo técnico utilizado para se referir à memória disponível em um dispositivo microprocessado, como um celular digital:",
      "alternatives": [
        {
          "letter": "A",
          "text": "SDS - Solid State Drive."
        },
        {
          "letter": "B",
          "text": "RAM - Random Access Memory."
        },
        {
          "letter": "C",
          "text": "GPU - Graphics Processing Unit."
        },
        {
          "letter": "D",
          "text": "HDR - Hard Disk Drive."
        }
      ],
      "answer": "B",
      "explanation": "De acordo com o conteúdo estudado em aula, uma memória disponível (tecnicamente chamada de RAM – Randomic Access Memory, ou memória de acesso randômico) de algumas dezenas de gigabytes (GB) é um indicativo de bom espaço para guardar suas informações no equipamento.",
      "source": "Texto da Rota de Aprendizagem 2 (Tema: REPRESENTAÇÃO DE NÚMEROS EM MÁQUINAS COMPUTACIONAIS)."
    },
    {
      "id": "q8_4",
      "number": 4,
      "prompt": "Como evidenciamos durante as nossas aulas, no que se refere a manutenção das características seguras da informação, a criptografia é uma boa forma de manter a confidencialidade e privacidade, da mesma forma que técnicas hash permitem conservar a autenticidade e integridade. A assinatura eletrônica é uma ferramenta importante para garantir o não repúdio à mensagem. (Texto adaptado). Fonte: Texto da Rota de Aprendizagem 3 (Tema: HASH, CRIPTOGRAFIA E ASSINATURA ELETRÔNICA). De acordo com o texto acima e com os estudos realizados na disciplina, assinale a alternativa correta acerca da assinatura eletrônica:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Podemos descrever a assinatura eletrônica como uma cifra (ou mesmo um hash) obtida por operação matemática entre os dados, a serem assinados, e uma chave."
        },
        {
          "letter": "B",
          "text": "A assinatura eletrônica é uma cifra gerada sem utilizar qualquer tipo de chave ou operação matemática com os dados a serem assinados."
        },
        {
          "letter": "C",
          "text": "A assinatura eletrônica é um método que simplesmente adiciona uma etiqueta visual aos documentos sem utilizar operações matemáticas ou chaves."
        },
        {
          "letter": "D",
          "text": "A assinatura eletrônica é obtida através da combinação física dos dados com uma chave de segurança, sem o uso de operações matemáticas ou algoritmos."
        }
      ],
      "answer": "A",
      "explanation": "Podemos descrever a assinatura eletrônica como uma cifra (ou mesmo um hash) obtida por operação matemática entre os dados, a serem assinados, e uma chave. Esta chave, geralmente, permanecerá conhecida somente pelo signatário. O destinatário, por sua vez, receberá uma segunda chave de decodificação da mensagem. Se a decodificação for possível, o receptor terá, além do acesso à mensagem, também a segurança de que a mensagem pertence ao remetente.",
      "source": "Texto da Rota de Aprendizagem 3 (Tema: HASH, CRIPTOGRAFIA E ASSINATURA ELETRÔNICA)."
    },
    {
      "id": "q8_5",
      "number": 5,
      "prompt": "“As técnicas criptográficas são procedimentos eminentemente matemáticos que transformam os dados pelo uso de algoritmos, que os combinam com senhas (ditas chaves criptográficas) de maneira complexa. Essa combinação torna os dados originais (chamados de texto plano em criptografia) ininteligíveis para aqueles que desconhecem o algoritmo e a chave”. Fonte: Texto da Rota de Aprendizagem 2 (Tema: INTRODUÇÃO À CRIPTOGRAFIA). Com base nos estudos realizados em aula, qual é o termo utilizado para descrever o processo de decodificação realizado à revelia dos proprietários da informação, seja de forma maliciosa ou não? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Descriptografia autorizada."
        },
        {
          "letter": "B",
          "text": "Cifragem maliciosa."
        },
        {
          "letter": "C",
          "text": "Criação de novas chaves de criptografia."
        },
        {
          "letter": "D",
          "text": "Quebra da criptografia."
        }
      ],
      "answer": "D",
      "explanation": "O processo oposto à cifragem, quando regularmente realizado, é denominado decifragem (ou descriptografia, decodificação ou descriptação). Se a decodificação ocorrer à revelia dos proprietários da informação, seja de forma maliciosa ou não, receberá a denominação de quebra da criptografia.",
      "source": "Texto da Rota de Aprendizagem 2 (Tema: INTRODUÇÃO À CRIPTOGRAFIA)."
    },
    {
      "id": "q8_6",
      "number": 6,
      "prompt": "“Com a evolução da computação, que permite a realização quase que instantânea de cálculos matemáticos de certa complexidade, a criptografia ganhou contornos menos simplistas. Atualmente, as técnicas criptográficas não são criadas para que permaneçam sigilosas. Abandonamos, portanto, a ideia de criptografia imune a quebra. Sabemos, agora, que todo algoritmo é, ou será, público, e toda cifra será, em dado momento, quebrada”. Fonte: Texto da Rota de Aprendizagem 2 (CRIPTOGRAFIA NA ATUALIDADE). De acordo com o estudado na disciplina, qual é o objetivo principal dos criptógrafos da atualidade ao desenvolver novas cifras? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Produzir cifras que nunca possam ser quebradas."
        },
        {
          "letter": "B",
          "text": "Produzir cifras que sejam quebráveis em um tempo suficientemente longo."
        },
        {
          "letter": "C",
          "text": "Produzir cifras que possam ser quebradas por qualquer pessoa."
        },
        {
          "letter": "D",
          "text": "Produzir cifras que não possam ser decifradas nem pelos proprietários dos dados."
        }
      ],
      "answer": "B",
      "explanation": "Partindo dos novos paradigmas, os criptógrafos da atualidade buscam produzir cifras que sejam quebráveis em um tempo suficientemente longo. Dito de outra forma, o processo ideal é aquele no qual a quebra da cifra se dará quando os dados cifrados perderem seu valor para seus proprietários ou para o agente malicioso.",
      "source": "Texto da Rota de Aprendizagem 2 (CRIPTOGRAFIA NA ATUALIDADE)."
    },
    {
      "id": "q8_7",
      "number": 7,
      "prompt": "“Barreto et al. (2018, p. 24) nos ensina que o ciclo de vida é, de fato, um histórico da informação, desde o momento de sua criação até sua morte. Segundo os autores, o ciclo de vida descreve, entre  outros eventos, as mudanças quanto à relevância da informação para seus detentores, identificando a perda de valor e a necessidade de eventual descarte”. Fonte: Texto da Rota de Aprendizagem 3 (CICLO DE VIDA DA INFORMAÇÃO). Considerando o conteúdo estudado em aula e o texto da rota de aprendizagem, assinale a alternativa correta acerca da fase de Descarte:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O dado armazenado pode ser solicitado para vários ciclos de consumo. Alguns destes consumos podem gerar novos dados de maior sutileza ou grau de análise. Haverá um momento, entretanto, no qual o dado não terá mais utilidade para seu proprietário."
        },
        {
          "letter": "B",
          "text": "O dado, após transitar pela rede, será entregue para a máquina que o solicitou para que o processe. Esse processamento é chamado, tecnicamente, de Descarte."
        },
        {
          "letter": "C",
          "text": "Quando um dado for demandado, será necessário localizá-lo no depositário em que se encontrar e fazê-lo transitar, pela rede, até que se encontre o demandante; o nome desse processo é descarte."
        },
        {
          "letter": "D",
          "text": "Adquirido o dado, ou criado por manipulação, deverá ele ser arquivado, fisicamente, para uso futuro; o nome desse processo é descarte."
        }
      ],
      "answer": "A",
      "explanation": "O dado armazenado pode ser solicitado para vários ciclos de consumo. Alguns destes consumos podem gerar novos dados de maior sutileza ou grau de análise. Haverá um momento, entretanto, no qual o dado não terá mais utilidade para seu proprietário.",
      "source": "Texto da Rota de Aprendizagem 3 (CICLO DE VIDA DA INFORMAÇÃO)."
    },
    {
      "id": "q8_8",
      "number": 8,
      "prompt": "“O uso de nibles, com o meteórico crescimento da capacidade computacional, havia caído em absoluto desuso, mas a internet das coisas (IoT) com seus dispositivos de baixo custo e eletrônica reduzida, fomentaram sua ressurreição”. Fonte: Rota de Aprendizagem 1 (Tema: NIBLE, BYTE, WORD...). De acordo com o material estudado em aula, assinale a alternativa correta acerca do tamanho de um nible:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Um nible é formado por 4 bits."
        },
        {
          "letter": "B",
          "text": "Um nible é formado por 8 bits."
        },
        {
          "letter": "C",
          "text": "Um nible é formado por 16 bits."
        },
        {
          "letter": "D",
          "text": "Um nible é formado por 32 bits."
        }
      ],
      "answer": "A",
      "explanation": "O menor conjunto considerado é o nible, formado pela associação de 4 bits.",
      "source": "Rota de Aprendizagem 1 (Tema: NIBLE, BYTE, WORD...)."
    },
    {
      "id": "q8_9",
      "number": 9,
      "prompt": "“Um dos primeiros sistemas criptográficos de chave pública é o algoritmo de Rivest, Shamir e Adleman, conhecido pelas iniciais de seus idealizadores, RSA. Esse algoritmo ainda é bastante utilizado em transmissão de dados, por ser relativamente rápido”. Fonte: Texto da Rota de Aprendizagem 2 (Tema: ALGORITMO ASSIMÉTRICO RSA). Com base no material estudado em aula, julgue as afirmativas abaixo como V (verdadeiras) ou F (falsas) quanto o algoritmo RSA:\n( ) A base do sistema repousa sobre aritmética modular, que é uma releitura das operações aritméticas de forma cíclica.\n( ) Em aritmética modular, não temos igualdades, mas congruências.\n( ) Sempre que existir outro inteiro que multiplicado n e somado com y resulte em x, a congruência será satisfeita.\n( ) Mesmo divulgando a chave pública, a decodificação da cifra não seja unívoca, existirão vários textos planos possíveis.\nAssinale a alternativa que corresponde à sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "V – V – V – V."
        },
        {
          "letter": "B",
          "text": "V – V – F – V."
        },
        {
          "letter": "C",
          "text": "F – F – F – F."
        },
        {
          "letter": "D",
          "text": "V – F – V – F."
        }
      ],
      "answer": "A",
      "explanation": "A base do sistema repousa sobre aritmética modular, que é uma releitura das operações aritméticas de forma cíclica. Apenas para exemplificar, em aritmética modular, não temos igualdades, mas congruências. Dizemos que x e y são congruentes módulo n (escreve-se x=y mod(n)) se ´x´ e ´y´ são inteiros; além disso `n` também deverá ser inteiro, positivo, e parte do conjunto {0,...,n1}. Sempre que existir outro inteiro que multiplicado n e somado com y resulte em x, a congruência será satisfeita. Por essa definição, podemos ter congruências como 5= 1mod(2), mas também 21= 1 mod(20), ou seja, vários inteiros podem satisfazer a equação modular. Esse fato permite que, mesmo divulgando a chave pública, a decodificação da cifra não seja unívoca, ou seja, existirão vários textos planos possíveis.",
      "source": "Texto da Rota de Aprendizagem 2 (Tema: ALGORITMO ASSIMÉTRICO RSA)."
    },
    {
      "id": "q8_10",
      "number": 10,
      "prompt": "“Como já sabemos, a máquina computacional opera apenas com zeros e uns. Utiliza, portanto, unicamente, o sistema binário. Longas sequências binárias são bastante comuns e tornam-se de difícil leitura para nós, humanos. Apenas para ilustrar o decimal 8217,44, precisa de 48 bits para ser representado no sistema binário: 8217,44 = (0010 0000 0001 1001,0111 0011) ². Para tornar a visualização um pouco mais simples e concisa, costuma-se apresentar os binários em uma outra base numérica, a hexadecimal”. Fonte: Texto da Rota de Aprendizagem 1 (Tema: SISTEMAS DE NUMERAÇÃO). Com base no estudado em aula, responda: por que os binários são frequentemente apresentados em base hexadecimal? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Porque a base hexadecimal permite representar cada nible com apenas um algarismo."
        },
        {
          "letter": "B",
          "text": "Porque a base hexadecimal é mais difícil de ler do que a binária."
        },
        {
          "letter": "C",
          "text": "Porque a base hexadecimal representa binários com números de 0 a 15."
        },
        {
          "letter": "D",
          "text": "Porque a base hexadecimal é usada para codificar caracteres especiais."
        }
      ],
      "answer": "A",
      "explanation": "Conforme abordamos durante as nossas aulas, a máquina computacional opera apenas com zeros e uns. Utiliza, portanto, unicamente, o sistema binário. Longas sequências binárias são bastante comuns e tornam-se de difícil leitura para nós, humanos. Apenas para ilustrar o decimal 8217,44, precisa de 48 bits para ser representado no sistema binário: 8217,44 = (0010 0000 0001 1001,0111 0011)². Para tornar a visualização um pouco mais simples e concisa, costuma-se apresentar os binários em uma outra base numérica, a hexadecimal. Neste sistema, cada nible será representado por apenas um algarismo.",
      "source": "Texto da Rota de Aprendizagem 1 (Tema: SISTEMAS DE NUMERAÇÃO)."
    },
    {
      "id": "q8_11",
      "number": 11,
      "prompt": "Cada processo de conversão de dados segue regras rigorosas para garantir a consistência e a interoperabilidade entre diferentes máquinas computacionais. A padronização desses processos permite o compartilhamento eficaz de dados digitalizados entre sistemas distintos. No caso específico da conversão de letras, palavras e textos, o padrão de 8 bits, conhecido como byte, foi desenvolvido para incluir uma tabela de conversão que mapeia caracteres e símbolos para padrões binários, esse padrão é conhecido como ASCII. (Texto adaptado). Fonte: Texto da Rota de Aprendizagem. Considerando os conteúdos estudados em aula, assinale a alternativa que apresenta, corretamente, o significado da sigla ASCII no contexto de padrões de codificação de caracteres:",
      "alternatives": [
        {
          "letter": "A",
          "text": "American Standard Code for Information Interchange."
        },
        {
          "letter": "B",
          "text": "Automated Standard Code for Information Interchange."
        },
        {
          "letter": "C",
          "text": "American System for Code Integration."
        },
        {
          "letter": "D",
          "text": "Advanced Standard Code for Information Integration."
        }
      ],
      "answer": "A",
      "explanation": "Cada processo de conversão de dados segue regras rigorosas para garantir a consistência e a interoperabilidade entre diferentes máquinas computacionais. A padronização desses processos permite o compartilhamento eficaz de dados digitalizados entre sistemas distintos. No caso específico da conversão de letras, palavras e textos, o padrão de 8 bits, conhecido como byte, foi desenvolvido para incluir uma tabela de conversão que mapeia caracteres e símbolos para padrões binários. Esse padrão é conhecido como ASCII (American Standard Code for Information Interchange), ou Código Padrão Americano para Intercâmbio de Informações em português. O ASCII associa cada caractere a um byte de forma unívoca, garantindo uma representação consistente de texto em sistemas computacionais.",
      "source": "Texto da Rota de Aprendizagem 1 (Tema: CONVERSÃO DA REALIDADE PARA INFORMAÇÃO DIGITAL)."
    },
    {
      "id": "q8_12",
      "number": 12,
      "prompt": "Quando pensamos em informação, mesmo do ponto de vista leigo, imaginamos um dado útil sobre um fenômeno qualquer. Mas, qual seria a menor unidade de informação possível? Quando as máquinas computacionais foram idealizadas, optou-se por dotá-las de uma característica, devido à facilidade de construção eletrônica. (Texto adaptado). Fonte: Rota de Aprendizagem 1 (Tema: O BIT, A INFORMAÇÃO ELEMENTAR). Com base no conteúdo estudado em aula e no fragmento acima, assinale a alternativa que define corretamente o termo \"bit\".",
      "alternatives": [
        {
          "letter": "A",
          "text": "Bit é uma unidade de processamento em computadores."
        },
        {
          "letter": "B",
          "text": "Bit é um termo usado para descrever a largura de banda da internet."
        },
        {
          "letter": "C",
          "text": "Bit é uma unidade de medida de armazenamento de dados equivalente a 1024 bytes."
        },
        {
          "letter": "D",
          "text": "Bit é uma sigla para BInary digiT, ou dígito binário."
        }
      ],
      "answer": "D",
      "explanation": "De acordo com os conteúdos abordados em nossas aulas, segundo Manzano (2009, p. 97), bit é, de fato, uma sigla para BInary digiT, ou dígito binário. Dígito por se tratar de um numeral e binário porque cada dígito pode assumir somente dois valores: “0”, que representa o estado desligado, e “1”, que representa o estado ligado.",
      "source": "Rota de Aprendizagem 1 (Tema: O BIT, A INFORMAÇÃO ELEMENTAR)."
    },
    {
      "id": "q8_13",
      "number": 13,
      "prompt": "“Byte, trata-se da associação de dois nibles, ou seja, oito bits. O byte “ganhou notoriedade” porque permite a representação de 256 estados (28 = 256). Hoje as dimensões de memória computacional utilizam o byte, representado pela letra “B” maiúscula, como balizador. Já velocidade de processamento ou de transmissão de dados utilizam o bit, representado pela letra “b” (minúscula). Desta forma escrevemos, por exemplo, memória de 32 GB e velocidade de 128 Mb por segundo ou 128 Mbps”. Fonte: Rota de Aprendizagem 1 (Tema: NIBLE, BYTE, WORD...). Com base nos estudos realizados em aula, assinale a alternativa que apresenta, corretamente, qual é a principal função do byte na representação de dados.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Representar todos os caracteres especiais e letras do alfabeto inglês."
        },
        {
          "letter": "B",
          "text": "Medir a velocidade de processamento de dados."
        },
        {
          "letter": "C",
          "text": "Representar uma unidade de medida de transmissão de dados."
        },
        {
          "letter": "D",
          "text": "Representar apenas caracteres de taquigrafia."
        }
      ],
      "answer": "A",
      "explanation": "Byte, trata-se da associação de dois nibles, ou seja, oito bits. O byte “ganhou notoriedade” porque permite a representação de 256 estados (28 = 256), esta quantidade de estados permitia representar todas as letras e caracteres especiais presentes nos teclados do idioma inglês acrescentados de outros caracteres de uso em telegrafia, como início de mensagem, quebra de texto, sucesso na recepção, fim de mensagem etc. Por este motivo tornou-se o conjunto padrão de números binários (Manzano, 2009, p. 98). Hoje as dimensões de memória computacional utilizam o byte, representado pela letra “B” maiúscula, como balizador. Já velocidade de processamento ou de transmissão de dados utilizam o bit, representado pela letra “b” (minúscula). Desta forma escrevemos, por exemplo, memória de 32 GB e velocidade de 128 Mb por segundo ou 128 Mbps.",
      "source": "Rota de Aprendizagem 1 (Tema: NIBLE, BYTE, WORD...)."
    },
    {
      "id": "q8_14",
      "number": 14,
      "prompt": "“Segundo Machado (2014, p. 154), o hash pode ser utilizado para “verificar a integridade de um arquivo armazenado em um computador, mensagem ou arquivos de backups, verificar a integridade de um arquivo obtido da internet ou gerar assinaturas digitais”.” Fonte: Texto da Rota de Aprendizagem 3 (Tema: HASH). Considerando o conteúdo estudado em aula, assinale a alternativa correta sobre a função do hashing:",
      "alternatives": [
        {
          "letter": "A",
          "text": "A função de hashing criptografa os registros de um arquivo contendo vírus, por meio de uma chave física, que será determinada por um conjunto de campos."
        },
        {
          "letter": "B",
          "text": "A função de hashing duplica os registros de um arquivo, por meio de uma chave, que será determinada exclusivamente por um campo."
        },
        {
          "letter": "C",
          "text": "A função de hashing exclui os registros de um arquivo, por meio de uma chave, que será determinada por um campo, ou conjunto de campos."
        },
        {
          "letter": "D",
          "text": "A função de hashing mapeia os registros de um arquivo, por meio de uma chave, que será determinada por um campo, ou conjunto de campos."
        }
      ],
      "answer": "D",
      "explanation": "A função de hashing mapeia os registros de um arquivo, por meio de uma chave, que será determinada por um campo, ou conjunto de campos. Este campo deve possuir características que permitam a identificação inequívoca do registro.",
      "source": "Texto da Rota de Aprendizagem 3 (Tema: HASH)."
    },
    {
      "id": "q8_15",
      "number": 15,
      "prompt": "Quando tomamos contato com o conceito de criptografia, principalmente ao considerarmos o uso de chaves criptográficas associadas aos algoritmos, de forma a dificultar a quebra, normalmente imaginamos um método chamado de simétrico, no qual tanto emissor quanto receptor conhecem e compartilham a mesma chave. Você deve estar pensando que não há outra forma de criptografar e decodificar senão pelo compartilhamento secreto de uma chave, não é? Na verdade, essa é apenas uma das formas, a mais simples e rápida, mas também a de menor segurança, assim, existem dois tipos de criptografia. (Texto adaptado). Fonte: Texto da Rota de Aprendizagem 2 (Tema: TIPOS DE CRIPTOGRAFIA). Tomando por base o conteúdo estudado em aula, marque a alternativa correta a respeito método assimétrico:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Na criptografia assimétrica, o algoritmo matemático de codificação do texto plano não é reversível, ou seja, não é possível decodificar a cifra com base na inversão do algoritmo de codificação, como na criptografia simétrica."
        },
        {
          "letter": "B",
          "text": "Na criptografia assimétrica, o algoritmo matemático de codificação do texto plano é reversível, permitindo decodificar a cifra com base na inversão do algoritmo de codificação."
        },
        {
          "letter": "C",
          "text": "Na criptografia assimétrica, tanto a codificação quanto a decodificação utilizam a mesma chave."
        },
        {
          "letter": "D",
          "text": "Na criptografia assimétrica, o texto plano pode ser decodificado diretamente sem o uso de nenhum algoritmo matemático."
        }
      ],
      "answer": "A",
      "explanation": "Na criptografia assimétrica, o algoritmo matemático de codificação do texto plano não é reversível, ou seja, não é possível decodificar a cifra com base na inversão do algoritmo de codificação, como na criptografia simétrica.",
      "source": "Texto da Rota de Aprendizagem 2 (Tema: TIPOS DE CRIPTOGRAFIA)."
    },
    {
      "id": "q8_16",
      "number": 16,
      "prompt": "“Quando precisamos conectar ou comunicar duas máquinas computacionais, necessitamos criar uma estrutura capaz de possibilitar essa conexão. Se são apenas duas máquinas, essa solução pode ser obtida pela mera conexão, com interface adequada, entre as máquinas.” Fonte: Rota de Aprendizagem 4 (Tema: Redes de computadores e comunicação entre redes (Internet Communication). Com base no texto enunciado da questão, responda: como é chamada a conexão de rede dinâmica e descentralizada que envolve múltiplos dispositivos? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Rede sem fio (WLAN)."
        },
        {
          "letter": "B",
          "text": "Rede ad hoc."
        },
        {
          "letter": "C",
          "text": "Rede de área ampla (WAN)."
        },
        {
          "letter": "D",
          "text": "Rede de área pessoal (PAN)."
        }
      ],
      "answer": "B",
      "explanation": "Quando precisamos conectar, ou comunicar, duas máquinas computacionais, necessitamos criar uma estrutura capaz de possibilitar essa conexão. Se são apenas duas máquinas, essa solução pode ser obtida pela mera conexão, com interface adequada, entre as máquinas. Essa conexão é chamada de rede ad hoc. Um exemplo desse tipo de rede se dá quando conectamos nosso aparelho celular em um computador, com o uso de um cabo USB, ou pela interface rádio bluetooth.",
      "source": "Rota de Aprendizagem 4 (Tema: Redes de computadores e comunicação entre redes (Internet Communication)."
    },
    {
      "id": "q8_17",
      "number": 17,
      "prompt": "“Há um terceiro modelo, semelhante ao PTM, no qual a comunicação direta entre assinantes é possível. As redes MTM (multiponto-para-multiponto), ou mesh, permitem a comunicação de um nó com o outro sem a necessidade de um gerenciamento central. Naturalmente esse modelo de redes exigirá capacidade de processamento e de roteamento em cada nó, restringindo o desempenho.” Fonte: Rota de Aprendizagem 4 (Tema: Comunicação multiponto – multiponto). Com base no conteúdo estudado em aula e no fragmento acima, qual é a principal vantagem das redes MTM (multiponto-para-multiponto) ou mesh? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Redução na capacidade de processamento dos nós."
        },
        {
          "letter": "B",
          "text": "Simplicidade na configuração inicial."
        },
        {
          "letter": "C",
          "text": "Maior flexibilidade e resiliência."
        },
        {
          "letter": "D",
          "text": "Desempenho otimizado em todos os nós."
        }
      ],
      "answer": "C",
      "explanation": "Conforme os conteúdos abordados em nossas aulas a vantagem dessa topologia se dão pela maior flexibilidade e resiliência.",
      "source": "Rota de Aprendizagem 4 (Tema: Comunicação multiponto – multiponto)."
    },
    {
      "id": "q8_18",
      "number": 18,
      "prompt": "“As primeiras Fibras ópticas (FOs) comerciais utilizavam dois cilindros concêntricos de sílica com índices de refração diferentes, chamados núcleo (ou core, em inglês) e casca (ou cladding). Após a casca, deposita-se acrilato e resina silicônica para conferir resistência mecânica e certa flexibilidade ao conjunto. Várias dessas fibras são então agrupadas em um cabo que terá elementos extras para sustentação e resistência a cisalhamento e pressão.” Fonte: Rota de Aprendizagem 5 (Tema: TRANSMISSÃO ÓPTICA). Considerando o conteúdo estudado em aula e o texto da rota de aprendizagem, assinale a alternativa correta acerca da característica das fibras ópticas que originou sua denominação como \"fibras multimodo\":",
      "alternatives": [
        {
          "letter": "A",
          "text": "A capacidade de suportar diferentes comprimentos de onda de luz."
        },
        {
          "letter": "B",
          "text": "A propagação de vários feixes de luz com ângulos de inserção diferentes."
        },
        {
          "letter": "C",
          "text": "A capacidade de transmitir dados a longas distâncias sem amplificação."
        },
        {
          "letter": "D",
          "text": "A combinação de diferentes materiais ópticos na construção da fibra."
        }
      ],
      "answer": "B",
      "explanation": "A denominação \"fibras multimodo\" origina-se da capacidade dessas fibras ópticas de permitir a propagação de vários feixes de luz, cada um com um ângulo de inserção diferente. Isso resulta em múltiplos caminhos de propagação, caracterizando as fibras como multimodo.",
      "source": "Rota de Aprendizagem 5 (Tema: TRANSMISSÃO ÓPTICA)."
    },
    {
      "id": "q8_19",
      "number": 19,
      "prompt": "Quando a rede que interconecta nossos usuários é a internet, de topologia PTM, precisamos padronizar a forma de endereçar as várias máquinas assinantes da rede. A primeira padronização que entrou em operação, após a popularização da internet, foi o protocolo de internet que se trata de endereçamento binário composto por 32 bits, o que permite em torno de 4,3 bilhões de endereços distintos (ditos válidos). Fonte: Rota de Aprendizagem 4 (Tema: Endereçamento). (Texto adaptado). Com base nos estudos realizados em aula, assinale a alternativa que apresenta, corretamente, como se denomina o protocolo de endereçamento que utiliza um esquema binário de 32 bits e permite aproximadamente 4,3 bilhões de endereços distintos:",
      "alternatives": [
        {
          "letter": "A",
          "text": "IPv4."
        },
        {
          "letter": "B",
          "text": "IPv6."
        },
        {
          "letter": "C",
          "text": "IPX."
        },
        {
          "letter": "D",
          "text": "TCP/IP."
        }
      ],
      "answer": "A",
      "explanation": "De acordo com o texto base, o protocolo de internet versão 4 (IPv4) utiliza um esquema de endereçamento binário composto por 32 bits. Este protocolo, que foi a primeira padronização em operação após a popularização da internet, permite cerca de 4,3 bilhões de endereços distintos, conhecidos como endereços válidos.",
      "source": "Rota de Aprendizagem 4 (Tema: Endereçamento)."
    },
    {
      "id": "q8_20",
      "number": 20,
      "prompt": "“Se pensarmos em uma operação PTM ou MTM, com vários usuários, percebemos que será necessário ao originador da mensagem identificar a quem deseja que a mensagem seja entregue. Essa informação não é necessária em uma comunicação PTP, já que há apenas um destinatário possível. ” Fonte: Rota de Aprendizagem 4 (Tema: Endereçamento). De acordo com o material estudado em aula, em uma operação PTM ou MTM, qual é a identificação necessária para que o próximo nó ou roteador saiba para onde a mensagem deve ser entregue, especialmente quando há múltiplos destinatários habilitados? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Endereço de rede."
        },
        {
          "letter": "B",
          "text": "Endereço de destino."
        },
        {
          "letter": "C",
          "text": "Identificação do nó."
        },
        {
          "letter": "D",
          "text": "Identificação do roteador."
        }
      ],
      "answer": "B",
      "explanation": "Conforme o texto base, em uma operação PTM ou MTM com múltiplos destinatários, é necessário informar ao próximo nó (no caso de uma rede MTM) ou ao roteador (no modelo PTM) a identificação do destino para garantir que a mensagem seja entregue corretamente. Essa identificação é denominada endereço de destino.",
      "source": "Rota de Aprendizagem 4 (Tema: Endereçamento)."
    },
    {
      "id": "q8_21",
      "number": 21,
      "prompt": "“A comunicação por rádio se baseia nas emissões controladas de ondas eletromagnéticas (OEM) pelo ar (ou vácuo). Em outras palavras, a transmissão de rádio é possível graças à capacidade de emitir OEMs no espaço livre, capazes de alcançar o destino almejado. A mera emissão de OEMs, por outro lado, seria inútil se não fosse possível controlá-las em função do sinal de dados que desejamos transmitir.” Fonte: Rota de Aprendizagem 5 (Tema: CONCEITOS RUDIMENTARES DE TELECOMUNICAÇÕES). Com base nos estudos realizados em aula, como chamamos o processo de controle das ondas eletromagnéticas para transmitir um sinal de dados em comunicação por rádio? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Modulação."
        },
        {
          "letter": "B",
          "text": "Codificação."
        },
        {
          "letter": "C",
          "text": "Multiplexação."
        },
        {
          "letter": "D",
          "text": "Decodificação."
        }
      ],
      "answer": "A",
      "explanation": "De acordo com o texto base, o processo de controle das ondas eletromagnéticas para transmitir um sinal de dados é chamado de modulação. A modulação é essencial para que as ondas eletromagnéticas possam carregar as informações desejadas de forma eficaz. As outras opções mencionadas, como amplificação, codificação decodificação e multiplexação, desempenham papéis diferentes na comunicação, mas não se referem especificamente ao controle das ondas para a transmissão de dados.",
      "source": "Rota de Aprendizagem 5 (Tema: CONCEITOS RUDIMENTARES DE TELECOMUNICAÇÕES)."
    },
    {
      "id": "q8_22",
      "number": 22,
      "prompt": "Na aula 04, comentamos que existem entidades que gerenciam o processo de associação dos dados digitais a seu significado, propósito e destino. De fato, a literatura científica prefere descrever esse processo todo (entidades + comunicação) como camadas de um modelo padronizado de comunicação entre redes. (Texto adaptado pelo elaborador da questão). Fonte: Rota de Aprendizagem 4 (Tema: Camadas). Qual camada do modelo de comunicação é responsável pela adequação do bloco de dados encapsulados ao meio de transmissão, tratando suas especificidades mecânicas e elétricas? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Camada de Apresentação."
        },
        {
          "letter": "B",
          "text": "Camada Física."
        },
        {
          "letter": "C",
          "text": "Camada de Sessão."
        },
        {
          "letter": "D",
          "text": "Camada de Gerenciamento."
        }
      ],
      "answer": "B",
      "explanation": "De acordo com o texto base, a camada física é responsável por garantir que o bloco de dados encapsulados seja adequado ao meio de transmissão, tratando de aspectos mecânicos e elétricos. As outras camadas mencionadas (como Aplicação, Apresentação e Sessão) estão relacionadas a funções mais abstratas e de alto nível no processo de comunicação de dados, e a \"Camada de Gerenciamento\" não é uma camada reconhecida no modelo OSI.",
      "source": "Rota de Aprendizagem 4 (Tema: Camadas)."
    },
    {
      "id": "q8_23",
      "number": 23,
      "prompt": "Na aula 05, exploramos os três principais meios físicos de transmissão: metálico, óptico e propagação livre por radiocomunicação. Analisamos as tecnologias associadas a cada um desses meios e discutimos suas aplicações mais adequadas. Além disso, abordamos as vantagens e desvantagens de cada opção, ajudando a compreender qual meio é mais eficaz para diferentes situações. (Texto elaborado pelo autor da questão). Fonte: Texto da Rota de Aprendizagem 5 (Tema: A CORRETA ESCOLHA DO MEIO). Com base no material estudado em aula, julgue as afirmativas abaixo como V (verdadeiras) ou F (falsas):\n( ) O meio metálico oferece vantagens como baixo custo, facilidade de implementação e manutenção, mas é suscetível a ruídos, interferências e furtos. Além disso, técnicas para minimizar essas desvantagens podem aumentar o custo das instalações.\n( ) A transmissão óptica oferece imunidade a ruídos, baixa suscetibilidade a invasões e menor valor comercial da sucata, mas enfrenta desafios como baixa resistência mecânica, complexidade de projeto, e alto custo de manutenção e instalação.\n( ) A radiopropagação equilibra custo e resistência à interferência entre as soluções metálica e óptica, oferecendo flexibilidade e viabilidade para longas distâncias, mas é mais suscetível a interferências intensas como descargas atmosféricas.\n( ) O meio metálico oferece vantagens como alta imunidade a interferências e segurança contra invasões, sendo altamente resistente a ruídos e furtos. Sua implementação é complexa e exige manutenção constante, o que pode tornar esse meio mais caro a longo prazo, mas técnicas simples e acessíveis podem facilmente mitigar qualquer desvantagem.\nAssinale a alternativa que corresponde à sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "V – V – V – F."
        },
        {
          "letter": "B",
          "text": "V – V – F – V."
        },
        {
          "letter": "C",
          "text": "F – F – F – F."
        },
        {
          "letter": "D",
          "text": "V – F – V – F."
        }
      ],
      "answer": "A",
      "explanation": "Meio metálico: Basicamente, o uso de cabos metálicos tem como vantagens o baixo custo de aquisição, facilidade de implementação, facilidade de manutenção, baixo custo de manutenção, flexibilidade relativa para mudanças de projeto e universalidade de interface. Como desvantagens, temos a susceptibilidade a ruídos, interferências e descargas atmosféricas, facilidade de invasão, restrições de rota devido à presença de cabos energizados ou radiações intensas e alto valor da sucata, incentivando furtos para venda. Transmissão óptica: imunidade a ruídos e interferências externas, baixo valor comercial da sucata e menor facilidade de invasão. Como desvantagens: restrições de rota, devido à baixa resistência mecânica e sensibilidade a curvaturas, maior complexidade de projeto. Radiopropagação: o custo de aquisição de um enlace de rádio situa-se entre o baixo custo dos cabos metálicos e os altos custos das implementações ópticas. As transmissões de rádio resistem bem a campos magnéticos de média intensidade, mas são mais suscetíveis a campos intensos, como descargas atmosféricas.",
      "source": "Texto da Rota de Aprendizagem 5 (Tema: A CORRETA ESCOLHA DO MEIO)."
    },
    {
      "id": "q8_24",
      "number": 24,
      "prompt": "“A ideia de tornar o PTM bidirecional demorou a surgir, mas hoje está presente no sistema de telefonia celular. Controlada por estações rádio base (ERB), conhecidas pelo público leigo como antenas de celular, a comunicação se dá sempre com a gestão da ERB, e não ocorre, efetivamente, a conexão real, direta, entre dois assinantes. A ERB escuta a todos os smarphones e faz a comutação, conectando virtualmente dois smartphones.” Fonte: Rota de Aprendizagem 4 (Tema: Comunicação ponto – multiponto). De acordo com os estudos realizados nas aulas da disciplina, qual foi o contexto inicial em que surgiu a ideia da comunicação ponto-multiponto (PTM)? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Nas primeiras experiências com internet."
        },
        {
          "letter": "B",
          "text": "Com o advento da televisão a cabo."
        },
        {
          "letter": "C",
          "text": "Com as primeiras experiências de radiodifusão."
        },
        {
          "letter": "D",
          "text": "No desenvolvimento das redes de computadores."
        }
      ],
      "answer": "C",
      "explanation": "A ideia da comunicação ponto-multiponto (PTM) surgiu no contexto das primeiras experiências de radiodifusão, onde o objetivo era estabelecer um canal unidirecional entre uma estação de radiotransmissão e vários receptores localizados nas residências. Esse conceito foi fundamental para o desenvolvimento das tecnologias de comunicação em massa.",
      "source": "Rota de Aprendizagem 4 (Tema: Comunicação ponto – multiponto)."
    },
    {
      "id": "q8_25",
      "number": 25,
      "prompt": "Ao estudarmos os códigos binários, as máquinas computacionais, para que seja possível a portabilidade dos dados, devem ter alto grau de padronização. Por esse motivo, devemos esperar a mesma padronização quando tratamos dos protocolos de comunicação entre máquinas. Esses protocolos definirão o encapsulamento gradativo dos dados de forma a garantir que a máquina remota seja absolutamente capaz de ler e interpretar convenientemente a mensagem recebida. Vários padrões foram propostos para esse fim. (Texto adaptado pelo elaborador da questão). Fonte: Rota de Aprendizagem 4 (Camadas padronizadas). Considerando o conteúdo estudado em aula, responda: Qual é o padrão de comunicação entre máquinas que ganhou universalidade por definir o encapsulamento gradativo dos dados, garantindo a correta interpretação das mensagens recebidas? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "TCP/IP (Transmission Control Protocol/Internet Protocol)."
        },
        {
          "letter": "B",
          "text": "FTP (File Transfer Protocol)."
        },
        {
          "letter": "C",
          "text": "Modelo OSI (Open System Interconnection)."
        },
        {
          "letter": "D",
          "text": "HTML (Hypertext Markup Language)."
        }
      ],
      "answer": "C",
      "explanation": "Conforme o texto base, o modelo OSI (Open System Interconnection) é o padrão que ganhou universalidade para a padronização dos protocolos de comunicação entre máquinas. Esse modelo define o encapsulamento gradativo dos dados, garantindo que a máquina remota possa ler e interpretar as mensagens recebidas de maneira correta. As outras opções, embora sejam termos relacionados à comunicação e redes, não se referem a um modelo de padronização de comunicação como o modelo OSI.",
      "source": "Rota de Aprendizagem 4 (Camadas padronizadas)."
    },
    {
      "id": "q8_26",
      "number": 26,
      "prompt": "“Comunicação ponto a ponto trata-se do tipo elementar de comunicação. Neste paradigma temos uma conexão transmissor (TX) de um lado, e receptor (RX) de outro.” Fonte: Rota de Aprendizagem 4 (Tema: Comunicação ponto a ponto). Qual das alternativas abaixo descreve corretamente o conceito de comunicação ponto a ponto? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Comunicação ponto a ponto só permite a comunicação em um único sentido."
        },
        {
          "letter": "B",
          "text": "Comunicação ponto a ponto é a comunicação elementar entre dois pontos, permitindo tanto a comunicação unidirecional quanto bidirecional."
        },
        {
          "letter": "C",
          "text": "Comunicação ponto a ponto se aplica exclusivamente aos sistemas de radiofrequência."
        },
        {
          "letter": "D",
          "text": "Comunicação ponto a ponto é um tipo de conexão que ocorre exclusivamente em sistemas unidimensionais."
        }
      ],
      "answer": "B",
      "explanation": "A comunicação ponto a ponto refere-se à conexão direta entre dois pontos, transmissor (TX) e receptor (RX). Essa comunicação pode ser unidirecional, onde a informação flui apenas em um sentido, ou bidirecional, permitindo a troca de informações entre os dois pontos. O exemplo clássico de comunicação ponto a ponto bidirecional é o interfone de uma residência singular, onde há comunicação direta entre duas partes. As demais alternativas estão incorretas pois se referem a conceitos diferentes ou errôneos sobre o paradigma ponto a ponto.",
      "source": "Rota de Aprendizagem 4 (Tema: Comunicação ponto a ponto)."
    },
    {
      "id": "q8_27",
      "number": 27,
      "prompt": "“Um enlace de rádio ponto a ponto consiste basicamente em dois transceptores operando na mesma frequência de portadora, conectados a antenas adequada. A escolha dos equipamentos e da técnica de modulação dependerá da qualidade e das características exigidas para a comunicação. O problema comum nos enlaces ponto a ponto são os altos custos de sistemas de rádio com alta estabilidade. Esse problema, na maioria dos casos, pode ser enfrentado pela adaptação de uma técnica utilizada em rádios militares, chamada de spread-spectrum.” Fonte: Texto da Rota de Aprendizagem 5 (Tema: Enlaces de rádio ponto a ponto). Considerando o conteúdo estudado em aula, qual é a característica principal dos rádios spread-spectrum? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Rádios spread-spectrum espalham intencionalmente o sinal em um espectro de frequências maior do que o necessário."
        },
        {
          "letter": "B",
          "text": "Rádios spread-spectrum utilizam apenas uma frequência fixa para transmissão."
        },
        {
          "letter": "C",
          "text": "Rádios spread-spectrum modulam o sinal para evitar interferências."
        },
        {
          "letter": "D",
          "text": "Rádios spread-spectrum alternam entre diferentes frequências para evitar detecção."
        }
      ],
      "answer": "A",
      "explanation": "Rádios spread-spectrum são caracterizados por espalharem intencionalmente o sinal em um espectro de frequências maior do que o necessário. Essa técnica aumenta a resiliência da transmissão, permitindo que as comunicações sejam de baixo custo e alta qualidade, pois é menos suscetível a interferências e a detecção. As outras alternativas não representam corretamente o princípio de operação dos rádios spread-spectrum.",
      "source": "Texto da Rota de Aprendizagem 5 (Tema: Enlaces de rádio ponto a ponto)."
    },
    {
      "id": "q8_28",
      "number": 28,
      "prompt": "“A estabilidade da conexão, com uso da internet, dependerá da disponibilidade de uma rede administrada por vários operadores independentes. Nesta solução não controlamos nem podemos influenciar na qualidade da conexão. Do ponto de vista de segurança, para o uso dessa solução, será necessário implementar recursos de isolamento e monitoração do tráfego de rede.” Fonte: Rota de Aprendizagem 4 (Tema: Redes de computadores e comunicação entre redes (Internet Communication). Considerando os conteúdos estudados em aula, assinale a alternativa que apresenta, corretamente, qual dos recursos a seguir, é necessário implementar para garantir a segurança ao utilizar uma rede administrada por vários operadores independentes:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Sistemas de backup."
        },
        {
          "letter": "B",
          "text": "Firewalls."
        },
        {
          "letter": "C",
          "text": "Atualizações de software."
        },
        {
          "letter": "D",
          "text": "Compressão de arquivos."
        }
      ],
      "answer": "B",
      "explanation": "De acordo com o texto base abordado na aula 04, para garantir a segurança ao utilizar uma rede administrada por vários operadores independentes, é necessário implementar recursos de isolamento e monitoração do tráfego de rede. O uso de firewalls é essencial nesse contexto, pois eles atuam controlando e filtrando o tráfego de rede, protegendo os sistemas contra acessos não autorizados. As outras opções, embora úteis em diferentes aspectos de TI, não desempenham o papel específico de isolamento e monitoração do tráfego de rede como os firewalls.",
      "source": "Rota de Aprendizagem 4 (Tema: Redes de computadores e comunicação entre redes (Internet Communication)."
    },
    {
      "id": "q8_29",
      "number": 29,
      "prompt": "Tratamos durante a nossa disciplina do conceito básico da comutação de pacotes. Como nos ensina Comer (2016, p. 6), esse método “mudou as redes de maneira fundamental e forneceu a base da Internet moderna” por permitir a circulação de dados de múltiplas origens sobre uma rede compartilhada. Sabemos que essa comunicação é viabilizada pela justaposição de endereços que identificam origem e destino do pacote. Seguindo os estudos do mesmo autor, a comunicação de dados baseada em comutação de pacotes pode ser entendida a partir de três propriedades gerais. (Texto adaptado pelo autor da questão) Fonte: Texto da Rota de Aprendizagem 6 (Tema: COMUTAÇÃO DE PACOTES E COMUNICAÇÃO ENTRE REDES). Seguindo os estudos de Comer (2016), quais são as três propriedades gerais da comunicação de dados baseada em comutação de pacotes? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Comunicação assíncrona, comunicação sem inicialização e compartilhamento estocástico da rede."
        },
        {
          "letter": "B",
          "text": "Comunicação síncrona, comunicação sem sinalização e divisão determinística de rede."
        },
        {
          "letter": "C",
          "text": "Comunicação paralela, comunicação com sincronização e alocação dedicada de rede."
        },
        {
          "letter": "D",
          "text": "Comunicação síncrona, comunicação com configuração e compartilhamento exclusivo da rede."
        }
      ],
      "answer": "A",
      "explanation": "Seguindo os estudos de Comer (2016), a comunicação de dados baseada em comutação de pacotes pode ser entendida a partir de três propriedades gerais: comunicação assíncrona, comunicação sem inicialização e compartilhamento estocástico da rede.",
      "source": "Texto da Rota de Aprendizagem 6 (Tema: COMUTAÇÃO DE PACOTES E COMUNICAÇÃO ENTRE REDES)."
    },
    {
      "id": "q8_30",
      "number": 30,
      "prompt": "“Quando apresentamos o modelo IPSec na aula 06, comentamos que esse acréscimo de segurança ocorreu para evitar que agentes maliciosos se fizessem passar por atores legítimos da comunicação entre máquinas.” Fonte: Texto da Rota de Aprendizagem 6 (Tema: IPSec E SEGURANÇA EM TCP/IP). Como é denominado esse tipo de ataque feito por agentes maliciosos? Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Spooling."
        },
        {
          "letter": "B",
          "text": "Spoofing."
        },
        {
          "letter": "C",
          "text": "Siffing."
        },
        {
          "letter": "D",
          "text": "Hiacking."
        }
      ],
      "answer": "B",
      "explanation": "Spoofing é o tipo de ataque onde um agente malicioso falsifica sua identidade (como um endereço IP, por exemplo) para se passar por um ator legítimo na rede. O modelo IPSec adiciona camadas de autenticação e criptografia justamente para prevenir esse tipo de fraude na comunicação entre máquinas.",
      "source": "Texto da Rota de Aprendizagem 6 (Tema: IPSec E SEGURANÇA EM TCP/IP)."
    }
  ]
};


  const aulas = [AULA01, AULA02, AULA03, AULA04, AULA05, AULA06, AULA07, AULA08];

  for (const aula of aulas) {
    console.log(`📚 Inserindo tema: ${aula.title}`);

    // Inserir tema
    db.run(
      'INSERT INTO temas (id, title, shortTitle, description, accent, icon, total, passingScore) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [aula.id, aula.title, aula.shortTitle, aula.description, aula.accent, aula.icon, aula.total, aula.passingScore]
    );

    for (const q of aula.questions) {
      // Inserir questão
      db.run(
        'INSERT INTO questoes (id, tema_id, numero, pergunta, resposta_correta, explicacao, fonte) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [q.id, aula.id, q.number, q.prompt, q.answer, q.explanation, q.source]
      );

      // Inserir alternativas
      for (const alt of q.alternatives) {
        db.run(
          'INSERT INTO alternativas (questao_id, letra, texto) VALUES (?, ?, ?)',
          [q.id, alt.letter, alt.text]
        );
      }
    }

    console.log(`   ✅ ${aula.questions.length} questões inseridas`);
  }

  // Inserir alunos (senha removida - login apenas por RU)
  const alunos = [
    { ru: '5783197', nome: 'Maxwell Aluno' },
    { ru: '1234567', nome: 'Aluno Fake 01' },
    { ru: '2345678', nome: 'Aluno Fake 02' },
    { ru: '3456789', nome: 'Aluno Fake 03' },
    { ru: '4567890', nome: 'Aluno Fake 04' },
    { ru: '5678901', nome: 'Aluno Fake 05' }
  ];

  for (const a of alunos) {
    db.run(
      'INSERT INTO alunos (ru, nome, ativo) VALUES (?, ?, ?)',
      [a.ru, a.nome, 1]
    );
  }

  // Salvar alterações no arquivo
  const data = db.export();
  const fs = require('fs');
  const path = require('path');
  fs.writeFileSync(path.join(__dirname, 'mxos.db'), Buffer.from(data));

  console.log(`\n\u2705 Alunos criados: ${alunos.map(a => a.ru).join(", ")}`);
  console.log(`✅ Seed concluído com sucesso! (login apenas com RU, sem senha)`);

  closeDatabase();
}

seed().catch(err => {
  console.error('❌ Erro no seed:', err);
  closeDatabase();
  process.exit(1);
});
