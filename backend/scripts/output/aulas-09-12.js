const AULA09 = {
  "id": "aula09",
  "title": "Computação Forense",
  "shortTitle": "Computação Forense",
  "description": "Perícia digital, cadeia de custódia, exame de mídias e ferramentas forenses.",
  "accent": "#0d9488",
  "icon": "🔍",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q09_1",
      "number": 1,
      "prompt": "A Delegacia Especial de Atendimento à Mulher (Deam) do Distrito Federal identificou em São José dos Pinhais, na Região Metropolitana de Curitiba, o autor das ameaças contra a professora da Universidade de Brasília (UnB) Débora Diniz. Os investigadores cumpriram mandados de busca e apreensão em Ceilândia e em São José dos Pinhais. O homem tem 42 anos e irá responder em liberdade por injúria e ameaças. Computadores foram apreendidos no local. O nome dele não foi informado.\n\nOs policiais chegaram até o acusado com dados cibernéticos coletados por peritos do Instituto de Criminalística do Distrito Federal. Os policiais descobriam que o suspeito mantinha contato com um dos integrantes de um grupo de extrema-direita alvo de duas operações da Polícia Federal que combatiam crimes de ódio racial pela internet.\n\nFonte: https://www.bemparana.com.br/noticia/suspeito-de-ameacar-professora-da-unb-de-morte-e-identificado-na-grande-curitiba#.Xi9PlOhKiUk\n\nA busca por evidências nos computadores apreendidos é útil para o levantamento de provas de ocorrências de crimes virtuais. Portanto, analise as assertivas abaixo e marque a alternativa que descreve, corretamente, o objetivo do uso de procedimentos para se analisar as evidências.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Facilitar a inviabilização da prova para usá-la em processos judiciais."
        },
        {
          "letter": "B",
          "text": "Apreender dados informáticos, que podem ser recuperados no momento da apreensão."
        },
        {
          "letter": "C",
          "text": "Encontrar vestígios de crimes digitais no local de crime, sem se preocupar com a cadeia de custódia."
        },
        {
          "letter": "D",
          "text": "Impedir a inviabilização da prova pela quebra da cadeia de custódia."
        }
      ],
      "answer": "D",
      "explanation": "As evidências também são úteis para o levantamento de provas de ocorrências de crimes virtuais, e sua análise é realizada com procedimentos que impeçam a inviabilização da prova pela quebra da cadeia de custódia.",
      "source": "ROTA Aula 1, página 2."
    },
    {
      "id": "q09_2",
      "number": 2,
      "prompt": "Os sistemas operacionais forense (SOF)  são como um arsenal de ferramentas forenses e hackers. Porém, a grande maioria dos SOs e das ferramentas forense são criadas para ambiente Linux.\n\nFonte: Rota Aula 2, página 9.\n\nAssinale a alternativa que indica um SOF da família Windows que tem como base o ambiente de pré-instalação do sistema operacional da Microsoft.",
      "alternatives": [
        {
          "letter": "A",
          "text": "DEFT (Digital Evidence & Forensics Toolkit)."
        },
        {
          "letter": "B",
          "text": "WinPE (Windows Preinstallation Enviromment)."
        },
        {
          "letter": "C",
          "text": "CAINE (Computer Aided INvestigative Environment)."
        },
        {
          "letter": "D",
          "text": "PALADIN Forensic Suite"
        }
      ],
      "answer": "B",
      "explanation": "O WinFE foi desenvolvido e pesquisado em 2008 por Troy Larson, Sr Forensic Examiner e Research at Microsoft. O WinFE é baseado no ambiente de pré-instalação do Windows de mídia sendo somente leitura por padrão. Ele funciona de forma semelhante aos CDs forenses do Linux, que são configurados para não montar mídia na inicialização.",
      "source": "Fonte: Rota Aula 2, página 9."
    },
    {
      "id": "q09_3",
      "number": 3,
      "prompt": "Já sabemos que os registros de crimes digitais são diversos, o que demonstra que a investigação forense computacional necessita de atenção e cuidado especial por parte dos profissionais de tecnologia.\n\nDe acordo com uma pesquisa da empresa Symantec, os crimes digitais mais frequentes envolvem:\n\nAparelhos infectados por vírus ou outras ameaças de segurança;\n\nSenhas de contas descobertas;\n\nCompras online que eram na verdade golpes;\n\nCliques em e-mails fraudulentos ou envio de informações sigilosas.\n\nFonte: Elaborado pelo autor (2020).\n\nCom base no texto para leitura relativo à disciplina de Computação Forense, analise as assertivas abaixo e assinale a alternativa que mostra, corretamente, as etapas para análise de dispositivos de armazenamento.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Preservação, extração dos dados, análise e apresentação."
        },
        {
          "letter": "B",
          "text": "Coleta, análise, armazenamento e laudo técnico."
        },
        {
          "letter": "C",
          "text": "Coleta, extração dos dados, comparação e abertura do inquérito."
        },
        {
          "letter": "D",
          "text": "Mandato de busca e apreensão, recolhimento dos equipamentos, transporte e analise."
        }
      ],
      "answer": "A",
      "explanation": "De acordo com Velho (2016), a primeira fase, a preservação, tem como objetivo principal garantir que a evidência digital não sofra alterações durante a realização do exame. A etapa seguinte, a extração dos dados, visa identificar os arquivos ou fragmentos de arquivos presentes na mídia examinada. A terceira etapa do processo investigativo é a análise, que tem como principal propósito identificar nos arquivos recuperados informações úteis ao fato que está sob investigação. E por fim, a etapa de apresentação, que é o modo como o perito irá formalmente relatar suas conclusões ao final dos exames. Em outras palavras, essa última etapa, é o laudo ou outro documento técnico que será elaborado.",
      "source": "Fonte: Rota Aula 2, página 2."
    },
    {
      "id": "q09_4",
      "number": 4,
      "prompt": "Durante a abertura dos Jogos Olímpicos de Londres, em 2012, a imprensa noticiou que hackers atacaram e tentaram comprometer o sistema de energia do Estádio Olímpico. A informação dada pelas autoridades inglesas é de que o ataque não foi bem-sucedido por conta da equipe de segurança digital a postos durante o acontecimento. Em 2014, o Gabinete de Segurança Institucional da Presidência da República registrou mais de 400 invasões a computadores do Governo Federal do Brasil no mês de maio, todas com potencial vazamento de material sensível. É possível que referidos ataques estivessem relacionados às manifestações de hacktivistas contrários à realização da Copa do Mundo de 2014 no Brasil, a qual se iniciaria no mês seguinte ao dos ataques.\n\nFonte: https://bit.ly/2SXKJ4v\n\nO processo de uma investigação envolve a análise das evidências cibernéticas e a criação de um ambiente de trabalho equipado com os recursos de software (programas de computação forense) e hardware (cabos e adaptadores) necessários para a atividade investigativa.  A investigação pode ser feita individualmente ou em equipe, e sempre em conformidade com a legislação vigente.\n\nAnalise as assertivas abaixo e assinale a alternativa que indica, corretamente, as características obrigatórias de uma evidência.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Legível, Verdadeira, Simples, Insuspeita e Assertiva."
        },
        {
          "letter": "B",
          "text": "Admissível, Completa, Autêntica, Confiável e Acreditável."
        },
        {
          "letter": "C",
          "text": "Verdadeira, Simples, Insuspeita, Fidedigna e Completa."
        },
        {
          "letter": "D",
          "text": "Fidedigna, Completa, Autêntica, Confiável e Sensata."
        }
      ],
      "answer": "B",
      "explanation": "Uma evidência deve, obrigatoriamente, apresentar as seguintes características: Admissível, Completa, Autêntica, Confiável e Acreditável.",
      "source": "Fonte: Rota Aula 1, página 4."
    },
    {
      "id": "q09_5",
      "number": 5,
      "prompt": "No dia 17 de setembro de 2019, um perito paulista foi contratado para analisar se as imagens compartilhadas via WhatsApp, conforme informações obtidas junto aos órgãos policiais de Cerro Largo, estavam sendo repassadas em montagens de fotos, de cunho pejorativo e pornográfico.\n\nFoi registrado um Boletim de Ocorrência, pelo artigo 218-C do Código Penal Brasileiro, por divulgação de pornografia, crime com pena prevista de até 5 anos.\n\nA vítima, inconformada com a falsa acusação, pois não é ela nas imagens que estão sendo compartilhadas e visando provar a errônea imputação, contratou um perito de São Paulo, o professor Ricardo Caires dos Santos, que é perito em criminalística forense, pós-graduado em Direito Penal e Processo Penal, membro da Sociedade Brasileira de Ciências Forenses (SBCF) e presidente da Comissão de Audiovisual da Academia Brasileira de Ciências Criminais (ABCCRIM). (ADAPTADO)\n\nFonte: encurtador.com.br/jlpEW.\n\nA Image Forensics é um ramo específico da análise forense que lida com vários tipos de ataques e a autenticidade de uma imagem é um deles. Analise as assertivas abaixo e assinale a alternativa que trata sobre a autenticidade de uma imagem.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Quando falamos de autenticidade, estamos realmente falando se a imagem está bem estruturada ou não."
        },
        {
          "letter": "B",
          "text": "Autenticidade refere-se às imagens bem estruturadas, impossíveis de serem modificadas."
        },
        {
          "letter": "C",
          "text": "Entende-se por autenticidade as mutações ao longo de um processo investigativo."
        },
        {
          "letter": "D",
          "text": "Autenticidade são condições desiguais, propiciadas a todos, ao longo do percurso histórico de uma existência."
        }
      ],
      "answer": "A",
      "explanation": "Quando falamos de autenticidade, estamos realmente falando se a imagem está bem estruturada ou não. Às vezes, os dados preservados podem ser adulterados. Os analistas forenses são obrigados a recuperar esses dados adulterados ao seu estado original.",
      "source": "Fonte: Rota Aula 3, página 13."
    },
    {
      "id": "q09_6",
      "number": 6,
      "prompt": "Uma investigação policial desmontou a maior rede de pedofilia já descoberta na internet, com cerca de 70 mil integrantes e conexões em 30 países, informou nesta quarta-feira a Europol (agência de polícia da Europa). A operação teve uma ramificação no Brasil que, em novembro de 2009, resultou na prisão e no indiciamento de um brasileiro de 48 anos acusado de molestar crianças em sua casa em Suzano (SP), explica à BBC Brasil o delegado da Polícia Federal Stenio Santos Souza, chefe do grupo especial de combate a crimes de pedofilia.\n\nA prisão foi feita a partir de uma denúncia anônima e de vídeos que mostravam o abuso de menores.\n\nFonte: https://bbc.in/2Hr2eER\n\nDurante uma investigação são coletadas várias evidências e dentre elas teremos algumas unidades de armazenamento.\n\nCom base no texto para leitura, relativo à disciplina de Computação Forense, analise as assertivas abaixo e assinale a alternativa que descreve, corretamente, onde é feita a investigação para encontrar evidências digitais.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Nas unidades originais coletadas na cena do crime."
        },
        {
          "letter": "B",
          "text": "Nas gavetas e armários do suspeito."
        },
        {
          "letter": "C",
          "text": "Em cópias dos dispositivos encontrados."
        },
        {
          "letter": "D",
          "text": "No smartphone e nas redes sociais do suspeito."
        }
      ],
      "answer": "C",
      "explanation": "Durante uma investigação são coletadas várias evidências e dentre elas teremos algumas unidades de armazenamento. Como falado anteriormente, nunca devemos fazer a investigação na unidade original, portanto, devemos fazer várias cópias para iniciar o trabalho investigativo.",
      "source": "Fonte: Rota Aula 2, página 4."
    },
    {
      "id": "q09_7",
      "number": 7,
      "prompt": "No dia 17 de setembro de 2019, um perito paulista foi contratado para analisar se as imagens compartilhadas via WhatsApp, conforme informações obtidas junto aos órgãos policiais de Cerro Largo, estavam sendo repassadas em montagens de fotos, de cunho pejorativo e pornográfico.\n\nFoi registrado um Boletim de Ocorrência, pelo artigo 218-C do Código Penal Brasileiro, por divulgação de pornografia, crime com pena prevista de até 5 anos.\n\nA vítima, inconformada com a falsa acusação, pois não é ela nas imagens que estão sendo compartilhadas, e visando provar a errônea imputação, contratou um perito de São Paulo, o professor Ricardo Caires dos Santos, que é perito em criminalística forense, pós-graduado em Direito Penal e Processo Penal, membro da Sociedade Brasileira de Ciências Forenses (SBCF) e presidente da Comissão de Audiovisual da Academia Brasileira de Ciências Criminais (ABCCRIM).\n\nFonte: encurtador.com.br/jlpEW.\n\nCada arquivo tem uma assinatura que define a sua natureza, inclusive uma imagem, e nos informa sobre os recursos específicos que o determinam.\n\nAnalise as assertivas abaixo e assinale a alternativa que trata da assinatura de um arquivo.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Um arquivo PNG tem a seguinte assinatura “89 50 4E 47 0D 0A 1A 0A” e esse valor em hexadecimal são também chamados de números mágicos."
        },
        {
          "letter": "B",
          "text": "Um arquivo JPG tem a seguinte assinatura “25 50 44 46” e esse valor em hexadecimal é também chamado de números chaves."
        },
        {
          "letter": "C",
          "text": "Um arquivo JPEG tem a seguinte assinatura “4D 5A 50 00 ou 4D 5A 90 00” e esse valor em hexadecimal é também chamado de números de assinatura."
        },
        {
          "letter": "D",
          "text": "Um arquivo TIFF tem a seguinte assinatura “50 4B 05 06” e esse valor em hexadecimal é também chamado de números de identificação."
        }
      ],
      "answer": "A",
      "explanation": "Uma assinatura de arquivo típica é algo que define a natureza de um arquivo e também nos informa sobre os recursos específicos de um determinado arquivo. Isso também é chamado como o cabeçalho do arquivo ou, às vezes, como a soma de verificação ou checksum.\n\nExemplos:\n\nPNG -> 89 50 4E 47 0D 0A 1A 0A\n\nZIP FILE -> 50 4B 03 04 ou 50 4B 05 06\n\nEXE -> 4D 5A 50 00 ou 4D 5A 90 00\n\nFLV -> 46 4C 56 01\n\nPDF - > 25 50 44 46\n\nOs valores ‘hexadecimais’ mostrados são também chamados de números mágicos.",
      "source": "Fonte: Rota Aula 3, página 17."
    },
    {
      "id": "q09_8",
      "number": 8,
      "prompt": "Os vestígios digitais devem ser zelados com o mesmo cuidado com que são tratados os vestígios encontrados em uma cena de crime, como manchas de sangue e projéteis. Apesar de bastante confiáveis, as mídias de armazenamento estão sujeitas às falhas provenientes de choque mecânicos, da umidade excessiva ou do envelhecimento.\n\nFonte: Rota Aula 2, página 3.\n\nCom base no texto para leitura relativo à disciplina de Computação Forense, analise as assertivas abaixo e assinale a alternativa que descreve, corretamente, uma particularidade que difere os vestígios digitais dos vestígios tradicionais.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A possibilidade de serem reproduzidas integralmente para outro dispositivo de armazenamento."
        },
        {
          "letter": "B",
          "text": "O fato de se constatar técnica e cientificamente a sua relação com o crime."
        },
        {
          "letter": "C",
          "text": "O material recolhido em um local de crime pode ser utilizado para análise posterior."
        },
        {
          "letter": "D",
          "text": "Há a depuração total dos elementos encontrados no local do crime."
        }
      ],
      "answer": "A",
      "explanation": "Por outro lado, as mídias de armazenamento apresentam uma particularidade que as difere dos vestígios tradicionais: a possibilidade de serem reproduzidas integralmente para outro dispositivo de armazenamento.\n\nDessa forma, evita-se que a mídia original seja manipulada desnecessariamente durante os exames, o que pode vir a prejudicar a integridade dos dados. Desse modo, sempre que plausível, a analise deve ser conduzida sobre a cópia, de forma que se alguma mudança imprevidente acontecer, todo o processo pode ser repetido a partir da mídia original ou demais cópias.",
      "source": "Fonte: Rota Aula 2, página 3."
    },
    {
      "id": "q09_9",
      "number": 9,
      "prompt": "Fazer um dump da memória RAM é como “congelar” o estado da memória em um determinado momento, ao fazermos o dump, criamos um arquivo com a extensão “.mem” tal qual a memória. Na computação forense, isso serve para análise de possíveis malwares alojados na RAM, como também para descobrir dados voláteis sobre o que estava sendo feito naquele dispositivo tecnológico.\n\nTodas as informações presentes em memória RAM serão perdidas assim que o dispositivo em questão for desligado, e qualquer ação no dispositivo ligado altera o estado da memória. Devido a essa volatilidade, quando necessário e possível, faz-se o uso do dump.\n\nA volatilidade dá-se pela perda de informação com o tempo, assim como a capacidade de recuperação ou validação dos dados, diminuindo a veracidade e possivelmente impedindo que tenha algo de valor probatório em juízo na RAM.\n\nFonte: https://www.lucasthyerre.com.br/2018/06/01/computacao-forense-dump-de-memoria-ram/\n\nCom base no texto relativo à disciplina, analise as assertivas abaixo e assinale a alternativa que indica um software capaz de fazer um dump na memória.",
      "alternatives": [
        {
          "letter": "A",
          "text": "FTK Imager."
        },
        {
          "letter": "B",
          "text": "B1 Free Archiver."
        },
        {
          "letter": "C",
          "text": "Bandizip."
        },
        {
          "letter": "D",
          "text": "Ashampoo Zip Free."
        }
      ],
      "answer": "A",
      "explanation": "O FTK Imager também pode realizar dumps de memória e até mesmo realizar uma pequena análise forense na imagem criada.",
      "source": "Fonte: Rota Aula 1, página 6."
    },
    {
      "id": "q09_10",
      "number": 10,
      "prompt": "Quase sempre baixamos alguma \"coisa\" da internet, seja um arquivo compactado, um software ou, para quem tem o costume de testar outras distribuições Linux, baixar várias ISOs, mas são poucas as pessoas que checam se o arquivo está \"perfeito\" após o download.\n\nMesmo que o seu gerenciador de downloads indique que o seu arquivo foi baixado completamente, ele pode estar com algum erro, e só se vai descobrir que a ISO estava corrompida após verificar o MD5 dela.\n\nFonte: https://bit.ly/2UVDQ67\n\nCom base no texto para leitura relativo à disciplina de Computação Forense, analise as assertivas abaixo e assinale a alternativa que está relacionada, corretamente, com o MD5.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Pode executar o arquivo da ISO por meio de um gerador MD5 que vai retornar uma cadeia de 32 caracteres."
        },
        {
          "letter": "B",
          "text": "Pode executar o arquivo da ISSO, por meio de um gerador MD5, que vai retornar uma cadeia de 64 caracteres."
        },
        {
          "letter": "C",
          "text": "Pode executar o arquivo da ISSO, por meio de um gerador MD5, que vai retornar uma cadeia de 28 caracteres."
        },
        {
          "letter": "D",
          "text": "Pode executar o arquivo da ISSO, por meio de um gerador MD5, que vai retornar uma cadeia de 128 caracteres."
        }
      ],
      "answer": "A",
      "explanation": "Essas distribuições Linux fornecem um hash MD5 para verificar se o arquivo foi corrompido durante o envio do arquivo ISO. Pode executar esse arquivo por meio de um gerador MD5 que vai retornar uma cadeia de 32 caracteres. Se a string corresponder com a string da distribuição teremos uma ISO sem falhas e completa.",
      "source": "Fonte: Rota Aula 1, página 6."
    },
    {
      "id": "q09_11",
      "number": 11,
      "prompt": "A Open Whisper Systems, mais conhecida pelo aplicativo seguro de mensagens TextSecure, anunciou que fechou uma parceria com o WhatsApp para permitir que os usuários enviem mensagens criptografadas de ponta a ponta. A novidade já está disponível na versão mais recente do aplicativo do WhatsApp para Android.\n\nA criptografia de ponta a ponta significa que apenas os usuários envolvidos na conversa terão acesso às mensagens, já que para descriptografá-las é necessário possuir uma chave particular, que somente eles possuirão. Teoricamente, nem o Facebook, nem o WhatsApp e nem o Obama podem ler suas mensagens.\n\nFonte: https://tecnoblog.net/noticias/whatsapp-criptografia-ponta-a-ponta-android/. Acesso em 06/02/2026.\n\nCom base no texto para leitura relativo à disciplina de Computação Forense, analise as assertivas abaixo e assinale a alternativa que está relacionada, corretamente, com o MD5.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Uma função hash não é uma criptografia. O hash é habitualmente usado para comparar informações."
        },
        {
          "letter": "B",
          "text": "Uma função hash é igual a criptografia. O hash é usado para esconder mensagens e comparar informações."
        },
        {
          "letter": "C",
          "text": "Uma função hash assemelha-se a criptografia. O hash é usado para embaralhar mensagens através de um cálculo matemático."
        },
        {
          "letter": "D",
          "text": "Uma função hash não é uma criptografia. O hash é habitualmente usado para embaralhar mensagens."
        }
      ],
      "answer": "A",
      "explanation": "Uma função hash não pode ser confundido com criptografia. A encriptação é usada sempre que houver a necessidade de armazenar uma informação e recuperá-la através de uma chave simétrica ou privada. Já o hash é normalmente usado para comparar informações.",
      "source": "Fonte: Rota Aula 1, página 6."
    },
    {
      "id": "q09_12",
      "number": 12,
      "prompt": "O Autopsy é uma ferramenta gratuita de código aberto, desenvolvida por Brian Carrier. Através da interface gráfica do Autopsy, as imagens podem ser examinadas no nível de abstração de arquivos e realizar buscas por expressões regulares e palavras-chave. O Autopsy tem interface baseada em HTML, seguindo um modelo cliente-servidor. Com isso, é permitido que a interface seja executada diretamente no sistema alvo.\n\nFonte: (Autoria do elaborador da questão)\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica os dois modos de análises do Autopsy.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Dead analysis e o Live analysis."
        },
        {
          "letter": "B",
          "text": "Open analysis e Closed analysis."
        },
        {
          "letter": "C",
          "text": "Simple analysis e Multi analysis."
        },
        {
          "letter": "D",
          "text": "RAM analysis e HD analysis."
        }
      ],
      "answer": "A",
      "explanation": "Dead analysis: ocorre quando um sistema de análise todo é usado para examinar dados de um sistema suspeito.\n\nLive analysis: ocorre quando o sistema suspeito está sendo analisado, enquanto ele está sendo executado.",
      "source": "Fonte: Rota Aula 2, página 11."
    },
    {
      "id": "q09_13",
      "number": 13,
      "prompt": "Alberto Miranda Sobrinho, de 38 anos, foi condenado a 40 anos de prisão em regime fechado. Ele foi preso na casa em que mora, em 11/2, após ser identificado em 18 vídeos e mais de mil fotos que estavam em um pen drive. O homem perdeu o objeto na rua. Uma mulher encontrou e encaminhou para a polícia.\n\nAs imagens mostravam o homem, que tem sete filhos, tendo relações sexuais com uma criança de seis anos e duas adolescentes. Não há informações sobre a relação de parentesco de Miranda com as crianças que aparecem nas imagens. O arquivo foi entregue a 30ª Delegacia de Polícia (São Sebastião). O autor já tinha passagens pela polícia por lesão corporal e desacato à autoridade.\n\nOutro homem, de 40 anos, foi condenado a 14 anos e sete meses, também em regime fechado. Nilton Hélio de Jesus se entregou à polícia um mês depois do início das invetigações, após cumprimento de mandado de busca e apreensão em sua casa, onde foram apreendidos 11 discos rígidos, um laptop, três máquinas fotográficas, um pen drive e vários cds com conteúdo relacionado a pedofilia.\n\nFonte: https://bit.ly/2SrjXSF\n\nAs evidências são peças utilizadas por advogados nos tribunais e cortes do mundo inteiro, mas para que sejam consideradas provas válidas é muito importante que o perito realize o processo de investigação de maneira cuidadosa e sistemática. É importante estabelecer padrões e estabelecer políticas para a aquisição e manipulação dos dados e, a partir dessas políticas, desenvolver protocolos e procedimentos.\n\nAnalise as assertivas abaixo e assinale a alternativa que indica, corretamente, como essas políticas devem prover os dados que serão analisados.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Os resultados devem ser válidos, reproduzíveis e que reflitam os objetivos de todos os cientistas."
        },
        {
          "letter": "B",
          "text": "Evidências devem ser analisadas no dispositivo informático original e detalhadamente documentadas."
        },
        {
          "letter": "C",
          "text": "Para garantir que os dados sejam exatamente iguais aos originais é usado algoritmos de registros."
        },
        {
          "letter": "D",
          "text": "O digest pode ser entendido como uma sequência de dados copiados."
        }
      ],
      "answer": "A",
      "explanation": "Para a aquisição de dados, é importante também, estabelecer padrões. Devem-se estabelecer políticas para a manipulação destes e, a partir dessas políticas, desenvolver protocolos e procedimentos. Essas políticas devem prover resultados válidos e reproduzíveis refletindo os objetivos de todos os cientistas.",
      "source": "Fonte: Rota Aula 1, página 5."
    },
    {
      "id": "q09_14",
      "number": 14,
      "prompt": "Os Arquivos ZIP, RAR, Office, PDF, IMG e ISO são os mais perigosos segundo a F-Secure. Os cibercriminosos adoram esconder malwares em arquivos ZIP. Por exemplo, usavam arquivos ZIP com o nome Love_You0891 para distribuir o ransomware GandCrab no Dia dos Namorados. Algumas semanas depois, um grupo de golpistas enviou arquivos com o Trojan Qbot, especializado em roubo de dados.\n\nA Kaspersky lembra que este ano houve a descoberta de um recurso muito interessante no WinRAR.  Aparentemente, durante a criação de um arquivo, você pode definir uma série de comandos para que o conteúdo seja descompactado na pasta do sistema. Ou seja, os arquivos poderiam ir para a pasta de inicialização, e seriam executados na próxima reinicialização. Por isso, a Kaspersky recomendou que todos os usuários do WinRAR atualizassem o programa imediatamente par evitar malwares.\n\nFonte: encurtador.com.br/gLS13\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que esteja relacionada a um arquivo com a extensão .zip:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O formato de arquivo .zip usa vários algoritmos de compactação."
        },
        {
          "letter": "B",
          "text": "Esse formato de arquivo tem suporte a compressão de dados com perdas."
        },
        {
          "letter": "C",
          "text": "Só é possível a compactação de um arquivo nesse formato."
        },
        {
          "letter": "D",
          "text": "É um formato de arquivo padrão para executáveis, códigos de objeto, dumps principais etc. para qualquer sistema baseado em UNIX."
        }
      ],
      "answer": "A",
      "explanation": "Na verdade, se trata de um formato de arquivo com suporte a compressão de dados sem perdas. Este formato de arquivo atinge a compactação de um arquivo usando vários algoritmos de compactação. DEFLATE é o algoritmo de compressão mais utilizado. Os arquivos ZIP têm a extensão de arquivo .zip ou .ZIP.",
      "source": "Fonte: Rota Aula 3, página 19."
    },
    {
      "id": "q09_15",
      "number": 15,
      "prompt": "O CAINE oferece um ambiente forense completo que é organizado para integrar ferramentas de software existentes como módulos de software e fornecer uma interface gráfica amigável.\n\nOs principais objetivos do projeto que o CAINE visa garantir são os seguintes:\n\n. Um ambiente interoperável que dá suporte ao investigador digital durante as quatro fases da investigação digital;\n\n. Uma interface gráfica amigável;\n\n. Ferramentas de fácil utilização.\n\nFonte: Rota Aula 2, página 6.\n\nCom base no texto para leitura relativo à disciplina de Computação Forense, analise as assertivas abaixo e assinale a alternativa que descreve, corretamente, as quatro fases de uma investigação forense.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Coleta dos vestígios, análise, documentação e apresentação."
        },
        {
          "letter": "B",
          "text": "Acesso à cena do crime, recolhimento dos aparelhos digitais, transporte e análise."
        },
        {
          "letter": "C",
          "text": "Preservação, extração dos dados, análise e apresentação."
        },
        {
          "letter": "D",
          "text": "Coleta, análise, armazenamento e laudo técnico."
        }
      ],
      "answer": "C",
      "explanation": "Os passos essenciais para um processo de investigação forense são: Preservação, extração dos dados, análise e apresentação.",
      "source": "Fonte: Rota Aula 2, página 4."
    },
    {
      "id": "q09_16",
      "number": 16,
      "prompt": "Recuperação de senha para Sistemas Operacionais Microsoft e recuperação de vários tipos de senha através de sniffer de rede, desencriptação de senha usando dicionários, força bruta e ataque de criptoanálise, gravação de conversas através de VoIP, decodificação de senhas codificadas, exibição de senhas de caixas de senha (ocultas por asteriscos), recuperação de senhas armazenadas em cachê e análise de protocolos roteados, podem ser feitas, facilmente com o uso de softwares específicos que são utilizados por administradores de rede e auditores.\n\nEssas informações podem ser cruciais para uma investigação criminal.\n\nFonte: Autoria do Elaborador da Questão (2020).\n\nDe acordo com os estudos realizados, analise as assertivas abaixo e assinale a alternativa que indica um software capaz de fazer tudo o que o texto apresentou.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Steghide"
        },
        {
          "letter": "B",
          "text": "OpenPuff"
        },
        {
          "letter": "C",
          "text": "Camouflage"
        },
        {
          "letter": "D",
          "text": "Cain & Abel"
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_17",
      "number": 17,
      "prompt": "Os problemas Cain a abel.exe são geralmente o resultado de arquivos executáveis ausentes, excluídos ou movidos do local original. A principal maneira de resolver esses problemas manualmente é ao substituir o arquivo EXE por uma nova cópia. Como último caso, recomendamos o uso de um limpador de registro para reparar qualquer exe do cain e abel inválido, extensão de arquivo EXE e outras referências de caminho de arquivos que possam causar a mensagem de erro.\n\nFormatos PortableApps.com Application, classificados como Arquivos executáveis, na maioria das vezes carregam a extensão EXE. A desenvolvedora do software oferece várias versões de arquivos de cain e abel.exe para Windows 10. Se não tiver uma cópia da sua versão de cain e abel.exe, basta clicar no botão “Solicitar” para solicitar uma cópia. Nos raros casos em que você não encontra a versão do seu arquivo abaixo, recomendamos contatar Windows Software Developer para obter mais ajuda.\n\nUma vez que o arquivo é colocado com êxito no local certo no seu disco rígido, estes problemas de cain e abel.exe devem desaparecer. É altamente recomendável executar um teste rapidamente para verificar.\n\nFonte: encurtador.com.br/jwIQV.\n\nAnalise as assertivas abaixo e marque a alternativa que descreve os problemas na instalação de algumas opções como sniffing do Cain a abel.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Alguns antivírus e navegadores detectam Cain e Abel como malwares"
        },
        {
          "letter": "B",
          "text": "As versões mais novas do Windows não reconhecem as DLLs do Cain e Abel."
        },
        {
          "letter": "C",
          "text": "O Windows só reconhece dois programas do Cain e Abel."
        },
        {
          "letter": "D",
          "text": "O Abel só administra remotamente o Cain quando instalado no Linux"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_18",
      "number": 18,
      "prompt": "Todas as atividades no sistema operacional dependem da sua existência. Um exemplo bem simples, é que é através do Registro que o sistema consegue saber onde os programas estão armazenados e quais arquivos se relacionam a eles. É por isso que se o Registro do Windows corromper, simplesmente, faz o sistema parar. Se isso ocorrer, não será possível encontrar programas, drivers e configurações.\n\nFonte: encurtador.com.br/imo14\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica o registro que é responsável pelos perfis de hardware utilizados pelo usuário.",
      "alternatives": [
        {
          "letter": "A",
          "text": "HKEY_CURRENT_USER."
        },
        {
          "letter": "B",
          "text": "HKEY_LOCAL_MACHINE."
        },
        {
          "letter": "C",
          "text": "HKEY_USERS."
        },
        {
          "letter": "D",
          "text": "HKEY_CURRENT_CONFIG."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_19",
      "number": 19,
      "prompt": "Nem todo mundo é fã da Cortana, a assistente digital às vezes insistente da Microsoft. Antes da Atualização do Aniversário do Windows 10 ser lançada, em agosto de 2016, isso não era necessariamente um problema, porque era fácil desativar a Cortana. Tudo o que você precisava fazer era abrir a assistente, selecionar Configurações, procurar a configuração “a Cortana pode fornecer sugestões, ideias, lembretes, alertas e muito mais” e mover o controle deslizante para Desativado. Mas a Atualização de Aniversário removeu essa opção, deixando os usuários sem saber o que fazer.\n\nFonte: encurtador.com.br/oyDM4\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica o registro que pode ser editado para a Cortana.",
      "alternatives": [
        {
          "letter": "A",
          "text": "HKEY_CLASSES_ROOT."
        },
        {
          "letter": "B",
          "text": "HKEY_CURRENT_USER."
        },
        {
          "letter": "C",
          "text": "HKEY_LOCAL_MACHINE."
        },
        {
          "letter": "D",
          "text": "HKEY_USERS."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_20",
      "number": 20,
      "prompt": "O Google criou uma ferramenta, com filtros adicionais que poderão ser aplicados na pesquisa, o que nos permitirá limitar a pesquisa a blogs, jornais, entre outros, por exemplo. Além disso, podemos classificar os resultados por relevância ou data.\n\nFonte: Autoria do Elaborador da Questão (2020).\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica a ferramenta do Google a que o texto se refere acima.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Google Education."
        },
        {
          "letter": "B",
          "text": "Google Map Maker."
        },
        {
          "letter": "C",
          "text": "Google Notícias."
        },
        {
          "letter": "D",
          "text": "Google Agenda."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_21",
      "number": 21,
      "prompt": "O Google tem uma ferramenta usada para procurar clipes e aplicar uma variedade de filtros na pesquisa e visualizá-los em diferentes fontes, tornando a busca no Google mais rápida e eficaz.\n\nFonte: Autoria do Elaborador da Questão (2020).\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica a ferramenta do Google a que o texto acima se refere.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Google Education."
        },
        {
          "letter": "B",
          "text": "Google Vídeos."
        },
        {
          "letter": "C",
          "text": "Google Notícias."
        },
        {
          "letter": "D",
          "text": "Google Agenda."
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_22",
      "number": 22,
      "prompt": "Gerentes e analistas de TI sabem que a informação e os dados de uma empresa são ativos essenciais para o negócio, sendo peças valiosíssimas no meio corporativo.\n\nQualquer vulnerabilidade que aconteça em um dos atributos pode representar uma ameaça, ou seja, um possível ponto de ataque de terceiros.\n\nUma Auditoria em Segurança da Informação é uma avaliação sistemática da segurança do sistema de informação de uma empresa. Basicamente, ela busca medir o quanto o sistema está em conformidade com um conjunto de critérios estabelecidos. Ou, ainda, podemos dizer que a Auditoria em Segurança da Informação conduz uma avaliação com o objetivo de garantir que processos e infraestrutura estejam atualizados.\n\nDurante o processo de auditoria, auditores realizam entrevistas pessoais, varredura de vulnerabilidades, análise de configurações do sistema operacional, análises de compartilhamentos de rede e análise de dados históricos. A preocupação está em como as políticas de segurança estão sendo aplicadas.\n\nFonte: encurtador.com.br/cfjw7\n\nConsiderando os ensinamentos do professor da disciplina de Computação Forense, na aula 4 e na contextualização acima, que trata da auditoria do Windows, analise os enunciados abaixo e selecione a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O WinAudit é um software gratuito, de código aberto que relata, virtualmente, todos os aspectos do inventário e configuração do computador."
        },
        {
          "letter": "B",
          "text": "O WinAudit é um software pago, de código fechado que relata, parcialmente, os aspectos do inventário e configuração do computador."
        },
        {
          "letter": "C",
          "text": "O WinAudit é um software pago, de código fechado que relata, os aspectos do inventário, configuração do computador e registros do Windows."
        },
        {
          "letter": "D",
          "text": "O WinAudit é um software pago, de código aberto, que relata todos os aspectos do inventário e configuração do computador."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_23",
      "number": 23,
      "prompt": "Cain & Abel é composto por dois componentes principais: o primeiro, Cain, é o aplicativo front-end que recupera senhas e a parte de detecção de senhas; o segundo, Abel, é um serviço do Windows NT que precisa ser instalado (local ou remotamente) e tem o papel de embaralhar o tráfego dentro da rede, para proteção adicional.\n\nCain & Abel é um programa bacana que lida com a recuperação de senhas perdidas usando os algoritmos de descriptografia poderosos. Ele é capaz de recuperar rapidamente e eficientemente as senhas do Outlook, da rede e exibir as senhas sob os asteriscos.\n\nFonte: encurtador.com.br/hlEJM\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica a ferramenta que permite crackear senhas baseado na tecnologia de Rainbow Table.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Rainbowcrack-online client."
        },
        {
          "letter": "B",
          "text": "MSCACHE Hashes Dumper."
        },
        {
          "letter": "C",
          "text": "Box Revealer."
        },
        {
          "letter": "D",
          "text": "Cryptanalysis attacks."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_24",
      "number": 24,
      "prompt": "O problema de fazer pesquisas avançadas no Google, é que ele nos traz todas as páginas que encontrou em um determinado domínio. Por si só isso não nos fornece muita informação. O Google disponibiliza recursos em forma de comando para mostrar apenas as páginas desse domínio, que contêm os termos especificados. Outro exemplo é quando nos deparamos com sites que contém um local para fazer as buscas que não funcionam direito. Com a ajuda do Google. podemos realizar essas buscas com mais precisão. Esses recursos possibilitam\n\na busca dentro de qualquer site na internet.\n\nFonte: Autoria do Elaborador da Questão (2020).\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica o operador usado na pesquisa a que o texto acima se refere.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O operador “-” (menos – hífen)."
        },
        {
          "letter": "B",
          "text": "O operador curinga “*” (asterisco)."
        },
        {
          "letter": "C",
          "text": "O operador “site:”."
        },
        {
          "letter": "D",
          "text": "O operador “OR” (esse OR deve ser digitado em letras maiúsculas)."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_25",
      "number": 25,
      "prompt": "O Registro é a parte essencial do Sistema Operacional Windows, um banco de dados grande e complexo que armazena todas as configurações para o software e o hardware, de forma hierárquica, como as pastas de arquivos. Ele existe desde as versões do Windows 3.x, mas passou a ser utilizado como padrão, a partir do Windows 95.\n\nFonte: encurtador.com.br/imo14\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica o registro que guarda as configurações de aparência do Windows.",
      "alternatives": [
        {
          "letter": "A",
          "text": "HKEY_CLASSES_ROOT."
        },
        {
          "letter": "B",
          "text": "HKEY_CURRENT_USER."
        },
        {
          "letter": "C",
          "text": "HKEY_LOCAL_MACHINE."
        },
        {
          "letter": "D",
          "text": "HKEY_USERS."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_26",
      "number": 26,
      "prompt": "O HUB é um concentrador, um dispositivo que permite centralizar o cabeamento de uma rede. Funciona repetindo cada pacote de dados em cada uma das portas que possui, exceto na que tenha recebido o pacote, de forma que todos os pontos possuem acesso aos dados.\n\nTambém está encarregado de enviar um sinal de colisão a todas as portas se detecta uma colisão.\n\nFonte: Autoria do Elaborador da Questão (2020).\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica o dispositivo que filtra e envia ao destino correto de cada frame. Opera na camada dois (nível de rede) do modelo OSI.",
      "alternatives": [
        {
          "letter": "A",
          "text": "SWITCH."
        },
        {
          "letter": "B",
          "text": "ROTEADOR."
        },
        {
          "letter": "C",
          "text": "MODEM."
        },
        {
          "letter": "D",
          "text": "WIRELLES."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_27",
      "number": 27,
      "prompt": "A Atualização de Criadores do Windows 10 oculta o Painel de Controle tradicional, mas você pode recuperá-lo com uma invasão do Registro.\n\nExistem alguns efeitos colaterais na atualização do Windows 10 que muitos acharão irritantes. Um desses aborrecimentos é o abandono progressivo do painel de controle tradicional em favor de uma tela de configurações atualizada e amigável para a tela sensível ao toque. A tela tradicional do Painel de Controle ainda está disponível, se você souber como encontrá-la.\n\nFonte: Elaboração própria (2020).\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica o registro responsável pela compatibilidade dos programas mais antigos dos tempos do DOS.",
      "alternatives": [
        {
          "letter": "A",
          "text": "HKEY_CLASSES_ROOT."
        },
        {
          "letter": "B",
          "text": "HKEY_CURRENT_USER."
        },
        {
          "letter": "C",
          "text": "HKEY_LOCAL_MACHINE."
        },
        {
          "letter": "D",
          "text": "HKEY_USERS."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_28",
      "number": 28,
      "prompt": "O Registro, numa comparação grosseira, pode ser entendido como \"sangue do Windows\", pois todas as atividades no sistema operacional dependem da sua existência. Um exemplo bem simples, é que é através do Registro que o sistema consegue saber onde os programas estão armazenados e quais arquivos se relacionam a eles. É por isso que um simples corrompimento do Registro do Windows faz o sistema parar. Se isso ocorre, não será possível encontrar programas, drivers e configurações.\n\nPor ser uma parte crítica do Windows, a Microsoft preferiu não disponibilizar um acesso fácil ao Registro do Windows. Isso porque usuários não preparados poderiam facilmente causar danos ao sistema, tentando fazer reparos ou querendo saber para que servem as linhas estranhas do Registro.\n\nFonte: https://www.infowester.com/tutregistrowin.php.\n\nAnalise as assertivas abaixo e marque a alternativa que descreve o software usado para acessar o registro do windows.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O programa chamado aria2."
        },
        {
          "letter": "B",
          "text": "O programa chamado Nugget."
        },
        {
          "letter": "C",
          "text": "O programa chamado ConEmu."
        },
        {
          "letter": "D",
          "text": "O programa chamado Regedit."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_29",
      "number": 29,
      "prompt": "O fenômeno das fake news está em alta nas redes sociais. Não é incomum ver notícias sem fontes comprovadas ou de sites obscuros circularem em diferentes plataformas digitais. Com esse alastramento, uma outra prática vem preocupando os usuários da rede: as imagens e vídeos falsos.\n\nSe já é difícil saber quando uma notícia é verdadeira ou falsa, imagine o quão complicado deve ser descobrir se determinada imagem é verídica ou não. Com o avanço dos programas de manipulação de fotos e vídeos, seja ele o Photoshop ou Adobe Premiere, fica cada vez mais complicado acreditar no ditado popular “uma imagem vale mais do que mil palavras”.\n\nFonte: encurtador.com.br/euvFQ\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica o programa usado para encontrar imagens semelhantes, referenciar sites que publicaram a mesma imagem ou até mesmo encontrar imagens iguais em outras proporções.",
      "alternatives": [
        {
          "letter": "A",
          "text": "TinEye."
        },
        {
          "letter": "B",
          "text": "Double Image."
        },
        {
          "letter": "C",
          "text": "Power Image."
        },
        {
          "letter": "D",
          "text": "Power URL."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    },
    {
      "id": "q09_30",
      "number": 30,
      "prompt": "Estamos em uma era em que você pode ser encontrado online por meio de uma simples foto. Se você estiver sentado no transporte coletivo ou mesmo caminhado pela rua e for fotografado sem perceber, o seu espião/stalker poderá encontrá-lo com certa facilidade na internet, mesmo sem saber o seu nome ou onde você mora.\n\nMas eu não estou dizendo que o buscador russo foi feito para espionagem ou qualquer coisa do tipo. Ele é um buscador comum e, em muitos casos, tem praticamente as mesmas ferramentas básicas que encontramos no Google.\n\nFonte: https://www.tecmundo.com.br/software/137553-busca-reversa-imagens-russo-yandex-precisa-do-google.htm\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas abaixo e assinale a alternativa que indica a técnica usada no processo contrário de uma busca, normalmente em algum material gráfico como vídeo ou imagem.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Busca Reversa."
        },
        {
          "letter": "B",
          "text": "Busca Detalhada."
        },
        {
          "letter": "C",
          "text": "Busca por Meta Tag."
        },
        {
          "letter": "D",
          "text": "Busca Pente Fino."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Computação Forense – Material de apoio."
    }
  ]
};

const AULA10 = {
  "id": "aula10",
  "title": "Direito e Novas Tecnologias",
  "shortTitle": "Direito e Tecnologia",
  "description": "LGPD, Marco Civil da Internet, crimes cibernéticos e certificação digital.",
  "accent": "#b91c1c",
  "icon": "⚖️",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q10_1",
      "number": 1,
      "prompt": "O certificado digital é disponibilizado como um produto e não um serviço. Ele é considerado um produto intangível por ser digital. Não se trata de um software que pode ser vendido em caixinha. No procedimento de emissão, são verificadas as características pessoais de cada pessoa que adquire o certificado.\n\nFonte: Aula 2, Tema 2.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas e selecione a alternativa que trata do mecanismo que identifica o remetente de determinada mensagem eletrônica.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Criptografia com Chave Pública."
        },
        {
          "letter": "B",
          "text": "Criptografia com Chave Privada."
        },
        {
          "letter": "C",
          "text": "Assinatura Digital."
        },
        {
          "letter": "D",
          "text": "Mensagem eletrônica com identificação pública."
        }
      ],
      "answer": "C",
      "explanation": "Assinatura digital – Trata-se de um mecanismo que identifica o remetente de determinada mensagem eletrônica.",
      "source": "Referência: Aula 2, Tema 2."
    },
    {
      "id": "q10_2",
      "number": 2,
      "prompt": "A PNSI trata de um tema abordado há muito tempo nas organizações privadas, a segurança da informação. Uma das definições para segurança da informação, segundo Alves (2006, p. 15), é que a segurança da informação “visa proteger a informação de forma a garantir a continuidade dos negócios, minimizando os danos e maximizando o retorno dos investimentos e as oportunidades de negócios”.\n\nFonte: Aula 1, Tema 2.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica como é denominado o grau de acesso à informação restrito a um grupo definido de pessoas autorizadas a ter esse acesso.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Confidencialidade."
        },
        {
          "letter": "B",
          "text": "Estratégica."
        },
        {
          "letter": "C",
          "text": "Continuidade."
        },
        {
          "letter": "D",
          "text": "Maximização."
        }
      ],
      "answer": "A",
      "explanation": "A confidencialidade é o grau em que o acesso à informação é restrito a um grupo definido de pessoas autorizadas a ter esse acesso. A confidencialidade deve ser garantida para os dados armazenados em todo tipo de repositório em repouso, interna e ou externamente, e no tráfego das informações.",
      "source": "Referência: Aula 1, Tema 2."
    },
    {
      "id": "q10_3",
      "number": 3,
      "prompt": "O técnico que recebeu o computador da atriz Carolina Dieckmann tentou suborná-la, solicitando vantagem financeira em troca da não divulgação das imagens, fato que deu origem à criação da Lei 12.737/12, procurando penalizar atos ilícitos praticados quando da invasão e uso de dispositivos informáticos alheios. Um crime cibernético é caracterizado por invasão de computadores, com o objetivo de se apropriar de forma criminosa, e sem autorização, de senhas, violação de dados, obtenção e divulgação de informações sigilosas.\n\nFonte: Aula 2, Tema 5.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica a pena prevista para invasão e uso de dispositivos informáticos alheios, previstos na Lei 12.737/12.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Pena – reclusão, de 10 (dez) meses a 4 (dois) anos, e multa, se a conduta não constitui crime mais grave."
        },
        {
          "letter": "B",
          "text": "Pena – reclusão, de 3 (três) meses a 3 (três) anos, e multa, se a conduta não constitui crime mais grave."
        },
        {
          "letter": "C",
          "text": "Pena – reclusão, de 1 (um) mês a 1 (um) ano, e multa, se a conduta não constitui crime mais grave."
        },
        {
          "letter": "D",
          "text": "Pena – reclusão, de 6 (seis) meses a 2 (dois) anos, e multa, se a conduta não constitui crime mais grave."
        }
      ],
      "answer": "D",
      "explanation": "Pena – reclusão, de 6 (seis) meses a 2 (dois) anos, e multa, se a conduta não constitui crime mais grave.",
      "source": "Referência: Aula 2, Tema 5."
    },
    {
      "id": "q10_4",
      "number": 4,
      "prompt": "O Marco Civil da Internet (MCI), trata da regulamentação do uso da internet no Brasil. Ele aborda a regulamentação do uso das informações trafegadas na rede mundial e não regulamenta o uso das informações que trafegam nas redes internas das organizações.\n\nFonte: Aula 3, Tema 2.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica a Lei que também é conhecida como Marco Civil da Internet.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Lei n. 17.155/19"
        },
        {
          "letter": "B",
          "text": "Lei n. 12.965/14"
        },
        {
          "letter": "C",
          "text": "Lei n. 17.349/19"
        },
        {
          "letter": "D",
          "text": "Lei n. 17.171/18"
        }
      ],
      "answer": "B",
      "explanation": "A Lei n. 12.965/14, também conhecida como Marco Civil da Internet (MCI), trata da regulamentação do uso da internet no Brasil. Ela aborda a regulamentação do uso das informações trafegadas na rede mundial e não regulamenta o uso das informações que trafegam nas redes internas das organizações.",
      "source": "Referência: Aula 3, Tema 1."
    },
    {
      "id": "q10_5",
      "number": 5,
      "prompt": "O certificado digital vincula pares de chaves criptográficas ao respectivo titular. Para entendermos o que é criptografia, temos que percorrer sua história que se iniciou na Grécia, com a combinação de dois radicais: kryptos (escondido) e grafo (escrita). A criptografia é utilizada há muito tempo desde gerações passadas. A principal razão para usar a criptografia é que ela é vista como um meio seguro para manter a informação confidencial.\n\nFonte: Aula 2, Tema 3.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica o sistema que possui um algoritmo e uma chave que o remetente compartilha com o destinatário.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Chaves privadas"
        },
        {
          "letter": "B",
          "text": "Chaves públicas"
        },
        {
          "letter": "C",
          "text": "Criptografia com dupla verificação de chaves"
        },
        {
          "letter": "D",
          "text": "Criptografia simétrica"
        }
      ],
      "answer": "D",
      "explanation": "Criptografia simétrica – Esse sistema possui um algoritmo e uma chave em que o remetente compartilha com o destinatário. A capacidade de ambos manterem em segredo a chave secreta determina a força do sistema.",
      "source": "Referência: Aula 2, Tema 3."
    },
    {
      "id": "q10_6",
      "number": 6,
      "prompt": "Cada uma das normas da família ISO 27000 possui uma função específica, mas todas possuem como objetivo fornecer os requisitos para estabelecer, implementar, operar, monitorar, revisar, manter e melhorar um sistema de gestão de segurança da informação (SGSI).\n\nFonte: Aula 1, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica a ISO que trata da gestão de riscos de segurança da informação.",
      "alternatives": [
        {
          "letter": "A",
          "text": "ISO/IEC 27002."
        },
        {
          "letter": "B",
          "text": "ISO/IEC 27003."
        },
        {
          "letter": "C",
          "text": "ISO/IEC 27004."
        },
        {
          "letter": "D",
          "text": "ISO/IEC 27005."
        }
      ],
      "answer": "D",
      "explanation": "ISO/IEC 27005: gestão de riscos de segurança da informação.",
      "source": "Referência: Aula 1, Tema 1."
    },
    {
      "id": "q10_7",
      "number": 7,
      "prompt": "A PNSI trata de um tema abordado há muito tempo nas organizações privadas, a segurança da informação. Uma das definições para segurança da informação, segundo Alves (2006, p. 15), é que a segurança da informação “visa proteger a informação de forma a garantir a continuidade dos negócios, minimizando os danos e maximizando o retorno dos investimentos e as oportunidades de negócios”.\n\nFonte: Aula 1, Tema 2.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que se refere à veracidade da alegação de origem ou autoria da informação.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Disponibilidade."
        },
        {
          "letter": "B",
          "text": "Autenticidade."
        },
        {
          "letter": "C",
          "text": "Integridade."
        },
        {
          "letter": "D",
          "text": "Garantia de Segurança."
        }
      ],
      "answer": "B",
      "explanation": "A autenticidade se refere à veracidade da alegação de origem ou autoria da informação. A autenticidade pode ser considerada como uma característica da integridade, ou seja, se é autêntica a informação, então ela é considerada íntegra.",
      "source": "Referência: Aula 1, Tema 2."
    },
    {
      "id": "q10_8",
      "number": 8,
      "prompt": "2018 apenas começou e parece que será um grande ano para a segurança da informação. Com questões levantadas sobre a segurança dos microprocessadores e as principais iniciativas de segurança cibernética, como o Regulamento Geral de Proteção de Dados da UE, implementado este ano, uma nova edição da ISO/IEC 27000 chegou no momento certo.\n\nFonte: ABNT, Site. ISO/IEC 27000: Norma internacional de segurança da informação é revisada. Disponível em: http://www.abnt.org.br/noticias/5777-iso-iec-27000-norma-internacional-de-seguranca-da-informacao-e-revisada. Acesso em: maio de 2020.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica a ISO que traz os requisitos para o sistema de gestão de segurança da informação.",
      "alternatives": [
        {
          "letter": "A",
          "text": "ISO/IEC 27001."
        },
        {
          "letter": "B",
          "text": "ISO/IEC 27002."
        },
        {
          "letter": "C",
          "text": "ISO/IEC 27003."
        },
        {
          "letter": "D",
          "text": "ISO/IEC 27004."
        }
      ],
      "answer": "A",
      "explanation": "ISO/IEC 27001: requisitos para o sistema de gestão de segurança da informação (SGSI).",
      "source": "Referência: Aula 1, Tema 1"
    },
    {
      "id": "q10_9",
      "number": 9,
      "prompt": "A Lei n. 12.737/12 foi sancionada em 30 de novembro de 2012 pela então presidente da República Dilma Rousseff. Essa lei promoveu alterações no Código Penal Brasileiro no Decreto-Lei n. 2.848, de 7 de dezembro de 1940.\n\nO que motivou sua criação? Em maio do ano de 2012, a atriz Carolina Dieckmann tornou o caso de invasão à sua privacidade notório no cenário nacional. Fotos íntimas da atriz foram subtraídas, após ter seu computador invadido, e foram divulgadas na internet sem sua autorização.\n\nFonte: Aula 3, Tema 4.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica como se denomina todo hardware conectado ou não em uma rede de computadores.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Dispositivo informático"
        },
        {
          "letter": "B",
          "text": "Computadores e Smatphones"
        },
        {
          "letter": "C",
          "text": "Dispositivo Telemático"
        },
        {
          "letter": "D",
          "text": "Telemática"
        }
      ],
      "answer": "A",
      "explanation": "Dispositivo informático – é todo hardware conectado ou não em uma rede de computadores.",
      "source": "Referência: Aula 3, Tema 4."
    },
    {
      "id": "q10_10",
      "number": 10,
      "prompt": "É necessária uma visão abrangente para que, por meio de um conjunto de ferramentas de análise, processos, estratégias, possamos controlar mudanças e gerenciar riscos a fim tomar medidas para corrigi-los ou mitigá-los. A proteção de dados não pode ser feita sem a aplicação\n\nda segurança da informação. É necessária a aplicação de medidas técnicas e organizacionais para proteger os dados pessoais.\n\nFonte: Aula 1, Tema 4.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica a Lei que instituiu os direitos dos cidadãos dando a eles o poder para fazer a gestão de seus dados de forma a não ter sua exposição.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Lei Geral de Proteção de Dados Pessoais (LGPD)."
        },
        {
          "letter": "B",
          "text": "Lei de Proteção de Dados Individuais (LPDI)."
        },
        {
          "letter": "C",
          "text": "Lei Carolina Dieckmann."
        },
        {
          "letter": "D",
          "text": "Lei de Combate ao Crescimento de Crimes Cibernéticos (LCCCC)."
        }
      ],
      "answer": "A",
      "explanation": "Com as novas leis de proteção de dados, dentre as quais podemos citar a Lei Geral de Proteção de Dados Pessoais (LGPD), que instituiu os direitos dos cidadãos dando a eles o poder para fazer a gestão de seus dados de forma a não ter sua exposição, a LGPD também é aplicada ao setor público. Isso culminou na necessidade de se criar uma política nacional a fim de normatizar a segurança da informação e assim salvaguardar os dados pessoais custodiados pelos setores públicos.",
      "source": "Referência: Aula 1, Tema 4."
    },
    {
      "id": "q10_11",
      "number": 11,
      "prompt": "A Lei n. 12.737/12 foi sancionada em 30 de novembro de 2012 pela então presidente da República Dilma Rousseff. Essa lei promoveu alterações no Código Penal Brasileiro no Decreto-Lei n. 2.848, de 7 de dezembro de 1940.\n\nO que motivou sua criação? Em maio do ano de 2012, a atriz Carolina Dieckmann tornou o caso de invasão à sua privacidade notório no cenário nacional. Fotos íntimas da atriz foram subtraídas, após ter seu computador invadido, e foram divulgadas na internet sem sua autorização.\n\nFonte: Aula 3, Tema 4.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica a “ciência que trata da manipulação e utilização da informação através do uso combinado do computador e meios de comunicação”.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Ciência da Tecnologia da comunicação."
        },
        {
          "letter": "B",
          "text": "Ciência da Computação."
        },
        {
          "letter": "C",
          "text": "Ciência Cibernética."
        },
        {
          "letter": "D",
          "text": "Telemática."
        }
      ],
      "answer": "D",
      "explanation": "A telemática é a “ciência que trata da manipulação e utilização da informação através do uso combinado do computador e meios de comunicação”.",
      "source": "Referência: Aula 3, Tema 4."
    },
    {
      "id": "q10_12",
      "number": 12,
      "prompt": "O art. 2 º trata da abrangência da PNSI:\n\nI - a segurança cibernética; II - a defesa cibernética; III - a segurança física e a proteção de dados organizacionais; e IV - as ações destinadas a assegurar a disponibilidade, a integridade, a confidencialidade e a autenticidade da informação (Brasil, 2018).\n\nFonte: Aula 1, Tema 3.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica quem tem como objetivo proteger os dados e informações contra os ataques cibernéticos.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A proteção de crimes contra a informação digital."
        },
        {
          "letter": "B",
          "text": "A segurança cibernética."
        },
        {
          "letter": "C",
          "text": "A defesa de crimes digitais."
        },
        {
          "letter": "D",
          "text": "A segurança da informação."
        }
      ],
      "answer": "B",
      "explanation": "A segurança cibernética protege os dados e informações contra os ataques cibernéticos.\n\nA segurança cibernética trata daquelas relacionadas às tecnologias informáticas, para garantir a prevenção de ações que são empreendidas por indivíduos que utilizam a tecnologia como arma.",
      "source": "Referência: Aula 1, Tema 3."
    },
    {
      "id": "q10_13",
      "number": 13,
      "prompt": "A emissão, renovação e revogação de Certificado Digital e-CPF ou e-CNPJ será realizada por uma empresa devidamente autorizada pela Receita Federal do Brasil, denominada Autoridade Certificadora Habilitada.\n\nRevogação de Certificado: Revogar um certificado digital da RFB implica torná-lo inválido, impossibilitando, a partir da revogação, o seu uso. Para revogar seu certificado digital, o usuário deverá acessar a página de revogação da Autoridade Certificadora Habilitada, emissora do Certificado Digital da RFB e preenchê-la com os dados solicitados.\n\nFonte: RECEITA FEDERAL, Site. Orientações sobre Emissão, Renovação e Revogação de Certificados Digitais e-CPF ou e-CNPJ. Disponível em: https://receita.economia.gov.br/orientacao/tributaria/senhas-e-procuracoes/senhas/certificados-digitais/orientacoes-sobre-emissao-renovacao-e-revogacao-de-certificados-digitais-e-cpf-ou-e-cnpj. Acesso em: maio de 2020.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas e selecione a alternativa que indica quando um certificado deve obrigatoriamente ser revogado.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Quando for necessária a alteração de qualquer informação constante deste."
        },
        {
          "letter": "B",
          "text": "Quando o solicitante perder o certificado digital."
        },
        {
          "letter": "C",
          "text": "Quando houver o comprometimento da chave pública da AC ou da sua mídia armazenadora."
        },
        {
          "letter": "D",
          "text": "Quando o solicitante comprar outro pendriver."
        }
      ],
      "answer": "A",
      "explanation": "Um certificado deve obrigatoriamente ser revogado:\n\na. Quando constatada emissão imprópria ou defeituosa dele;\n\nb. Quando for necessária a alteração de qualquer informação constante deste;\n\nc. O caso de dissolução da AC titular do certificado; ou\n\nd. No caso de comprometimento da chave privada da AC ou da sua mídia armazenadora.",
      "source": "Referência: Aula 2, Tema 2."
    },
    {
      "id": "q10_14",
      "number": 14,
      "prompt": "A norma ISO/IEC 27000:2018 fornece a visão geral dos sistemas de gerenciamento de segurança da informação e os termos e definições comumente usados na família de normas ISO/IEC 27001. Projetada para ser aplicável a todos os tipos e tamanhos da organização de negócios, desde multinacionais até as pequenas e médias empresas, a nova versão, lançada em fevereiro é igualmente valiosa para agências governamentais ou organizações sem fins lucrativos.\n\nFonte: ABNT, Site. ISO/IEC 27000: Norma internacional de segurança da informação é revisada. Disponível em: http://www.abnt.org.br/noticias/5777-iso-iec-27000-norma-internacional-de-seguranca-da-informacao-e-revisada. Acesso em: maio de 2020.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica a ISO que trata do código de práticas para controle de segurança da informação.",
      "alternatives": [
        {
          "letter": "A",
          "text": "ISO/IEC 27002."
        },
        {
          "letter": "B",
          "text": "ISO/IEC 27003."
        },
        {
          "letter": "C",
          "text": "ISO/IEC 27004."
        },
        {
          "letter": "D",
          "text": "ISO/IEC 27005."
        }
      ],
      "answer": "A",
      "explanation": "ISO/IEC 27002: código de práticas para controle de segurança da informação.",
      "source": "Referência: Aula 1, Tema 1."
    },
    {
      "id": "q10_15",
      "number": 15,
      "prompt": "Disponível gratuitamente desde o mês de abril de 2020, o portal Validador de documentos digitais traz novas funcionalidades aos usuários. Criado para facilitar o relacionamento entre médicos, pacientes e farmacêuticos, o portal ficou ainda mais completo e intuitivo com a versão mobile e uma aba de informações voltadas especificamente aos desenvolvedores e outra com encaminhamentos para cada tipo de mensagem recebida após a consulta do documento.\n\nNo site Validador de Documentos Digitais é possível validar a assinatura digital de prescrições, atestados, relatórios médicos, além de solicitação de exames. A tecnologia dos certificados digitais no padrão da Infraestrutura de Chaves Públicas Brasileira – ICP-Brasil permite que médicos, pacientes e farmacêuticos mantenham o relacionamento de forma 100%\n\nonline e com segurança no envio de documentos por email, mensagem ou aplicativos de mensagens.\n\nFonte: ITI, Site. Site Validador de documentos digitais tem versão mobile e mais completa para os usuários. Disponível em: https://www.iti.gov.br/component/content/article?id=4172. Acesso em: maio de 2020.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica a primeira autoridade da cadeia de certificação.",
      "alternatives": [
        {
          "letter": "A",
          "text": "AC-Brasil."
        },
        {
          "letter": "B",
          "text": "ICP-Brasil."
        },
        {
          "letter": "C",
          "text": "CCP-Brasil."
        },
        {
          "letter": "D",
          "text": "AC-Raiz."
        }
      ],
      "answer": "D",
      "explanation": "A AC-Raiz é a primeira autoridade da cadeia de certificação. É ela quem executa as políticas de certificados e as normas técnicas e operacionais aprovadas pelo comitê Gestor da ICP-Brasil. Compete à AC-Raiz emitir, expedir, distribuir, revogar e gerenciar os certificados das autoridades certificadoras de nível imediatamente subsequente ao seu.",
      "source": "Referência: Aula 2, Tema 1."
    },
    {
      "id": "q10_16",
      "number": 16,
      "prompt": "Após a adoção da General Data Protection Regulation (GDPR) pela Europa, em maio de 2018, o Brasil, percebendo a movimentação e os bons reflexos que a nova lei europeia estava alcançando, promulgou a Lei n. 13.709/2018 (Lei Geral de Proteção de Dados – LGPD). À LGPD seguiu-se a Medida Provisória (MP) n. 869/2018, resultando na Lei n. 13.853/2019, que instituiu a Autoridade Nacional de Proteção de Dados Pessoais, suas atribuições e sua composição.\n\nA preocupação demonstrada em relação ao que é feito com os dados e a forma como nossa privacidade é tratada está intimamente ligada à Quarta Revolução Industrial. Além disso, a informacionalização da sociedade na década de 1970 traz alterações substanciais no modo de tratamento das informações pelas empresas e pelo Estado.\n\nFonte: Aula 6, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica qual o princípio das atividades de tratamento de dados pessoais em que o tratamento de dados precisa ter um resultado único e específico que delimite o seu objetivo final.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Finalidade."
        },
        {
          "letter": "B",
          "text": "Adequação."
        },
        {
          "letter": "C",
          "text": "Necessidade."
        },
        {
          "letter": "D",
          "text": "Não discriminação."
        }
      ],
      "answer": "A",
      "explanation": "Finalidade: o tratamento de dados precisa ter uma finalidade, ou seja, um resultado único e específico, delimitando seu objetivo final e inviabilizando tratamento posterior não condizente com a finalidade original.",
      "source": "Referência: Aula 6, Tema 3."
    },
    {
      "id": "q10_17",
      "number": 17,
      "prompt": "Informação: é definida na disciplina de Tecnologia da Informação como sendo um conjunto de dados que, transformados em informação, proporcionam a comunicação ou a recepção de conhecimento ou inteligência. A informação possui seu ciclo de vida dentro das organizações independente de seu tamanho. Pode ser criada, armazenada, processada, transmitida, usada, corrompida, perdida e destruída. O ciclo de vida da informação também é conhecido como tratamento de dados.\n\nFonte: Aula 4, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica qual a qualidade da informação que pode ser conhecida e utilizada por indivíduos.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Disponibilidade."
        },
        {
          "letter": "B",
          "text": "Dados processados."
        },
        {
          "letter": "C",
          "text": "Autenticidade."
        },
        {
          "letter": "D",
          "text": "Integridade."
        }
      ],
      "answer": "A",
      "explanation": "Disponibilidade: qualidade da informação que pode ser conhecida e utilizada por indivíduos, equipamentos ou sistemas autorizados.",
      "source": "Referência: Aula 4, Tema 1."
    },
    {
      "id": "q10_18",
      "number": 18,
      "prompt": "Após a adoção da General Data Protection Regulation (GDPR) pela Europa, em maio de 2018, o Brasil, percebendo a movimentação e os bons reflexos que a nova lei europeia estava alcançando, promulgou a Lei n. 13.709/2018 (Lei Geral de Proteção de Dados – LGPD). À LGPD seguiu-se a Medida Provisória (MP) n. 869/2018, resultando na Lei n. 13.853/2019, que instituiu a Autoridade Nacional de Proteção de Dados Pessoais, suas atribuições e sua composição.\n\nA preocupação demonstrada em relação ao que é feito com os dados e a forma como nossa privacidade é tratada está intimamente ligada à Quarta Revolução Industrial. Além disso, a informacionalização da sociedade na década de 1970 traz alterações substanciais no modo de tratamento das informações pelas empresas e pelo Estado.\n\nFonte: Aula 6, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica qual o princípio das atividades de tratamento de dados pessoais em que não sendo os dados mais necessários para a finalidade a ser alcançada, findará seu tratamento.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Adequação."
        },
        {
          "letter": "B",
          "text": "Livre acesso."
        },
        {
          "letter": "C",
          "text": "Término do tratamento."
        },
        {
          "letter": "D",
          "text": "Transparência."
        }
      ],
      "answer": "C",
      "explanation": "Término do tratamento: quando os dados não mais são necessários para a finalidade a ser alcançada, findando seu tratamento.",
      "source": "Referência: Aula 6, Tema 4."
    },
    {
      "id": "q10_19",
      "number": 19,
      "prompt": "A regulamentação de tratamento de dados vem sendo amplamente adotada por diversos países. Essas regulamentações definem o direito dos cidadãos sobre os seus dados pessoais. Temos acompanhado vários escândalos envolvendo o tratamento de dados em grande escala, dados tratados de forma automatizada, envolvendo definição de perfis socioeconômico, opinião política, religiosa, perfis de consumo e outros. A necessidade de controle no uso desses dados foi definida nas leis, a fim de garantir os direitos humanos, o livre desenvolvimento da personalidade, a dignidade e o exercício da cidadania pelas pessoas.\n\nFonte: Aula 5, Tema 4.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, analise as assertivas e selecione a alternativa que indica a Lei que controla o uso dos dados e garante os direitos humanos, o livre desenvolvimento da personalidade, a dignidade e o exercício da cidadania pelas pessoas, no mundo digital.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Lei de proteção à informação."
        },
        {
          "letter": "B",
          "text": "Leis de proteção de dados e privacidade."
        },
        {
          "letter": "C",
          "text": "Lei Geral de Proteção de Dados."
        },
        {
          "letter": "D",
          "text": "Lei de Acesso à Informação."
        }
      ],
      "answer": "B",
      "explanation": "A regulamentação de tratamento de dados vem sendo amplamente adotada por diversos países, denominadas Leis de proteção de dados e privacidade, que definem o direito dos cidadãos sobre os seus dados pessoais. Temos acompanhado vários escândalos envolvendo o tratamento de dados em grande escala, dados tratados de forma automatizada, envolvendo definição de perfis socioeconômico, opinião política, religiosa, perfis de consumo e outros. A necessidade de controle no uso desses dados foi definida nas leis, a fim de garantir os direitos humanos, o livre desenvolvimento da personalidade, a dignidade e o exercício da cidadania pelas pessoas.",
      "source": "Referência: Aula 5, Tema 4."
    },
    {
      "id": "q10_20",
      "number": 20,
      "prompt": "Um crime comum cometido na internet é o de ofender a dignidade de alguém se utilizando de elementos referentes à raça, cor, etnia, religião, origem ou à condição de pessoa idosa ou portadora de deficiência – trata-se do crime de injúria qualificada, previsto no parágrafo terceiro do art. 140 do Código Penal.\n\nFonte: Aula 5, Tema 3.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica qual a pena prevista para esse tipo de crime.",
      "alternatives": [
        {
          "letter": "A",
          "text": "De três meses a um ano de prisão, além do pagamento de multa."
        },
        {
          "letter": "B",
          "text": "De quatro meses a quatro anos de prisão, além seis meses de serviços comunitários."
        },
        {
          "letter": "C",
          "text": "De quatro meses a três anos de prisão, além do pagamento de multa."
        },
        {
          "letter": "D",
          "text": "De um a três anos de prisão, além do pagamento de multa."
        }
      ],
      "answer": "D",
      "explanation": "Ofender a dignidade de alguém se utilizando de elementos referentes à raça, cor, etnia, religião, origem ou à condição de pessoa idosa ou portadora de deficiência – trata-se do crime de injúria qualificada, previsto no parágrafo terceiro do art. 140 do Código Penal (é um tipo mais grave de injúria), cuja pena pode variar de um a três anos de prisão. além do pagamento de multa.",
      "source": "Referência: Aula 2, Tema 2."
    },
    {
      "id": "q10_21",
      "number": 21,
      "prompt": "Os regulamentos de proteção de dados imputam penalidades às organizações e pessoas físicas que tratam de informações pessoais de forma que não se respeitem tais regulamentos. Por exemplo: as organizações de todos os tipos e tamanhos tratam dados de seus colaboradores e clientes. Pessoas naturais (físicas) também podem ser responsabilizadas pelo tratamento de dados, caso estejam fazendo uso destes de forma indevida.\n\nO vazamento de dados ou informações pode ocorrer por um agente de ameaça, externo ou interno.\n\nFonte: Aula 5, Tema 4.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica o nome dado ao método de ataque que se utiliza para a persuasão e manipulação psicológica, a fim de se obter acesso não autorizado a informações.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Sniffing."
        },
        {
          "letter": "B",
          "text": "Brute forc."
        },
        {
          "letter": "C",
          "text": "DoS e DDoS."
        },
        {
          "letter": "D",
          "text": "Engenharia social."
        }
      ],
      "answer": "D",
      "explanation": "Engenharia social: o engenheiro social é um indivíduo que utiliza métodos de ataque, utilizando-se de persuasão e manipulação psicológica, a fim de obter acesso não autorizado a informações. Ele explora a falta de conscientização das pessoas, com relação à segurança da informação.",
      "source": "Referência: Aula 5, Tema 4."
    },
    {
      "id": "q10_22",
      "number": 22,
      "prompt": "Após a adoção da General Data Protection Regulation (GDPR) pela Europa, em maio de 2018, o Brasil, percebendo a movimentação e os bons reflexos que a nova lei europeia estava alcançando, promulgou a Lei n. 13.709/2018 (Lei Geral de Proteção de Dados – LGPD). À LGPD seguiu-se a Medida Provisória (MP) n. 869/2018, resultando na Lei n. 13.853/2019, que instituiu a Autoridade Nacional de Proteção de Dados Pessoais, suas atribuições e sua composição.\n\nA preocupação demonstrada em relação ao que é feito com os dados e a forma como nossa privacidade é tratada está intimamente ligada à Quarta Revolução Industrial. Além disso, a informacionalização da sociedade na década de 1970 traz alterações substanciais no modo de tratamento das informações pelas empresas e pelo Estado.\n\nFonte: Aula 6, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica qual o princípio das atividades de tratamento de dados pessoais em que deverão ser tratados apenas os dados necessários, dispensando-se os excessivos ou desnecessários, evitando que se peçam informações sobre a cor da pele para faturamento de produtos e serviços ou solicitar orientação sexual no processo de admissão de um colaborador.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Adequação."
        },
        {
          "letter": "B",
          "text": "Necessidade."
        },
        {
          "letter": "C",
          "text": "Não discriminação."
        },
        {
          "letter": "D",
          "text": "Transparência."
        }
      ],
      "answer": "B",
      "explanation": "Necessidade: deverão ser tratados apenas os dados necessários, dispensando-se os excessivos ou desnecessários, evitando que se peçam informações sobre a cor da pele para faturamento de produtos e serviços ou solicitar orientação sexual no processo de admissão de um colaborador.",
      "source": "Referência: Aula 6, Tema 3."
    },
    {
      "id": "q10_23",
      "number": 23,
      "prompt": "Os crimes praticados no mundo virtual sempre objetivam algum tipo de vantagem do criminoso sobre suas vítimas, muitas vezes as prejudicando moralmente.\n\nFonte: Aula 5, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica qual o tipo de crime que tem como finalidade a obtenção de logins e senhas de sites e bancos.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Fake news."
        },
        {
          "letter": "B",
          "text": "Criptografar os arquivos da empresa."
        },
        {
          "letter": "C",
          "text": "Furto de informações sigilosas dos usuários."
        },
        {
          "letter": "D",
          "text": "Uso de identidades e perfis falsos."
        }
      ],
      "answer": "C",
      "explanation": "Furto de informações sigilosas dos usuários – esse tipo de crime tem como finalidade a obtenção de logins e senhas de sites e bancos.",
      "source": "Referência: Aula 5, Tema 1."
    },
    {
      "id": "q10_24",
      "number": 24,
      "prompt": "A Lei n. 12.527/2011 dispõe de nove termos técnicos informáticos no art. 4º. Já o Decreto n. 7.724/2012, que regulamenta a citada lei, dispõe de doze definições (termos técnicos informáticos) no art. 3º.\n\nFonte: Aula 4, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica o termo técnico informático para o documento formal utilizado como fundamento da tomada de decisão ou de ato administrativo.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Documento preparatório."
        },
        {
          "letter": "B",
          "text": "Documento processado"
        },
        {
          "letter": "C",
          "text": "Documento oficial."
        },
        {
          "letter": "D",
          "text": "Documento jurídico."
        }
      ],
      "answer": "A",
      "explanation": "Documento preparatório: documento formal utilizado como fundamento da tomada de decisão ou de ato administrativo, a exemplo de pareceres e notas técnicas.",
      "source": "Referência: Aula 4, Tema 1."
    },
    {
      "id": "q10_25",
      "number": 25,
      "prompt": "A divulgação proativa está presente no capítulo III da transparência ativa. Trata-se da obrigação de divulgar informações de interesse público. Nos parágrafos de 1º a 8º do art. 7º do Decreto n. 7.724/2012 estão definidas todas as diretrizes para a adequação e disponibilidade das informações pelos órgãos públicos (Brasil, 2012).\n\nFonte: Aula 4, Tema 2.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica o nome dado, nos sites, ao modelo de disponibilidade que dará acesso a uma sessão específica de busca.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A página com indicação da unidade responsável."
        },
        {
          "letter": "B",
          "text": "A página com a estrutura organizacional."
        },
        {
          "letter": "C",
          "text": "Barra de identidade do Governo Federal."
        },
        {
          "letter": "D",
          "text": "Banner na página inicial."
        }
      ],
      "answer": "D",
      "explanation": "O banner na página inicial dará acesso à sessão específica.",
      "source": "Referência: Aula 4, Tema 2."
    },
    {
      "id": "q10_26",
      "number": 26,
      "prompt": "Após a adoção da General Data Protection Regulation (GDPR) pela Europa, em maio de 2018, o Brasil, percebendo a movimentação e os bons reflexos que a nova lei europeia estava alcançando, promulgou a Lei n. 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).\n\nEsta Lei dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.\n\nFonte: Aula 6, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica o termo usado para tratar do âmbito mais profundo e secreto da pessoa.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Intimidade."
        },
        {
          "letter": "B",
          "text": "Confidencialidade."
        },
        {
          "letter": "C",
          "text": "Segurabilidade."
        },
        {
          "letter": "D",
          "text": "Censurabilidade."
        }
      ],
      "answer": "A",
      "explanation": "A intimidade é o âmbito interior da pessoa mais profundo, mais recôndito, secreto ou escondido dentro dela. Ë, assim, algo inacessível, invisível, que só ela conhece, onde ela só elabora ou constrói livremente seu próprio agir e onde se processa sua vida interior. Na intimidade a pessoa constrói-se e descobre-se a si mesma.",
      "source": "Referência: Aula 6, Tema 1."
    },
    {
      "id": "q10_27",
      "number": 27,
      "prompt": "A divulgação proativa está presente no capítulo III da transparência ativa. Trata-se da obrigação de divulgar informações de interesse público. Nos parágrafos de 1º a 8º do art. 7º do Decreto n. 7.724/2012 estão definidas todas as diretrizes para a adequação e disponibilidade das informações pelos órgãos públicos (Brasil, 2012).\n\nFonte: Aula 4, Tema 2.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale alternativa que indica o nome dado, nos sites, ao modelo de disponibilidade que possui a ferramenta de redirecionamento de página para o Portal Brasil.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A página com indicação da unidade responsável."
        },
        {
          "letter": "B",
          "text": "A página com a estrutura organizacional."
        },
        {
          "letter": "C",
          "text": "Barra de identidade do Governo Federal."
        },
        {
          "letter": "D",
          "text": "Banner na página inicial."
        }
      ],
      "answer": "C",
      "explanation": "Barra de identidade do Governo Federal contém a ferramenta de redirecionamento de página para o Portal Brasil.",
      "source": "Referência: Aula 4, Tema 2."
    },
    {
      "id": "q10_28",
      "number": 28,
      "prompt": "Lei n. 12.527/2011\n\nArt. 2º Aplicam-se as disposições desta Lei, no que couber, às entidades privadas sem fins lucrativos que recebam, para realização de ações de interesse público, recursos públicos diretamente do orçamento ou mediante subvenções sociais, contrato de gestão, termo de parceria, convênios, acordo, ajustes ou outros instrumentos congêneres.\n\nFonte: Aula 4, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica quem são subordinados ao regime da Lei n. 12.527/2011.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Órgãos Públicos, Autarquias, Fundações e Empresas Privadas."
        },
        {
          "letter": "B",
          "text": "Fundações, Empresas Públicas e Sociedades Anônimas (SA)."
        },
        {
          "letter": "C",
          "text": "Poderes: Executivo, Legislativo e Judiciário."
        },
        {
          "letter": "D",
          "text": "Empresas Privadas, Empresas Públicas e Empresas de Economia Mista."
        }
      ],
      "answer": "C",
      "explanation": "Subordinam-se ao regime desta lei:\n\n· Órgãos e entidades: federais, estaduais e distritais;\n\n· Poderes: Executivo, Legislativo e Judiciário;\n\n· Administração pública: órgãos públicos, autarquias, fundações, empresas públicas, sociedade de economia mista, e demais entidades controladas direta ou indiretamente pela União, estados, Distrito Federal e ou municípios.",
      "source": "Referência: Aula 4, Tema 1."
    },
    {
      "id": "q10_29",
      "number": 29,
      "prompt": "A Lei n. 12.527/2011 dispõe de nove definições (termos técnicos informáticos) no art. 4º. Já o Decreto n. 7.724/2012, que regulamenta a citada lei, dispõe de doze definições (termos técnicos informáticos) no art. 3º.\n\nFonte: Aula 4, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, assinale a alternativa que indica o termo técnico informático para a qualidade da informação que tenha sido produzida, expedida, recebida ou modificada.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Confidencialidade."
        },
        {
          "letter": "B",
          "text": "Autenticidade."
        },
        {
          "letter": "C",
          "text": "Continuidade."
        },
        {
          "letter": "D",
          "text": "Maximização."
        }
      ],
      "answer": "B",
      "explanation": "Autenticidade: qualidade da informação que tenha sido produzida, expedida, recebida ou modificada por determinado indivíduo, equipamento ou sistema.",
      "source": "Referência: Aula 4, Tema 1."
    },
    {
      "id": "q10_30",
      "number": 30,
      "prompt": "A Lei Geral de Proteção de Dados – LGPD dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.\n\nAssim, tem-se reforçada pelo legislador a proteção das esferas mais íntimas do indivíduo, como a inviolabilidade da intimidade, da honra e da imagem.\n\nFonte: Aula 6, Tema 1.\n\nDe acordo com os estudos realizados e levando em consideração o texto acima, selecione a alternativa que indica o termo que demonstra maior profundidade por abranger a externalização física dos atos humanos.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Privacidade."
        },
        {
          "letter": "B",
          "text": "Intimidade."
        },
        {
          "letter": "C",
          "text": "Confidencialidade."
        },
        {
          "letter": "D",
          "text": "Segurabilidade."
        }
      ],
      "answer": "A",
      "explanation": "Assim, tem-se reforçada pelo legislador a proteção das esferas mais íntimas do indivíduo, como a inviolabilidade da intimidade, da honra e da imagem. São desdobramentos da proteção à privacidade, ou seja, direitos ligados à personalidade. A privacidade, que tem maior profundidade por abranger a externalização física dos atos humanos.",
      "source": "Referência: Aula 6, Tema 1."
    }
  ]
};

const AULA11 = {
  "id": "aula11",
  "title": "Investigação de Crimes Digitais",
  "shortTitle": "Crimes Digitais",
  "description": "Direito penal, provas digitais, perícia e crimes cometidos no ambiente virtual.",
  "accent": "#4338ca",
  "icon": "🕵️",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q11_1",
      "number": 1,
      "prompt": "“Na Constituição estão inseridos os princípios e premissas básicas que um país deve adotar, princípios esses que são o resultado da vontade do povo que habita o país”. (PDF da aula 01.)\n\nNo caso brasileiro, a Constituição determina que o Estado é laico, o que significa especificamente que:",
      "alternatives": [
        {
          "letter": "A",
          "text": "A União, os estados, o Distrito Federal e os municípios têm capacidade legislativa limitada, de acordo com a competência de cada ente."
        },
        {
          "letter": "B",
          "text": "As pessoas têm plena liberdade de culto e de religião."
        },
        {
          "letter": "C",
          "text": "Decisões políticas e leis não devem ser influenciadas pela religião."
        },
        {
          "letter": "D",
          "text": "Nosso ordenamento jurídico, desde a Constituição, é um reflexo de escolhas religiosas."
        }
      ],
      "answer": "C",
      "explanation": "Estado laico se define assim:\n\n“Em alguns países, a religião tem aspecto importantíssimo e influencia profundamente as leis. No Brasil, isso não acontece em razão de que aqui o Estado é laico, ou seja, existe uma separação entre Estado e Igreja, sendo que as decisões políticas e as leis não devem ser influenciadas pela religião.”\n\nOutras afirmativas são corretas em si mesmas, mas não têm a ver com a definição de laicidade do Estado, como pede o comando. A única afirmativa errada é: “Nosso ordenamento jurídico, desde a Constituição, é um reflexo de escolhas religiosas.”",
      "source": "Referência: PDF da aula 01, p. 8."
    },
    {
      "id": "q11_2",
      "number": 2,
      "prompt": "Tarico, vítima de bullying (assédio) cometido pela internet por um inimigo seu, procurou Taruco, advogado, para ajudá-lo a fazer cessar o ataque contra si.\n\nTaruco disse que, pela via judicial, poderá obrigar o responsável a parar de ofendê-lo, além de exigir compensação por danos morais causados. Taruco disse, ainda: “Não existem leis específicas para prever crimes digitais, mas é a lei penal comum que pode ser aplicada para os crimes em meio virtual.” (autoria do elaborador da questão).\n\nNesse contexto, julgue a última afirmação do advogado, entre aspas, como verdadeira ou falsa:",
      "alternatives": [
        {
          "letter": "A",
          "text": "A afirmação é falsa, pois, especialmente nos últimos anos, tem sido sancionada legislação própria e específica para crimes digitais."
        },
        {
          "letter": "B",
          "text": "A afirmação é verdadeira, porque os crimes são sempre para a realidade física, sendo os crimes eletrônicos uma interpretação análoga desses crimes."
        },
        {
          "letter": "C",
          "text": "A afirmação é falsa, porque só há crime quando o agente atua com dolo, isto é, com intenção de cometer o crime."
        },
        {
          "letter": "D",
          "text": "A afirmação é falsa, mas comporta exceções, dependendo da natureza do crime."
        }
      ],
      "answer": "A",
      "explanation": "Há crimes que dependem de acesso a dispositivos eletrônicos por sua própria natureza.\n\n“O crime de invasão de dispositivo informático, por exemplo, é previsto na Lei n. 12.737/2012 e é considerado um crime exclusivamente cibernético, pois só pode ser praticado com a utilização de dispositivos de acesso à internet.”\n\nUm crime pode ser cometido com dolo ou, dependendo do tipo penal, com culpa.\n\nA afirmação não pode ser “falsa com exceções”, pois se refere a uma constatação ampla e irrestrita. Ou há, ou não há, legislação própria para crimes digitais.",
      "source": "Referência: Rota de aprendizagem 03, p. 2. O assunto também é tratado na rota de aprendizagem 02."
    },
    {
      "id": "q11_3",
      "number": 3,
      "prompt": "Compreender dolo e culpa é essencial, pois é cediço que, se não houver dolo ou culpa, não há crime:\n\n“É sabido que não há crime sem dolo ou culpa. Esta é a regra basilar sobre a qual se sustenta toda a legislação penal. Estando ausente o elemento subjetivo, atípica é a conduta imputada ao agente [acusado]”. (Tribunal de Justiça do Pará. Habeas Corpus 0000318-42.2009.8.14.0053. Belém. Relator: Rômulo José Ferreira Nunes. Julgado em 24/06/2013, publicado em 26/06/2013.)\n\nCom base no conteúdo da disciplina acerca das bases do direito penal, analise as assertivas abaixo:\n\nI. Dolo é a vontade dirigida a um fim.\n\nII. Fala-se em dolo eventual quando o agente não quer um resultado, mas assume o risco de produzi-lo.\n\nIII. Culpa se caracteriza quando o agente age com imprudência, imperícia ou negligência.\n\nÉ correto o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II e III, apenas."
        },
        {
          "letter": "B",
          "text": "I, II e III."
        },
        {
          "letter": "C",
          "text": "II, apenas."
        },
        {
          "letter": "D",
          "text": "I e III, apenas."
        }
      ],
      "answer": "B",
      "explanation": "“Dolo é a vontade dirigida a um fim. Ou seja, você quer fazer alguma coisa, atingir um objetivo previamente pensado e dirige todos os seus esforços para alcançá-lo.\n\n[...]\n\nFala-se em dolo eventual quando o agente não quer um resultado, mas assume o risco de produzi-lo.\n\n[...]\n\nPor sua vez, a culpa se caracteriza quando o agente age com imprudência, imperícia ou negligência.”",
      "source": "Referência: PDF da aula 02, p. 4."
    },
    {
      "id": "q11_4",
      "number": 4,
      "prompt": "“Em silêncio, por trás de uma tela, sem testemunhas. É desta forma que muitos crimes vêm sendo cometidos. O relatório da Norton Cyber Security mostra que o Brasil está no ranking dos países com mais casos de crimes cibernéticos, algo diretamente ligado à popularidade dos smartphones. Cresce o acesso à internet, a tecnologia evolui e, apesar do progresso, surgem aspectos negativos. [...]\n\nAs ações dos criminosos se concentram nas redes sociais. O delegado regional de Investigação e Combate ao Crime Organizado, Paulo Henrique Oliveira Rocha, pontua que não há um perfil delimitado de quem é responsável pelos delitos. Os crimes cibernéticos têm peculiaridades próprias, que, inclusive, dificultam e prolongam a investigação. [...]\n\nA reportagem também solicitou à Polícia Civil do Estado do Ceará, por meio da Secretaria da Segurança Pública e Defesa Social (SSPDS), quantos crimes foram cometidos no ambiente virtual em 2017, 2018 e 2019. Porém, segundo a Pasta, as ocorrências são registradas no Sistema de Informação Policial (SIP) pela tipificação criminal, não sendo possível filtrar quais crimes foram por meio da web. [...]\n\nApesar de não divulgar os números, a SSPDS informou que o principal crime cometido via internet e investigado pela Polícia Civil é o estelionato. No entanto, o estelionato não é o mais registrado, já que, ainda de acordo com a Secretaria, após cair em algum golpe, muitas vezes a vítima não procura a delegacia para registrar a ocorrência. Os crimes mais registrados são os contra a honra, envolvendo calúnia, difamação e injúria.”\n\n(MELO, Emanoela Campelo de. Crimes cibernéticos no Ceará na mira da Polícia Federal. Diário do Nordeste, 30 mar. 2019. Disponível em: <https://diariodonordeste.verdesmares.com.br/editorias/seguranca/crimes-ciberneticos-no-ceara-na-mira-da-policia-federal-1.2081649>. Acesso em: 05 abr. 2019.\n\nDe acordo com a leitura atenta da reportagem, em consonância com o conteúdo proposto na disciplina, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Conforme os números divulgados pela SSPDS, o número de crimes digitais registrados cresceu a cada ano."
        },
        {
          "letter": "B",
          "text": "Crimes contra a honra representam a maior parte dos crimes cibernéticos registrados no Brasil."
        },
        {
          "letter": "C",
          "text": "A calúnia, a injúria e a difamação não são crimes previstos no Código Penal, porém, podem ser apurados, e seus autores, responsabilizados, por crime cibernético."
        },
        {
          "letter": "D",
          "text": "O crime digital mais registrado no Brasil é o estelionato, e logo atrás estão os crimes contra a honra."
        }
      ],
      "answer": "B",
      "explanation": "Crimes contra a honra representam a maior parte dos crimes cibernéticos registrados no Brasil, conforme a reportagem. O estelionato é o principal crime cometido e investigado.\n\nUma observação extra quanto a uma questão jurídica: os crimes contra a honra são de iniciativa privada, portanto, até por isso a polícia tem menor ou quase nula atuação nessa esfera.\n\n“Em se falando de crimes cibernéticos, que analisaremos mais detalhadamente a seguir, é importante entendermos o que são os crimes contra a honra, pois eles estão intimamente ligados à propagação pela internet e vários meios digitais.”\n\nTais crimes estão previstos no Código Penal brasileiro.\n\n“Persecução penal é, literalmente, a ação de perseguir o crime com o fim de identificar seu autor (ou autores) e atribuir a ele a devida punição. Para isso, o Estado possui todo um aparelhamento de funcionários públicos (polícia, juiz, promotor de justiça – Ministério Público) que vão desenvolver essa atividade.” Somente o Estado pode apurar crimes.\n\nNa reportagem, a SSPDS não divulgou os números de crimes cibernéticos.",
      "source": "Referência: PDF da aula 02, p. 5-6."
    },
    {
      "id": "q11_5",
      "number": 5,
      "prompt": "“Conforme prescrito no artigo 5º, LVI da constituição Federal de 1988, é expressamente vedada a admissibilidade da prova que for obtida de maneira ilícita dentro de um processo. Assim, as jurisprudências e doutrinas divergem de tal questão, podendo então fazer o uso de tais provas no processo em alguns casos específicos, baseando-se então no princípio da proporcionalidade. [...]\n\nÉ notório que, as provas judiciárias têm por finalidade reconstruir alguns fatos que foram investigados, em que para que haja uma decisão final, o julgador possa ter uma maior aproximação da verdade, mesmo sendo ela relativa.\n\nE é então quando ocorre o debate sobre a admissibilidade ou não de alguma prova ilícita no processo, pois por um momento, pode-se parecer justo, o julgador utiliza todas e quaisquer possíveis evidências que ele adquirir, e quais fossem as maneiras que elas fossem obtidas. Entretanto, existem limites legais e constitucionais para ser buscada a verdade real de um fato.”\n\n(DOMENICO, Marina Di. Provas ilícitas e sua aplicação no processo penal. Âmbito Jurídico, Rio Grande, XIX, n. 154, nov. 2016. Disponível em: <http://www.ambito-juridico.com.br/site/?n_link=revista_artigos_leitura&artigo_id=18105&revista_caderno=22>. Acesso em: 05 abr. 2019.)\n\nNo que diz respeito à validade das provas, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Em se falando em tecnologia da informação, é sabido que hoje existe uma série de programas espiões que podem vasculhar dados em computadores ou smartphones, de modo que provas obtidas por esse método são válidas atualmente."
        },
        {
          "letter": "B",
          "text": "Conversas privadas são protegidas, de tal modo que qualquer gravação nesse contexto não será admitida em juízo."
        },
        {
          "letter": "C",
          "text": "Uma pessoa que grava sua própria conversa telefônica com um interlocutor pode utilizar essa prova em juízo, pois é lícita."
        },
        {
          "letter": "D",
          "text": "Escutas e câmeras escondidas, desde que não estejam em ambientes reservados, como banheiro e quarto de dormir, podem ser utilizadas em juízo, pois são consideradas provas lícitas."
        }
      ],
      "answer": "C",
      "explanation": "As conversas privadas são protegidas por sigilo, mas há exceção para seu uso:\n\n“Ou seja, se você estiver falando com alguém por telefone e gravar a conversa, mesmo que a outra pessoa não saiba, não haverá crime porque se entende que uma pessoa pode gravar a conversa da qual participa e não precisa avisar a outra disso. Trata-se de uma autogravação da conversa.”\n\n“Qualquer escuta ou câmera escondida, ou espionagem por programas de computador, invasão de email etc.”\n\n“Qualquer prova obtida de maneira ilegal será considerada nula e não admitida em juízo, bem como aquele que a apresentar estará sujeito a uma penalidade, caso se comprove que ele teve participação na obtenção da prova ilícita. É muito comum anular-se processos em razão da prova ter sido obtida de maneira ilegal.” O efeito geral que uma prova ilícita provoca, portanto, é seu desentranhamento (sua exclusão) do processo, sendo que, excepcionalmente, poderá haver outras questões a dirimir: caso seja determinante no processo, este poderá ser anulado, e, se o autor tiver cometido crime ao obter ou expor a prova, poderá ser processado criminalmente.",
      "source": "Referência: Rota de aprendizagem 02, p. 10."
    },
    {
      "id": "q11_6",
      "number": 6,
      "prompt": "As provas em juízo têm por finalidade reconstruir alguns fatos que foram investigados e, assim, o julgador possa ter uma maior aproximação da verdade. (Enunciado do elaborador da questão.)\n\nNo que diz respeito à validade das provas, consoante o conteúdo da disciplina, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Dados obtidos com softwares espiões que invadem a privacidade são válidos como prova em juízo."
        },
        {
          "letter": "B",
          "text": "Nenhuma conversa privada gravada poderá ser admitida em juízo."
        },
        {
          "letter": "C",
          "text": "Uma pessoa que grava sua própria conversa telefônica com um interlocutor pode utilizar essa prova em juízo, pois é lícita."
        },
        {
          "letter": "D",
          "text": "Imagens obtidas com câmeras escondidas em banheiro ou quarto de dormir são aceitas em processos judiciais."
        }
      ],
      "answer": "C",
      "explanation": "As conversas privadas são protegidas por sigilo, mas há exceção para seu uso:\n\n“Ou seja, se você estiver falando com alguém por telefone e gravar a conversa, mesmo que a outra pessoa não saiba, não haverá crime porque se entende que uma pessoa pode gravar a conversa da qual participa e não precisa avisar a outra disso. Trata-se de uma autogravação da conversa.”\n\n“Qualquer escuta ou câmera escondida, ou espionagem por programas de computador, invasão de email etc.”\n\n“Qualquer prova obtida de maneira ilegal será considerada nula e não admitida em juízo, bem como aquele que a apresentar estará sujeito a uma penalidade, caso se comprove que ele teve participação na obtenção da prova ilícita. É muito comum anular-se processos em razão da prova ter sido obtida de maneira ilegal.” O efeito geral que uma prova ilícita provoca, portanto, é seu desentranhamento (sua exclusão) do processo, sendo que, excepcionalmente, poderá haver outras questões a dirimir: caso seja determinante no processo, este poderá ser anulado, e, se o autor tiver cometido crime ao obter ou expor a prova, poderá ser processado criminalmente.",
      "source": "Referência: Rota de aprendizagem 02, p. 10."
    },
    {
      "id": "q11_7",
      "number": 7,
      "prompt": "O Código Penal diz, em seu art. 158: \"Quando a infração deixar vestígios, será indispensável o exame de corpo de delito, direto ou indireto, não podendo supri-lo a confissão do acusado.\" Vemos, assim, a importância do corpo de delito, isto é, a perícia. (Enunciado do elaborador da questão.)\n\nAcerca da realização de perícia na investigação de crimes digitais, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "No caso de crimes digitais, uma vez que pessoas não são afetadas fisicamente, não se realiza exame de corpo de delito."
        },
        {
          "letter": "B",
          "text": "Para a prova em crimes digitais, é dispensável a realização de perícia."
        },
        {
          "letter": "C",
          "text": "Na perícia de mídias digitais, o primeiro passo é a sua duplicação, para não alterar o estado dos arquivos."
        },
        {
          "letter": "D",
          "text": "Na perícia de mídias digitais, o correto é acessar os dados diretamente no dispositivo de armazenamento objeto da perícia."
        }
      ],
      "answer": "C",
      "explanation": "“Para que ocorra a perfeita prova, a grande maioria dos crimes cibernéticos irá exigir que haja perícia. Uma vez identificado o endereço real do criminoso, e determinada a busca e a preensão de seu computador e quaisquer mídias que possam conter indícios da materialidade, procede-se ao exame de corpo de delito.\n\nO primeiro passo é a duplicação das mídias que serão examinadas, e a perícia deverá ser executada nas cópias, e não nas mídias originais. Essa ação se deve ao fato de preservar as mídias originais e o simples fato de se abrir um determinado arquivo em seu dispositivo pode alterar o seu estado.\n\nDe acordo com Costa (2003), ‘as evidências dos crimes cibernéticos, em um computador, podem ser classificadas como evidências do usuário e evidências do sistema.’. São classificadas como evidências do usuário aquelas produzidas pelo próprio sujeito ativo. Essas evidências podem ser em arquivos texto, imagem ou qualquer outro tipo de arquivo. As evidências do sistema são aquelas produzidas pelo sistema operacional, em função da ação do sujeito ativo. Como exemplos, temos os arquivos temporários da Internet, o cache da memória, que é conhecido como um “dispositivo de acesso rápido, interno a um sistema, que serve de intermediário entre um operador de um processo e o dispositivo de armazenamento ao qual esse operador acessa’ (Costa, 2003) da memória, ou os cookies dos sites visitados, que são um ‘grupo de dados trocados entre o navegador e o servidor de páginas, colocado num arquivo de texto criado no computador do utilizador’ (Costa, 2003).”",
      "source": "Referência: Rota de aprendizagem 03, p. 8-9."
    },
    {
      "id": "q11_8",
      "number": 8,
      "prompt": "Nós vimos na aula uma menção ao Código de Hamurabi, um conjunto de leis que foram criadas por volta de 1780 a.C. na Mesopotâmia. (Enunciado do elaborador da questão.)\n\nCom base no conteúdo da disciplina acerca das leis e sua origem, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O Código de Hamurabi é a lei mais extensa de todos os tempos, com quase dois milhares de dispositivos legais."
        },
        {
          "letter": "B",
          "text": "Entre os animais, não se percebem regras de convivência; assim, somente pessoas podem conviver harmoniosamente."
        },
        {
          "letter": "C",
          "text": "Os seres humanos surgiram primeiramente em Marte, daí o fato de as primeiras leis conhecidas serem marcianas."
        },
        {
          "letter": "D",
          "text": "As primeiras leis, transmitidas de modo oral, eram baseadas em costumes e no cotidiano."
        }
      ],
      "answer": "D",
      "explanation": "“Ao observarmos um bando de leões, por exemplo, vemos que há uma divisão de tarefas que cada elemento do bando tem de cumprir, e aquele que não executa as tarefas é expulso.”\n\n“No início, as leis eram baseadas nos costumes, no dia a dia das pessoas, e transmitidas oralmente de geração em geração. [...] As primeiras leis conhecidas estão sintetizadas no Código de Hamurabi. [...] no Código de Hamurabi, contamos com pouco menos de trezentos artigos, [...]”.",
      "source": "Referência: PDF da aula 01, p. 5."
    },
    {
      "id": "q11_9",
      "number": 9,
      "prompt": "O direito à privacidade é um dos direitos humanos fundamentais para a dignidade humana e para a autonomia. Cada país e cada cultura têm seus limites e seus costumes relacionados aos limites entre aquilo que consideramos público e privado em cada contexto. Quando pensamos na Privacidade nos ambientes digitais temos muitos desafios, pois nem sempre é fácil saber o quão público ou privado é o ambiente. Na legislação brasileira o direito à privacidade está, legal e constitucionalmente, garantido. (Enunciado do elaborador da questão, com base em matéria da Safernet e nas rotas da disciplina.)\n\nAcerca da privacidade na internet, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Os dados coletados pela navegação na internet só podem ser acessados pelo próprio usuário."
        },
        {
          "letter": "B",
          "text": "Os dados da navegação pela internet só são acessíveis ao usuário e a seus familiares."
        },
        {
          "letter": "C",
          "text": "Os dados da navegação pela internet só são acessíveis ao usuário e àqueles que tiverem acesso físico ao seu computador."
        },
        {
          "letter": "D",
          "text": "Quase todas as ações que fazem uso da web são de alguma maneira registradas."
        }
      ],
      "answer": "D",
      "explanation": "“Entretanto, quase todas as ações que fazem uso da web são de alguma maneira registradas. Os logs (“diário de bordo”, em inglês), registram essas ações, armazenando os locais, como e quando foram acessados, sejam os conteúdos dos dados acessados, enviados ou manipulados.\n\nEstes logs ou registros poderão auxiliar na investigação de crimes que se utilizam da grande rede, com o uso de sites, aplicativos, e-mails, redes sociais, ou qualquer outra tecnologia existente que utilize a internet.\n\nCavalcante (2012) faz uma analogia dos logs com as operadoras de cartões de crédito:\n\n‘da mesma forma que são mantidos por concessionárias de telefonia ou operadoras de cartão de crédito uma série de anotações contendo o histórico de seu uso, o mesmo ocorre em relação ao uso da internet. Podemos afirmar de modo simplista que cada clique do mouse ou enter na internet é anotado, contendo a hora, duração, conta do usuário, endereço IP atribuído à operação’.”",
      "source": "Referência: Rota de aprendizagem 03, p. 6."
    },
    {
      "id": "q11_10",
      "number": 10,
      "prompt": "“Na Constituição estão inseridos os princípios e premissas básicas que um país deve adotar, princípios esses que são o resultado da vontade do povo que habita o país”.\n\nFonte: Rota da aula 01.\n\nNo caso brasileiro, a Constituição determina que o Estado é laico, o que significa especificamente que:",
      "alternatives": [
        {
          "letter": "A",
          "text": "A União, os estados, o Distrito Federal e os municípios têm capacidade legislativa limitada, de acordo com a competência de cada ente."
        },
        {
          "letter": "B",
          "text": "As pessoas têm plena liberdade de culto e de religião."
        },
        {
          "letter": "C",
          "text": "Decisões políticas e leis não devem ser influenciadas pela religião."
        },
        {
          "letter": "D",
          "text": "Nosso ordenamento jurídico, desde a Constituição, é um reflexo de escolhas religiosas."
        }
      ],
      "answer": "C",
      "explanation": "Estado laico se define assim:\n\n“Em alguns países, a religião tem aspecto importantíssimo e influencia profundamente as leis. No Brasil, isso não acontece em razão de que aqui o Estado é laico, ou seja, existe uma separação entre Estado e Igreja, sendo que as decisões políticas e as leis não devem ser influenciadas pela religião.”\n\nLiberdade religiosa é um reflexo da separação entre Estado e religião, ou seja, um reflexo da laicidade do Estado; porém, por exemplo, poderia ser possível as pessoas escolherem sua própria religião sem cerceamento do Estado, mas o Estado adotar uma postura religiosa em suas decisões; portanto, a liberdade religiosa não conceitua Estado laico.\n\nOutras afirmativas são corretas em si mesmas, mas não têm a ver com a definição de laicidade do Estado, como pede o comando. A única afirmativa errada por si mesma é: “Nosso ordenamento jurídico, desde a Constituição, é um reflexo de escolhas religiosas.”",
      "source": "Referência: PDF da aula 01, p. 8."
    },
    {
      "id": "q11_11",
      "number": 11,
      "prompt": "“O Código de Hamurabi é um conjunto de leis que foram criadas por volta de 1780 a.C. na Mesopotâmia. Recebe esse nome uma vez que está associado ao sexto rei sumério, fundador do I Império Babilônico, Hamurabi.\n\nNuma das colunas [da rocha de diorito] onde está escrito parte do Código, Hamurabi recebe o Código das mãos do deus Samas, o deus Sol e da Justiça” (BEZERRA, Juliana. Código de Hamurabi. Disponível em: <https://www.todamateria.com.br/codigo-de-hamurabi>. Acesso em: 05 abr. 2019. Grifo no original.)\n\nCom base no conteúdo da disciplina acerca das leis, analise as assertivas:\n\nI. A invenção da escrita pelo ser humano permitiu o surgimento de leis.\n\nII. As primeiras leis, transmitidas de modo oral, eram baseadas em costumes e no cotidiano.\n\nIII. O Código de Hamurabi, embora não seja a mais antiga compilação de leis de que se tem conhecimento, é o mais extenso, com quase dois milhares de dispositivos legais. É correto somente o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II e III."
        },
        {
          "letter": "B",
          "text": "I e III."
        },
        {
          "letter": "C",
          "text": "II."
        },
        {
          "letter": "D",
          "text": "I."
        }
      ],
      "answer": "C",
      "explanation": "“No início, as leis eram baseadas nos costumes, no dia a dia das pessoas, e transmitidas oralmente de geração em geração. [...] As primeiras leis conhecidas estão sintetizadas no Código de Hamurabi. [...] no Código de Hamurabi, contamos com pouco menos de trezentos artigos, [...]”.",
      "source": "Referência: PDF da aula 01, p. 5."
    },
    {
      "id": "q11_12",
      "number": 12,
      "prompt": "“No Brasil, as leis são escritas, estando inseridas, em sua maioria, em códigos, os quais devem ser entendidos como uma reunião de leis.”\n\nFonte: Rota da aula 01.\n\nAcerca das leis brasileiras, de acordo com os estudos da disciplina, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Todo país vai ter aquilo que se chama lei principal, ou seja, a lei mais importante, da qual vão se originar todas as demais leis e que devem se harmonizar com a lei principal."
        },
        {
          "letter": "B",
          "text": "A Constituição brasileira não protege direitos como a vida e a liberdade, pois dá autonomia a cada cidadão de fazer o que pensa ser melhor."
        },
        {
          "letter": "C",
          "text": "Os direitos humanos são e sempre foram reconhecidos de forma igual para todos, exceto no Código de Hamurabi, que trazia disposições diferentes para homens livres e escravos."
        },
        {
          "letter": "D",
          "text": "Liberdade (de ir e vir, de pensamento, de religião), igualdade, segurança e propriedade são direitos comuns internacionalmente, mas estranhos ao ordenamento jurídico brasileiro."
        }
      ],
      "answer": "A",
      "explanation": "“Todo país vai ter aquilo que se chama lei principal, ou seja, a lei mais importante, da qual vão se originar todas as demais leis e que devem se harmonizar com a lei principal. Essa lei principal se chama Constituição, também chamada de Lei Maior, Carta Magna etc.”\n\nA Constituição brasileira traz garantias como o direito à vida, à liberdade (de ir e vir, de pensamento, de religião), igualdade, segurança, propriedade. “Muitos desses direitos nem sempre foram reconhecidos de forma igual para todos”, e um dos exemplos, entre tantos, é o Código de Hamurabi, que trazia disposições diferentes para homens livres e escravos.",
      "source": "Referência: PDF da aula 01, p. 7."
    },
    {
      "id": "q11_13",
      "number": 13,
      "prompt": "“Os frutos da atividade humana possuem uma ordem determinada. O direito é fruto da convivência social. Está presente em todo agrupamento humano, pois corresponde a uma atividade tão espontânea quanto a admiração pelo Universo criado.”\n\n(DINIZ, Arthur José Almeida. Direito, norma de convivência, fruto da história do ser humano no planeta, é vivido por todos nós, na trama das relações sociais. Revista da Faculdade de Direito da Universidade Federal de Minas Gerais, p. 55. Disponível em: <https://www.direito.ufmg.br/revista/index.php/revista/article/viewFile/1228/1161>. Acesso em: 05 abr. 2019.)\n\nCom base no texto e nos conceitos tratados na disciplina, entendendo a lei amplamente como toda espécie de regras, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "A lei veio a surgir a partir da eleição dos primeiros governos democráticos, existindo antes disso a tirania."
        },
        {
          "letter": "B",
          "text": "Os homens racionais (homo sapiens) estabeleceram regras entre si praticamente desde que passaram a conviver."
        },
        {
          "letter": "C",
          "text": "A convivência entre seres humanos não foi possível nos primeiros séculos de existência, por isso as sociedades primitivas eram compostas de famílias monoparentais."
        },
        {
          "letter": "D",
          "text": "A lei está presente desde cedo nas sociedades humanas e animais, tendo em vista a imperiosidade de limites e garantias para regulação das atividades humanas."
        }
      ],
      "answer": "B",
      "explanation": "“Junto com os primeiros Homo sapiens que surgiram na Terra surgiram as leis que deveriam seguir. Era necessário seguir regras por cada grupamento humano, sob pena de o grupo se desagregar e perecer pelo caos.”",
      "source": "Referência: PDF da aula 01, p. 4."
    },
    {
      "id": "q11_14",
      "number": 14,
      "prompt": "O Código Penal brasileiro prevê que é crime a invasão de dispositivo informático. Conforme o art. 154-A do Código Penal, invadir dispositivo informático alheio tem pena de detenção, de 3 (três) meses a 1 (um) ano, e multa. (Enunciado do elaborador da questão, com base na rota 3 da disciplina.)\n\nSobre o crime de invasão de dispositivo informático, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O direito à privacidade digital está acima do direito à vida, por isso a criminalização da invasão é tão importante."
        },
        {
          "letter": "B",
          "text": "O crime de invasão de dispositivo informático é totalmente inconstitucional."
        },
        {
          "letter": "C",
          "text": "A invasão de dispositivo informático é inafiançável e seu autor pode ser punido com prisão perpétua."
        },
        {
          "letter": "D",
          "text": "Desde que foi prevista no código penal, em 2012, a invasão de dispositivo informático é crime."
        }
      ],
      "answer": "D",
      "explanation": "Tratando do direito penal, assunto de conhecimento imprescindível a um investigador, temos que:\n\n“O direito penal vai tutelar bens jurídicos importantes para a vida em sociedade, trazendo-nos uma série de atos que não devemos praticar, sob pena de sofrermos uma consequência punitiva que pode ir de simples multa até a restrição de nossa liberdade.\n\nVotando então, temos que crime é uma conduta, ação ou omissão que não devemos praticar. Busca-se assim proteger, tutelar bens imprescindíveis para a vida em sociedade, como a vida, por exemplo. Mas quais são essas ações? Ora! A lei penal vai dizer quais são elas, pois existe uma disposição na Constituição que diz que tudo o que for considerado crime deve estar previsto em lei. Trata-se do princípio da anterioridade da lei penal, que está contido no art. 5º, XXXIX da Carta Magna, assim redigido:\n\n“Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal”.\n\nPor isso dizem que crime é uma conduta tipificada, ou seja, está definida em lei. Tem que ter uma lei para dizer o que é crime, conduta típica.”\n\nA proteção dos dados de dispositivos informáticos é importante, assim entendida porque sua violação foi legislada como crime — entendo o legislador que se trata de um bem jurídico importante a ser protegido. No entanto, não necessariamente está acima de outros bens, e certamente não acima da vida, por exemplo.\n\nA Constituição prevê no art. 5º, inc. XLIII: “XLIII - a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem”. A alternativa que inclui a invasão de dispositivo informático nesse rol é claramente errada, exigindo-se atenção para uma resposta correta.",
      "source": "Referência: PDF da aula 02, p. 3."
    },
    {
      "id": "q11_15",
      "number": 15,
      "prompt": "O Código Penal brasileiro prevê:\n\n“Invasão de dispositivo informático\n\nArt. 154-A. Invadir dispositivo informático alheio, conectado ou não à rede de computadores, mediante violação indevida de mecanismo de segurança e com o fim de obter, adulterar ou destruir dados ou informações sem autorização expressa ou tácita do titular do dispositivo ou instalar vulnerabilidades para obter vantagem ilícita:\n\nPena - detenção, de 3 (três) meses a 1 (um) ano, e multa.”\n\n(Código Penal, Decreto-lei n. 2.848/1940; artigo 154-A inserido em 2012, pela Lei n. 12.737/2012.)\n\nConsiderando o dispositivo legal transcrito, e com base nos conceitos estudados acerca do direito penal, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Acima do direito à vida, à liberdade e outros, está o direito à integridade dos dados em dispositivos informáticos, por isso foi inserido o art. 154-A no Código Penal."
        },
        {
          "letter": "B",
          "text": "Antes de 2012, a invasão de dispositivo informático, nos mesmos termos do atual art. 154-A do Código Penal, já era considerada crime."
        },
        {
          "letter": "C",
          "text": "Conforme a Constituição Federal, de 1988, são crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e a invasão de dispositivos informáticos, sendo por isso inafiançável o crime do referido artigo do Código Penal."
        },
        {
          "letter": "D",
          "text": "Crime é uma conduta tipificada, ou seja, que está definida em lei; portanto, somente em 2012 a ação descrita no dispositivo legal transcrito passou a ser criminalizada."
        }
      ],
      "answer": "D",
      "explanation": "Tratando do direito penal, assunto de conhecimento imprescindível a um investigador, temos que:\n\n“O direito penal vai tutelar bens jurídicos importantes para a vida em sociedade, trazendo-nos uma série de atos que não devemos praticar, sob pena de sofrermos uma consequência punitiva que pode ir de simples multa até a restrição de nossa liberdade.\n\nVotando então, temos que crime é uma conduta, ação ou omissão que não devemos praticar. Busca-se assim proteger, tutelar bens imprescindíveis para a vida em sociedade, como a vida, por exemplo. Mas quais são essas ações? Ora! A lei penal vai dizer quais são elas, pois existe uma disposição na Constituição que diz que tudo o que for considerado crime deve estar previsto em lei. Trata-se do princípio da anterioridade da lei penal, que está contido no art. 5º, XXXIX da Carta Magna, assim redigido:\n\n“Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal”.\n\nPor isso dizem que crime é uma conduta tipificada, ou seja, está definida em lei. Tem que ter uma lei para dizer o que é crime, conduta típica.”\n\nA proteção dos dados de dispositivos informáticos é importante, assim entendida porque sua violação foi legislada como crime — entendo o legislador que se trata de um bem jurídico importante a ser protegido. No entanto, não necessariamente está acima de outros bens, e certamente não acima da vida, por exemplo.\n\nA Constituição prevê no art. 5º, inc. XLIII: “XLIII - a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem”. A alternativa que inclui a invasão de dispositivo informático nesse rol é claramente errada, exigindo-se atenção para uma resposta correta.",
      "source": "Referência: PDF da aula 02, p. 3."
    },
    {
      "id": "q11_16",
      "number": 16,
      "prompt": "“O primeiro vírus de computador conhecido foi identificado em 1986. Não se pode precisar exatamente uma data, mas atribui-se a janeiro de 2006 como aniversário de 20 anos do vírus denominado Brain.A.” (Rota de aprendizagem 04 da disciplina.)\n\nAcerca dos vírus de computador, analise as assertivas abaixo:\n\nI. São pequenos.\n\nII. Contêm instruções para parasitar e criar cópias de si mesmo de forma autônoma e sem autorização específica.\n\nIII. São autossuficientes, não necessitam de outros arquivos ou sistemas para infectar.\n\nÉ correto somente o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "II e III."
        },
        {
          "letter": "B",
          "text": "I, II e III."
        },
        {
          "letter": "C",
          "text": "I e II."
        },
        {
          "letter": "D",
          "text": "I e III."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_17",
      "number": 17,
      "prompt": "“Em nosso país, até 2012, aquelas condutas conhecidas como crimes cibernéticos ainda não possuíam uma lei específica abordando quais seriam as penas para o cometimento de um ato ilegal nessa área. Antes da criação da Lei dos crimes cibernéticos, os crimes virtuais não tinham uma diferenciação para os crimes no mundo presencial.” (Rota de aprendizagem 06 da disciplina.)\n\nDe acordo com o conteúdo da disciplina, qual foi a legislação que introduziu a previsão legal dos crimes cibernéticos no Brasil?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A lei de lavagem eletrônica de dinheiro (Lei n. 12.683/2012)."
        },
        {
          "letter": "B",
          "text": "O Código Penal (Decreto-lei n. 2.848/1940)."
        },
        {
          "letter": "C",
          "text": "A Lei Carolina Dieckmann (Lei n. 12.737/2012)."
        },
        {
          "letter": "D",
          "text": "A Lei das Contravenções Penais (Decreto-lei 3.688/2012)."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_18",
      "number": 18,
      "prompt": "“Quando alguém digita no seu browser o endereço de domínio, isso será traduzido para um número IP. Quando se cria um site, o seu domínio, nome do site, nome de domínio, endereço do site necessita ser registrado na internet. [...] Em cada país existe um órgão encarregado para essa organização.\n\nO domínio deve estar disponível para que ocorra o registro, ou seja, não pode haver dois nomes de domínio iguais. Existem outras regras para a correta criação do nome de domínio, que são uma fonte de dados do seu proprietário, informações importantes para o investigador.”\n\nFonte: Rota da aula 04.\n\nAcerca dos domínios da internet, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O IANA (Internet Assigned Numbers Authority) é o responsável pelo registro e organização dos domínios de internet"
        },
        {
          "letter": "B",
          "text": "Qualquer pessoa pode acessar gratuitamente alguns dados cadastrais básicos, como o nome do responsável pelo cadastro de um domínio."
        },
        {
          "letter": "C",
          "text": "A burocracia envolvida no registro de um domínio de internet, com o envio e análise de diversos documentos legais e pessoais, garante a segurança dos endereços registrados."
        },
        {
          "letter": "D",
          "text": "No Brasil, o órgão responsável pelos domínios de internet é a Agência de Inteligência da Polícia Federal."
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_19",
      "number": 19,
      "prompt": "“Ao se iniciarem as operações comerciais da internet, em 1995, conheciam-se aproximadamente 5 mil vírus.” (Rota de aprendizagem 04 da disciplina.)\n\nDe acordo com os estudos da disciplina, assinale a alternativa correta sobre os vírus:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Antes da era da internet, os vírus se propagavam por meio de DVDs."
        },
        {
          "letter": "B",
          "text": "O mau funcionamento de dispositivos eletrônicos é decorrente de infecção por vírus."
        },
        {
          "letter": "C",
          "text": "Antes do uso comercial mais amplo da internet, os programas antivírus não tinham como se atualizar."
        },
        {
          "letter": "D",
          "text": "Atualmente, há mais ameaças novas em uma semana do que o total de vírus conhecidos no ano de 1995."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_20",
      "number": 20,
      "prompt": "“Quando alguém digita no seu browser o endereço de domínio, isso será traduzido para um número IP. Quando se cria um site, o seu domínio, nome do site, nome de domínio, endereço do site necessita ser registrado na internet. [...] Em cada país existe um órgão encarregado para essa organização.\n\nO domínio deve estar disponível para que ocorra o registro, ou seja, não pode haver dois nomes de domínio iguais. Existem outras regras para a correta criação do nome de domínio, que são uma fonte de dados do seu proprietário, informações importantes para o investigador.” (Rota de aprendizagem 04 da disciplina.)\n\nAcerca dos domínios da internet, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "No Brasil, o órgão responsável pelos domínios de internet é a Agência de Inteligência da Polícia Civil."
        },
        {
          "letter": "B",
          "text": "O IANA (Internet Assigned Numbers Authority) é o responsável pelo registro e organização dos domínios de internet"
        },
        {
          "letter": "C",
          "text": "A burocracia envolvida no registro de um domínio de internet, com o envio e análise dos documentos, garante a segurança dos endereços registrados."
        },
        {
          "letter": "D",
          "text": "Qualquer pessoa pode acessar gratuitamente alguns dados cadastrais básicos, como o nome do responsável pelo cadastro de um domínio."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_21",
      "number": 21,
      "prompt": "“Os sniffers assumem diversas formas. Há sniffers de pacotes, Wi-Fi, redes e IP, entre outros.” (AVAST. O que é um sniffer?\n\nFonte: Rota de aprendizagem 04, p. 7. AVAST. Disponível em: <https://www.avast.com/pt-br/c-sniffer>. Acesso em:  01 abr. 2020.)\n\nDe acordo com os conceitos tratados na disciplina, apesar de suas várias formas, o que caracteriza, de modo geral, o sniffer?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Trata-se de um software malicioso para interceptar o fluxo de dados em uma rede de computadores, normalmente utilizado em conjunto com um keylogger."
        },
        {
          "letter": "B",
          "text": "Ele monitora os dados transmitidos em uma rede, sendo uma forma de interceptação telemática, em que as informações que transitam pela rede podem ser"
        },
        {
          "letter": "C",
          "text": "Monitora os dados transmitidos em uma rede, sendo então uma forma maliciosa de interceptação telemática, em que as informações que transitam pela rede são capturadas e analisadas."
        },
        {
          "letter": "D",
          "text": "Trata-se de um software para interceptar o fluxo de dados em uma rede de computadores, normalmente utilizado em conjunto com um cavalo de troia ou outro arquivo malicioso."
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_22",
      "number": 22,
      "prompt": "“Os vírus para PCs têm tirado o sono de muita gente. Eles evoluíram desde suas origens, estão mais sofisticados e adaptaram seus objetivos e capacidades de infectar os computadores de forma muitas vezes silenciosa.\n\nSegundo lembra Ana Clara Nogueira, especialista da empresa de segurança PSafe, o vírus mais antigo que se tem conhecimento é de 1971, mas chegou a ser generalizado durante os anos 1980, quando os computadores pessoais se tornaram acessíveis nos países mais desenvolvidos. A popularização das máquinas pessoais permitiu que os vírus se propagassem muito mais rápido, particularmente tendo a vantagem daqueles que não sabiam muito a respeito da nova tecnologia. [...]\n\nO surgimento de worms, forma de malware ou software infectado que é propagado por redes da internet, foi o passo seguinte no desenvolvimento de vírus, conta Ana Clara. Usando os buracos em sistemas operacionais ou softwares, os worms exploram as vulnerabilidades e se replicam movimentando-se de máquina para máquina a partir da rede. Criam uma porta em qualquer computador que encontram no seu caminho, permitindo que mais softwares prejudiciais entrem no computador depois.”\n\n(OLIVEIRA, Déborah. Conheça 16 tipos de ameaças virtuais que podem invadir seu computador. IT Forum 365, 25 fev. 2015. Disponível em: <https://itforum365.com.br/conheca-16-tipos-de-ameacas-virtuais-que-podem-invadir-seu-computador>. Acesso em: 09 abr. 2019.)\n\nDentre as diversas espécies de ameaças na internet está o cavalo de troia. Qual alternativa o define corretamente?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Foi um dos primeiros arquivos maliciosos a serem desenvolvidos. Fica alojado na parte de inicialização do computador."
        },
        {
          "letter": "B",
          "text": "Tem como característica o fato de prejudicar o funcionamento dos computadores em uma certa ocasião determinada pelo seu criador."
        },
        {
          "letter": "C",
          "text": "Ataque realizado para modificar uma página da internet. O propósito da maioria desses ataques é político, disseminando uma mensagem aos que acessam o site alvo."
        },
        {
          "letter": "D",
          "text": "Arquivo malicioso que concede acesso a distância, por meio da internet, ao dispositivo-alvo, coletando e remetendo informações ao agente criminoso."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_23",
      "number": 23,
      "prompt": "“Os sniffers assumem diversas formas. Há sniffers de pacotes, Wi-Fi, redes e IP, entre outros.” (AVAST. O que é um sniffer? Disponível em: < https://www.avast.com/pt-br/c-sniffer>. Acesso em: 09 abr. 2019.)\n\nDe acordo com os conceitos tratados na disciplina, apesar de suas várias formas, o que caracteriza, de modo geral, o sniffer?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Trata-se de um software malicioso para interceptar o fluxo de dados em uma rede de computadores, normalmente utilizado em conjunto com um keylogger."
        },
        {
          "letter": "B",
          "text": "Ele monitora os dados transmitidos em uma rede, sendo uma forma de interceptação telemática, em que as informações que transitam pela rede podem de alguma forma ser capturadas e então analisadas pelos criminosos. Considera-se como uma forma eficaz de espionagem."
        },
        {
          "letter": "C",
          "text": "Monitora os dados de uma máquina sem acesso LAN, sendo então uma forma maliciosa de interceptação telemática, em que as informações que transitam pela rede são capturadas e analisadas."
        },
        {
          "letter": "D",
          "text": "Trata-se de um software para interceptar o fluxo de dados em uma rede de computadores, normalmente utilizado em conjunto com um cavalo de troia ou outro arquivo malicioso."
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_24",
      "number": 24,
      "prompt": "“Em nosso país, até 2012, aquelas condutas conhecidas como crimes cibernéticos ainda não possuíam uma lei específica abordando quais seriam as penas para o cometimento de um ato ilegal nessa área. Antes da criação da Lei dos crimes cibernéticos, os crimes virtuais não tinham uma diferenciação para os crimes no mundo presencial.”\n\nFonte: Rota de aprendizagem 06 da disciplina.\n\nDe acordo com o conteúdo da disciplina, qual foi a lei específica que introduziu a previsão dos crimes cibernéticos no Brasil?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A lei de lavagem eletrônica de dinheiro (Lei n. 12.683/2012)."
        },
        {
          "letter": "B",
          "text": "O Código Penal (Decreto-lei n. 2.848/1940)."
        },
        {
          "letter": "C",
          "text": "A Lei Carolina Dieckmann (Lei n. 12.737/2012)."
        },
        {
          "letter": "D",
          "text": "A Lei das Contravenções Penais (Decreto-lei 3.688/2012)."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_25",
      "number": 25,
      "prompt": "A investigação, em qualquer esfera que se trate, física ou virtual, parte do princípio (ou teoria) de Locard.\n\nFonte: enunciado do elaborador da questão.\n\nO que afirma tal princípio? Analise as alternativas abaixo e assinale a correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Os fins justificam os meios, de modo que o criminoso sempre deixará transparecer, através dos seus atos, aquilo que buscava, desvelando um pouco de sua identidade."
        },
        {
          "letter": "B",
          "text": "A aplicação de leis científicas e conhecimentos tecnológicos sobre os vestígios de uma ocorrência estabelecem os nexos causais entre as etapas dessa ocorrência."
        },
        {
          "letter": "C",
          "text": "Presume-me o dolo das atitudes danosas. Por dedução, o agente é sempre responsável em grau máximo pela intencionalidade de ter cometido dano."
        },
        {
          "letter": "D",
          "text": "Qualquer pessoa ou coisa que adentra em um local leva consigo algo do local e deixa ali alguma coisa ao ir embora."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_26",
      "number": 26,
      "prompt": "“A humanidade, desde o seu princípio, vem demonstrando o interesse em criar ou desenvolver ferramentas que sejam capazes de vir a auxiliar o seu trabalho. Nessa busca incansável, surge em 1830 o primeiro protótipo conhecido da construção de um computador. Cento e quarenta anos depois, mais precisamente em 1970, foi lançada a primeira versão comercial. Essa invenção teve um desenvolvimento acelerado, e uma grande aliada nessa empreitada foi a internet”. (Rota de aprendizagem 06 da disciplina.)\n\nAcerca do histórico da internet, analise as assertivas abaixo:\n\nI. Teve sua origem nos Estados Unidos, durante a Guerra do Golfo.\n\nII. Teve sua origem nos Estados Unidos, durante a Guerra Fria.\n\nIII. O propósito inicial da internet foi o uso militar.\n\nIV. A internet teve origem na União Soviética.\n\nÉ correto somente o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "III."
        },
        {
          "letter": "B",
          "text": "IV."
        },
        {
          "letter": "C",
          "text": "III e IV."
        },
        {
          "letter": "D",
          "text": "II e III."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_27",
      "number": 27,
      "prompt": "“Dados da internet encontrados no Archive (2018), uma página visitada pelos autores em 11 de novembro de 2018, encontrou dados em que a Surface Web, aquela parte da internet em que os sistemas de busca mais conhecidos localizam páginas web, mostra que atualmente existem mais de 341.000.000.000 de URL's, e esse número fica mais impressionante quando se tem uma estimativa de que a Deep Web, aquela parte que não está indexada pelos sistemas de busca, pode ser até cinco vezes maior.”\n\nFonte: Rota da aula 05.\n\nAcerca de sites na web, conforme tratado na disciplina, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Na segunda década do século XXI, há o equivalente a cerca de duas URLs por pessoa no planeta."
        },
        {
          "letter": "B",
          "text": "Devido à criptografia e outros recursos de proteção, mesmo com a internet, a disponibilidade de informação no mundo está se tornando cada vez mais restrita."
        },
        {
          "letter": "C",
          "text": "Um domínio não pode estar vinculado a um endereço IP, este o qual só pode ser acessado diretamente por seu número."
        },
        {
          "letter": "D",
          "text": "Por meio de sites de buscas e outras páginas, é possível obter informações úteis à investigação criminal."
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_28",
      "number": 28,
      "prompt": "Em 2018, a Kaspersky, empresa de segurança digital, encontrou 346 mil novos malware por dia nos dez primeiros meses do ano. (Enunciado do elaborador da questão, com base em matéria da Kaspersky de autoria de Renato Rodrigues.)\n\nAcerca das diferentes espécies de ameaças digitais, leia a seguinte definição de um tipo de malware:\n\n\"Por meio de e-mails ou websites falsos, induz o usuário a revelar informações pessoais.\"\n\nAssinale a alternativa que traz o malware correspondente a essa definição:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Phishing scam."
        },
        {
          "letter": "B",
          "text": "Cavalo de troia."
        },
        {
          "letter": "C",
          "text": "Backdoor."
        },
        {
          "letter": "D",
          "text": "Worm."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_29",
      "number": 29,
      "prompt": "O cibercrime, caracterizado pelo seu alcance, traz estatísticas alarmantes, como estas:\n\n- Cibercrimes representaram 53% de todos os crimes em 2015;\n\n- Foram contabilizados 5,8 milhões de fraudes e delitos de uso indevido de computadores;\n\n- 44% dos negócios atingidos por crime econômico nos últimos dois anos foram impactos por cibercrime – um aumento de 20% em relação ao ano anterior. (Enunciado do elaborador da questão, com base em dados do Reino Unido em 2015 citados por Davey Winder na página Raconteur.)\n\nSobre os crimes cibernéticos e a cooperação internacional, assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "As ameaças virtuais estão restritas às fronteiras territoriais da nação de origem da ameaça."
        },
        {
          "letter": "B",
          "text": "O crime cibernético exige cooperação internacional entre os órgãos responsáveis, sob pena de dificultar imensamente o combate a infrações dessa natureza."
        },
        {
          "letter": "C",
          "text": "Todos os 193 países do mundo têm leis e estruturas governamentais idênticas, o que facilita a cooperação para combaterem crimes digitais."
        },
        {
          "letter": "D",
          "text": "O fato de todas as nações falarem o mesmo idioma facilita o enfrentamento de crimes digitais em todo o mundo."
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    },
    {
      "id": "q11_30",
      "number": 30,
      "prompt": "Considere que uma página falsa, com endereço Feixebookxe.com, imita a aparência da página Facebook.com e solicita os dados de acesso do usuário, fazendo-se passar pela página original da rede social Facebook.\n\nConforme os estudos da disciplina, qual forma de ataque virtual está sendo descrita?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Phishing."
        },
        {
          "letter": "B",
          "text": "Ransomware."
        },
        {
          "letter": "C",
          "text": "Backdoor."
        },
        {
          "letter": "D",
          "text": "Vírus."
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Investigação de Crimes Digitais – Material de apoio."
    }
  ]
};

const AULA12 = {
  "id": "aula12",
  "title": "Matemática Elementar",
  "shortTitle": "Matemática Elementar",
  "description": "Conjuntos, potenciação, radiciação, equações e geometria básica.",
  "accent": "#ca8a04",
  "icon": "🧮",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q12_1",
      "number": 1,
      "prompt": "Durante uma aula de educação física, os alunos foram desafiados a calcular a área de um quadrado desenhado na quadra da escola. A professora informou que a área do quadrado era de 49 m² e pediu que os alunos descobrissem o comprimento de cada lado. Para isso, os alunos deveriam utilizar o conceito de radiciação, já que a área de um quadrado é dada pelo quadrado do lado: A = l^2\n\nDe acordo com os estudos realizados, analise a situação e depois responda: qual é o comprimento de cada lado do quadrado?",
      "alternatives": [
        {
          "letter": "A",
          "text": "7 metros"
        },
        {
          "letter": "B",
          "text": "14 metros"
        },
        {
          "letter": "C",
          "text": "24,5 metros"
        },
        {
          "letter": "D",
          "text": "9 metros"
        }
      ],
      "answer": "A",
      "explanation": "De acordo com a aula 2, a raiz quadrada de 49 é 7, pois 7 X 7 = 49. Portanto, cada lado do quadrado mede 7 metros.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_2",
      "number": 2,
      "prompt": "Durante a organização de uma feira cultural em uma escola, duas turmas ficaram responsáveis por apresentações artísticas. A turma A fará apresentações a cada 6 dias, e a turma B a cada 8 dias. Ambas fizeram apresentações no dia da abertura da feira. A coordenação quer saber em quantos dias as duas turmas voltarão a se apresentar juntas no mesmo dia.\n\nPara isso, é necessário calcular o mínimo múltiplo comum (MMC) entre os números 6 e 8, que representa o menor número de dias em que os dois eventos coincidirão novamente.\n\nTendo em vista a situação apresentada e os estudos realizados, responda: em quantos dias as duas turmas voltarão a se apresentar juntas no mesmo dia?",
      "alternatives": [
        {
          "letter": "A",
          "text": "24"
        },
        {
          "letter": "B",
          "text": "48"
        },
        {
          "letter": "C",
          "text": "14"
        },
        {
          "letter": "D",
          "text": "12"
        }
      ],
      "answer": "A",
      "explanation": "De acordo com a aula 3, o MMC entre 6 e 8 é 24, pois é o menor número que é múltiplo de ambos:\n\n$6: 6, 12, 18, 24, 30…\n\n$8: 8, 16, 24, 32…\n\nO menor múltiplo comum é 24.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_3",
      "number": 3,
      "prompt": "Durante uma atividade de contagem de livros em uma biblioteca escolar, os alunos foram orientados a registrar a quantidade de exemplares em cada estante. Os números anotados foram: 0, 12, 25, 37 e 40. A professora explicou que esses números fazem parte de um conjunto muito utilizado no dia a dia para contar objetos, organizar filas e registrar quantidades, sendo conhecido como conjunto dos números naturais.\n\nCom base nessa situação, qual dos conjuntos abaixo representa corretamente os números naturais?",
      "alternatives": [
        {
          "letter": "A",
          "text": "{–3, –2, –1, 0, 1, 2, 3, ...}"
        },
        {
          "letter": "B",
          "text": "{0, 1, 2, 3, 4, 5, ...}"
        },
        {
          "letter": "C",
          "text": "{1, 2, 3, 4, 5, ...}"
        },
        {
          "letter": "D",
          "text": "{0, 2, 4, 6, ...}"
        }
      ],
      "answer": "B",
      "explanation": "De acordo com a aula 2, o conjunto dos números naturais é formado por números inteiros não negativos, começando do zero.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_4",
      "number": 4,
      "prompt": "Durante uma caminhada em trilha, um grupo de estudantes monitorou a altitude em diferentes pontos do percurso. Em determinado momento, eles estavam a +120 metros acima do nível do mar. Após descerem um trecho, chegaram a um ponto com -30 metros de altitude, ou seja, abaixo do nível do mar.\n\nA professora pediu que os alunos calculassem a variação total de altitude entre os dois pontos, utilizando a operação de subtração entre números relativos.\n\nCom base nessa situação, faça o cálculo e responda: qual foi a variação total de altitude entre os dois pontos?",
      "alternatives": [
        {
          "letter": "A",
          "text": "90 metros"
        },
        {
          "letter": "B",
          "text": "120 metros"
        },
        {
          "letter": "C",
          "text": "-150 metros"
        },
        {
          "letter": "D",
          "text": "-90 metros"
        }
      ],
      "answer": "C",
      "explanation": "De acordo com a aula 2, ao aplicarmos a subtração de números relativos, obteremos a variação total, dada por: -30 - 120 = -150. Ou seja, houve uma variação negativa, pois o grupo desceu de +120 para -30, o que representa uma diferença negativa de altitude.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_5",
      "number": 5,
      "prompt": "Durante uma aula de tecnologia, os alunos aprenderam sobre o armazenamento de arquivos em dispositivos digitais. A professora explicou que um servidor possui 2^6 (dois elevado à sexta potência) unidades de armazenamento e que, após uma atualização, parte dessas unidades foi realocada para outro sistema que utiliza 2^2 (dois elevado à segunda potência) unidades. Para saber quantas unidades permaneceram no servidor original, os alunos deveriam aplicar a regra da divisão de potências com mesma base.\n\nCom base nessa situação, assinale a alternativa que responde corretamente a seguinte pergunta: qual é o resultado da divisão 2^6 / 2^2?",
      "alternatives": [
        {
          "letter": "A",
          "text": "2^4 = 16"
        },
        {
          "letter": "B",
          "text": "2^8 = 256"
        },
        {
          "letter": "C",
          "text": "2^3 = 8"
        },
        {
          "letter": "D",
          "text": "2^2 = 4"
        }
      ],
      "answer": "A",
      "explanation": "De acordo com a aula 2, ao dividir potências de mesma base, subtraímos os expoentes:\n\n2^6 / 2^2 = 2^{6-2} = 2^4 = 16",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_6",
      "number": 6,
      "prompt": "Durante uma feira de ciências em uma escola de Curitiba, dois grupos de alunos apresentaram projetos em diferentes salas.\n\n• O grupo X apresentou projetos em 8 salas.\n\n• O grupo Y apresentou projetos em 10 salas.\n\n• 3 salas receberam projetos de ambos os grupos.\n\nA coordenação da feira deseja saber em quantas salas diferentes houve apresentação de projetos, considerando que algumas salas foram compartilhadas pelos dois grupos.\n\nCom base nessa situação, assinale a alternativa que indica corretamente qual é o total de salas que receberam projetos?",
      "alternatives": [
        {
          "letter": "A",
          "text": "21"
        },
        {
          "letter": "B",
          "text": "15"
        },
        {
          "letter": "C",
          "text": "18"
        },
        {
          "letter": "D",
          "text": "25"
        }
      ],
      "answer": "B",
      "explanation": "De acordo com a aula 1, a união dos conjuntos é dada por:\n\nX?Y = |X| + |Y| - |XnY| = 8 + 10 - 3 = 15\n\nPortanto, 15 salas diferentes receberam projetos.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_7",
      "number": 7,
      "prompt": "Durante uma aula de informática, os alunos aprenderam sobre o armazenamento de dados em dispositivos digitais. A professora explicou que, ao duplicar a capacidade de armazenamento de um chip, a quantidade de dados que ele pode guardar pode ser representada por potências de base 2. Por exemplo, um chip com capacidade de 2^3 (dois elevado à terceira potência) unidades  ode ser combinado com outro de 2^2 (dois elevado à segunda potência) unidades, formando um sistema com capacidade total representada pelo produto dessas potências.\n\nCom base nessa situação e de acordo com os conteúdos estudados, responda: qual é o valor de 2^3 x 2^2?",
      "alternatives": [
        {
          "letter": "A",
          "text": "2^5 = 32"
        },
        {
          "letter": "B",
          "text": "2^6 = 64"
        },
        {
          "letter": "C",
          "text": "2^4 = 16"
        },
        {
          "letter": "D",
          "text": "2^3 = 8"
        }
      ],
      "answer": "A",
      "explanation": "De acordo com a aula 2, quando multiplicamos potências de mesma base, somamos os expoentes:\n\n2^3 x 2^2 = 2^{3+2} = 2^5 = 32",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_8",
      "number": 8,
      "prompt": "Durante uma atividade de reciclagem em um condomínio de Curitiba, os moradores foram convidados a separar materiais recicláveis.\n\n• 30 moradores participaram da coleta de papel.\n\n• 12 desses também participaram da coleta de plástico.\n\nA administração do condomínio deseja saber quantos moradores participaram apenas da coleta de papel, ou seja, excluindo os que também participaram da coleta de plástico.\n\nCom base nessa situação, responda: quantos moradores participaram somente da coleta de papel? Assinale a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "18"
        },
        {
          "letter": "B",
          "text": "42"
        },
        {
          "letter": "C",
          "text": "12"
        },
        {
          "letter": "D",
          "text": "30"
        }
      ],
      "answer": "A",
      "explanation": "De acordo com a aula 1, a operação de diferença de conjuntos consiste em retirar os elementos que pertencem a ambos os conjuntos.\n\n|Papel - Plástico| = 30 - 12 = 18\n\nPortanto, 18 moradores participaram somente da coleta de papel.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_9",
      "number": 9,
      "prompt": "Durante uma aula de ciências, os alunos aprenderam sobre o crescimento de bactérias em ambientes favoráveis. A professora explicou que, em determinadas condições, uma bactéria pode se dividir em duas a cada hora. Se uma única bactéria for colocada em uma placa de Petri, após 4 horas, haverá uma quantidade de bactérias igual a 2^4.\n\nCom base nessa situação, calcule e responda: qual será o número total de bactérias após 4 horas?",
      "alternatives": [
        {
          "letter": "A",
          "text": "8"
        },
        {
          "letter": "B",
          "text": "16"
        },
        {
          "letter": "C",
          "text": "12"
        },
        {
          "letter": "D",
          "text": "4"
        }
      ],
      "answer": "B",
      "explanation": "Ao aplicarmos a potenciação, de acordo com a aula 2, teremos que o número de bactérias após 4 horas é dado por /\n\n2^4 = 2 X 2 X 2 X 2 = 16, pois a cada hora irá dobrar a quantidade anterior.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_10",
      "number": 10,
      "prompt": "Durante uma campanha de arrecadação de alimentos em um bairro de Curitiba, dois grupos de voluntários se organizaram para coletar doações. O grupo A arrecadou alimentos em 12 casas, enquanto o grupo B arrecadou em 15 casas diferentes. No entanto, 5 casas foram visitadas por ambos os grupos. Para saber o total de casas que participaram da campanha, é necessário considerar a união dos conjuntos de casas visitadas por cada grupo, sem contar duas vezes as casas que foram visitadas por ambos.\n\nCom base nessa situação, assinale a alternativa que indica corretamente qual é o total de casas que participaram da campanha?",
      "alternatives": [
        {
          "letter": "A",
          "text": "27"
        },
        {
          "letter": "B",
          "text": "22"
        },
        {
          "letter": "C",
          "text": "32"
        },
        {
          "letter": "D",
          "text": "25"
        }
      ],
      "answer": "B",
      "explanation": "De acordo com a aula 1, a união dos conjuntos é dada por:\n\n= |A| + |B| - || = 12 + 15 - 5 = 22",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_11",
      "number": 11,
      "prompt": "Durante uma aula de educação financeira, os alunos analisaram o extrato bancário de uma conta corrente. O extrato apresentava os seguintes lançamentos:\n\n• Depósito de R$ 200\n\n• Saque de R$ 50\n\n• Pagamento de conta no valor de R$ 120\n\n• Recebimento de R$ 80\n\nA professora explicou que, ao representar esses valores em uma planilha, os depósitos e recebimentos são indicados por números positivos, enquanto os saques e pagamentos são indicados por números negativos, pois representam saída de dinheiro.\n\nConsiderando a definição de quais números pertencem ao conjunto dos números inteiros, identifique qual dos conjuntos abaixo contém apenas números inteiros.",
      "alternatives": [
        {
          "letter": "A",
          "text": "{ -50; -20; 5,5; 200}"
        },
        {
          "letter": "B",
          "text": "{0; 10; 50,2; 100}"
        },
        {
          "letter": "C",
          "text": "{-120; -10,3; 5; 12}"
        },
        {
          "letter": "D",
          "text": "{-10; -5; 0; 12; 240}"
        }
      ],
      "answer": "D",
      "explanation": "De acordo com a aula 2, todos os números deste conjunto pertencem ao conjunto dos números inteiros, que inclui apenas os números negativos, zero e positivos sem parte decimal.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_12",
      "number": 12,
      "prompt": "Durante uma caminhada em trilha, um grupo de estudantes monitorou a altitude em diferentes pontos do percurso. Em determinado momento, eles estavam a +120 metros acima do nível do mar. Após descerem um trecho, chegaram a um ponto com -30 metros de altitude, ou seja, abaixo do nível do mar.\n\nA professora pediu que os alunos calculassem a variação total de altitude entre os dois pontos, utilizando a operação de subtração entre números relativos.\n\nCom base nessa situação, faça o cálculo e responda: qual foi a variação total de altitude entre os dois pontos?",
      "alternatives": [
        {
          "letter": "A",
          "text": "90 metros"
        },
        {
          "letter": "B",
          "text": "150 metros"
        },
        {
          "letter": "C",
          "text": "-150 metros"
        },
        {
          "letter": "D",
          "text": "-90 metros"
        }
      ],
      "answer": "B",
      "explanation": "De acordo com a aula 2, ao aplicarmos a subtração de números relativos, obteremos a variação total, dada por:\n\n+120 - (-30) = +120 + 30 = +150\n\nOu seja, houve uma variação de 150 metros entre os dois pontos.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_13",
      "number": 13,
      "prompt": "Durante uma aula de ciências, os alunos analisaram a variação de temperatura em uma câmara fria usada para conservar alimentos. A cada hora, a temperatura diminuía 2 graus Celsius. Após 5 horas, a professora pediu que os alunos calculassem a variação total da temperatura.\n\nCom base nessa situação, calcule qual foi a variação total da temperatura após 5 horas e assinale a alternativa que apresenta a resposta correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "+10 graus Celsius"
        },
        {
          "letter": "B",
          "text": "-10 graus Celsius"
        },
        {
          "letter": "C",
          "text": "-7 graus Celsius"
        },
        {
          "letter": "D",
          "text": "+7 graus Celsius"
        }
      ],
      "answer": "B",
      "explanation": "De acordo com a aula 2, a multiplicação de um número positivo (5 horas) por um número negativo (-2 graus por hora) resulta em um número negativo (-10). Isso indica que a temperatura caiu 10 graus Celsius.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_14",
      "number": 14,
      "prompt": "Em uma lanchonete, o cardápio oferece 2 opções de sanduíches (X-burguer e X-salada) e 3 opções de bebidas (refrigerante, suco e água). Um cliente pode escolher um sanduíche e uma bebida para montar seu combo.\n\nA atendente deseja listar todas as possíveis combinações de pedidos que podem ser feitas com essas opções. Para isso, ela utiliza o conceito de produto cartesiano, que consiste em formar pares ordenados com todos os elementos de dois conjuntos.\n\nCom base nessa situação e no conteúdo estudado, responda: quantas combinações diferentes de pedidos podem ser feitas?",
      "alternatives": [
        {
          "letter": "A",
          "text": "5"
        },
        {
          "letter": "B",
          "text": "6"
        },
        {
          "letter": "C",
          "text": "3"
        },
        {
          "letter": "D",
          "text": "2"
        }
      ],
      "answer": "B",
      "explanation": "De acordo com a aula 1, o produto cartesiano entre os conjuntos S = {X-burguer, X-salada} e B = {refrigerante, suco, água} resulta em 2 × 3 = 6 pares ordenados, ou seja, 6 combinações possíveis de pedidos.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_15",
      "number": 15,
      "prompt": "Durante uma campanha de vacinação em uma escola de Curitiba, foram registrados os seguintes dados:\n\n• 40 alunos receberam a vacina contra gripe.\n\n• 15 desses alunos também receberam a vacina contra sarampo.\n\nA coordenação da escola deseja saber quantos alunos receberam apenas a vacina contra gripe, ou seja, excluindo os que também receberam a vacina contra sarampo.\n\nCom base nessa situação, assinale a alternativa que indica corretamente quantos alunos receberam somente a vacina contra gripe?",
      "alternatives": [
        {
          "letter": "A",
          "text": "25"
        },
        {
          "letter": "B",
          "text": "55"
        },
        {
          "letter": "C",
          "text": "15"
        },
        {
          "letter": "D",
          "text": "40"
        }
      ],
      "answer": "A",
      "explanation": "De acordo com a aula 1, a operação de subtração de conjuntos consiste em retirar os elementos que pertencem a ambos os conjuntos.\n\n|Gripe - Sarampo| = 40 - 15 = 25\n\nPortanto, 25 alunos receberam somente a vacina contra gripe.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_16",
      "number": 16,
      "prompt": "Ana trabalha em uma papelaria e precisa calcular o valor total de uma venda de cadernos. Cada caderno custa R$ 12,00. Para facilitar o cálculo, ela decide usar uma expressão algébrica que represente o valor total da venda, considerando que o número de cadernos vendidos pode variar a cada cliente.\n\nQual expressão algébrica Ana pode utilizar para calcular o valor total da venda de cadernos, considerando que cada caderno custa R$ 12,00 e que x representa a quantidade de cadernos vendidos?",
      "alternatives": [
        {
          "letter": "A",
          "text": "V = x + 12"
        },
        {
          "letter": "B",
          "text": "V = 12x"
        },
        {
          "letter": "C",
          "text": "V = x - 12"
        },
        {
          "letter": "D",
          "text": "V = 12 + x"
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_17",
      "number": 17,
      "prompt": "Um fabricante de caixas de papelão deseja construir uma caixa aberta (sem tampa) a partir de uma folha retangular de papelão de 30 cm por 20 cm. Para isso, ele pretende cortar quadrados de lado “x” nos quatro cantos da folha e dobrar as bordas para formar a caixa. A função que representa o volume da caixa em função do valor de “x” é dada por:\n\nV(x) = x(30 - 2x)(20 - 2x)\n\nEssa função é quadrática em sua forma expandida e permite ao fabricante calcular o volume da caixa para diferentes tamanhos de corte “x”.\n\nQual das alternativas representa corretamente a função quadrática que expressa o volume da caixa em função de “x”?",
      "alternatives": [
        {
          "letter": "A",
          "text": "V(x) = 600x - 100x^2 + 4x^3"
        },
        {
          "letter": "B",
          "text": "V(x) = 600x - 100x^2 - 4x^3"
        },
        {
          "letter": "C",
          "text": "V(x) = 600x + 100x^2 - 4x^3"
        },
        {
          "letter": "D",
          "text": "V(x) = 600x - 100x^2 + 4x"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_18",
      "number": 18,
      "prompt": "Em uma feira, João comprou maçãs e bananas. Cada maçã custa R$ 2,00 e cada banana custa R$ 1,00. No total, ele comprou 10 frutas e pagou R$ 16,00. Para descobrir quantas maçãs e quantas bananas João comprou, é possível montar um sistema de equações com duas variáveis: “x” representa o número de maçãs e “y” o número de bananas.\n\nQual sistema de equações representa corretamente a situação descrita?",
      "alternatives": [
        {
          "letter": "A",
          "text": "x + y = 16 2x + y = 10"
        },
        {
          "letter": "B",
          "text": "x + y = 10 2x + y = 16"
        },
        {
          "letter": "C",
          "text": "2x + y = 10 x + y = 16"
        },
        {
          "letter": "D",
          "text": "x + y = 10 x + 2y = 16"
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_19",
      "number": 19,
      "prompt": "Uma confeiteira está preparando bolos em formas cilíndricas para uma encomenda de festa. Cada forma tem 20 cm de altura e 10 cm de diâmetro. Para calcular a quantidade de massa necessária para preencher completamente cada forma, ela precisa determinar o volume da forma cilíndrica.\n\nQual é o volume aproximado de massa necessário para preencher completamente uma forma cilíndrica com as medidas descritas?",
      "alternatives": [
        {
          "letter": "A",
          "text": "1.570 cm³"
        },
        {
          "letter": "B",
          "text": "3.141 cm³"
        },
        {
          "letter": "C",
          "text": "2.500 cm³"
        },
        {
          "letter": "D",
          "text": "10.000 cm³"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_20",
      "number": 20,
      "prompt": "Durante a construção de um jardim, um arquiteto paisagista decidiu utilizar placas de concreto em formato de triângulo para formar um caminho decorativo. Cada placa triangular possui lados medindo 1,2 metros, 1,5 metros e 1,8 metros. Para calcular a quantidade de material necessário para fazer a borda de cada placa, é preciso determinar o perímetro de cada triângulo.\n\nQual é o perímetro de cada placa triangular utilizada no jardim?",
      "alternatives": [
        {
          "letter": "A",
          "text": "4,5 metros"
        },
        {
          "letter": "B",
          "text": "3,5 metros"
        },
        {
          "letter": "C",
          "text": "5,0 metros"
        },
        {
          "letter": "D",
          "text": "4,2 metros"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_21",
      "number": 21,
      "prompt": "Em uma lanchonete, um cliente comprou dois tipos de lanche: hambúrgueres e sucos. Cada hambúrguer custa R$ 12,00 e cada suco custa R$ 6,00. No total, ele comprou 5 itens e pagou R$ 48,00. Para descobrir quantos hambúrgueres e quantos sucos foram comprados, é possível montar um sistema de equações com duas variáveis: “x” representa o número de hambúrgueres e “y” o número de sucos.\n\nCom base na situação descrita, qual sistema de equações representa corretamente o problema?",
      "alternatives": [
        {
          "letter": "A",
          "text": "x + y = 48 12x + 6y = 5"
        },
        {
          "letter": "B",
          "text": "x + y = 5 12x + 6y = 48"
        },
        {
          "letter": "C",
          "text": "x + y = 5 6x + 12y = 48"
        },
        {
          "letter": "D",
          "text": "x + y = 48 x + y = 5"
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_22",
      "number": 22,
      "prompt": "Durante a construção de um jardim, uma arquiteta decidiu utilizar placas de grama em formato de trapézio para preencher espaços entre caminhos curvos. Cada placa possui uma base maior de 2,0 metros, uma base menor de 1,2 metros e altura de 0,9 metros.\n\nQual é a área de cada placa de grama em formato de trapézio que será instalada no jardim?",
      "alternatives": [
        {
          "letter": "A",
          "text": "1,44 m²"
        },
        {
          "letter": "B",
          "text": "2,88 m²"
        },
        {
          "letter": "C",
          "text": "1,62 m²"
        },
        {
          "letter": "D",
          "text": "0,96 m²"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_23",
      "number": 23,
      "prompt": "Beatriz vende marmitas por R$ 18,00 cada e cobra uma taxa fixa de entrega de R$ 10,00 por pedido. Para calcular o valor total a ser pago por um cliente, ela utiliza uma expressão algébrica com duas variáveis: “x” representa o número de marmitas compradas e “y” o valor total da compra.\n\nqual expressão algébrica representa corretamente o valor total “y” a ser pago pelo cliente?",
      "alternatives": [
        {
          "letter": "A",
          "text": "y = 18x + 10"
        },
        {
          "letter": "B",
          "text": "y = 10x + 18"
        },
        {
          "letter": "C",
          "text": "y = x + 18 + 10"
        },
        {
          "letter": "D",
          "text": "y = 18 + 10x"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_24",
      "number": 24,
      "prompt": "Em uma loja de eletrônicos, um cliente deseja comprar “x” unidades de um fone de ouvido que custa R$ 50,00 cada. A loja está oferecendo um desconto fixo de R$ 20,00 no valor total da compra, independentemente da quantidade adquirida. Para calcular o valor final a ser pago, o atendente utiliza uma expressão algébrica que leva em conta o número de unidades compradas e o desconto aplicado.\n\nQual expressão algébrica representa corretamente o valor final “V” a ser pago pelo cliente, considerando que cada unidade custa R$ 50,00, que ele comprará “x” unidades e que será aplicado um desconto fixo de R$ 20,00?",
      "alternatives": [
        {
          "letter": "A",
          "text": "V = 50x - 20"
        },
        {
          "letter": "B",
          "text": "V = 50 - 20x"
        },
        {
          "letter": "C",
          "text": "V = x - 20"
        },
        {
          "letter": "D",
          "text": "V = 20x - 50"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_25",
      "number": 25,
      "prompt": "Um jardineiro está planejando construir um canteiro retangular em que o comprimento seja 3 metros maior que a largura. Ele deseja que a área total do canteiro seja de 40 metros quadrados. Para encontrar as dimensões ideais, ele decide montar uma equação do segundo grau que relacione a largura x e y com a área total. Sabendo que a área de um retângulo é dada por A = largura x comprimento, temos que o comprimento será x + 3 e a área será x(x + 3) = 40.\n\nQual equação do segundo grau representa corretamente a situação descrita?",
      "alternatives": [
        {
          "letter": "A",
          "text": "x^2 + 3x - 40 = 0"
        },
        {
          "letter": "B",
          "text": "x^2 - 3x - 40 = 0"
        },
        {
          "letter": "C",
          "text": "x^2 + 3x + 40 = 0"
        },
        {
          "letter": "D",
          "text": "x^2 - 3x + 40 = 0"
        }
      ],
      "answer": "A",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_26",
      "number": 26,
      "prompt": "Em uma papelaria, um cliente comprou cadernos e canetas. Cada caderno custa R$ 10,00 e cada caneta custa R$ 2,00. No total, ele comprou 7 itens e pagou R$ 38,00. Para descobrir quantos cadernos e quantas canetas foram comprados, é possível montar e resolver um sistema de equações com duas variáveis: “x” representa o número de cadernos e “y” o número de canetas.\n\nCom base na situação descrita, quais são os valores de “x” e “y” que satisfazem o sistema de equações? x + y = 7 10x + 2y = 38",
      "alternatives": [
        {
          "letter": "A",
          "text": "x = 2 e y = 5"
        },
        {
          "letter": "B",
          "text": "x = 3 e y = 4"
        },
        {
          "letter": "C",
          "text": "x = 4 e y = 3"
        },
        {
          "letter": "D",
          "text": "x = 5 e y = 2"
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_27",
      "number": 27,
      "prompt": "Fernanda trabalha como freelancer e recebe R$ 80,00 por projeto concluído. Ela deseja juntar dinheiro para comprar uma cadeira ergonômica que custa R$ 640,00. Para isso, ela precisa calcular quantos projetos deve concluir para alcançar esse valor. Como ela ainda não sabe exatamente quantos projetos conseguirá fazer, decide montar uma inequação que represente a quantidade mínima de projetos necessários para atingir seu objetivo.\n\nQual inequação representa corretamente a situação descrita, considerando que Fernanda precisa juntar pelo menos R$ 640,00?",
      "alternatives": [
        {
          "letter": "A",
          "text": "80x < 640"
        },
        {
          "letter": "B",
          "text": "80x > 640"
        },
        {
          "letter": "C",
          "text": "x + 80 > 640"
        },
        {
          "letter": "D",
          "text": "640x < 80"
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_28",
      "number": 28,
      "prompt": "Durante a reforma de um jardim, uma arquiteta paisagista decidiu instalar placas de grama em formato triangular para preencher espaços entre caminhos curvos. Cada placa tem formato de triângulo retângulo, com base medindo 2 metros e altura perpendicular à base medindo 3 metros.\n\nQual é a área de cada placa triangular que será instalada no jardim?",
      "alternatives": [
        {
          "letter": "A",
          "text": "5 m²"
        },
        {
          "letter": "B",
          "text": "2 m²"
        },
        {
          "letter": "C",
          "text": "6 m²"
        },
        {
          "letter": "D",
          "text": "3 m²"
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_29",
      "number": 29,
      "prompt": "Joana trabalha como entregadora de encomendas e recebe R$ 10,00 por entrega realizada, mais uma ajuda de custo de R$ 20,00. Em um dia comum, ela faz várias entregas e, ao final do expediente, calcula seu ganho total multiplicando o número de entregas pelo valor recebido em cada uma, além da ajuda de custo diária.\n\nPara facilitar esse cálculo, Joana poderá utilizar uma expressão algébrica. Assim, identifique qual expressão algébrica poderia se utilizada por Joana, para calcular o seu ganho diário, considerando que o ganho diário é identificado pela variável “G” e a quantidade de entregas identificada pela variável “n”:",
      "alternatives": [
        {
          "letter": "A",
          "text": "G = 10 + 20n"
        },
        {
          "letter": "B",
          "text": "G = 10n + 20"
        },
        {
          "letter": "C",
          "text": "G + 10 = 20n"
        },
        {
          "letter": "D",
          "text": "G = 10n - 20"
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    },
    {
      "id": "q12_30",
      "number": 30,
      "prompt": "Uma empresa de embalagens está desenvolvendo caixas cúbicas para armazenar pequenos produtos eletrônicos. Cada caixa tem formato de cubo, com arestas medindo 40 centímetros.\n\nO volume é importante para definir quantos produtos cabem em cada embalagem e para calcular o espaço necessário no estoque.\n\nQual é o volume de cada caixa cúbica produzida pela empresa?",
      "alternatives": [
        {
          "letter": "A",
          "text": "6.400 cm³"
        },
        {
          "letter": "B",
          "text": "64.000 cm³"
        },
        {
          "letter": "C",
          "text": "1.600 cm³"
        },
        {
          "letter": "D",
          "text": "4.000 cm³"
        }
      ],
      "answer": "B",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Matemática Elementar – Material de apoio."
    }
  ]
};

