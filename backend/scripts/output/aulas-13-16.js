const AULA13 = {
  "id": "aula13",
  "title": "Arquitetura Computacional e Sistemas Operacionais",
  "shortTitle": "Arquitetura e SO",
  "description": "Portas lógicas, organização de computadores, CPU, memória e sistemas operacionais.",
  "accent": "#65a30d",
  "icon": "🖥️",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q13_1",
      "number": 1,
      "prompt": "As portas lógicas\n\nDescrição da imagem:\n\nA imagem apresenta um exemplo de porta lógica. No lado esquerdo aparecem duas entradas identificadas pelas letras A e B. Essas duas linhas entram em um símbolo com formato característico da porta OR, que possui a parte esquerda curva para dentro e a parte direita afunilada até uma única saída.\n\nNo lado direito da figura há uma única saída representada pela expressão A + B. O símbolo de soma (+) é utilizado na Álgebra Booleana para representar a operação lógica\n\nReferência: Rota de aprendizagem 3, Portas Lógicas Fundamentais, slide da aula 3.\n\nA figura acima representa uma porta com um operador que necessita de pelo menos duas variáveis e é representado pelo símbolo matemático da adição. Com base nessas informações assinale a alternativa que corresponde ao nome desta porta lógica.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Porta Lógica AND."
        },
        {
          "letter": "B",
          "text": "Porta Lógica NAND."
        },
        {
          "letter": "C",
          "text": "Porta Lógica OR."
        },
        {
          "letter": "D",
          "text": "Porta Lógica XOR."
        },
        {
          "letter": "E",
          "text": "Porta Lógica NOT."
        }
      ],
      "answer": "C",
      "explanation": "Porta Lógica OR requer duas ou mais entradas e é representada pelo operador: +. Exemplo: (F = A + B).",
      "source": "Referência: Rota de aprendizagem 3, Portas Lógicas Fundamentais, slide da aula 3."
    },
    {
      "id": "q13_2",
      "number": 2,
      "prompt": "\"A execução de uma instrução é semelhante à execução de um programa muito pequeno, utilizado por diversos fabricantes de microprocessadores\".\n\nReferência: Rota de aprendizagem 4, Portas Lógicas Fundamentais, slide da aula 4.\n\nA afirmação acima é a apresentação/definição de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Microprograma."
        },
        {
          "letter": "B",
          "text": "Microprocessador."
        },
        {
          "letter": "C",
          "text": "Memória Principal."
        },
        {
          "letter": "D",
          "text": "Sistema de Computação."
        },
        {
          "letter": "E",
          "text": "Memória RAM."
        }
      ],
      "answer": "A",
      "explanation": "A execução de uma instrução é semelhante à execução de um programa muito pequeno, o microprograma, utilizado por diversos fabricantes de microprocessadores",
      "source": "Referência: Rota de aprendizagem 3, Portas Lógicas Fundamentais, slide da aula 4."
    },
    {
      "id": "q13_3",
      "number": 3,
      "prompt": "Os barramentos são responsáveis pela comunicação entre os elementos computacionais.\n\nA arquitetura padrão da indústria – padrão IBM, antigo e pioneiro na integração de dispositivos diversos, usa um tipo de barramento padrão para comunicação com outros periféricos.\n\nReferência: Rota de aprendizagem 2, Barramento, slide da aula 2.\n\nAssinale a alternativa que indica o barramento usado nessa arquitetura padrão da IBM.",
      "alternatives": [
        {
          "letter": "A",
          "text": "EISA (Extended ISA)."
        },
        {
          "letter": "B",
          "text": "PCI (Peripheral Component Interconnect)."
        },
        {
          "letter": "C",
          "text": "PCIe (PCI Express – sucessor do PCI)."
        },
        {
          "letter": "D",
          "text": "DMA (Direct Memory Access)."
        },
        {
          "letter": "E",
          "text": "ISA (Industry Standard Architeture)."
        }
      ],
      "answer": "E",
      "explanation": "As placas-mãe mais antigas apresentavam ainda o slot ISA (Industry Standard Architecture).\n\nReferências: DE OLIVEIRA NETO, Rosalvo Ferreira. Disciplina: Introdução à Engenharia da Computação.",
      "source": "Rota de aprendizagem 2, Barramento, slide da aula 2."
    },
    {
      "id": "q13_4",
      "number": 4,
      "prompt": "A álgebra booleana torna possível a construção de um dispositivo de \"estado\" que pode armazenar qualquer informação específica, seja um dado ou uma operação. Se um circuito elétrico pudesse executar operações matemáticas e lógicas, e conseguisse também armazenar os resultados de tais operações, então os computadores digitais poderiam ser construídos. Deste modo, Boole contribuiu, de forma indireta para a evolução da informática e dos computadores.\n\nReferência: KALINKE, Marco Aurélio; MOCROSKY, Luciane; ESTEPHAN, Violeta Maria. Matemáticos, educadores matemáticos e tecnologias: uma articulação possível A relationship between history of technologies, mathematicians and mathematics educators. Educação Matemática Pesquisa: Revista do Programa de Estudos Pós-Graduados em Educação Matemática, v. 15, n. 2, 2013.\n\nNa lógica booleana só há dois valores no sistema de cálculo lógico. Assinale a alternativa que indica esses valores.",
      "alternatives": [
        {
          "letter": "A",
          "text": "32 e 64."
        },
        {
          "letter": "B",
          "text": "0,6 e 1,6."
        },
        {
          "letter": "C",
          "text": "0 e 1."
        },
        {
          "letter": "D",
          "text": "128 e 256."
        },
        {
          "letter": "E",
          "text": "8 e 16."
        }
      ],
      "answer": "C",
      "explanation": "1 e 0. Se um valor é verdadeiro, ele pode ser representado pelo valor 1 e, se falso, pelo 0. As operações lógicas da álgebra booleana podem ser agrupadas e formar novas operações\n\nReferências:\n\nKALINKE, Marco Aurélio; MOCROSKY, Luciane; ESTEPHAN, Violeta Maria. Matemáticos, educadores matemáticos e tecnologias: uma articulação possível A relationship between history of technologies, mathematicians and mathematics educators. Educação Matemática Pesquisa: Revista do Programa de Estudos Pós-Graduados em Educação Matemática, v. 15, n. 2, 2013.",
      "source": "Rota de aprendizagem 3, Álgebra de Boole, slide da aula 3."
    },
    {
      "id": "q13_5",
      "number": 5,
      "prompt": "A Unidade Central de Processamento, ou “o cérebro” do computador, tem a função de executar as instruções armazenadas na memória sequencialmente.\n\nReferência: Rota de aprendizagem 2, Processadores, slide da aula 2.\n\nAssinale a alternativa que indica como os componentes da CPU são interconectados",
      "alternatives": [
        {
          "letter": "A",
          "text": "Por transistores."
        },
        {
          "letter": "B",
          "text": "Por Circuitos digitais."
        },
        {
          "letter": "C",
          "text": "Por RFID."
        },
        {
          "letter": "D",
          "text": "Por barramento."
        },
        {
          "letter": "E",
          "text": "Por solda de estanho."
        }
      ],
      "answer": "D",
      "explanation": "Os Componentes da CPU são interconectados por um barramento",
      "source": "Referência: Rota de aprendizagem 2, Processadores, slide da aula 2."
    },
    {
      "id": "q13_6",
      "number": 6,
      "prompt": "As portas lógicas\n\nNa figura aparecem duas entradas identificadas pelas letras A e B, posicionadas à esquerda. Essas duas entradas chegam a uma porta lógica com formato semelhante a um retângulo com o lado direito arredondado. Do lado direito existe apenas uma saída, representada pela expressão A . B. O ponto entre as letras A e B é um símbolo utilizado na Álgebra Booleana para indicar a operação lógica.\n\nReferência: Rota de aprendizagem 3, Portas Lógicas Fundamentais, slide da aula 3.\n\nA figura descrita acima representa a porta do operador binário que necessita de pelo menos duas variáveis e representado pelo (.) ou multiplicação algébrica. Com base nessas informações assinale qual a alternativa que corresponde ao nome desta porta lógica.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Porta Lógica AND"
        },
        {
          "letter": "B",
          "text": "Porta Lógica OR."
        },
        {
          "letter": "C",
          "text": "Porta Lógica NAND."
        },
        {
          "letter": "D",
          "text": "Porta Lógica XOR."
        },
        {
          "letter": "E",
          "text": "Porta Lógica NOT."
        }
      ],
      "answer": "A",
      "explanation": "Porta Lógica AND requer duas ou mais entradas e é representada pelo operador: ponto (.). Exemplo: (F = A . B)",
      "source": "Referência: Rota de aprendizagem 3, Portas Lógicas Fundamentais, slide da aula 3."
    },
    {
      "id": "q13_7",
      "number": 7,
      "prompt": "Na imagem há um diagrama da Arquitetura de Von Neumann. Na parte superior aparece um bloco identificado como “Memória”. Abaixo desse bloco existem dois grandes retângulos numerados como 1 e 2, conectados à memória por setas que indicam a troca de informações.\n\nReferência: Rota de aprendizagem 1, Arquitetura de Von Neumann, slide da aula 1 Analise a figura acima e assinale a alternativa que identifica as posições 1 e 2 de uma CPU no modelo de von Neumann, respectivamente.",
      "alternatives": [
        {
          "letter": "A",
          "text": "1 – Unidade de Controle; 2 – Unidade Aritmética e Lógica."
        },
        {
          "letter": "B",
          "text": "1 – Compilador; 2 – Tradutor."
        },
        {
          "letter": "C",
          "text": "1 - Memória RAM; 2 - Memória ROM."
        },
        {
          "letter": "D",
          "text": "1 – Cache L1; 2 – Cache L2."
        },
        {
          "letter": "E",
          "text": "1 – Dispositivo de E/S; 2 - Registrador."
        }
      ],
      "answer": "A",
      "explanation": "Refinamento do modelo de von Neumann, o modelo de barramento de sistema possui uma CPU com uma unidade lógica e aritimética e uma unidade de controle, memória e uma unidade de entrada/saída (I/O).",
      "source": "Referência: Rota de aprendizagem 1, Arquitetura de Von Neumann, slide da aula 1."
    },
    {
      "id": "q13_8",
      "number": 8,
      "prompt": "Segundo Tanenbaum (2013) um computador é uma máquina para solucionar problemas através da execução de instruções.\n\nReferência: Rota de aprendizagem 1, Definições: Computador, slide da aula 1.\n\nAnalise as questões a abaixo e assinale a alternativa que cita, corretamente, o responsável por solucionar os problemas computacionais.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Programa."
        },
        {
          "letter": "B",
          "text": "CPS."
        },
        {
          "letter": "C",
          "text": "Teclado."
        },
        {
          "letter": "D",
          "text": "Impressora."
        },
        {
          "letter": "E",
          "text": "Mouse."
        }
      ],
      "answer": "A",
      "explanation": "Um programa é definido como uma sequência de instruções descritivas, de execução e usado para transmitir as instruções, as quais vão resolver os problemas computacionais.",
      "source": "Referência: Rota de aprendizagem 1, Definições: Computador, slide da aula 1."
    },
    {
      "id": "q13_9",
      "number": 9,
      "prompt": "As portas lógicas\n\nDescrição da imagem:\n\nA imagem apresenta uma porta lógica, também conhecida como inversora.\n\nNo lado esquerdo da figura há apenas uma entrada, identificada pela letra A. Essa entrada está conectada a um símbolo em formato de triângulo apontado para a direita. Na extremidade direita do triângulo existe um pequeno círculo, conhecido como \"bolha de inversão\". Após esse círculo, há uma única linha de saída identificada como A' (A linha).\n\nO pequeno círculo é o elemento mais importante da figura, pois indica que o valor da entrada será invertido.\n\nReferência: Rota de aprendizagem 3, Portas Lógicas Fundamentais, slide da aula 3. A figura acima representa a porta do operador representado pela barra ou pela apóstrofe. Com base nessas informações assinale qual a alternativa que corresponde ao nome desta porta lógica.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Porta Lógica AND"
        },
        {
          "letter": "B",
          "text": "Porta Lógica OR"
        },
        {
          "letter": "C",
          "text": "Porta Lógica NAND"
        },
        {
          "letter": "D",
          "text": "Porta Lógica XOR"
        },
        {
          "letter": "E",
          "text": "Porta Lógica NOT"
        }
      ],
      "answer": "E",
      "explanation": "Porta Lógica NOT é a porta Inversora que usa o operador: Barra, Apóstrofe",
      "source": "Referência: Rota de aprendizagem 3, Portas Lógicas Fundamentais, slide da aula 3."
    },
    {
      "id": "q13_10",
      "number": 10,
      "prompt": "Um dos modos mais simples de subdividir operações em etapas é requerer que os operandos para a maioria das instruções venham de registradores e a eles retornem.\n\nReferência: TANENBAUM, Andrew S. Organização estruturada de computadores. Pearson Prentice Hall, 6a. Edição, 2013. 49 p.\n\nAnalise as assertivas abaixo para, em seguida, assinalar a alternativa correta sobre os registradores.\n\nI. Recebem Dados, armazenam por pouco tempo e os transferem a outro dispositivo.\n\nII. Armazenamento a longo prazo (definitivo)\n\nIII. Extremamente Rápidos e com Capacidade Reduzida.",
      "alternatives": [
        {
          "letter": "A",
          "text": "APENAS a Alternativa I está CORRETA."
        },
        {
          "letter": "B",
          "text": "APENAS a Alternativa II está CORRETA."
        },
        {
          "letter": "C",
          "text": "APENAS a Alternativa III está CORRETA."
        },
        {
          "letter": "D",
          "text": "As Alternativas II e III estão CORRETAS."
        },
        {
          "letter": "E",
          "text": "As Alternativas I e III estão CORRETAS."
        }
      ],
      "answer": "E",
      "explanation": "Os registradores fazem parte da CPU, recebem dados, armazenam por um tempo e os transferem a outro dispositivo. Esse armazenamento é temporário, extremamente rápido e tem capacidade reduzida.\n\nReferências: Rota de aprendizagem 2, Registradores, slide da aula 2.",
      "source": "Arquitetura Computacional e Sistemas Operacionais – Material de apoio."
    },
    {
      "id": "q13_11",
      "number": 11,
      "prompt": "A principal função dos registradores é receber dados e os transferi-los para outro dispositivo. Eles são extremamente rápidos e tem sua capacidade de armazenamento reduzida.\n\nReferência: Rota de aprendizagem 2, Registradores, slide da aula 2.\n\nAssinale a alternativa que demostra outra característica dos registradores.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Armazenamento temporário."
        },
        {
          "letter": "B",
          "text": "Armazenamento de dados a longo prazo."
        },
        {
          "letter": "C",
          "text": "Armazenamento de dados em 8 milissegundos."
        },
        {
          "letter": "D",
          "text": "Armazenamento de dados em 16 milissegundos."
        },
        {
          "letter": "E",
          "text": "Armazenamento de dados em 32 milissegundos."
        }
      ],
      "answer": "A",
      "explanation": "O armazenamento temporário dos dados é uma outra característica dos registradores.",
      "source": "Referência: Rota de aprendizagem 2, Registradores, slide da aula 2."
    },
    {
      "id": "q13_12",
      "number": 12,
      "prompt": "Descrição da imagem: A imagem apresenta uma pirâmide que representa a hierarquia das memórias de um computador. A pirâmide está dividida em seis níveis numerados de 1 a 6, sendo que o nível 1 está no topo e os níveis 5 e 6 estão lado a lado na base. À esquerda da pirâmide há uma seta apontando para cima acompanhada das palavras \"Velocidade\" e \"Custo\". Isso indica que, quanto mais próximo do topo da pirâmide, maior é a velocidade de acesso e maior é o custo da memória. À direita da pirâmide há uma seta apontando para baixo acompanhada da palavra \"Capacidade\". Isso significa que, quanto mais próximo da base da pirâmide, maior é a capacidade de armazenamento da memória. Os níveis estão organizados da seguinte forma:\n\nPosição 1: menor área da pirâmide, localizada no topo.\n\nPosição 2: logo abaixo da posição 1.\n\nPosição 3: região central da pirâmide.\n\nPosição 4: abaixo da posição 3, ocupando uma área maior.\n\nPosições 5 e 6: localizadas na base da pirâmide, dividindo horizontalmente o último nível em duas partes.\n\nAo analisar a figura, lembre-se de que as memórias localizadas no topo costumam ser as mais rápidas e mais caras, enquanto as localizadas na base possuem maior capacidade de armazenamento, porém são mais lentas. Dessa forma, observe atentamente as alternativas da questão e verifique qual delas apresenta a sequência correta das memórias da mais rápida para a mais lenta, seguindo as posições de 1 a 6 apresentadas na pirâmide. Analise a figura acima e assinale a alternativa que identifica as hierarquias de memória nas posições 1, 2, 3, 4, 5 e 6 respectivamente:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Cache, Registradores, Memória Principal, Disco magnético ou de estado sólido, Fita, disco."
        },
        {
          "letter": "B",
          "text": "Cache, Registradores, Disco magnético ou de estado sólido, Memória Principal, Fita, disco."
        },
        {
          "letter": "C",
          "text": "Registradores, Cache, Memória Principal, Fita, disco, Disco magnético ou de estado sólido."
        },
        {
          "letter": "D",
          "text": "Registradores, Cache, Memória Principal, Disco magnético ou de estado sólido, Fita, disco."
        },
        {
          "letter": "E",
          "text": "Memória Principal, Registradores, Cache, Fita, disco, Disco magnético ou de estado sólido."
        }
      ],
      "answer": "D",
      "explanation": "No nível mais alto da hierarquia está os registradores, seguidos da memória cache, Memória Principal, Disco magnético ou de estado sólido, Fita e disco.",
      "source": "Referência: Rota de aprendizagem 2, Processadores, slide da aula 2."
    },
    {
      "id": "q13_13",
      "number": 13,
      "prompt": "Computadores são construídos com base em chips de circuito integrado que contêm minúsculos elementos comutadores.\n\nReferência: Rota de aprendizagem 3, Síntese, slide da aula 3.\n\nAssinale a alternativa que indica o nome dado a esses chips de circuito integrado.",
      "alternatives": [
        {
          "letter": "A",
          "text": "RAM."
        },
        {
          "letter": "B",
          "text": "ROM."
        },
        {
          "letter": "C",
          "text": "Portas."
        },
        {
          "letter": "D",
          "text": "CPU."
        },
        {
          "letter": "E",
          "text": "Memória Flash."
        }
      ],
      "answer": "C",
      "explanation": "O temo porta refere-se aos chips de circuito integrado.",
      "source": "Referência: Rota de aprendizagem 3, Síntese, slide da aula 3."
    },
    {
      "id": "q13_14",
      "number": 14,
      "prompt": "CISC – Complex Instruction Set Computer é um conjunto de instruções grande, de tamanhos variáveis, com formatos complexos.\n\nReferência: Rota de aprendizagem 2, RISC versus CISC, slide da aula 2.\n\nAssinale a alternativa que mostra como o CISC executa as operações.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Executa múltiplas operações quando uma única instrução é dada."
        },
        {
          "letter": "B",
          "text": "Simplifica as instruções para executar mais rapidamente."
        },
        {
          "letter": "C",
          "text": "Executa as operações usando muita paralelização (pipelined)."
        },
        {
          "letter": "D",
          "text": "Cada instrução executa apenas uma operação."
        },
        {
          "letter": "E",
          "text": "Executa operações com instruções do mesmo tamanho."
        }
      ],
      "answer": "A",
      "explanation": "O CISC executa múltiplas operações quando uma única instrução é dada.",
      "source": "Referência: Rota de aprendizagem 2, RISC versus CISC, slide da aula 2."
    },
    {
      "id": "q13_15",
      "number": 15,
      "prompt": "Descrição da imagem:\n\nA imagem apresenta uma representação dos níveis de organização de um sistema computacional, organizados de baixo para cima. Cada nível é mostrado em um retângulo horizontal e conectado ao nível seguinte por uma seta apontando para baixo. À direita de cada nível existe um número de 1 a 5, indicando posições que devem ser associadas às alternativas da questão.\n\nOs níveis apresentados são:\n\nNível 5: Linguagem Orientada a Problema (posição 1).\n\nNível 4: Linguagem de Montagem (Assembly) (posição 2).\n\nNível 3: Sistemas Operacionais (posição 3).\n\nNível 2: ISA – Conjunto de Instruções (posição 4).\n\nNível 1: Microarquitetura (posição 5).\n\nNível 0: Lógica Digital (não possui numeração na figura, servindo como base do sistema).\n\nA organização da figura demonstra uma hierarquia em que os níveis superiores são mais próximos da linguagem utilizada pelos usuários e programadores, enquanto os níveis inferiores são mais próximos do hardware físico do computador.\n\nAnalise a figura acima e assinale a alternativa que identifica as posições 1, 2, 3, 4 e 5 respectivamente.",
      "alternatives": [
        {
          "letter": "A",
          "text": "1 - Compilação; 2 – Tradução; 3 - Interpretação parcial; 4 - Interpretação; 5 - Hardware."
        },
        {
          "letter": "B",
          "text": "1 - Processamento; 2 - Resgate; 3 - Armazenamento; 4 - Paginação; 5 - Organização."
        },
        {
          "letter": "C",
          "text": "1 - Execução; 2 - Interrupção; 3 - Interpretação imparcial; 4 - Análise; 5 - Tradução."
        },
        {
          "letter": "D",
          "text": "1 - Resgate; 2 - Tradução; 3 – Processamento; 4 - Análise; Interrupção; 5 - Execução."
        },
        {
          "letter": "E",
          "text": "1 - Compilação; 2 - Processamento; 3 - Execução; 4 - Resgate; 5 - Execução."
        }
      ],
      "answer": "A",
      "explanation": "A compilação fica entre os níveis  5 e 4, a tradução entre os níveis 4 e 3, a interpretação parcial entre os níveis 3 e 2, a interpretação entre os níveis 2 e 1, e o hardware entre os níveis 1 e 0.",
      "source": "Referência: Rota de aprendizagem 1, Definições: Computador, slide da aula 1."
    },
    {
      "id": "q13_16",
      "number": 16,
      "prompt": "A operação dos computadores consiste em executar instruções sequenciais (uma após a outra).\n\nReferências: Rota de aprendizagem 4, Microprocessadores e a Microprogramação, slide da aula 4.\n\nAssinale a alternativa que indica, corretamente, em quantas etapas a execução de instruções é subdividida:",
      "alternatives": [
        {
          "letter": "A",
          "text": "5."
        },
        {
          "letter": "B",
          "text": "4."
        },
        {
          "letter": "C",
          "text": "7."
        },
        {
          "letter": "D",
          "text": "8."
        },
        {
          "letter": "E",
          "text": "16."
        }
      ],
      "answer": "C",
      "explanation": "Em sete etapas. A etapa “7” volta para a etapa “1” para iniciar a instrução seguinte.\n\nReferências: Rota de aprendizagem 4, Microprocessadores e a Microprogramação, slide da aula 4.",
      "source": "Arquitetura Computacional e Sistemas Operacionais – Material de apoio."
    },
    {
      "id": "q13_17",
      "number": 17,
      "prompt": "Wilkes, em 1951, sugeriu uma unidade de controle microprogramada, que foi um dos maiores avanços desde o nascimento do computador e introduzida pela IBM na linha System/360 em 1964.\n\nReferência: Rota de aprendizagem 4, Microprocessamento, slide da aula 4.\n\nA microprogramação facilita a tarefa de projetar e implementar a unidade de controle. Analise as alternativas abaixo e assinale aquela em que a microprogramação oferece suporte para a construção do seu conceito.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Família de computadores"
        },
        {
          "letter": "B",
          "text": "Circuito integrado."
        },
        {
          "letter": "C",
          "text": "Comunicação entre periféricos."
        },
        {
          "letter": "D",
          "text": "Arquitetura RISC."
        },
        {
          "letter": "E",
          "text": "Hierarquia de memória."
        }
      ],
      "answer": "A",
      "explanation": "A microprogramação facilita a tarefa de projetar e implementar a unidade de controle e oferece suporte para o conceito da família de computadores.",
      "source": "Referência: Rota de aprendizagem 4, Microprocessamento, slide da aula 4."
    },
    {
      "id": "q13_18",
      "number": 18,
      "prompt": "Na década de 1970, os arquitetos de computadores promoveram uma corrida na busca pela economia no custo e no tamanho de circuitos eletrônicos (válvulas eletrônicas). A meta era a redução do número de válvulas e o aumento da confiabilidade da principais máquinas que interpretavam o nível ISA.\n\nReferência: Rota de aprendizagem 4, Portas Lógicas Fundamentais, slide da aula 4.\n\nAssinale a alternativa que indica, corretamente, qual o dispositivo responsável pela interpretação do nível ISA nas principais máquinas na década de 1970.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Discos rígidos."
        },
        {
          "letter": "B",
          "text": "Memórias Flash."
        },
        {
          "letter": "C",
          "text": "Microprogramas."
        },
        {
          "letter": "D",
          "text": "SDRAM"
        },
        {
          "letter": "E",
          "text": "RAM"
        }
      ],
      "answer": "C",
      "explanation": "As principais máquinas (da década de 1970) interpretavam o nível ISA por microprograma.",
      "source": "Referência: Rota de aprendizagem 4, Portas Lógicas Fundamentais, slide da aula 4."
    },
    {
      "id": "q13_19",
      "number": 19,
      "prompt": "Historicamente, as CPUs sempre foram mais rápidas do que as memórias. Conforme as memórias melhoram as CPUs também se aperfeiçoam, mantendo o desequilíbrio. Na verdade, à medida que fica possível colocar cada vez mais circuitos em um chip, os projetistas estão usando essas novas facilidades no paralelismo, fazendo as CPUs ficarem ainda mais velozes.\n\nReferência: TANENBAUM, Andrew S. Organização estruturada de computadores. Pearson Prentice Hall, 6a. Edição, 2013. 64 p.\n\nAssinale a alternativa que descreve a ideia central do texto acima.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Trata-se de paralelismo, que é uma alternativa de comunicação utilizada por impressoras (paralelas) que estão sendo gradativamente substituídas pelas impressoras USB."
        },
        {
          "letter": "B",
          "text": "Constitui - se em Paralelismo, que nada mais é do que o uso de dois computadores idênticos, lado a lado (em paralelo) para executar determinadas tarefas complexas e diferentes, criadas e definidas exclusivamente pelo usuário, que deve ser apto ao uso."
        },
        {
          "letter": "C",
          "text": "Embora os computadores continuem a ficar cada vez mais rápidos, as demandas impostas a eles estão crescendo no mínimo com a mesma rapidez."
        },
        {
          "letter": "D",
          "text": "É um caso de comunicação Paralela ou Serial, que são formas de computação primitivas e que funcionam muito bem, principalmente em ambientes corporativos de grande demanda."
        },
        {
          "letter": "E",
          "text": "Entende-se que é uma comunicação Paralela, pois esta é uma forma de computação primitiva usada em toda comunicação de longo alcance e na maioria das redes de computadores, onde o custo de cabos e as dificuldades de sincronização tornam a comunicação serial impraticável."
        }
      ],
      "answer": "C",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Referência: Rota de aprendizagem 6, Portas Lógicas Fundamentais, slide da aula 6."
    },
    {
      "id": "q13_20",
      "number": 20,
      "prompt": "O Paralelismo tem alguns conceitos e termos específicos que auxiliam no melhor entendimento e compreensão deste importante assunto. Alguns desses termos usados em arquitetura de computadores são os: Fortemente e Fracamente Acoplado.\n\nAnalise as questões e assinale a alternativa que descreve, corretamente, os dois termos.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Quando das placas e os componentes computacionais (periféricos) são soldados a altas temperaturas são fortemente acoplados e em baixa temperatura são fracamente acoplados."
        },
        {
          "letter": "B",
          "text": "Placas e Componentes computacionais (Dispositivos e Periféricos) soldados, são fortemente acoplados e os apenas encaixados uns aos outros são fracamente acoplados"
        },
        {
          "letter": "C",
          "text": "Componentes Computacionais (Dispositivos e Periféricos) locais são fortemente acoplados e quando estão remotos (conectados via rede) são fracamente acoplados."
        },
        {
          "letter": "D",
          "text": "Duas CPUs próximas, em termos computacionais, são fortemente acopladas e quando longe uma da outra, são fracamente acopladas"
        },
        {
          "letter": "E",
          "text": "Chips soldados junto com os barramentos são fortemente acoplados e os soldados separados dos barramentos são fracamente acoplados"
        }
      ],
      "answer": "D",
      "explanation": "Resposta correta conforme gabarito oficial.",
      "source": "Referência: Rota de aprendizagem 6, Paralelismo, slide da aula 6."
    },
    {
      "id": "q13_21",
      "number": 21,
      "prompt": "Os arquitetos de computadores estão sempre se esforçando para melhorar o desempenho das máquinas que projetam. Fazer com que os chips funcionem com maior rapidez aumentando suas velocidades de clock é um modo. Por consequência, grande parte dos arquitetos de computadores busca o paralelismo (fazer duas ou mais coisas ao mesmo tempo) como meio de conseguir um desempenho ainda melhor para a velocidade do clock.\n\nReferência: TANENBAUM, Andrew S. Organização estruturada de computadores. Pearson Prentice Hall, 6a. Edição, 2013. 50 p.\n\nAssinale a alternativa que indica quais são os modos utilizados para aumento da velocidade do clock.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Atualização (UPGRADE) de Processador e Memória RAM por frequências de CLOCK maiores."
        },
        {
          "letter": "B",
          "text": "Combinação no Uso de CPUs de diferentes fabricantes, como INTEL e AMD."
        },
        {
          "letter": "C",
          "text": "Paralelismo no nível da instrução, multithreading e mais de uma CPU no Chip."
        },
        {
          "letter": "D",
          "text": "Paralelismo no Nível físico ou CPU com mais de um núcleo ou Clusters de Computadores."
        },
        {
          "letter": "E",
          "text": "Paralelismo no Nível lógico com CPU de múltiplos núcleos."
        }
      ],
      "answer": "C",
      "explanation": "Usa-se o paralelismo no nível da instrução, multithreading e mais de uma CPU no Chip para aumentar a velocidade do clock.\n\nReferências: Rota de aprendizagem 6, Arquiteturas Paralelas, slide da aula 6.",
      "source": "Arquitetura Computacional e Sistemas Operacionais – Material de apoio."
    },
    {
      "id": "q13_22",
      "number": 22,
      "prompt": "O Paralelismo tem alguns conceitos e termos específicos que auxiliam no melhor entendimento e compreensão deste importante assunto. Dentre esses conceitos, quando temos duas CPUs próximas, em termos computacionais, diz-se que essas são fortemente acopladas.\n\nReferência: Rota de aprendizagem 6 do Tema Visão Geral de Sistema Operacional, slide da aula 6.\n\nAssinale a alternativa que descreve outro conceito relacionado ao conceito de paralelismo.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Quando as placas e os periféricos são soldados a altas temperaturas são fortemente acoplados."
        },
        {
          "letter": "B",
          "text": "Dispositivos e Componentes computacionais que são apenas encaixados uns aos outros são fracamente acoplados."
        },
        {
          "letter": "C",
          "text": "Comunicação Paralela ou Serial são fortemente acoplados."
        },
        {
          "letter": "D",
          "text": "Quando temos duas CPUs longe uma da outra, essas são definidas como fracamente acopladas."
        },
        {
          "letter": "E",
          "text": "Impressoras USB, paralela ou serial são definidas como fracamente acopladas."
        }
      ],
      "answer": "D",
      "explanation": "Duas CPUs próximas, em termos computacionais, são fortemente acopladas. Quando longe uma da outra, são fracamente acopladas",
      "source": "Referência: Rota de aprendizagem 6 do Tema Visão Geral de Sistema Operacional, slide da aula 6."
    },
    {
      "id": "q13_23",
      "number": 23,
      "prompt": "Computador é um conjunto de recursos (processar, transferir e armazenar dados e controlar essas funções) controlados pelo SO.\n\nReferência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5.\n\n.\n\nAssinale a alternativa que apresenta as atividades que fazem parte do gerenciamento de recurso de um SO",
      "alternatives": [
        {
          "letter": "A",
          "text": "Renuncia o controle da CPU para, em seguida, obter o controle novamente."
        },
        {
          "letter": "B",
          "text": "Gestão da memória ROM."
        },
        {
          "letter": "C",
          "text": "É responsável pela execução dos aplicativos parcialmente, atribuindo-lhes os recursos limitados para seu funcionamento."
        },
        {
          "letter": "D",
          "text": "Terceiriza a segurança ligada à execução dos programas."
        },
        {
          "letter": "E",
          "text": "Separa o acesso dos programas aos recursos materiais através dos drivers."
        }
      ],
      "answer": "A",
      "explanation": "Outras atividades que fazem parte do gerenciamento de recursos realizadas pelo SO são a renúncia e obtenção do controle da CPU. O SO renuncia o controle da CPU para, em seguida, obter o controle novamente.",
      "source": "Referência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5."
    },
    {
      "id": "q13_24",
      "number": 24,
      "prompt": "\"Os circuitos eletrônicos que compõem o computador são capazes de reconhecer e executar diretamente um conjunto limitado de instruções simples. Estas instruções constituem uma linguagem (linguagem de máquina) que torna possível a “Comunicação”.\"\n\nReferência: Rota de aprendizagem 5, Definições de linguagem de máquina, slide da aula 5.\n\nA escolha deste conjunto de instruções primitivas é uma tarefa importante e delicada. Assinale a alternativa que descreve as características que uma instrução deve ter.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Simplicidade - Consistência – Desempenho."
        },
        {
          "letter": "B",
          "text": "Status - Tamanho - Preço."
        },
        {
          "letter": "C",
          "text": "Material que compõe o produto - temperatura - Valor."
        },
        {
          "letter": "D",
          "text": "Linguagem - Complexidade – Circuitos."
        },
        {
          "letter": "E",
          "text": "Memória, CPU e Barramentos."
        }
      ],
      "answer": "A",
      "explanation": "A escolha deste conjunto de instruções primitivas é uma tarefa importante e delicada, envolvendo:\n\nSimplicidade - Questão de custo.\n\nConsistência - A simplicidade não deve interferir com a consistência do conjunto.\n\nDesempenho - Mesmo para usos domésticos, espera-se de toda máquina um desempenho mínimo.",
      "source": "Referência: Rota de aprendizagem 5, Definições de linguagem de máquina, slide da aula 5."
    },
    {
      "id": "q13_25",
      "number": 25,
      "prompt": "A ISA (Instruction Set Architecture) é normalmente formada por um conjunto reduzido de instruções totais do processador, entre as quais, lógicas, aritméticas, desvio condicional e incondicional, acesso à memória e a chamada retorno de função. A ISA é apresentada como a interface entre hardware e software e os sistemas operacionais como a interface entre o usuário e a máquina. Portanto, o Nível ISA está entre o nível da microarquitetura e o nível do sistema operacional.\n\nReferência: FERNANDES, Sílvio Roberto; SILVA, Ivan Saraiva. Relato de Experiência Interdisciplinar Usando MIPS. International Journal of Computer Architecture Education (IJCAE), v. 6, n. 1, p. 52-61, 2017. Rota de aprendizagem 5 do Tema Visão Geral ISA, Tema 1, slide da aula 5.\n\nConsiderando a linguagem que compõem a interface entre os compiladores e o Hardware, assinale a alternativa que conclui o real objetivo da ISA.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A ISA separa bem o Hardware do Software."
        },
        {
          "letter": "B",
          "text": "O principal objetivo da ISA é encontrar a linguagem que ambos têm de entender."
        },
        {
          "letter": "C",
          "text": "A ISA deve atuar como fronteira, impedindo que Hardware e Compiladores conversem."
        },
        {
          "letter": "D",
          "text": "A ISA deve ser traduzida para linguagem do compilador."
        },
        {
          "letter": "E",
          "text": "A ISA faz a interface entre o sistema operacional e o usuário."
        }
      ],
      "answer": "B",
      "explanation": "A ISA define a interface entre os compiladores e o hardware com uma linguágem que ambos têm de entender.",
      "source": "Referência: Rota de aprendizagem 5 do Tema Visão Geral ISA, Tema 1, slide da aula 5."
    },
    {
      "id": "q13_26",
      "number": 26,
      "prompt": "Descrição da imagem:\n\nA figura apresenta uma estrutura em forma de degraus, composta por quatro níveis empilhados, numerados de 1 a 4. Cada nível representa uma camada de abstração em um sistema computacional. Acima dos degraus aparecem três perfis de usuários, cada um apontando para um nível diferente da estrutura.\n\nNa parte superior da imagem está o Usuário Final, com uma seta apontando para o nível 1, o degrau mais alto da figura. Isso indica que o usuário final interage principalmente com a camada mais próxima das aplicações.\n\nÀ direita aparece o Programador, com setas apontando para os níveis 2 e 3, indicando que o programador trabalha com camadas intermediárias do sistema, que oferecem recursos para o desenvolvimento de programas.\n\nMais à direita aparece o Designer do Sistema Operacional, com uma seta apontando para o nível 4, a camada mais baixa da estrutura, que está mais próxima do hardware do computador.\n\nOs níveis numerados estão organizados de cima para baixo da seguinte forma:\n\nPosição 1: camada mais alta, utilizada diretamente pelo usuário final.\n\nPosição 2: camada intermediária superior, acessada pelo programador.\n\nPosição 3: camada intermediária inferior, também relacionada ao trabalho do programador.\n\nPosição 4: camada mais baixa da estrutura, utilizada pelo projetista ou designer do sistema operacional.\n\nA imagem demonstra que diferentes perfis de usuários interagem com diferentes camadas do sistema computacional. Quanto mais alto o nível, mais próximo ele está do usuário. Quanto mais baixo o nível, mais próximo ele está do funcionamento interno do computador e do hardware.\n\nReferência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5.\n\nAnalise a imagem acima, para, em seguida, marcar a alternativa que identifica as camadas de um sistema de computação.",
      "alternatives": [
        {
          "letter": "A",
          "text": "1) Monitor; 2) Programação 1º nível; 3) Programação 2º nível; 4) Interface gráfica."
        },
        {
          "letter": "B",
          "text": "1) Programas de aplicação; 2) Utilitários; 3) Sistema operacional; 4) Hardware do computador."
        },
        {
          "letter": "C",
          "text": "1) Usuário; 2) Programação C; 3) Gráficos e ícones; 4) Internet."
        },
        {
          "letter": "D",
          "text": "1) Programador; 2) Sistema operacional; 3) Linguagem de Máquina; 4) Computador."
        },
        {
          "letter": "E",
          "text": "1) Computador; 2) Compilador; 3) Linguagem de alto nível; 4) Programador."
        }
      ],
      "answer": "B",
      "explanation": "As camadas de um sistema de computação são: Programas de aplicação, utilitários, sistema operacional e hardware do computador.",
      "source": "Referência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5."
    },
    {
      "id": "q13_27",
      "number": 27,
      "prompt": "O sistema operacional é um programa que controla a execução de programas aplicativos e age como interface entre o usuário e o hardware do computador.\n\nReferência: Rota de aprendizagem 5, Objetivos e Funções de SO, slide da aula 5.\n\nCom base nessa afirmação, assinale a alternativa que descreve os dois objetivos desse controle.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Custo e Desempenho."
        },
        {
          "letter": "B",
          "text": "Acessível e Elegante."
        },
        {
          "letter": "C",
          "text": "Silencioso e Rápido."
        },
        {
          "letter": "D",
          "text": "Organização e armazenamento"
        },
        {
          "letter": "E",
          "text": "Conveniência e Eficiência"
        }
      ],
      "answer": "E",
      "explanation": "Conveniência: um sistema operacional visa tornar o uso do computador mais conveniente.\n\nEficiência: um sistema operacional permite uma utilização mais eficiente dos recursos do sistema.",
      "source": "Referência: Rota de aprendizagem 5, Objetivos e Funções de SO, slide da aula 5."
    },
    {
      "id": "q13_28",
      "number": 28,
      "prompt": "Em se tratando do desempenho de um computador, é preciso saber que o ponto principal da construção de uma arquitetura paralela é fazer com que o computador execute suas funções de um modo mais rápido do que uma máquina com um único processador. Se ele não cumprir esse simples objetivo, esse é um computador que não vale a pena adquirir.\n\nReferência: Rota de aprendizagem 6.\n\nAssinale a alternativa que indica os parâmetros usados para mensurar o desempenho de um computador.",
      "alternatives": [
        {
          "letter": "A",
          "text": "São utilizados programas aplicativos (Apps) para medir o desempenho da CPU"
        },
        {
          "letter": "B",
          "text": "O Desempenho é medido pelo fabricante do processador que informa aos clientes os testes de desempenho realizados."
        },
        {
          "letter": "C",
          "text": "São comparados pelos fabricantes, quais entre os processadores quais são os mais velozes e quais mais lentos."
        },
        {
          "letter": "D",
          "text": "A análise de desempenho é medida pelo site do fabricante do processador através de aplicativo online."
        },
        {
          "letter": "E",
          "text": "Para mensurar (Medir) o desempenho são utilizadas as métricas de Hardware e Software"
        }
      ],
      "answer": "E",
      "explanation": "Para que o desempenho possa ser mensurado, são utilizadas as métricas de hardware e software.",
      "source": "Referência: Rota de aprendizagem 6."
    },
    {
      "id": "q13_29",
      "number": 29,
      "prompt": "O escalonamento de processos ou tarefas é definido como uma das funções mais importantes do SO, pois O SO determina quais processos devem ser executados a cada instante.\n\nReferência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5.\n\nCom base nessa afirmação, assinale a alternativa que descreve o objetivo do escalonamento de processos.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Criar uma pilha ordenada de comandos a serem executados pelo usuário."
        },
        {
          "letter": "B",
          "text": "Escolher a melhor CPU para execução de cada tarefa."
        },
        {
          "letter": "C",
          "text": "Elencar qual processo ou tarefa executar em cada instante."
        },
        {
          "letter": "D",
          "text": "Alocar espaço na memória."
        },
        {
          "letter": "E",
          "text": "Compartilhar o tempo de CPU entre determinado número de processos de modo imparcial."
        }
      ],
      "answer": "E",
      "explanation": "A imparcialidade é uma característica do escalonamento de processos na hora de compartilhar o tempo de CPU.",
      "source": "Referência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5."
    },
    {
      "id": "q13_30",
      "number": 30,
      "prompt": "Um sistema operacional é definido como um programa que gerencia os recursos do computador, fornece serviços para os programadores e estabelece uma ordem de execução de outros programas.\n\nReferência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5.\n\nConforme os estudos da disciplina, sabe-se que o SO controla a execução de programas em um processador. Pensando nisso, assinale a alternativa que mostra, corretamente, quais são as principais funções do SO.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Escalonamento de processos e gerenciamento de memória."
        },
        {
          "letter": "B",
          "text": "Registro dos endereços de memória."
        },
        {
          "letter": "C",
          "text": "Armazenamento de dados."
        },
        {
          "letter": "D",
          "text": "Comunicação entre os periféricos."
        },
        {
          "letter": "E",
          "text": "Reconhecimento dos periféricos no momento que ligamos o computador."
        }
      ],
      "answer": "A",
      "explanation": "O SO controla a execução de programas em um processador, principalmente as funções:\n\n• Escalonamento de processos.\n\n• Gerenciamento de memória.",
      "source": "Referência: Rota de aprendizagem 5, Sistema operacional, slide da aula 5."
    }
  ]
};

const AULA14 = {
  "id": "aula14",
  "title": "Gestão da Tecnologia e da Informação",
  "shortTitle": "Gestão de TI",
  "description": "Gestão da inovação, PD&I, tecnologia da informação e estratégia nas organizações.",
  "accent": "#0369a1",
  "icon": "📈",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q14_1",
      "number": 1,
      "prompt": "Avalie as asserções abaixo e a relação proposta entre elas:\n\nI- Uma adequada metodologia de gestão da inovação e concepção de ideias baseada em procedimentos estruturados, em consonância com as diretrizes nacionais e internacionais de PD&I pode nortear as organizações no que tange à avanços na gestão da pesquisa e da inovação.\n\nPORQUE\n\nII- A gestão da inovação está ligada à gestão dos recursos necessários para que a inovação ocorra e gere valor para a empresa, o que tem a ver com conhecer o papel da empresa na inovação, os tipos e níveis de inovação, os indicadores de inovação, bem como a garantia de que haja uma estrutura organizacional para inovação.\n\nA respeito dessas asserções, assinale a opção correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        },
        {
          "letter": "E",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "A",
      "explanation": "A alternativa que apresenta a resposta correta é a (a), pois a relação aqui se faz em causa-efeito, onde a assertiva I é complementadapela primeira justificando a primeira, em uma visão causa-efeito; a alternativa (b) está incorreta, pois ambas se completam, onde temosconceito-justificativa; já a alternativa (c) está incorreta, pois a lógica das duas assertivas são as mesmas; a alternativa (d) é incorreta, poisjustamente a assertiva II vem justificar a I é incorreta; e por fim, a alternativa (e) é incorreta, pois porque ambas assertivas são verdadeiras.(Rota 3, p. 12).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_2",
      "number": 2,
      "prompt": "As empresas precisam da inovação para gerar soluções as mais diversas demandas e necessidades dos clientes, e olha que estamos em um mundo global, onde a solução pode ser comprada de qualquer lugar do mundo. Com isso, as empresas passam a gerenciar a inovação em seus negócios.\n\nAnalise as sentenças a seguir, assinalando V para as afirmativas verdadeiras e F para as afirmativas falsas em relação a esse contexto.\n\nI. ( ) A gestão de inovação se tornou um requisito básico para gerar soluções, entregar valor ao consumidor e reduzir custos.\n\nII. ( ) O papel da inovação na empresa é torná-la competitiva, criando vantagens que agregam valores a seus consumidores.\n\nIII. ( ) A competição nem sempre esteve presente no ambiente dos negócios e a transformação digital não teve apelo suficiente, para mudar profundamente o comportamento do consumidor.\n\nAgora, marque a sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "V – V – V"
        },
        {
          "letter": "B",
          "text": "V – V – F"
        },
        {
          "letter": "C",
          "text": "V – F – V"
        },
        {
          "letter": "D",
          "text": "F – V – V"
        },
        {
          "letter": "E",
          "text": "F – V – F"
        }
      ],
      "answer": "B",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (b), pois ela apresenta a ordem correta de veracidade das afirmativas,onde apenas a afirmativa III é errada, pois a competição sempre esteve presente no ambiente dos negócios e a transformação digital, queestamos vivendo, mudou profundamente o comportamento do consumidor. (Rota 2, p.3).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_3",
      "number": 3,
      "prompt": "Neste tipo de inovação retira-se determinado bem ou produto de um lugar para colocá-lo ou disponibilizá-lo ao cliente ou consumidor em outro. É dar a ele uma finalidade distinta daquela para a qual foi inicialmente criado.\n\nEsse tipo de inovação é de :",
      "alternatives": [
        {
          "letter": "A",
          "text": "Produto."
        },
        {
          "letter": "B",
          "text": "Posição."
        },
        {
          "letter": "C",
          "text": "Processo."
        },
        {
          "letter": "D",
          "text": "Paradigma."
        },
        {
          "letter": "E",
          "text": "Tecnologia."
        }
      ],
      "answer": "B",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (b) , pois a inovação de por posição significa retirar determinado bem ouproduto de um lugar e colocá-lo ou disponibilizá-lo ao cliente ou consumidor de outro. É dar a ele uma finalidade distinta daquela para aqual foi inicialmente criado. (Rota 2, p.7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_4",
      "number": 4,
      "prompt": "Este é um tipo de inovação que balança toda a lógica do produto, do serviço, e da empresa. Assim, essa inovação é aquela em que as empresas investem com o intento de propor a criação de um produto totalmente diferente, seja daqueles produtos que já estava afeita a desenvolver e notabilizou, seja em função de seu desejo por lançar algo totalmente novo no mercado.\n\nA esse tipo de inovação, damos o nome de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Eletiva."
        },
        {
          "letter": "B",
          "text": "Radical"
        },
        {
          "letter": "C",
          "text": "Disruptiva."
        },
        {
          "letter": "D",
          "text": "Incremental."
        },
        {
          "letter": "E",
          "text": "Arquitetural."
        }
      ],
      "answer": "B",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (b) , pois a inovação radical “é aquela em que as empresas investemcom o intento de propor a criação de um produto totalmente diferente, seja dos que já estava afeita a desenvolver e notabilizou, seja emfunção de seu desejo por lançar algo totalmente nono no mercado. (Rota 2, p.10-11).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_5",
      "number": 5,
      "prompt": "Este tipo de inovação é algo mais profundo, mais abrangente e tende a envolver fatores relativos à realidade da organização no que diz respeito a seus produtos, processos e posição (modelo ‘mental’ da empresa) e também à sociedade, que sentirá o impacto desse desenvolvimento.\n\nEsse tipo de inovação é de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Produto."
        },
        {
          "letter": "B",
          "text": "Posição."
        },
        {
          "letter": "C",
          "text": "Processo."
        },
        {
          "letter": "D",
          "text": "Paradigma."
        },
        {
          "letter": "E",
          "text": "Tecnologia."
        }
      ],
      "answer": "D",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (d), pois a inovação de paradigma é algo mais profundo, maisabrangente e que tende a envolver fatores relativos à realidade da organização no que diz respeito a seus produtos, processos e posição(modelo ‘mental’ da empresa) e também à sociedade, que sentirá o impacto desse desenvolvimento. (Rota 2, p.7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_6",
      "number": 6,
      "prompt": "Não se deve confundir inovação com novidade. Uma boa dica para não cometer esse erro é pensar que a novidade está ligada à invenção, enquanto o foco da inovação nas empresas é a geração de resultados que consigam atender às expectativas e demandas de um negócio — e isso também envolve retorno e controle financeiro. E, não deve esquecer das etapas que podem ser implementadas para gerar inovações, como aquela que pode ser feita com conversas internas, em que diferentes membros da equipe apontam suas impressões sobre os estudos e pesquisas feitos\n\nEssa etapa a ser implementada para gerar inovações é ...",
      "alternatives": [
        {
          "letter": "A",
          "text": "Tecnologia."
        },
        {
          "letter": "B",
          "text": "Geração de ideias"
        },
        {
          "letter": "C",
          "text": "Troca de impressões"
        },
        {
          "letter": "D",
          "text": "Entendimento do problema."
        },
        {
          "letter": "E",
          "text": "Identificação de necessidades, oportunidades e problemas"
        }
      ],
      "answer": "C",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (c) , pois na etapa de troca de impressões etapa pode ser feita comconversas internas, em que diferentes membros da equipe apontam suas impressões sobre os estudos e pesquisas feitos. Quanto mais osproblemas e necessidades do consumidor forem discutidos, mais fácil será gerar ideias posteriormente. (Rota 2, p.5).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_7",
      "number": 7,
      "prompt": "Avalie as asserções abaixo e a relação proposta entre elas:\n\nI- Enquanto a Pesquisa pode ser definida como qualquer esforço da companhia para obter informações relevantes, o Desenvolvimento é a utilização de recursos para criar algo novo e ampliar os seus resultados.\n\nPORQUE\n\nII- Quando juntamos os dois, Pesquisa e Desenvolvimento funcionam como um ciclo de aperfeiçoamento. De um lado, entram conhecimentos úteis, do outro, saem propostas inovadoras. Fechando o ciclo, a pesquisa é utilizada para mensurar os resultados do desenvolvimento que pode, então, propor novos ajustes.\n\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        },
        {
          "letter": "E",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "A",
      "explanation": "A alternativa que apresenta a resposta correta é a (a), pois a relação aqui se faz em causa-efeito, onde a assertiva I é complementadapela primeira justificando a primeira, em uma visão causa-efeito; a alternativa (b) está incorreta, pois ambas se completam, onde temosconceito-justificativa; já a alternativa (c) está incorreta, pois a lógica das duas assertivas são as mesmas; a alternativa (d) é incorreta, poisjustamente a assertiva II vem justificar a I é incorreta; e por fim, a alternativa (e) é incorreta, pois porque ambas assertivas são verdadeiras.(Rota 3, p. 12).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_8",
      "number": 8,
      "prompt": "Avalie as asserções abaixo e a relação proposta entre elas:\n\nI- A inovação radical é um conjunto de iniciativas que visa buscar novos caminhos de crescimento para uma organização pode trilhar, se adaptar ou conquistar um mercado completamente diferente. Essa é uma estratégia de alto investimento, impacto e risco.\n\nPORQUE\n\nII- A inovação incremental explora novos horizontes de mercado, o que impacta não somente as empresas internamente, mas todo o segmento da organização.\n\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        },
        {
          "letter": "E",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "C",
      "explanation": "A alternativa que apresenta a resposta correta é a (c), pois a assertiva I é verdadeira, e a assertiva II é falsa, pois é a inovação radicalque explora os novos horizontes de mercado, o que impacta não somente as empresas internamente, mas todo o segmento daorganização. (Rota 2, p. 11).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_9",
      "number": 9,
      "prompt": "Inovações surgem a qualquer momento em mentes criativas, nos mais diversos lugares, por necessidade ou por acaso. Podem surgir por uma estratégia deliberada ou por acidente mediante as ricas trocas entre pessoas com habilidades e ideias diferentes.\n\nUm dos casos mais famosos é um produto da 3M que é o ...",
      "alternatives": [
        {
          "letter": "A",
          "text": "Post-et."
        },
        {
          "letter": "B",
          "text": "Post-at."
        },
        {
          "letter": "C",
          "text": "Post-on."
        },
        {
          "letter": "D",
          "text": "Post-it."
        },
        {
          "letter": "E",
          "text": "Post-in"
        }
      ],
      "answer": "D",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (d) , pois ela apresenta a resposta correta, onde o Post-it foi umainvenção – as micro-esféras – que não possuíam utilidade, e foram criadas de forma acidental, até o momento em que se criou o valor deuso por meio de do Dr. Art Fry que pensou no uso, inicialmente como marcador de suas partituras e posteriormente como uma nova formade divulgação (Rota 1, p.7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_10",
      "number": 10,
      "prompt": "Inovar pode ser criar algo totalmente novo, como no clássico exemplo da roda, que precisou de determinada tecnologia para dar formato arredondado a um bloco de pedra, algo inédito à época.\n\nAnalise as sentenças a seguir, assinalando V para as afirmativas verdadeiras e F para as afirmativas falsas em relação a esse contexto.\n\nI. ( ) Toda invenção pode ser considerada uma inovação\n\nII. ( ) Invenção é a criação de algo novo, algo que não existe.\n\nIII. ( ) Invenção só alcança o status de inovação se ela for capaz de agregar valores econômicos e sociais.\n\nAgora, marque a sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "V – V – V"
        },
        {
          "letter": "B",
          "text": "V – V – F"
        },
        {
          "letter": "C",
          "text": "V – F – V"
        },
        {
          "letter": "D",
          "text": "F – V – V"
        },
        {
          "letter": "E",
          "text": "F – V – F"
        }
      ],
      "answer": "D",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (d) , pois ela apresenta a ordem correta de veracidade das afirmativas,onde apenas a afirmativa I é errada, pois toda inovação é oriunda de uma invenção, porém, nem todas as invenções alcançam o status deinovação. (Rota 1, p.3).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_11",
      "number": 11,
      "prompt": "Uma vez que a empresa tem o seu foco no desenvolvimento de um ambiente organizacional propício a inovação, ela pode então, usar com maestria todas as ferramentas existentes para empreender a gestão da inovação da empresa e com isso conceber novos produtos.\n\nConsiderando o contexto, avalie as afirmações seguintes.\n\nI – O Mapa da Empatia tem como objetivo entender o propósito do produto e o que o produto vai oferecer para que esse propósito seja atingido.\n\nII – A técnica QFD é usada para que a voz do cliente seja transformada em voz de engenharia, traduzindo as necessidades dos usuários em requisitos técnicos do produto.\n\nIII – O Golden Circle é uma ferramenta do desenvolvimento de produto que visa levantar as características do usuário, suas necessidades, desejos e comportamentos com o objetivo de conhecer mais a fundo o público-alvo.\n\nÉ correto o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "I, apenas."
        },
        {
          "letter": "B",
          "text": "II, apenas."
        },
        {
          "letter": "C",
          "text": "I, e III, apenas."
        },
        {
          "letter": "D",
          "text": "II e III, apenas."
        },
        {
          "letter": "E",
          "text": "I, II e III"
        }
      ],
      "answer": "B",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (b) , pois apresenta as afirmativas corretas, onde os itens I e IIl sãoerrados, pois há uma inversão, onde o Golden Circle tem como objetivo entender o propósito do produto e o que o produto vai oferecerpara que esse propósito seja atingido; e o Mapa da Empatia é uma ferramenta do desenvolvimento de produto que visa levantar ascaracterísticas do usuário, suas necessidades, desejos e comportamentos com o objetivo de conhecer mais a fundo o público alvo. (Rota3, p. 9).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_12",
      "number": 12,
      "prompt": "As empresas por conta das transformações mercadológicas e por alteração no comportamento de seus consumidores passam a implantar ações inovativas em seus produtos, como aquela inovação que se remete à parte estrutural dos produtos.\n\nA esse tipo de inovação, damos o nome de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Eletiva."
        },
        {
          "letter": "B",
          "text": "Radical."
        },
        {
          "letter": "C",
          "text": "Disruptiva."
        },
        {
          "letter": "D",
          "text": "Incremental."
        },
        {
          "letter": "E",
          "text": "Arquitetural."
        }
      ],
      "answer": "E",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (e) , pois a inovação arquitetural se refere ao grau de modificação que amudança promovida pela inovação tem em relação ao bem, estado relacionada diretamente a representatividade da inovação em cima doproduto primário, em sua estrutura. (Rota 2, p.7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_13",
      "number": 13,
      "prompt": "O funil de incerteza é um processo de filtragem, de verificação de etapas durante o desenvolvimento de um projeto inovador, no qual a obtenção de conhecimentos tende a diminuir o grau de incertezas iniciais, transformando-as em riscos calculados.\n\nA medida que as perspectivas acerca da inovação vão ficando mais e mais determinadas, etapa a etapa, é possível tomar decisões mais adequadas quanto ao comprometimento de recursos necessários para o prosseguimento das operações.\n\nEtapas do funil de incerteza:\n\n1.Topo do Funil.\n\n2.Meio do Funil.\n\n3.Fundo do Funil.\n\nCaracterizações das etapas do funil de incerteza:\n\n( ) o objetivo nesse estágio é coletar ideias, dados e mapear os principais desafios que devem ser abordados pela equipe de inovação;\n\n( ) envolve manter e construir um time complementar, melhorar o produto, captar investimentos e se capacitar em diversos níveis para conseguir fazer crescer a empresa;\n\n( ) é o primeiro momento de afunilamento do processo de inovação e triagem das informações, desafios e oportunidades coletadas na primeira etapa do processo.\n\nA seguir, marque a alternativa que corresponde a sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "1 – 2 – 3"
        },
        {
          "letter": "B",
          "text": "1 – 3 – 2"
        },
        {
          "letter": "C",
          "text": "2 – 3 – 1"
        },
        {
          "letter": "D",
          "text": "2 – 1 – 3"
        },
        {
          "letter": "E",
          "text": "3 – 2 – 1"
        }
      ],
      "answer": "B",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (b) , pois apresenta a sequência correta sobre as etapas do funil deincerteza. (Rota 3. p. 6)",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_14",
      "number": 14,
      "prompt": "Avalie as asserções abaixo e a relação proposta entre elas:\n\nO universo corporativo no qual as empresas estão inseridas atualmente tem se tornado cada vez mais competitivo. Isso acontece, principalmente, em decorrência da globalização e da tecnologia, que não param de avançar, permitindo que organizações do mundo inteiro tenham a oportunidade de se aprimorar constantemente e potencializar a sua performance.\n\nPORQUE\n\nPodemos entender a inovação nas empresas como apenas o desenvolvimento de produtos, excluindo o desenvolvimento de serviços, e a descoberta de maneiras de conquistar novos mercados.\n\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa"
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira"
        },
        {
          "letter": "E",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "C",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (c), pois a assertiva I é verdadeira, e a assertiva II é falsa, visto que podemosentender a inovação nas empresas como o desenvolvimento de produtos e serviços inovadores, a descoberta de maneiras de conquistarnovos mercados ou a sugestão de novos usos criativos para os itens já existentes e ofertados pela organização. (Rota 2, p. 4).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_15",
      "number": 15,
      "prompt": "Vivencia-se um mundo digital, dentro de uma revolução tecnológica digital, assim, fala-se dos princípios da gestão digital, que se integra à tecnologia amplamente conectada a sistemas, à rede mundial de computadores, à internet das coisas, à inteligência artificial, etc.\n\nUm desses princípios é aquele que se refere à capacidade dos sistemas em se conectar com outros sistemas. Esse princípio é:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Virtualização."
        },
        {
          "letter": "B",
          "text": "Modularidade."
        },
        {
          "letter": "C",
          "text": "Descentralização."
        },
        {
          "letter": "D",
          "text": "Interoperabilidade."
        },
        {
          "letter": "E",
          "text": "Acompanhamentos e decisões em tempo real."
        }
      ],
      "answer": "D",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (d) , pois a Interoperabilidade refere-se à capacidade dos sistemas emse conectar com outros sistemas. Quanto mais sistemas conectados, mais dados são coletados e mais decisões em tempo real podem sertomadas. (Rota 1, p. 9).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_16",
      "number": 16,
      "prompt": "No contexto das inovações, para ser considerada eficaz, uma estratégia precisa levar em consideração a diversidade de cenários que dizem respeito aos avanços tecnológicos. E, como planejamento, a estratégia de tecnologia precisar ser operacionalizada dentro de uma visão sistêmica, uma visão do todo.\n\nAnalise as sentenças a seguir, assinalando V para as afirmativas verdadeiras e F para as afirmativas falsas em relação a esse contexto.\n\nI. A tecnologia não é exclusiva dos setores de P&D+I, como também, deve perpassar toda a empresa, pois o seu uso deve estar presente em todas as áreas.\n\nII. ( ) As novas tecnologias de informação e comunicação revolucionaram os mais diversos segmentos de negócios. É fácil notar como elas impactaram a logística, o gerenciamento de processos e muitas outras atividades do campo de negócios.\n\nIII. ( ) As organizações para serem inteligentes precisam disponibilizar produtos de qualidade, praticar bom atendimento, adequar sua política de venda e preços aos clientes, cumprir prazos predefinidos e estar atenta às mutações do mercado.\n\nAgora, marque a sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "V – V – V"
        },
        {
          "letter": "B",
          "text": "V – V – F"
        },
        {
          "letter": "C",
          "text": "V – F – V"
        },
        {
          "letter": "D",
          "text": "F – V – V"
        },
        {
          "letter": "E",
          "text": "F – V – F"
        }
      ],
      "answer": "A",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (a) , pois ela apresenta a ordem correta de veracidade das afirmativas,onde todas as afirmativas sobre o planejamento de tecnologia. (Rota 4, p.4).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_17",
      "number": 17,
      "prompt": "A tecnologia vem mudando a forma como estamos agindo na sociedade, a sustentabilidade também faz parte do nosso dia a dia, principalmente por meio de tecnologias que visam a equidade entre o econômico, o social e o ambiental. E, essa preocupação vai refletir nas soluções que são desenvolvidas por meio de produtos/serviços.\n\nConsiderando o contexto, avalie as afirmações seguintes.\n\nI – O armazenamento em nuvem é sustentável por seguir o conceito da desmaterialização, substituindo o físico pelo digital.\n\nII – A assinatura eletrônica tem como objetivo promover a transformação digital, substituindo os papéis, emails para versionamento e os procedimentos físicos por suas contrapartes digitais.\n\nIII – A gestão digital de documentos nada mais é do que uma infraestrutura que permite assinar documentos na esfera digital com a mesma validade jurídica que as assinaturas à caneta em documentos físicos.\n\nÉ correto o que se afirma em :",
      "alternatives": [
        {
          "letter": "A",
          "text": "I, apenas."
        },
        {
          "letter": "B",
          "text": "II, apenas."
        },
        {
          "letter": "C",
          "text": "I, e III, apenas."
        },
        {
          "letter": "D",
          "text": "II e III, apenas."
        },
        {
          "letter": "E",
          "text": "I, II e III"
        }
      ],
      "answer": "A",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (a) , pois apresenta as afirmativas corretas, onde os itens II e IIl sãoerrados, pois há uma inversão, onde A gestão digital de documentos tem como objetivo promover a transformação digital, substituindo ospapéis, emails para versionamento e os procedimentos físicos por suas contrapartes digitais; e a assinatura eletrônica nada mais é do queuma infraestrutura que permite assinar documentos na esfera digital com a mesma validade jurídica que as assinaturas à caneta emdocumentos físicos. (Rota 3, p. 11).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_18",
      "number": 18,
      "prompt": "No que se refere ao Ciclo de vida de uma tecnologia, tem-se que ele também está atrelado à solução que foi desenvolvida, ou seja, o produto ou o serviço. E, a mobilidade tecnológica de nossa época que traz o fim ou não de uma tecnologia. Por exemplo, a tecnologia das máquinas de escrever foi substituída pelos computadores. Com isso, se faz necessário conhecer as suas fases.\n\nConsiderando o contexto, avalie as afirmações seguintes.\n\nI – Na fase dos precursores têm-se os elementos iniciais para a invenção de algo.\n\nII – Na fase da invenção têm-se a combinação de métodos e elementos para criar o novo.\n\nIII – Na fase da maturidade têm-se que a nova tecnologia faz a atual declinar de forma gradual.\n\nÉ correto o que se afirma em :",
      "alternatives": [
        {
          "letter": "A",
          "text": "I, apenas."
        },
        {
          "letter": "B",
          "text": "II, apenas"
        },
        {
          "letter": "C",
          "text": "I, e II, apenas."
        },
        {
          "letter": "D",
          "text": "II e III, apenas."
        },
        {
          "letter": "E",
          "text": "I, II e III."
        }
      ],
      "answer": "C",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (c) , pois apresenta as afirmativas corretas, onde o item IIl é errado, poisna fase da maturidade têm-se que a tecnologia já está à disposição da sociedade, que dela já faz o seu uso. (Rota 6, p. 7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_19",
      "number": 19,
      "prompt": "Com a tecnologia aplicada ao varejo vê-se que as empresas passam a ofertar uma gama importante de produtos, e isso é bom, principalmente para os consumidores que possuem agora uma boa variedade de opções. Além de toda a tecnologia envolvida no varejo, tornando-o também digital, a tecnologia proporcionada pela internet das coisas também vem alterando substancialmente a forma e o que consumimos.\n\nAnalise as sentenças a seguir, assinalando V para as afirmativas verdadeiras e F para as afirmativas falsas em relação a esse contexto.\n\nI. ( ) A “Internet das Coisas” se refere a uma revolução tecnológica que tem como objetivo conectar os itens usados do dia a dia à rede mundial de computadores.\n\nII. ( ) Cada vez mais surgem eletrodomésticos, meios de transporte e até mesmo tênis, roupas e maçanetas conectados à Internet e a outros dispositivos, como computadores e smartphones.\n\nIII. ( ) A Internet das coisas tem ganhado bastante destaque nos tempos atuais, principalmente pós-pandemia do Coronavírus, que fez acelerar a integração mundo físico e o digital.\n\nAgora, marque a sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "V – V – V"
        },
        {
          "letter": "B",
          "text": "V – V – F"
        },
        {
          "letter": "C",
          "text": "V – F – V"
        },
        {
          "letter": "D",
          "text": "F – V – V"
        },
        {
          "letter": "E",
          "text": "F – V – F"
        }
      ],
      "answer": "A",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (a) , pois ela apresenta a ordem correta de veracidade das afirmativas,onde todas as afirmativas sobre a Internet das Coisas. (Rota 5, p.3-4).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_20",
      "number": 20,
      "prompt": "As tecnologias são desenvolvidas pelas empresas que as vendem como produto/serviço para as demais, sendo que muitas dessas tecnologias têm como fonte o departamento de P&D+I das empresas; Universidades; Institutos de Pesquisa, conferências, simpósios, feiras e exposições. Assim, uma das principais inovações de tecnologia é aquela utilizada para facilitar o acesso remoto a sistemas e documentos (imagens, vídeos e etc) por uma rede virtual elaborada nos computadores\n\nEssa inovação tecnológica é ...",
      "alternatives": [
        {
          "letter": "A",
          "text": "Blockchain."
        },
        {
          "letter": "B",
          "text": "Robotização."
        },
        {
          "letter": "C",
          "text": "Cloud computing."
        },
        {
          "letter": "D",
          "text": "Internet das Coisas (IoT)."
        },
        {
          "letter": "E",
          "text": "Inteligência Artificial (IA)."
        }
      ],
      "answer": "C",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (c) , pois a Cloud computing, em português computação em nuvem, é oconceito utilizado para facilitar o acesso remoto a sistemas e documentos (imagens, vídeos e etc) por uma rede virtual elaborada noscomputadores. (Rota 4, p.6).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_21",
      "number": 21,
      "prompt": "Inovações podem surgir a qualquer momento, mas raramente ocorrem de forma isolada. Quando as condições tecnológicas e de mercado propiciam uma base adequada, surge uma geração inteira de inovações, que se estende por vários anos. Essa geração passa por um ciclo de vida, caracterizado por variações no tipo, na frequência e no impacto das inovações apresentadas.\n\nConsiderando o contexto, avalie as afirmações seguintes.\n\nI – A gestão de ciclo permite estipular a duração dos processos de inovação, sugerindo mudanças e melhorias ao longo do processo.\n\nII – Tudo o que ocorrer durante cada ciclo (incluindo possíveis problemas), deve ser devidamente documentado, avaliado e deve servir como retroalimentação de um novo ciclo.\n\nIII – O ciclo de vida da tecnologia e da inovação vão estar diretamente ligados com o ciclo de vida do produto/serviço, os quais são atrelados, assim sendo, vai variar o tempo, porém, seguindo as mesmas premissas.\n\nÉ correto o que se afirma em:",
      "alternatives": [
        {
          "letter": "A",
          "text": "I, apenas."
        },
        {
          "letter": "B",
          "text": "II, apenas."
        },
        {
          "letter": "C",
          "text": "I, e II, apenas."
        },
        {
          "letter": "D",
          "text": "II e III, apenas."
        },
        {
          "letter": "E",
          "text": "I, II e III"
        }
      ],
      "answer": "E",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (e) , pois apresenta as afirmativas corretas, onde todos os itens estãocorretos no que se refere a ciclo de vida da tecnologia e da inovação. (Rota 6, p. 6).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_22",
      "number": 22,
      "prompt": "Esse tipo de obsolescência, ocorre quando um produto, mesmo funcionando e cumprindo a função para a qual foi projetado, é substituído por um novo, com tecnologia mais avançada, que acaba desempenhando com mais eficiência as necessidades do consumidor. Esse é um tipo de obsolescência que acontece quando há a introdução de um produto genuinamente aperfeiçoado no mercado.\n\nA esse tipo de obsolescência damos o nome de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Obsolescência psicológica."
        },
        {
          "letter": "B",
          "text": "Obsolescência perceptiva."
        },
        {
          "letter": "C",
          "text": "Obsolescência tecnológica."
        },
        {
          "letter": "D",
          "text": "Obsolescência programada."
        },
        {
          "letter": "E",
          "text": "Obsolescência desejabilidade."
        }
      ],
      "answer": "C",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (c)\n\n, pois a obsolescência tecnológica, ou obsolescência de função,como também é conhecida, ocorre quando um produto, mesmo funcionando e cumprindo a função para a qual foi projetado, é substituídopor um novo, com tecnologia mais avançada, que acaba desempenhando com mais eficiência as necessidades do consumidor. Esse é umtipo de obsolescência que acontece quando há a introdução de um produto genuinamente aperfeiçoado no mercado. (Rota 4, p.12).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_23",
      "number": 23,
      "prompt": "É uma opção interessante para que o emissor não precise gerar vários números de cartões virtuais aos seus clientes, uma vez que a cada compra o sistema gera um novo código de segurança para o usuário. A funcionalidade ainda elimina a possibilidade de copiar os dados do aplicativo e realizar transações sem autenticação, aumentando assim a segurança do cartão virtual para os clientes.\n\nEssa tecnologia em meios de pagamento é:",
      "alternatives": [
        {
          "letter": "A",
          "text": "3DS."
        },
        {
          "letter": "B",
          "text": "Contactless."
        },
        {
          "letter": "C",
          "text": "Tokenização."
        },
        {
          "letter": "D",
          "text": "Cartão Virtual."
        },
        {
          "letter": "E",
          "text": "CVV Dinâmico."
        }
      ],
      "answer": "E",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (e) , pois o CVV Dinâmico é uma opção interessante para que o emissornão precise gerar vários números de cartões virtuais aos seus clientes, uma vez que a cada compra o sistema gera um novo código desegurança para o usuário. A funcionalidade ainda elimina a possibilidade de copiar os dados do aplicativo e realizar transações semautenticação, aumentando assim a segurança do cartão virtual para os clientes. (Rota 5, p.7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_24",
      "number": 24,
      "prompt": "Avalie as asserções abaixo e a relação proposta entre elas:\n\nI- Uma Startup é uma organização de caráter temporário, que busca criar novos produtos ou serviços, com modelo de negócio escalável, em ambiente de extrema incerteza, que vai ao encontro dos elementos que temos que observar para reconhecer uma empresa desse tipo.\n\nPORQUE\n\nII- Um empreendedor que pretende iniciar a sua Startup deve entender que nesse modelo de negócio, as transformações não ocorrem de forma rápida, e todas as mudanças não podem ser admitidas como normais neste novo universo, assim, não existe a constante necessidade de diferenciação, pois a competividade não é acirrada e nem acelerada.\n\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        },
        {
          "letter": "E",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "C",
      "explanation": "A alternativa que apresenta a resposta correta é a (c), pois a assertiva I é verdadeira e a assertiva II é falsa, pois é ao contrário, umempreendedor que pretende iniciar a sua Startup deve entender que nesse modelo de negócio, as transformações ocorrem de formarápida, e todas as mudanças são normais neste novo universo, assim, existe a constante necessidade de diferenciação, pois acompetividade é acirrada e acelerada, e em muitos casos geram novas leis, crises. (Rota 4, p. 7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_25",
      "number": 25,
      "prompt": "A temática da inovação e da tecnologia vem se tornando tão importantes que a sociedade, por meio dos Poderes constituídos, está criando formas de incentivá-las e protegê-las, como o Sistema Nacional de Inovação (SNI) que possui elementos que interagem na produção, difusão e uso de conhecimentos novos e economicamente úteis.\n\nAnalise as sentenças a seguir, assinalando V para as afirmativas verdadeiras e F para as afirmativas falsas em relação a esse contexto.\n\nI. ( ) Um sistema de inovação envolve uma rede de atores das mais variadas naturezas, como indústrias, institutos de pesquisa, instituições de ensino e de financiamento e órgãos governamentais.\n\nII. ( ) Os sistemas de inovação delimitam as fronteiras de atuação, delineando a trajetória de tecnologias e de inovações, e favorecem o desenvolvimento de inovações condizentes com as necessidades do mercado.\n\nIII. ( ) Os atores de um sistema de inovação têm como objetivo, atividades e interesses em comum que contribuem para o desenvolvimento de uma nova tecnologia ou inovação dentro de um contexto por meio de processos de trocas de informação, aprendizado, colaboração, regulação ou, ainda, normatização.\n\nAgora, marque a sequência correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "V – V – V"
        },
        {
          "letter": "B",
          "text": "V – V – F"
        },
        {
          "letter": "C",
          "text": "V – F – V"
        },
        {
          "letter": "D",
          "text": "F – V – V"
        },
        {
          "letter": "E",
          "text": "F – V – F"
        }
      ],
      "answer": "A",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (a) , pois ela apresenta a ordem correta de veracidade das afirmativas,onde todas as afirmativas são corretas no que se refere ao sistema de inovação. (Rota 6, p.3).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_26",
      "number": 26,
      "prompt": "Esta função proporciona uma camada de segurança complementar nas transações, onde para o usuário final, a mudança é pequena: antes de finalizar compras em e-commerce e demais operações realizadas em ambiente virtual, o portador do cartão receberá de sua instituição financeira um código digital de verificação por meio de SMS ou push no celular, com o objetivo de confirmar seus dados e garantir sua proteção.\n\nEssa tecnologia em meios de pagamento é ...",
      "alternatives": [
        {
          "letter": "A",
          "text": "3DS."
        },
        {
          "letter": "B",
          "text": "Contactless."
        },
        {
          "letter": "C",
          "text": "Tokenização."
        },
        {
          "letter": "D",
          "text": "Cartão Virtual."
        },
        {
          "letter": "E",
          "text": "CVV Dinâmico."
        }
      ],
      "answer": "A",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (a) , pois a função 3DS proporciona uma camada de segurançacomplementar nas transações. Para o usuário final, a mudança é pequena: antes de finalizar compras em e-commerce e demaisoperações realizadas em ambiente virtual, o portador do cartão receberá de sua instituição financeira um código digital de verificação pormeio de SMS ou push no celular, com o objetivo de confirmar seus dados e garantir sua proteção. (Rota 5, p.7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_27",
      "number": 27,
      "prompt": "Essa é uma das soluções digitais mais conhecidas em processamento de cartões por ser uma alternativa segura para compras não presenciais (e-commerce em sites e aplicativos) e bastante prática, já que possibilita que a primeira compra ocorra logo após o onboarding digital do cliente. Ou seja, o usuário não precisa esperar o cartão chegar até seu endereço para começar a utilizá-lo.\n\nEssa tecnologia em meios de pagamento é:",
      "alternatives": [
        {
          "letter": "A",
          "text": "3DS."
        },
        {
          "letter": "B",
          "text": "Contactless."
        },
        {
          "letter": "C",
          "text": "Tokenização."
        },
        {
          "letter": "D",
          "text": "Cartão Virtual."
        },
        {
          "letter": "E",
          "text": "CVV Dinâmico."
        }
      ],
      "answer": "D",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (d) , pois o cartão virtual é uma das soluções digitais mais conhecidasem processamento de cartões por ser uma alternativa segura para compras não presenciais (e-commerce em sites e aplicativos) ebastante prática, já que possibilita que a primeira compra ocorra logo após o onboarding digital do cliente. Ou seja, o usuário não precisaesperar o cartão chegar até seu endereço para começar a utilizá-lo. (Rota 5, p.6-7).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_28",
      "number": 28,
      "prompt": "Startup é uma empresa, em fase inicial, que apresenta uma proposta inovadora, tem uma base tecnológica, um modelo de negócio escalável (ou seja, que se pode reproduzir repetidamente em grande quantidade com grande ganho de produtividade), com baixo custo para iniciar as atividades em sua fase inicial. Uma questão importante que separa as Startups de sucesso das de insucesso é a escabilidade, por exemplo, possibilitando o modelo ser adotado em diversas condições e circunstâncias.\n\nEssa característica de negócio escalável é ...",
      "alternatives": [
        {
          "letter": "A",
          "text": "Logística."
        },
        {
          "letter": "B",
          "text": "Padronização."
        },
        {
          "letter": "C",
          "text": "Automatização."
        },
        {
          "letter": "D",
          "text": "Replicabilidade."
        },
        {
          "letter": "E",
          "text": "Marketing e vendas."
        }
      ],
      "answer": "D",
      "explanation": "Comentário:\n\nA alternativa que apresenta a resposta correta é a (d) , pois a replicabilidade é a possibilidade de replicar os modelos ecaracterísticas. (Rota 4, p.8).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_29",
      "number": 29,
      "prompt": "Esta obsolescência ocorre quando um produto, que funciona perfeitamente, passa a ser considerado obsoleto devido ao surgimento de outro, com estilo diferente ou com alguma alteração em sua linha de montagem.\n\nA esse tipo de obsolescência damos o nome de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Obsolescência durável."
        },
        {
          "letter": "B",
          "text": "Obsolescência perceptiva."
        },
        {
          "letter": "C",
          "text": "Obsolescência tecnológica."
        },
        {
          "letter": "D",
          "text": "Obsolescência programada."
        },
        {
          "letter": "E",
          "text": "Obsolescência reprogramada."
        }
      ],
      "answer": "B",
      "explanation": "A alternativa que apresenta a resposta correta é a (b), obsolescência perceptiva “também é conhecida como obsolescência psicológica ou de desejabilidade. Ela ocorre quando um produto, que funciona perfeitamente, passa a ser considerado obsoleto devido aosurgimento de outro, com estilo diferente ou com alguma alteração em sua linha de montagem\n\n” (Ecycle, 2021) (Rota 4, p.12).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    },
    {
      "id": "q14_30",
      "number": 30,
      "prompt": "Avalie as asserções abaixo e a relação proposta entre elas:\n\nI - A chamada propriedade intelectual de uma inovação pode ser considerada uma das maiores vantagens no que se refere à criação de valor para a empresa.\n\nPORQUE\n\nII - Protege a inovação de cópias indevidas e possibilita ao proprietário da ideia explorar comercialmente com exclusividade todo o potencial da inovação.\n\nA respeito dessas asserções, assinale a opção correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "As asserções I e II são proposições verdadeiras, e a II é uma justificativa da I."
        },
        {
          "letter": "B",
          "text": "As asserções I e II são proposições verdadeiras, mas a II não é uma justificativa da I."
        },
        {
          "letter": "C",
          "text": "A asserção I é uma proposição verdadeira, e a II é uma proposição falsa."
        },
        {
          "letter": "D",
          "text": "A asserção I é uma proposição falsa, e a II é uma proposição verdadeira."
        },
        {
          "letter": "E",
          "text": "As asserções I e II são proposições falsas."
        }
      ],
      "answer": "A",
      "explanation": "A alternativa que apresenta a resposta correta é a (a), pois a relação aqui se faz em causa-efeito, onde a assertiva I é complementadapela primeira justificando a primeira, em uma visão causa-efeito; a alternativa (b) está incorreta, pois ambas se completam, onde temosconceito-justificativa; já a alternativa (c) está incorreta, pois a lógica das duas assertivas são as mesmas; a alternativa (d) é incorreta, poisjustamente a assertiva II vem justificar a I é incorreta; e por fim, a alternativa (e) é incorreta, pois porque ambas assertivas são verdadeiras.(Rota 6, p. 5).",
      "source": "Gestão da Tecnologia e da Informação – Material de apoio."
    }
  ]
};

const AULA15 = {
  "id": "aula15",
  "title": "Produção Textual",
  "shortTitle": "Produção Textual",
  "description": "Princípios linguísticos, níveis de linguagem, comunicação, argumentação e texto.",
  "accent": "#be185d",
  "icon": "✍️",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q15_1",
      "number": 1,
      "prompt": "Leia o texto a seguir:\n\n“[...] embora todas as línguas articulem suas estruturas de forma singular, elas têm traços comuns.”\n\nApós esta avaliação, caso queira ler integralmente esse texto, ele está em: LEÓN, C. B. de et. al. Comunicação e expressão. Curitiba: InterSaberes, 2013. P. 15. Considerando o texto a cima e os conteúdos do livro-base Comunicação e Expressão, identifique o princípio linguístico enunciado no trecho acima. Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Princípio da variação linguística."
        },
        {
          "letter": "B",
          "text": "Princípio da dupla articulação."
        },
        {
          "letter": "C",
          "text": "Princípio da singularidade."
        },
        {
          "letter": "D",
          "text": "Princípio da universalidade."
        }
      ],
      "answer": "D",
      "explanation": "Justificativa: Verdadeira. O trecho citado corresponde diretamente ao princípio da universalidade: “PRINCÍPIO DA UNIVERSALIDADE: embora todas as línguas articulem suas estruturas de forma singular, elas têm traços comuns.” (Livro-base: Comunicação e Expressão, p. 15).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_2",
      "number": 2,
      "prompt": "“Dá-me um copo d´água.”\n\nFonte: LEÓN, C. B. de et al. Comunicação & expressão. Curitiba: InterSaberes, 2013. p. 28.\n\nAnalise o trecho apresentado e identifique o nível de linguagem utilizado, conforme os conceitos abordados no livro-base.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Língua coloquial."
        },
        {
          "letter": "B",
          "text": "Língua culta ou padrão."
        },
        {
          "letter": "C",
          "text": "Língua vulgar ou inculta."
        },
        {
          "letter": "D",
          "text": "Língua regional."
        }
      ],
      "answer": "B",
      "explanation": "O trecho exemplifica o uso da norma culta, pois está estruturado segundo as regras da gramática tradicional. Conforme o livro-base: “No nível culto, dizemos ‘Dá-me um copo d´água’, porque esse nível está de acordo com as normas da gramática tradicional.” (Comunicação & expressão, p. 28).\n\nObjeto de Conhecimento: Níveis de linguagem.\n\nHabilidade: Reconhecer os diferentes níveis de linguagem e sua adequação aos contextos de uso.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_3",
      "number": 3,
      "prompt": "“[...] prioriza a informação em detrimento da opinião. O texto que opta por essa função da linguagem se mostra claramente a serviço dos fatos.”\n\nFonte: KOBS, V. D. Argumentação & retórica. Curitiba: IESDE, 2012. p. 94.\n\nIdentifique a função da linguagem predominante no trecho apresentado, conforme os conceitos abordados no livro-base.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A função referencial ou denotativa."
        },
        {
          "letter": "B",
          "text": "A função conativa ou apelativa."
        },
        {
          "letter": "C",
          "text": "A função metalinguística."
        },
        {
          "letter": "D",
          "text": "A função poética."
        }
      ],
      "answer": "A",
      "explanation": "A função referencial tem como objetivo principal transmitir informações objetivas, priorizando os fatos em vez de opiniões. Segundo o livro-base: “Função referencial (ou denotativa, ou cognitiva) – Aponta para o sentido real dos seres e das coisas.” (Comunicação & expressão, p. 30).\n\nObjeto de Conhecimento: Funções da linguagem.\n\nHabilidade: Identificar a função predominante da linguagem em diferentes tipos de texto.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_4",
      "number": 4,
      "prompt": "Leia o texto a seguir:\n\n“Não existe isso que se chama ‘escrever bem’. Existe é ‘pensar bem’. Escrever é pensar. Quem pensa mal, escreve mal.”\n\nApós a avaliação, caso queira ler o texto integralmente, ele se encontra no livro: LEMINSKI, P. Ensaios e anseios crípticos. Campinas: Editora da Unicamp, 2011. p. 107.\n\nAnalise os conceitos relacionados à estrutura do parágrafo e à elaboração de paráfrases, conforme os estudos desenvolvidos em sala e o livro-base Comunicação e expressão, e identifique a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A estrutura de um parágrafo pode ser composta por introdução, desenvolvimento e conclusão, sendo que o desenvolvimento deve estar relacionado à introdução."
        },
        {
          "letter": "B",
          "text": "Parágrafo é a reformulação de um texto, mantendo o seu significado, e por isso equivale à paráfrase."
        },
        {
          "letter": "C",
          "text": "Ao fazer uma paráfrase, o autor deve evitar transmitir intenções, ideias e sentimentos, mantendo-se neutro."
        },
        {
          "letter": "D",
          "text": "O desenvolvimento de um parágrafo pode ser independente da introdução, desde que contenha informações relevantes."
        }
      ],
      "answer": "A",
      "explanation": "Segundo o livro-base: “Se analisarmos esses parágrafos, a maioria deles apresenta: INTRODUÇÃO ou FRASE-NÚCLEO; DESENVOLVIMENTO, em que são apresentadas as ideias relacionadas ao tópico inicial; CONCLUSÃO [...]” (p. 76-77).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_5",
      "number": 5,
      "prompt": "Considere o seguinte excerto:\n\n“Resumindo, podemos dizer que a coesão é a ligação, a união entre partes de um texto; coerência é o sentido lógico, o nexo.”\n\nApós a avaliação, caso queira ler o texto integralmente, ele se encontra no livro: AQUINO, R. Interpretação de textos. Rio de Janeiro: Elsevier, 2008. p. 14.\n\nAnalise as afirmações sobre coesão e coerência textuais e assinale a alternativa correta, considerando os conceitos e princípios apresentados no livro-base Comunicação e expressão.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A coesão textual depende exclusivamente da repetição de termos, enquanto a coerência é garantida pelo uso de articuladores que evitam contradições."
        },
        {
          "letter": "B",
          "text": "A coerência textual é assegurada pelos princípios da não contradição e da relação, que mantêm a logicidade das ideias, enquanto os articuladores estabelecem conexões entre partes do texto."
        },
        {
          "letter": "C",
          "text": "Os articuladores são recursos que substituem palavras ou ideias para evitar repetições, garantindo a coesão e a coerência do texto."
        },
        {
          "letter": "D",
          "text": "O princípio da relação atua apenas no nível sintático, sem interferir na coerência global do texto, enquanto a não contradição é um recurso de coesão."
        }
      ],
      "answer": "B",
      "explanation": "“No estudo da coesão, nomeiam-se as palavras que ligam ideias de articuladores” (livro-base, p. 44). Quanto à coerência: “dois itens importantes vão garantir a coerência de um texto: a NÃO CONTRADIÇÃO entre ideias” (livro-base, p. 60) e “os princípios da não contradição e da relação estão diretamente ligados à logicidade das ideias” (livro-base, p. 64).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_6",
      "number": 6,
      "prompt": "Atente para o extrato de texto a seguir:\n\n“Se as sentenças proferidas pelas crianças fossem somente baseadas no que elas ouvem, nenhuma diria ‘Eu fazi’ ou ‘Se eu sesse’, pois não ouvem nenhum falante adulto dizer frases como essas.”\n\nApós a avaliação, caso queira ler o texto integralmente, o mesmo encontra-se disponível em: CONTE, D.; VOLMER, L. GRÉGIS, R. A. (Orgs.) Espaços de encontro. Novo Hamburgo: Feevale, 2009. P. 132.\n\nDe acordo com o livro-base base Comunicação & expressão, o trecho acima remete à tendência de regularizar as irregularidades. De qual princípio linguístico estamos tratando neste caso?",
      "alternatives": [
        {
          "letter": "A",
          "text": "Princípio da variação linguística."
        },
        {
          "letter": "B",
          "text": "Princípio da dupla articulação."
        },
        {
          "letter": "C",
          "text": "Princípio da singularidade."
        },
        {
          "letter": "D",
          "text": "Princípio do processo analógico."
        }
      ],
      "answer": "D",
      "explanation": "Justificativa (correta): De acordo com o livro-base Comunicação & Expressão, sobre os princípios comuns às línguas, pelo “PRINCÍPIO DO PROCESSO ANALÓGICO: o falante tende a tornar regulares as irregularidades da língua.” (livro-base, p. 15).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_7",
      "number": 7,
      "prompt": "Leia a citação a seguir:\n\n“A língua é minha pátria / E eu não tenho pátria, tenho frátria / E quero mátria”\n\nApós esta avaliação, caso queira ler integralmente esse texto, ele está em: VELOSO, Caetano. Língua. In: VELOSO, Caetano. Velô (LP). Brasil: Phillips, 1984. Considerando a citação acima e os conteúdos do livro-base Comunicação e Expressão, identifique a principal língua falada no Brasil. Indique a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "A língua universal."
        },
        {
          "letter": "B",
          "text": "A língua brasileira."
        },
        {
          "letter": "C",
          "text": "A língua portuguesa."
        },
        {
          "letter": "D",
          "text": "A língua sul-americana."
        }
      ],
      "answer": "C",
      "explanation": "Justificativa: Verdadeira. “Nesse imenso território, usamos a mesma língua para nos comunicarmos, ou seja, usamos a língua portuguesa.” (Comunicação e Expressão, p. 14).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_8",
      "number": 8,
      "prompt": "“Nóis num vimu ninguém.”\n\nFonte: LEÓN, C. B. de et al. Comunicação & expressão. Curitiba: InterSaberes, 2013. p. 29.\n\nAnalise o trecho apresentado e identifique o nível de linguagem que ele exemplifica, conforme os conceitos abordados no livro-base.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O nível culto ou padrão da linguagem."
        },
        {
          "letter": "B",
          "text": "O nível coloquial da linguagem."
        },
        {
          "letter": "C",
          "text": "O nível vulgar ou inculta da linguagem."
        },
        {
          "letter": "D",
          "text": "O nível regional da linguagem."
        }
      ],
      "answer": "C",
      "explanation": "O trecho exemplifica o nível vulgar ou inculto, caracterizado por múltiplas inadequações em relação à gramática normativa. Conforme o livro-base: “Este nível [língua vulgar ou inculta] contém várias inadequações se formos levar em conta a gramática normativa da língua portuguesa.” (Comunicação & expressão, p. 29).\n\nObjeto de Conhecimento: Níveis de linguagem.\n\nHabilidade: Reconhecer desvios da norma culta e identificar registros linguísticos inadequados em contextos formais.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_9",
      "number": 9,
      "prompt": "“[...] a maioria das escolas brasileiras ainda desconhece (ou desconsidera) a diversidade linguística, pois continua realizando o processo ensino e aprendizagem da língua materna tomando por base quase sempre ou unicamente a variedade de prestígio.”\n\nFonte: MOURA, D. (Org.). Os desafios da língua. Maceió: Edufal, 2008. p. 231.\n\nIdentifique o princípio linguístico que fundamenta a crítica apresentada no trecho quanto à abordagem escolar da língua materna.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O princípio da variação linguística."
        },
        {
          "letter": "B",
          "text": "O princípio da dupla articulação."
        },
        {
          "letter": "C",
          "text": "O princípio da singularidade."
        },
        {
          "letter": "D",
          "text": "O princípio da universalidade."
        }
      ],
      "answer": "A",
      "explanation": "O princípio da variação linguística reconhece que “todas as línguas, segundo o princípio da variação linguística, mudam no tempo e no espaço” (livro-base Comunicação & expressão, p. 17). O trecho denuncia a valorização exclusiva da variedade de prestígio, ignorando outras formas legítimas de expressão linguística, o que está diretamente relacionado à variação.\n\nObjeto de Conhecimento: Variação linguística.\n\nHabilidade: Reconhecer os diferentes usos da linguagem em contextos sociais e culturais diversos.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_10",
      "number": 10,
      "prompt": "Leia o fragmento de texto a seguir:\n\n“ A busca por essa língua universal fez com que os estudiosos examinassem várias línguas ao mesmo tempo, comparando-as em todos os aspectos. Com esse estudo, foi observada a existência de PRINCÍPIOS que eram COMUNS a todas as línguas do mundo.”\n\nApós esta avaliação, caso queira ler integralmente esse texto, ele está em: LEÓN, C. B. de et. al. Comunicação & Expressão. Curitiba: InterSaberes, 2013. P. 15.\n\nDe acordo com o livro-base Comunicação & expressão, o princípio que estabelece que cada língua articula de forma própria e típica as suas estruturas é:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O princípio da variação linguística."
        },
        {
          "letter": "B",
          "text": "O princípio da dupla articulação."
        },
        {
          "letter": "C",
          "text": "O princípio da singularidade."
        },
        {
          "letter": "D",
          "text": "O princípio da universalidade."
        }
      ],
      "answer": "C",
      "explanation": "Justificativa (correta): De acordo com o livro-base Comunicação & Expressão, sobre os princípios comuns às línguas, pelo “PRINCÍPIO DA SINGULARIDADE: todas as línguas articulam as suas estruturas de forma própria, singular.” (livro-base, p. 15).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_11",
      "number": 11,
      "prompt": "Leia o trecho a seguir:\n\n“Os estudos comparatistas e históricos das línguas trataram, pela primeira vez, a linguagem em si mesma e por si mesma, sem subordiná-la ao estudo da retórica, da lógica, da poética ou da filosofia.”\n\nApós a avaliação, caso queira ler o texto integralmente, o mesmo encontra-se disponível em: MUSSALIM, F. Linguística I. Curitiba: IESDE, 2009. P. 27.\n\nDe acordo com o livro-base Comunicação & expressão, foi a busca por uma “língua universal” que fez com que os estudiosos examinassem várias línguas, comparando-as em todos os aspectos. Assinale a alternativa correta a respeito deste processo de comparação:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Chegou-se à criação de uma língua universal."
        },
        {
          "letter": "B",
          "text": "Chegou-se a princípios linguísticos comuns a todas as línguas."
        },
        {
          "letter": "C",
          "text": "Conclui-se que nem todas as línguas apresentam variação linguística."
        },
        {
          "letter": "D",
          "text": "Percebeu-se que a expressão de sons de uma língua é uma lista aberta, pois novos sons podem ser criados e incorporados a uma língua."
        }
      ],
      "answer": "B",
      "explanation": "Justificativa (correta): De acordo com o livro-base Comunicação & Expressão, sobre a comparação de aspectos de várias línguas, “Com esse estudo, foi observada a existência de PRINCÍPIOS que eram COMUNS a todas as línguas do mundo”. (livro-base, p. 15).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_12",
      "number": 12,
      "prompt": "Leia o fragmento de texto a seguir:\n\n“Olha o tranco da morena que passa ali no rancho!”\n\nApós esta avaliação, caso queira ler integralmente esse texto, ele está em: LEÓN, C. B. de et. al. Comunicação e expressão. Curitiba: InterSaberes, 2013. P. 29.\n\nConsiderando os conteúdos do livro-base Comunicação e Expressão, indique qual é o nível de linguagem exemplificado no trecho acima. Assinale a alternativa correta:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Língua culta ou padrão."
        },
        {
          "letter": "B",
          "text": "Língua coloquial."
        },
        {
          "letter": "C",
          "text": "Língua vulgar ou inculta."
        },
        {
          "letter": "D",
          "text": "Língua regional."
        }
      ],
      "answer": "D",
      "explanation": "Justificativa: Verdadeira. “O nível regional diz respeito à linguagem usada especificamente em cada região.” (Comunicação e Expressão, p. 29). O uso de expressões como “tranco” e “rancho” evidencia traços linguísticos típicos de uma determinada localidade.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_13",
      "number": 13,
      "prompt": "Leia o texto a seguir:\n\n“Para fins de estudo, os elementos de coesão se dividem em dois grupos: os anafóricos e os articuladores.”\n\nApós esta avaliação, caso queira ler integralmente esse texto, ele está em: CUNHA, S. F. da [et al]. Tecendo textos. Canoas: Ed. ULBRA, 1997. P. 7. Considerando os conteúdos do livro-base Comunicação e Expressão, identifique qual é a afirmativa correta que apresenta os elementos anafóricos.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Todo anafórico é item que ocorre pela primeira vez no texto."
        },
        {
          "letter": "B",
          "text": "Anafórico é uma categoria sintática das palavras nas frases."
        },
        {
          "letter": "C",
          "text": "Todo anafórico é uma substituição de um referente anterior."
        },
        {
          "letter": "D",
          "text": "Anafórico é como se denomina um texto incoerente."
        }
      ],
      "answer": "C",
      "explanation": "Justificativa: Verdadeira. “No estudo da coesão, nomeiam-se as substituições feitas como anafóricos. Logo, todo anafórico possui um referente anterior.” (Livro-base: Comunicação e Expressão, p. 41).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_14",
      "number": 14,
      "prompt": "“Já sabemos que a forma e a estrutura do texto escrito são essenciais para a clareza da mensagem, entretanto outros elementos também contribuem para que esse discurso seja bem-sucedido.” (LEÓN, C. B. de et al. Comunicação e expressão. Curitiba: InterSaberes, 2013. p. 37-38) Com base no trecho apresentado e nos conteúdos do livro-base Comunicação e expressão, identifique o elemento textual cujo significado está associado à ideia de “ligação e associação íntima entre as partes de um todo”.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A coerência."
        },
        {
          "letter": "B",
          "text": "A coloquialidade."
        },
        {
          "letter": "C",
          "text": "A padronização."
        },
        {
          "letter": "D",
          "text": "A coesão."
        }
      ],
      "answer": "D",
      "explanation": "A coesão textual refere-se justamente à ligação entre as partes do texto, garantindo sua fluidez e conexão interna por meio de mecanismos como conjunções, pronomes, elipses, entre outros (livro-base, p. 29).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_15",
      "number": 15,
      "prompt": "Considere a citação a seguir:\n\n“Quando falamos sempre temos um objetivo. Ninguém fala se não tem necessidade; logo, o nosso discurso é acompanhado de uma função.”\n\nApós a avaliação, caso queira ler o texto integralmente, ele se encontra no livro: LEÓN, C. B. de et al. Comunicação e expressão. Curitiba: InterSaberes, 2013, p. 29.\n\nTendo isto em mente, analise o texto a seguir:\n\n“Não permita que o sol, cansado de brilhar, se esconda sem que você tenha vivido intensamente este dia. Ouça as árvores, que em silêncio balançam suas folhas como quem sussurra segredos ao vento, e aceite o convite da noite: deixe que seu manto escuro abrace a cidade e conduza seus sonhos a dançarem sobre os telhados.”\n\nConsiderando os conteúdos apresentados no livro-base Comunicação e expressão sobre figuras de linguagem, leia as afirmações a seguir. Em seguida, assinale aquela que apresenta a função de linguagem correta sobre o texto dado.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O texto apresenta função referencial, porque traz informações objetivas sobre fenômenos da natureza."
        },
        {
          "letter": "B",
          "text": "O texto apresenta função conotativa, porque utiliza linguagem figurada com efeito expressivo e persuasivo."
        },
        {
          "letter": "C",
          "text": "O texto apresenta função metalinguística, porque traz explicações sobre a própria linguagem"
        },
        {
          "letter": "D",
          "text": "O texto apresenta função denotativa, porque traz palavras em seu sentido literal, sem figuras de linguagem."
        }
      ],
      "answer": "B",
      "explanation": "A função conotativa (ou poética) valoriza a forma da mensagem, utilizando recursos expressivos como metáforas, comparações e personificações. Além disso, o texto assume um tom imperativo e persuasivo (“Não permita que o sol...”, “Ouça as árvores...”), convidando o leitor a agir e sentir, o que reforça a intenção estética e apelativa. Isso pode ser observado no livro-base da disciplina: “Função conotativa (ou apelativa, ou imperativa). Centra-se no sujeito receptor e é eminentemente persuasória” (livro-base, p. 29).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_16",
      "number": 16,
      "prompt": "A paráfrase é um recurso linguístico amplamente utilizado na comunicação, permitindo que o mesmo conteúdo seja redito de formas variadas. Esse mecanismo possibilita interpretações, adaptações e ampliações de sentido em diferentes campos do saber, em especial quando a linguagem precisa ser ajustada a contextos diversos.\n\nAnalise o texto-base e identifique, segundo o livro Comunicação & Expressão (LEÓN et al., 2013), dois âmbitos em que a paráfrase desempenha papel fundamental.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A paráfrase é fundamental na publicidade e na propaganda, pois permite criar slogans persuasivos a partir de ideias já existentes."
        },
        {
          "letter": "B",
          "text": "A paráfrase é essencial na literatura de ficção e na poesia, onde amplia recursos expressivos e estilísticos."
        },
        {
          "letter": "C",
          "text": "A paráfrase é utilizada na política e na economia, como recurso para traduzir discursos técnicos em linguagem acessível."
        },
        {
          "letter": "D",
          "text": "A paráfrase é um recurso relevante na tradução e na psicanálise, em que assume funções interpretativas e de reformulação de sentido."
        }
      ],
      "answer": "D",
      "explanation": "O livro-base afirma literalmente: “NA TRADUÇÃO: a paráfrase acaba sendo uma das soluções [...]. NA PSICANÁLISE: [...] A glosa freudiana implica um duplo sentido [...].” (LEÓN et al., 2013, p. 106). Objeto de Conhecimento: Produção textual: mecanismos de reformulação e adaptação de sentido. Habilidade ENADE: Analisar o funcionamento de recursos linguísticos em diferentes práticas sociais de linguagem.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_17",
      "number": 17,
      "prompt": "Atente ao fragmento de texto:\n\n“Crase\n\nVeja os exemplos:\n\nDe lá para cá, os custos aumentaram muito e os times se entregaram às indústrias automobilísticas, que passaram bancar acorrida tecnológica.\n\nO menino caminha 12 quilômetros para ir à escola e voltar.\n\nNas duas palavras destacadas acontece o fenômeno que a gramática normativa chama de crase — a contração da preposição a com o artigo a (ou às, como no exemplo 1), que tanto nos faz sofrer! A crase é especificamente um problema de regência. Isto é, para saber se há ou não há crase, temos de saber se a regência da palavra anterior exige ou não a preposição a.\n\nNo português do Brasil, é também um problema exclusivo da escrita. Para os falantes brasileiros, não há rigorosamente nenhuma diferença entre o som de a, quando preposição, e o som de a, quando artigo. Esse é o primeiro motivo da dificuldade em acertar a crase — nós não ouvimos a crase! A outra razão é a distância entre a regência de muitas palavras na variedade oral da língua e a regência do padrão escrito.”\n\n(Tezza, Cristóvão e Faraco, Carlos  A. Oficina de texto. Rio de Janeiro: Vozes, 2008)\n\nDe acordo com o texto acima e o livro-base Comunicação e Expressão, assinale a alternativa que apresenta a oração em que se usa corretamente a crase:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Jonas contou à ela que irá viajar na semana que vem para Assunção."
        },
        {
          "letter": "B",
          "text": "Os professores fizeram referência às obras que serão analisadas na disciplina."
        },
        {
          "letter": "C",
          "text": "O empreiteiro foi à uma loja de material de construção para comprar chave de fenda."
        },
        {
          "letter": "D",
          "text": "Os motoristas avisaram à todos os passageiros que os ônibus iriam se atrasar."
        }
      ],
      "answer": "B",
      "explanation": "Correta, pois a oração compõe-se do substantivo referência que é regido pela preposição “a”, que funde-se ao artigo feminino a, no plural, pois concorda com o substantivo feminino no plural “obras”. (livro-base, p. 182)",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_18",
      "number": 18,
      "prompt": "Atente ao fragmento:\n\n“[...] vai sendo planejado passo a passo, evidenciando-se marcas linguísticas de sua construção espontânea [...] pela impossibilidade de sua revisão.” Após a avaliação, caso queira ler o texto integralmente, o mesmo encontra-se no livro: MOURA, D. (Org.) Os desafios da língua. Maceió: Edufal, 2008. P. 155.\n\nConforme as diferenciações estabelecidas no livro-base Comunicação & expressão, entre fala e escrita, o fragmento acima descreve e caracteriza:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O texto escrito."
        },
        {
          "letter": "B",
          "text": "O texto falado."
        },
        {
          "letter": "C",
          "text": "O texto traduzido."
        },
        {
          "letter": "D",
          "text": "O texto ditado."
        }
      ],
      "answer": "B",
      "explanation": "“FALA – Planejamento simultâneo; mostra todo o seu processo de criação; impossibilidade de apagamento [...]” (livro-base, p. 117).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_19",
      "number": 19,
      "prompt": "Atente ao trecho.\n\n“A língua falada geralmente era tida como concreta, contextual, variável e de estrutura simples, enquanto a escrita era considerada estável, sem variação, com estrutura complexa, abstrata e formal.” Após a avaliação, caso queira ler o texto integralmente, o mesmo encontra-se no livro: MOURA, D. (Org.) Os desafios da língua. Maceió: Edufal, 2008. P. 155.\n\nDe acordo com as aulas e o livro-base Comunicação & expressão, existem atividades de formulação tanto na fala quanto na escrita. Qual é a diferença?",
      "alternatives": [
        {
          "letter": "A",
          "text": "O processo de criação na escrita é visível."
        },
        {
          "letter": "B",
          "text": "A escrita é sempre uma criação coletiva."
        },
        {
          "letter": "C",
          "text": "A escrita permite interação face a face."
        },
        {
          "letter": "D",
          "text": "O texto escrito pode ser editado."
        }
      ],
      "answer": "D",
      "explanation": "De acordo com o livro-base: “A diferença é que o texto escrito pode ser editado [...].” (livro-base, p. 116).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_20",
      "number": 20,
      "prompt": "Atente ao fragmento:\n\nO aposto é “um termo que explica, identifica a palavra anterior. Não faz parte da informação principal. Por isso deve estar entre vírgulas.” Após esta avaliação, caso queira ler integralmente esse texto, ele está no livro:LEÓN, C. B. de et. al. Comunicação e expressão. Curitiba: InterSaberes, 2013. P. 177.\n\nDe acordo com o texto acima, as aulas e o livro-base Comunicação & expressão, assinale a alternativa que apresenta um uso correto do aposto:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Fernanda Torres, atriz principal do filme Ainda estou aqui, também é escritora, autora de romances e crônicas."
        },
        {
          "letter": "B",
          "text": "Venha cá, Alfredo, me traga os livros da Fernanda Torres para eu colocar na mala de viagem."
        },
        {
          "letter": "C",
          "text": "Um dos livros da atriz Fernanda Torres, cuja mãe é a Fernanda Montenegro, é A glória e o seu cortejo de horrores."
        },
        {
          "letter": "D",
          "text": "Os livros escritos pela filha de Fernanda Montenegro são o Fim, A glória e o seu cortejo de horrores e Sete anos."
        }
      ],
      "answer": "A",
      "explanation": "Correta, porque o aposto “É um termo que explica, identifica a palavra anterior.” (livro-base, p. 177), como ocorre com o termo entre vírgulas na oração acima: atriz principal do filme Ainda estou aqui, que informa e identifica quem é a Fernanda Torres.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_21",
      "number": 21,
      "prompt": "Leia o fragmento sobre paráfrase e responda.\n\n“Manipular a linguagem por meio de bom manejo linguístico e emprego de recursos os mais variados é fundamental.”\n\nApós esta avaliação, caso queira ler integralmente esse texto, ele está em: LEÓN, C. B. de et. al. Comunicação & Expressão. Curitiba: InterSaberes, 2013. P. 95.\n\nDe acordo com o livro-base Comunicação & Expressão, o que é correto dizer sobre paráfrase?",
      "alternatives": [
        {
          "letter": "A",
          "text": "A paráfrase envolve a citação direta e referenciada do texto original."
        },
        {
          "letter": "B",
          "text": "Na paráfrase, todas as hipóteses possíveis pelo texto-fonte devem ser selecionadas."
        },
        {
          "letter": "C",
          "text": "A paráfrase envolve escolhas semânticas não equivalentes do texto-fonte."
        },
        {
          "letter": "D",
          "text": "Parafrasear envolve nuances de significado a depender da paráfrase escolhida."
        }
      ],
      "answer": "D",
      "explanation": "Justificativa (correta): De acordo com o livro-base Comunicação & Expressão, no capítulo que versa sobre a paráfrase, “Este capítulo tem dois objetivos principais: promover a compreensão e a aplicação do processo de transformação de linguagem de um texto em outro, semanticamente equivalente ao texto fonte; levar a uma breve reflexão, orientada com exemplos sobre as nuanças de significado produzidas pela escolha da paráfrase empregada em cada caso.” (livro-base, pp. 95-96).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_22",
      "number": 22,
      "prompt": "Leia a seguinte citação:\n\n“Nós, brasileiros, temos que dar um jeito de tornar a língua portuguesa mais forte [...] Embora seja o idioma dos nossos ex-dominadores e colonizadores, é dela que é feita a substância da nossa alma.”\n\nApós a avaliação, caso queira ler o texto integralmente, ele se encontra no livro: LEMINISKI, P. Ensaios e anseios crípticos. Campinas: Editora da Unicamp, 2011. p. 162.\n\nIdentifique a alternativa correta, de acordo com o livro-base Comunicação e expressão, sobre concordância, crase e uso dos porquês.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O verbo é independente do sujeito, e a crase não ocorre diante de pronomes demonstrativos."
        },
        {
          "letter": "B",
          "text": "A concordância nominal envolve verbo e adjetivo, e “porquê” acentuado é advérbio invariável, já que indica o motivo de algo."
        },
        {
          "letter": "C",
          "text": "A crase é proibida antes de pronomes demonstrativos, e “porquê” só aparece em perguntas diretas, pois elas expressam uma interrogação de forma explícita."
        },
        {
          "letter": "D",
          "text": "O verbo concorda com o sujeito, a crase pode ocorrer diante de pronomes demonstrativos, e “porquê” é substantivo pluralizável."
        }
      ],
      "answer": "D",
      "explanation": "“A REGRA GERAL de concordância verbal estabelece que o verbo concorda com o sujeito em número e pessoa.” (livro-base, p.158); “Diante dos pronomes demonstrativos ‘aquele’, ‘aquela’ e ‘aquilo’, pode ocorrer a crase.” (livro-base, p.183); “PORQUÊ – Equivale a um substantivo [...] e pode ser pluralizado.” (livro-base, p.187).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_23",
      "number": 23,
      "prompt": "Resumos e resenhas são gêneros textuais fundamentais para a produção acadêmica, pois possibilitam a síntese de ideias e a avaliação crítica de obras. O resumo pode ser indicativo ou informativo/crítico, enquanto a resenha pode ser descritiva ou crítica, cada qual com finalidades comunicativas distintas.\n\nAnalise as características dos gêneros resumo e resenha, segundo o livro Comunicação e Expressão (LEÓN et al., 2013), e identifique a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O resumo indicativo apresenta apenas os pontos principais do texto, sem dados qualitativos ou quantitativos, enquanto o resumo informativo ou crítico informa o leitor de forma mais global sobre o texto original."
        },
        {
          "letter": "B",
          "text": "O resumo indicativo informa de forma global sobre o texto, enquanto o resumo informativo ou crítico restringe-se a apresentar pontos principais sem dados qualitativos."
        },
        {
          "letter": "C",
          "text": "A resenha descritiva contém apreciações e julgamentos críticos do autor, enquanto a resenha crítica se limita a descrever brevemente o conteúdo da obra."
        },
        {
          "letter": "D",
          "text": "Tanto o resumo indicativo quanto a resenha crítica possuem a mesma função: sintetizar informações de forma breve e sem apreciações."
        }
      ],
      "answer": "A",
      "explanation": "O livro-base afirma: “INDICATIVO [Resumo de textos]: apresenta apenas os pontos principais do texto, sem dados qualitativos ou quantitativos. [...] INFORMATIVO OU CRÍTICO [Resumo de textos]: informa o leitor de forma mais global sobre o texto original.” (LEÓN et al., 2013, p. 135).\n\nObjeto de Conhecimento: Gêneros acadêmicos: resumo e resenha. Habilidade ENADE: Distinguir funções e características de gêneros textuais no contexto acadêmico.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_24",
      "number": 24,
      "prompt": "Considere a seguinte citação:\n\n“A redação é um excelente instrumento para desenvolver a criatividade; seu hábito leva à organização do pensamento e ao desenvolvimento da expressão linguística.”\n\nApós a avaliação, caso queira ler o texto integralmente, ele se encontra no livro: LEÓN, C. B. de et al. Comunicação e expressão. Curitiba: InterSaberes, 2013, p. 72.\n\nAnalise as afirmações sobre a transformação da fala em escrita e sobre os gêneros resumo e resenha, conforme o livro-base Comunicação e expressão. Na sequência, assinale a alternativa que apresenta a afirmações correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O texto escrito tende a mostrar todo o processo de criação, enquanto a fala apresenta apenas o resultado."
        },
        {
          "letter": "B",
          "text": "O resumo é uma apreciação subjetiva sobre um texto, enquanto a resenha apresenta uma síntese objetiva do conteúdo."
        },
        {
          "letter": "C",
          "text": "A hesitação na fala indica que a linguagem oral é construída de forma planejada e definitiva."
        },
        {
          "letter": "D",
          "text": "A resenha é uma apreciação subjetiva sobre um texto, enquanto o resumo é a apresentação abreviada do conteúdo"
        }
      ],
      "answer": "D",
      "explanation": "Segundo o livro-base: “Resenha – É uma apreciação subjetiva sobre um texto, um objeto [...]” (p. 142) e “[...] um resumo é a apresentação abreviada do conteúdo de um texto, de um livro [...]” (p. 133).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_25",
      "number": 25,
      "prompt": "“A secretária escreve relatórios claros e sucintos. Relatórios claros e sucintos são escritos pela secretária.”\n\nApós a avaliação, caso queira ler o texto integralmente, o mesmo encontra-se no livro: LEÓN, C. B. de et. al. Comunicação e expressão. Curitiba: InterSaberes, 2013. p. 98.\n\nIdentifique o procedimento de paráfrase utilizado na segunda frase do trecho, segundo o livro-base Comunicação & expressão.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O procedimento utilizado foi o emprego de sinônimos, substituindo palavras por outras de mesmo campo semântico. Falsa. Não houve substituição lexical, mas transformação estrutural entre ativa e passiva."
        },
        {
          "letter": "B",
          "text": "O procedimento utilizado foi o uso de expressões equivalentes, reformulando a sentença por meio de termos alternativos. Falsa. O trecho não apresenta reformulação de termos, mas mudança da estrutura da voz verbal."
        },
        {
          "letter": "C",
          "text": "O procedimento utilizado foi a inversão de elementos, alterando a ordem sintática sem modificar a voz verbal. Falsa. A mudança não se restringe à ordem dos elementos, mas ao tipo de voz da oração."
        },
        {
          "letter": "D",
          "text": "O procedimento utilizado foi a passagem da voz ativa para a voz passiva, mantendo o mesmo sentido semântico do enunciado."
        }
      ],
      "answer": "D",
      "explanation": "Verdadeira. O livro-base comenta: “Passagem da voz ativa para a voz passiva.” (p. 99). Objeto de conhecimento: Produção de texto: estratégias de reescrita. Habilidade: Reconhecer a paráfrase como procedimento de transformação estrutural que mantém equivalência de sentido.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_26",
      "number": 26,
      "prompt": "A fala e a escrita são modalidades distintas do sistema linguístico, mas ambas expressam intenções comunicativas. Cada uma possui características próprias quanto à interação, ao planejamento, à revisão e ao processo de criação textual.\n\nAnalise as características da fala e da escrita, de acordo com o livro Comunicação e Expressão (LEÓN et al., 2013), e identifique a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A fala envolve interação face a face e planejamento anterior à produção, enquanto a escrita se caracteriza por planejamento simultâneo e impossibilidade de revisão."
        },
        {
          "letter": "B",
          "text": "A fala se realiza com interação face a face, planejamento simultâneo, impossibilidade de apagamento e exibição do processo de criação, enquanto a escrita ocorre a distância, com planejamento anterior, possibilidade de revisão e ocultação do processo de criação."
        },
        {
          "letter": "C",
          "text": "Tanto a fala quanto a escrita apresentam interação a distância, sendo ambas planejadas simultaneamente e exibindo o processo de criação de forma explícita."
        },
        {
          "letter": "D",
          "text": "A fala ocorre a distância, com planejamento anterior e possibilidade de revisão, enquanto a escrita ocorre face a face, exibindo o processo de criação de forma espontânea."
        }
      ],
      "answer": "B",
      "explanation": "O livro-base afirma: “FALA – Interação face a face. ESCRITA – Interação a distância (espaçotemporal). FALA – planejamento simultâneo ou quase simultâneo à produção. ESCRITA – Planejamento anterior à produção. [...] FALA – Impossibilidade de apagamento. ESCRITA – Possibilidade de revisão. [...] FALA – O texto mostra todo o processo de criação. ESCRITA – O texto tende a esconder o seu processo de criação, mostrando apenas o resultado.” (LEÓN et al., 2013, p. 117).\n\nObjeto de Conhecimento: Diferenças entre fala e escrita. Habilidade ENADE: Identificar características linguísticas das modalidades oral e escrita em diferentes contextos comunicativos.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_27",
      "number": 27,
      "prompt": "Leia o fragmento do poema de Drummond:\n\nJosé [José]Carlos Drummond de Andrade\n\nE agora, José?\n\nA festa acabou,\n\na luz apagou,\n\no povo sumiu,\n\na noite esfriou,\n\ne agora, José?\n\ne agora, você?\n\nvocê que é sem nome,\n\nque zomba dos outros,\n\nvocê que faz versos,\n\nque ama, protesta?\n\ne agora, José?\n\n....................................\n\n(Andrade, C. Drummond de. E agora, José? In: Poesia até agora. Rio de Janeiro: José Olympio, 1948.)\n\nNo verso E agora, José?, de Drummond, o fragmento “, José?”, que se repete no poema, é uma estrutura criada pela posição da vírgula em combinação com os demais termos da oração. De acordo com o livro-base  Comunicação & expressão, essa estrutura “, José?” é chamada de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "aposto"
        },
        {
          "letter": "B",
          "text": "vocativo"
        },
        {
          "letter": "C",
          "text": "oração relativa"
        },
        {
          "letter": "D",
          "text": "Enumeração"
        }
      ],
      "answer": "B",
      "explanation": "Correta, pois a referência a José se configura em uma interpelação, um chamamento em forma de pergunta: “É um chamamento. Quando queremos começar um discurso, chamar alguém a nossa fala [...]. Não importa em que posição esteja na frase, deve ser sempre marcado por uma vírgula.” (livro-base, p. 177).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_28",
      "number": 28,
      "prompt": "Leia o texto a seguir:\n\nO verbo haver no sentido dos verbos pessoais existir, ocorrer, acontecer sempre aparece no singular independentemente de estar acompanhado de expressões no plural ou não e do tempo verbal em que esteja sendo usado (presente, passado ou futuro). Isso se deve a sua condição de verbo impessoal, ou seja, de um verbo que não tem sujeito. Por essa razão, em uma oração como esta: “Havia problemas com a rigidez dos investimentos de capital fixo de larga escala.\" (HARVEY, D. Condição pós-moderna. São Paulo: Loyola, 2007. P. 135.), o verbo haver fica no singular, apesar de ser seguido pela palavra “problemas”.\n\n[Fonte: Texto do autor da questão]\n\nDe acordo com o texto acima, as aulas e o livro-base Comunicação & expressão, assinale a alternativa que apresenta corretamente o uso dos verbos haver e existir",
      "alternatives": [
        {
          "letter": "A",
          "text": "Houveram muitos acidentes nesta estrada. Isso ocorreu porque existiam muitos problemas de sinalização."
        },
        {
          "letter": "B",
          "text": "Há muitos estudantes sendo convocados para participarem do Enade. Existe requisitos que definem quem deve e quem não deve fazer o Exame."
        },
        {
          "letter": "C",
          "text": "Havia poucos jogadores em condição de disputar a final do campeonato. No campeonato anterior, existiam atletas em melhores condições"
        },
        {
          "letter": "D",
          "text": "Haverão novas sessões de julgamento dos réus esta semana. Não existe mais possibilidades de adiamentos agora."
        }
      ],
      "answer": "C",
      "explanation": "Correta, porque o verbo haver está corretamente flexionado no singular, pois tem o sentido de existir; assim como o verbo existir está corretamente flexionado no plural pois o sujeito dele é “atletas em melhores condições”. Conforme o livro-base: “Verbo haver (impessoal) – Verbo haver indicando existência 3ª. pessoa do singular. – Há (existir) muitas crianças na rua.” (livro-base, p. 159).",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_29",
      "number": 29,
      "prompt": "“Foi um amigável acerto de contas, graças ao qual o Brasil talvez não precise mais caminhar para o século XXI empunhando como novidade as ideias de uma geração biologicamente concebida meio século atrás. (Texto adaptado de A Sucessão, Revista Veja 25 anos)”\n\n“O jovem moderno talvez não tenha, graças a um amigável acerto de contas, a necessidade de olhar o futuro considerando como novidade, em pleno século XXI, as ideias de uma geração biologicamente concebida meio século antes.”\n\nApós a avaliação, caso queira ler o texto integralmente, o mesmo encontra-se no livro: LIMA, A. O. Redação essencial para concursos. Rio de Janeiro: Elsevier, 2011. pp. 47-48. Identifique o procedimento de produção textual exemplificado nos trechos, segundo o livro-base Comunicação e expressão.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Os trechos exemplificam o planejamento, etapa inicial da escrita em que se organizam ideias antes da redação do texto. Falsa. O planejamento é prévio à produção textual e não envolve transformação de um texto em outro semanticamente equivalente."
        },
        {
          "letter": "B",
          "text": "Os trechos exemplificam a delimitação, processo de recorte temático para definir os limites de abordagem do texto. Falsa. A delimitação refere-se à escolha e restrição temática, não à reformulação de linguagem."
        },
        {
          "letter": "C",
          "text": "Os trechos exemplificam a paráfrase, procedimento em que um texto é reescrito com outras palavras, mantendo equivalência de sentido com o texto-fonte."
        },
        {
          "letter": "D",
          "text": "Os trechos exemplificam a paródia, recurso de recriação textual em que há alteração semântica, geralmente com intenção crítica ou humorística. Falsa. Não há modificação de sentido, mas preservação semântica, o que caracteriza a paráfrase."
        }
      ],
      "answer": "C",
      "explanation": "Verdadeira. O livro-base afirma: “[...] A paráfrase [...] processo de transformação de linguagem de um texto em outro, semanticamente equivalente ao texto-fonte; [...].” (pp. 93-96). Objeto de conhecimento: Produção de texto: estratégias de reescrita. Habilidade: Reconhecer a paráfrase como procedimento de transformação textual que preserva o sentido original.",
      "source": "Produção Textual – Material de apoio."
    },
    {
      "id": "q15_30",
      "number": 30,
      "prompt": "“[...] processo de transformação de linguagem de um texto em outro, semanticamente equivalente ao texto-fonte; [...].”\n\nApós a avaliação, caso queira ler o texto integralmente, o mesmo encontra-se no livro: LEÓN, C. B. de et. al. Comunicação e expressão. Curitiba: InterSaberes, 2013. pp. 95-96. Identifique o procedimento de produção textual definido no fragmento, segundo o livro-base Comunicação e expressão.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O fragmento refere-se ao planejamento, etapa inicial em que se organizam ideias e objetivos do texto. Falsa. O planejamento diz respeito à organização prévia da escrita, não à transformação de um texto em outro semanticamente equivalente."
        },
        {
          "letter": "B",
          "text": "O fragmento refere-se à delimitação, processo de recorte temático para a produção textual. Falsa. A delimitação relaciona-se à escolha e restrição do tema, não à reescrita com equivalência semântica."
        },
        {
          "letter": "C",
          "text": "O fragmento refere-se à paródia, recurso de recriação textual em que há transformação semântica, frequentemente com caráter crítico ou humorístico. Falsa. A paródia pressupõe alteração de sentido, e não equivalência semântica com o texto-fonte."
        },
        {
          "letter": "D",
          "text": "O fragmento refere-se à paráfrase, procedimento que consiste em transformar a linguagem de um texto em outro, preservando sua equivalência de sentido."
        }
      ],
      "answer": "D",
      "explanation": "Verdadeira. O livro-base afirma: “[...] A paráfrase [...] processo de transformação de linguagem de um texto em outro, semanticamente equivalente ao texto-fonte; [...].” (pp. 93-96). Objeto de conhecimento: Produção de texto: estratégias de reescrita. Habilidade: Identificar procedimentos de transformação textual que mantêm equivalência de sentido.",
      "source": "Produção Textual – Material de apoio."
    }
  ]
};

const AULA16 = {
  "id": "aula16",
  "title": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena",
  "shortTitle": "Relações Étnico-raciais",
  "description": "História e cultura africana, afro-brasileira e indígena, racismo e identidade no Brasil.",
  "accent": "#9a3412",
  "icon": "🌍",
  "total": 30,
  "passingScore": 21,
  "questions": [
    {
      "id": "q16_1",
      "number": 1,
      "prompt": "Leia o trecho de texto:\n\n\"A mestiçagem, como pensamento brasileiro, seja na sua forma biológica (miscigenação), seja na sua forma cultural (sincretismo cultural), objetivava a continuação de uma sociedade monoétnica e monocultural\".\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: LIMA, Maria Batista. Identidade Étnico/Racial no Brasil: uma reflexão teórico-metodológica. Itabuna: Fórum Identidades: 2008.\n\nDada a citação acima e os conteúdos da Rota de Aprendizagem da aula 3, Tema 2 – Harmonia nas relações, um legado Freyriano, responda: como a concepção de Freyre sobre a mestiçagem é entendida:",
      "alternatives": [
        {
          "letter": "A",
          "text": "O trânsito entre dois universos de sociabilidades, o rural e o urbano, por vezes antagônicos."
        },
        {
          "letter": "B",
          "text": "Elemento definidor de posturas/comportamentos destoantes da Europa em relação aos trópicos."
        },
        {
          "letter": "C",
          "text": "A dimensão “democrática” nas relações entre os diferentes tipos sociais no Brasil."
        },
        {
          "letter": "D",
          "text": "A tríade personalismo, familismo, privatismo que sustentava a pirâmide social patriarcal."
        }
      ],
      "answer": "C",
      "explanation": "Comentário: A resposta correta é a letra C. Apesar de no Brasil sempre ter existido uma problematização em relação à harmonia das raças notamos que “há na percepção de Freyre o enaltecer da dimensão “democrática” nas relações entre os diferentes tipos sociais no Brasil, no entendimento de que haveria mais “harmonia” e menor grau de conflito pela forma peculiar da colonização ocorrida nos trópicos, especialmente sob a égide da colonização portuguesa” (Rota de aprendizagem da aula 3, p. 4).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_2",
      "number": 2,
      "prompt": "Leia o fragmento de texto:\n\n\"Em  Casa Grande & Senzala, Freyre expôs  de forma descritiva a história do universo  agrário do Nordeste brasileiro, que tinha como base da economia as grandes plantações\".\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio;LIMA, Silvia Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 7-141, 2015. p. 54.\n\nConsiderando o fragmento do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, identifique e assinale corretamente a  alternativa que  aponta qual  foi a grande plantação que se utilizava do modo de produção escravista.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Plantação de arroz."
        },
        {
          "letter": "B",
          "text": "Plantação de café."
        },
        {
          "letter": "C",
          "text": "Plantação de cana-de-açúcar."
        },
        {
          "letter": "D",
          "text": "Plantação de milho."
        }
      ],
      "answer": "C",
      "explanation": "Comentários: conforme o livro-base a resposta correta, \"em   Casa Grande & senzala, Freyre expôs  de forma descritiva a história do universo  agrário do Nordeste brasileiro, que tinha como base da economia as grandes plantações de cana-de-açúcar, que se utilizava do modo de produção escravista  . .( livro-base, p.55)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_3",
      "number": 3,
      "prompt": "Leia o fragmento de texto:\n\n“Como analisa Maria Aparecida Silva Bento [...], essa apropriação simbólica de superioridade acabou sendo legitimada na supremacia econômica, política e social dos brancos, vivenciada ao decorrer de décadas. A autora ainda ressalta que outro aspecto dessa apropriação foi a construção de uma imagem estereotipada e estigmatizada do negro, dando-lhe sempre características negativas”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silvia Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 43-45, 2015. p. 44.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, identifique e assinale corretamente a alternativa que, de acordo com Maria Aparecida Silva Bento, mostra os dois aspectos analisados na construção de dominação simbólica do branco.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Depressão e carnavalização."
        },
        {
          "letter": "B",
          "text": "Solidão e silêncio."
        },
        {
          "letter": "C",
          "text": "Entusiasmo e medo."
        },
        {
          "letter": "D",
          "text": "Silêncio e medo."
        }
      ],
      "answer": "D",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se a “dois aspectos interessantes analisados por Bento (2002) são o silêncio e o medo na construção de denominação simbólica do branco”. (texto-base, p. 44)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_4",
      "number": 4,
      "prompt": "Considere o extrato de texto:\n\n“Os eugenistas previam que o branqueamento ocorreria tanto por meio da 'seleção natural' quanto do processo imigratório, [...]”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio;LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 39-43, 2015. p. 42.\n\nConsiderando o extrato de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, na sociedade brasileira, assinale a alternativa que aborda corretamente a questão do branqueamento.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O branqueamento ajudou a superar as desigualdades raciais."
        },
        {
          "letter": "B",
          "text": "O branqueamento eliminou o critério de cor nos levantamentos da população brasileira."
        },
        {
          "letter": "C",
          "text": "O branqueamento favoreceu o poderio patrimonial-escravista."
        },
        {
          "letter": "D",
          "text": "O branqueamento serviu para defender o fim dos preconceitos."
        }
      ],
      "answer": "C",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se ao “O incentivo ao ideário do branqueamento trazia em seu bojo um suporte ideológico para a manutenção do poderio patrimonial-escravista”. (texto-base, p. 42)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_5",
      "number": 5,
      "prompt": "Leia o fragmento de texto:\n\n“Os princípios constitucionais já inicialmente acenaram como possibilidades de avanços na luta contra o racismo. A formalidade legal estabeleceu o princípio da tolerância e do multiculturalismo”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 71-85, 2015. p. 75.\n\nConsiderando o fragmento de texto e os conteúdos  do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que identifica corretamente o princípio legal fundamental para a consolidação das leis antirracistas.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Princípio da tolerância e do multiculturalismo"
        },
        {
          "letter": "B",
          "text": "Princípio dos Deveres Constitucionais."
        },
        {
          "letter": "C",
          "text": "Princípio dos Saberes e direitos."
        },
        {
          "letter": "D",
          "text": "Princípio da Tolerância e comodidade."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se,  “A formalidade legal estabeleceu o princípio da tolerância e do multiculturalismo e foram reconhecidos direitos e identidades, condição importante para alicerçar outras leis antirracistas nas demais esferas jurídicas (Telles, 2003). (texto-base, p. 75).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_6",
      "number": 6,
      "prompt": "Considere o fragmento de texto:\n\n“A partir da década de 1870, tendências científicas europeias adentraram com intensidade no Brasil. Assim, com base no que se tinha de mais moderno à época - as ideias positivistas, liberais, evolucionistas e raciais [...]”\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 39-43, 2015. p.40.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, sobre a teoria do branqueamento, assinale a alternativa que aponta corretamente o pensamento defendido por intelectuais brasileiros:",
      "alternatives": [
        {
          "letter": "A",
          "text": "A raça branca é superior às demais."
        },
        {
          "letter": "B",
          "text": "O branqueamento torna a sociedade inferior."
        },
        {
          "letter": "C",
          "text": "A herança hereditária cria a igualdade social."
        },
        {
          "letter": "D",
          "text": "A raça branca é inferior mas trabalha mais."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se “Acreditava-se que o desejado branqueamento seria uma questão de tempo, pois, como o casamento de pessoas de pele clara com as pessoas de pele negra, as futuras gerações poderiam enfim superar a 'inferioridade', condição representada pelas pessoas de pele negra. Preconizava-se, então, que, em futuras gerações, predominaria a cor branca 'superior'”. (texto-base, p. 40)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_7",
      "number": 7,
      "prompt": "Considere o extrato de texto:\n\n\"[...] o movimento indígena no Brasil defende uma autonomia com base na emancipação política, econômica e social em busca da superação da precariedade e da exploração a que foram submetidos os povos indígenas [...]\". Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio;LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 24-28, 2015. p.28.\n\nConsiderando o extrato de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que apresenta corretamente o sentido dessa autonomia.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Ser cidadão brasileiro, envolvido em todo o sistema político, econômico e social do país."
        },
        {
          "letter": "B",
          "text": "Incentivar intensamente as uniões matrimoniais inter-raciais."
        },
        {
          "letter": "C",
          "text": "Enfrentar conflitos causados pela tentativa de utilização da mão de obra escrava."
        },
        {
          "letter": "D",
          "text": "Preservar as ideias apoiadas pelos jesuítas com relação às missões cristãs."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se, “A autonomia nesse sentido simboliza, pois, ser cidadão brasileiro, envolvido em todo o sistema político, econômico e social do país, além de obter as condições próprias necessárias para a conservação da sua história e das suas mais diversificadas culturas”. (texto-base, p. 28)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_8",
      "number": 8,
      "prompt": "Considere o extrato de texto:\n\n“[...] Cesare Lombroso, pesquisador que se tornou famoso por medir o crânio para identificar a capacidade e o grau de inteligência dos humanos”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 37-38, 2015. p.38.\n\nConsiderando o extrato de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, identifique a alternativa que aponta corretamente o professor brasileiro que adotava os métodos de Cesare.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Raimundo Nina Rodrigues."
        },
        {
          "letter": "B",
          "text": "Arthur Gobineau."
        },
        {
          "letter": "C",
          "text": "Miguel Lemos."
        },
        {
          "letter": "D",
          "text": "João Batista Lacerda."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se a Raimundo Nina Rodrigues. “No Brasil, no ano de 1880, na Escola de Medicina da Bahia, o professor realizou um estudo sobre a influência de Cesare Lombroso”. (texto-base, p. 38)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_9",
      "number": 9,
      "prompt": "Considere o fragmento de texto:\n\n“Florestan Fernandes, entre outros, foi o pesquisador brasileiro nomeado para desenvolver a pesquisa com um grupo de estudiosos estrangeiros. As conclusões do levantamento causaram surpresa, pois foram frontalmente contrárias à teoria de Freyre (1933), que apontava para uma harmonia ou democracia racial”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio;LIMA, Silvia Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 53-59, 2015. p. 58.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que indica corretamente a forma que se apresentava o racismo na sociedade brasileira segundo Florestan Fernandes.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Horizontalmente, em que o negro era incluído nas relações de trabalho, o que resultava em grande igualdade social."
        },
        {
          "letter": "B",
          "text": "Igualitariamente, pois o Brasil estava isento do racismo que assolava os outros países."
        },
        {
          "letter": "C",
          "text": "Defensivamente, pois os liberais protegiam os negros das ações paternalistas e do clientelismo."
        },
        {
          "letter": "D",
          "text": "Verticalmente, em que o negro era excluído das relações de trabalho e de desenvolvimento humano."
        }
      ],
      "answer": "D",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta é esta porque “[...] Fernandes (2004) dizia que as formas dessa relação eram verticalizadas, em que o negro era excluído das relações de trabalho e de desenvolvimento humano, privação que resultava em grande desigualdade social”. (texto-base, p. 59)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_10",
      "number": 10,
      "prompt": "Leia o extrato de texto:\n\n\"A visão estereotipada de que o índio é incapaz de conviver com a sociedade autodenominada civilizada fez com que  se instaurasse um sistema paternalista  de tutela segundo o qual, ao ser visto como um ser incapaz , o índio  teria de ser protegido, abrigado. Assim foram implantadas políticas públicas\".\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 7-141, 2015. p. 24. Considerando o extrato de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, sobre  as políticas públicas, identifique e assinale corretamente a alternativa que apresenta o significado da sigla  FUNAI.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Serviço de Proteção  ao Índio."
        },
        {
          "letter": "B",
          "text": "Serviço de Proteção aos Índios e Localização de Trabalhadores Nacionais."
        },
        {
          "letter": "C",
          "text": "Fundação Nacional dos Povos Indígenas."
        },
        {
          "letter": "D",
          "text": "Fundação Nacional do Aldeamento Jesuíta."
        }
      ],
      "answer": "C",
      "explanation": "Comentários: A partir da reivindicação histórica dos povos indígenas, a Fundação Nacional do Índio (Funai) teve o nome alterado para Fundação Nacional dos Povos Indígenas — a sigla permanece a mesma. A mudança, feita por meio de medida provisória publicada no Diário Oficial da União (DOU) em 01/01/2023 foi uma reivindicação dos Povos Indígenas.",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_11",
      "number": 11,
      "prompt": "Leia o fragmento de texto:\n\n“[...] os índios eram persuadidos  a procurar a proteção dos postos  indígenas criados pelo órgão, pois dessa forma poderiam ter contato com o idioma português, bem como homens e  mulheres indígenas aprenderiam certos ofícios comuns aos civilizados [...]”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, 2015. p. 25.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, em relação à questão de terras, qual a função do Serviço de Proteção ao Índio (SPI)? Assinale a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Função  de alfabetizar os indígenas."
        },
        {
          "letter": "B",
          "text": "Função de liberar terras."
        },
        {
          "letter": "C",
          "text": "Função de ensinar  a  trabalhar."
        },
        {
          "letter": "D",
          "text": "Função de  transmitir  a cultura dos portugueses."
        }
      ],
      "answer": "B",
      "explanation": "Comentários: conforme o livro-base  a resposta correta, \"a criação do SPI, com a função de liberar terras, para tanto, os índios eram persuadidos  a procurar a proteção dos postos  indígenas criados pelo órgão, pois dessa forma poderiam ter contato com o idioma português, bem como homens e  mulheres indígenas aprenderiam certos ofícios comuns aos civilizados\".(livro-base, 25)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_12",
      "number": 12,
      "prompt": "Considere o extrato de texto:\n\n“No plano religioso, os jesuítas constataram que os índios, habitantes da nova terra, não seguiam nenhuma religião conhecida à época, razão por que eram considerados um povo pagão”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silvia Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 18-20, 2015. p.19.\n\nTendo em vista o extrato de texto e os conteúdos do livro-base  Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil,  sobre a guerra justa, identifique a alternativa que aponta um dos defensores desse método:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Santo Agostinho."
        },
        {
          "letter": "B",
          "text": "São João Batista."
        },
        {
          "letter": "C",
          "text": "Hugo Grotius."
        },
        {
          "letter": "D",
          "text": "Papa João 23."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se, a Santo Agostinho e São Tomás de Aquino, segundo os quais deveria-se “guerrear quando havia resistência às missões cristãs”. (texto-base, p. 19)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_13",
      "number": 13,
      "prompt": "Leia o fragmento de texto:\n\n“Segundo Munanga (2008), Freyre teve sua parcela de participação na construção da identidade negra brasileira ao mostrar que negros, índios e mestiços trazem contribuições positivas [...]\".\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silvia Maria Amorim.  Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 53-58, 2015. p. 55.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, Gilberto Freyre defendeu uma ideia de democracia peculiar. Assinale a alternativa que apresenta o nome dessa democracia.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Democracia nacional."
        },
        {
          "letter": "B",
          "text": "Democracia partidária."
        },
        {
          "letter": "C",
          "text": "Democracia racial."
        },
        {
          "letter": "D",
          "text": "Democracia estatal."
        }
      ],
      "answer": "C",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se a “ ideia  da democracia racial, expressão já existente e da qual Freyre se apropriou para consolidar sua teoria.”. (texto-base, p. 56)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_14",
      "number": 14,
      "prompt": "Considere o fragmento de texto:\n\n“Surgiu em um contexto de recessão, que provocou o início de um deslocamento populacional da zona rural para as grandes cidades motivado pela procura de emprego”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silvia Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 53-63, 2015. p. 60.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que indica corretamente o movimento dedicado em defesa da população negra que surgiu em 16 de setembro de 1931.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Frente Negra Brasileira."
        },
        {
          "letter": "B",
          "text": "Movimento Negro Unificado."
        },
        {
          "letter": "C",
          "text": "Conselho de Participação da Comunidade Negra."
        },
        {
          "letter": "D",
          "text": "Instituto de Pesquisa das Culturas Negras."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se a Frente Negra Brasileira  ( FNB), “fundada em 16 de setembro de 1931”. (texto-base, p. 61)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_15",
      "number": 15,
      "prompt": "Leia a passagem de texto a seguir:\n\n“Franz Joseph Gall (1758 – 1828). Trata-se de um nome mais conhecido dentre os pseudocientistas que exerciam a frenologia, pois o seu pensamento teve ampla adesão no regime nazista como fundamentação para extermínio dos povos judeus”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: VAZ, Jeferson da Costa. Rota de Aprendizagem da Aula 2.  Branqueamento no Brasil e as teorias higienistas. Curitiba: Intersaberes, 2023.p.09.\n\nDe acordo com a passagem de texto e os conteúdos da Aula 2, Videoaula do Tema - Branqueamento no Brasil e as teorias higienistas: a instituição do racismo na sociedade brasileira, sobre o conceito de frenologia desenvolvido por Gall, é correto afirmar que:",
      "alternatives": [
        {
          "letter": "A",
          "text": "É um discurso ou texto que defende, justifica ou elogia alguma doutrina, ação ou obra."
        },
        {
          "letter": "B",
          "text": "Área de estudo das ciências humanas que investiga as origens e as características do ser humano de maneira mais abrangente possível."
        },
        {
          "letter": "C",
          "text": "A partir dos aspectos cognitivo e ideológico compreende o comportamento interativo das pessoas."
        },
        {
          "letter": "D",
          "text": "Campo de estudo que buscava compreender as condutas humanas a partir da análise do formato do crânio."
        }
      ],
      "answer": "D",
      "explanation": "A letra D é a opção correta pois, de acordo com a videoaula 2, tema - Branqueamento no Brasil e as teorias higienistas: a instituição do racismo na sociedade brasileira, a frenologia é “um campo de estudo, segundo o qual, buscava compreender as condutas dos seres humanos a partir da análise do crânio, ou seja, a frenologia se propunha como ciência, fazer uma análise do formato do crânio humano para compreender se a conduta deste era aceitável ou inaceitável para o bem estar social”. (Videoaula 2, min. 07’22).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_16",
      "number": 16,
      "prompt": "Considere o fragmento de texto:\n\n“No âmbito da legislação, vale destacar que, com a aprovação da Lei n. 12.288, de 20 de julho de 2010 (Brasil, 2010), houve a institucionalização do Estatuto da Igualdade Racial, o qual regulamentou políticas de ações afirmativas para a população negra [...]”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 71-85, 2015. p. 83.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que identifica corretamente o sistema que prevê a articulação entre os órgãos federais ligados às políticas de promoção da igualdade racial.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Sistema de Integração Governamental Racial."
        },
        {
          "letter": "B",
          "text": "Sistema Nacional de Promoção da Igualdade Racial."
        },
        {
          "letter": "C",
          "text": "Sistema Municipal de Cotas para a População Trabalhadora e Indígena."
        },
        {
          "letter": "D",
          "text": "Sistema Nacional de Divulgação de Bolsas de Permanência."
        }
      ],
      "answer": "B",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se ao “[...] Sistema Nacional de Promoção da Igualdade Racial, que prevê a articulação dos diferentes entes federados[...]”. (texto-base, p. 83).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_17",
      "number": 17,
      "prompt": "Leia o extrato de texto:\n\n“[...] conhecido como marco histórico para o desenvolvimento de políticas de ações afirmativas no cenário político brasileiro”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, 2015. p. 76.\n\nConsiderando o extrato de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, qual foi o evento promovido pela Organização das Nações Unidas (ONU) que fortaleceu a criação de políticas afirmativas no Brasil? Assinale a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Conferência de Joanesburgo."
        },
        {
          "letter": "B",
          "text": "Conferencia de Dublin."
        },
        {
          "letter": "C",
          "text": "Conferência de Drakensberg."
        },
        {
          "letter": "D",
          "text": "Conferência de Durban."
        }
      ],
      "answer": "D",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se  “A Conferência de Durban foi um evento internacional promovido pela Organização das Nações Unidas (ONU) que ficou conhecido como marco histórico para o desenvolvimento de políticas de ações afirmativas no cenário político brasileiro\" (livro-base, p. 75-76).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_18",
      "number": 18,
      "prompt": "Leia o  fragmento de texto:\n\n“Historicamente, podemos encontrar algumas ações governamentais com características de ações afirmativas, nas quais o governo intervém para minimizar problemas sociais e responder a questões conturbadas do mercado de trabalho”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 71-85, 2015. p. 73.\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil sobre as ações afirmativas, assinale corretamente a alternativa que identifica o objetivo dessa política.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Promover a igualdade para consolidar o processo democrático, garantindo a diversidade e a pluralidade social."
        },
        {
          "letter": "B",
          "text": "Redefinir o mercado de trabalho a fim de garantir o processo aristocrático, com enfoque na  diversidade e pluralidade individual."
        },
        {
          "letter": "C",
          "text": "Identificar que nenhum afro-brasileiro obtenha a reivindicação para integrar a Guarda Civil."
        },
        {
          "letter": "D",
          "text": "Consolidar o processo democrático por meio da segregação das etnias e gêneros diferentes."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se “O objetivo das políticas de ações afirmativas é antecipar o movimento de equalização que dê condições de assegurar o processo democrático, no in tento de afiançar a diversidade e a pluralidade social (Piovesan, 2005). Esclarecemos que igualdade é aqui considerada como pautada no respeito à diferença e à diversidade. (texto-base, p. 73)",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_19",
      "number": 19,
      "prompt": "Leia o fragmento de texto:\n\n“Durante esse debate, alguns contrários foram convencidos da necessidade da implantação das cotas, e outros preferiram continuar com suas 'velhas opiniões formadas'. Várias universidades, utilizando-se da autonomia que a lei lhes concede, decidiram adotar o sistema de cotas”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 71-85, 2015. p. 80.\n\nConsiderando o fragmento de texto e os conteúdos  do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que aponta corretamente a primeira Universidade Federal que contemplou o sistema de cotas.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Universidade de Brasília (UnB)."
        },
        {
          "letter": "B",
          "text": "Universidade Federal do Paraná (UFPR)."
        },
        {
          "letter": "C",
          "text": "Universidade Federal do Rio de Janeiro (UFRJ)."
        },
        {
          "letter": "D",
          "text": "Universidade Federal de Pernambuco (UFPE)."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se “A primeira foi a Universidade de Brasília (UnB)”.  (texto-base, p. 78).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_20",
      "number": 20,
      "prompt": "Considere o fragmento de texto:\n\n“A relação entre identidade e igualdade pode ser percebida sob vários pontos de vistas. Em primeiro lugar, a construção da identidade dos sujeitos pressupõe um processo de práticas e modos de viver e agir coletivos”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 91-108, 2015. p. 96-97 .\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, à oposição ao individualismo exige uma identificação das pessoas com...",
      "alternatives": [
        {
          "letter": "A",
          "text": "a subjetividade humana"
        },
        {
          "letter": "B",
          "text": "a coletividade abstrata."
        },
        {
          "letter": "C",
          "text": "a individualidade absoluta."
        },
        {
          "letter": "D",
          "text": "a coletividade humana."
        }
      ],
      "answer": "D",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se a “[...] busca pelo igual se apresenta em oposição ao individualismo e exige uma identificação das pessoas com uma coletividade humana”. (texto-base, p. 96-97).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_21",
      "number": 21,
      "prompt": "Leia o fragmento de texto:\n\nO Sociólogo Gilberto Freyre identificava as relações raciais de forma horizontal. Destacou-se no meio acadêmico ao considerar o conceito de cultura na temática racial.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio;LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 53-63, 2015. p. 55. [texto adaptado]\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil,  qual foi o livro escrito por Gilberto Freyre em que ele discutiu a temática racial pelo aspecto cultural? Assinale a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "O espetáculo das raças: cientistas, instituições e questões racial no Brasil."
        },
        {
          "letter": "B",
          "text": "Livro do Mestiço – Mestiço Brasileiro, Nosso Povo, Nossa Etnia."
        },
        {
          "letter": "C",
          "text": "Nação e Consciência Nacional."
        },
        {
          "letter": "D",
          "text": "Casa-grande & senzala."
        }
      ],
      "answer": "D",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se a “Foi nesse contexto que o sociólogo Gilberto Freyre propôs que a temática racial fosse pensada e analisada dentro de outro enfoque, deslocando o foco analítico do conceito de raça para o conceito de cultura. Assim, a mistura de raças iniciou seu processo de aceitação como parte integrante da identidade nacional brasileira. Casa-grande &senzala, Freyre (1933) expôs de forma descritiva a história do universo agrário do Nordeste brasileiro [...]”. (texto-base, p. 55).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_22",
      "number": 22,
      "prompt": "Considere o fragmento de texto;\n\n“O fortalecimento das identidades na modernidade tardia pressupõe uma ruptura com a ideia de um povo nacional homogêneo (mesma língua e cultura)”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 91-108, 2015. p. 96.\n\nConsiderando o fragmento  do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale  a alternativa que apresenta corretamente o significado de identidade sociocultural.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Significa a construção das identidades, fundamentadas nos estudos pré-coloniais."
        },
        {
          "letter": "B",
          "text": "Significa a manipulação de aspectos da igualdade em relação à construção da identidade."
        },
        {
          "letter": "C",
          "text": "Significa a elaboração das identidades no contexto das desigualdades das interações sociais e étnico-raciais."
        },
        {
          "letter": "D",
          "text": "Significa um modo de ser coletivo e se constrói com base nas interações sociais e culturais."
        }
      ],
      "answer": "D",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se  ao “[...] processo significa um modo de ser coletivo e se constrói com base nas interações sociais e culturais, conforme nos informam as contribuições teóricas vindas da psicologia social e da antropologia social. Assim, a identidade articula dialeticamente com a noção de igualdade e a de diferença”. (texto-base, p. 96).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_23",
      "number": 23,
      "prompt": "Leia o fragmento de texto:\n\n“[...] o fator mais determinante para uma educação multicultural não é a quantidade dos materiais didáticos disponíveis [...]”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, 2015. p. 117.\n\nConsiderando o  do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, identifique e assinale corretamente a alternativa que mostra corretamente a postura de uma educação multicultural.",
      "alternatives": [
        {
          "letter": "A",
          "text": "A educação multicultural deve ter uma postura democrática e científica e uma relação crítica e rigorosa dos materiais didáticos."
        },
        {
          "letter": "B",
          "text": "Deve adotar uma postura autocrática e subjetiva dos materiais didáticos e das informações contidas neles."
        },
        {
          "letter": "C",
          "text": "Deve estimular uma postura setorial e unilateral sem preocupar-se com a análise dos materiais didáticos e das informações contidas neles."
        },
        {
          "letter": "D",
          "text": "Deve adotar uma postura informal e aleatória em relação aos materiais didáticos e às informações contidas neles."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se  a “uma postura democrática e científica dos educadores e de suas escolas no trato crítico e rigoroso dos materiais didáticos e das informações contidas neles. Educadores e suas escolas precisam ter a consciência de que nenhuma pessoa ou instituição tem o domínio total do conhecimento e dos métodos de ensino”. (texto-base, p. 117).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_24",
      "number": 24,
      "prompt": "Considere o fragmento de texto:\n\n“A globalização afetou os estados nacionais, entre outros aspectos, em relação à 'identidade coletiva' e, consequentemente, à 'legitimidade democrática' (Habermas), seja pela difusão de uma cultura de massas, seja pela emergência de subcultura”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, 2015. p. 94 .\n\nConsiderando o fragmento  e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que apresenta corretamente um dos aspectos negativos decorrente da globalização.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Estímulo à emergência de fenômenos identitários em vários contextos socioculturais."
        },
        {
          "letter": "B",
          "text": "Incentivo ao direito à identidade construída com base na diferença."
        },
        {
          "letter": "C",
          "text": "Reconhecimento e a valorização das pessoas participantes da comunidade escolar."
        },
        {
          "letter": "D",
          "text": "Ameaça de destruição da cultura nacional e  produzir a fragmentação da sociedade nacional."
        }
      ],
      "answer": "D",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se  “[...] por um lado, no sentido de ameaçar a destruição da cultura nacional ou levar ao fechamento em culturas particulares ou subculturas diferenciação), ou seja, produzir a fragmentação da sociedade nacional;[...]”. (texto-base, p. 95).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_25",
      "number": 25,
      "prompt": "Leia o extrato de texto:\n\n“Os defensores da necessidade de implementação do sistema faziam-no com base em pesquisas que apontavam claramente a desigualdade entre negros e brancos, evidenciando a superioridade econômica da população branca brasileira”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 71-85, 2015. p. 79.\n\nConsiderando o extrato de texto e os conteúdos livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, entre as  medidas tomadas para diminuir a desigualdade entre brancos e negros, qual foi a mais polêmica? Assinale a alternativa correta.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Sistema de Cotas para estudantes negros no curso superior."
        },
        {
          "letter": "B",
          "text": "Política de Argumentos Afirmativos."
        },
        {
          "letter": "C",
          "text": "Sistema de Inclusão Assistencialista."
        },
        {
          "letter": "D",
          "text": "Política de Espaços Raciais (PER)."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se ao “[...] sistema de cotas, como foi designada a Política de Ação Afirmativa (PAA) de acesso de estudantes negros ao ensino superior, foi, sem dúvida, a mais polêmica de todas as propostas”. (texto-base, p. 78).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_26",
      "number": 26,
      "prompt": "Leia o fragmento de texto:\n\n“Os princípios constitucionais já inicialmente acenaram como possibilidades de avanços na luta contra o racismo. A formalidade legal estabeleceu o princípio da tolerância e do multiculturalismo”.\n\nApós esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 71-85, 2015. p. 75.\n\nConsiderando o fragmento de texto e os conteúdos  do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que identifica corretamente o princípio legal fundamental para a consolidação das leis antirracistas.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Princípio da tolerância e do multiculturalismo"
        },
        {
          "letter": "B",
          "text": "Princípio dos Deveres Constitucionais."
        },
        {
          "letter": "C",
          "text": "Princípio dos Saberes e direitos."
        },
        {
          "letter": "D",
          "text": "Princípio da Tolerância e comodidade."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se,  “A formalidade legal estabeleceu o princípio da tolerância e do multiculturalismo e foram reconhecidos direitos e identidades, condição importante para alicerçar outras leis antirracistas nas demais esferas jurídicas (Telles, 2003). (texto-base, p. 75).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_27",
      "number": 27,
      "prompt": "Leia o fragmento de texto:\n\n“[...] alguns estados brasileiros implantaram conselhos especiais que tratassem das questões que envolviam o Negro [...]. Em 1984, o Estado [...] foi pioneiro ao implantar o Conselho da Participação e Desenvolvimento da Comunidade Negra, que tinha entre seus objetivos investigar denúncias de disseminou-se e violência policial contra os negros\". Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 71-85, 2015. p. 74.\n\nTendo em vista o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale corretamente a alternativa que identifica o primeiro estado brasileiro que implementou o Conselho da Participação e Desenvolvimento da Comunidade Negra.",
      "alternatives": [
        {
          "letter": "A",
          "text": "São Paulo."
        },
        {
          "letter": "B",
          "text": "Rio de Janeiro."
        },
        {
          "letter": "C",
          "text": "Pernambuco."
        },
        {
          "letter": "D",
          "text": "Santa Catarina."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se  que “Em 1984, 0 Estado de São Paulo foi pioneiro ao implantar o Conselho da Participação e Desenvolvimento da Comunidade Negra [...]”. (texto-base, p. 74).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_28",
      "number": 28,
      "prompt": "Leia o fragmento de texto:\n\n“[...] a construção da identidade visando ao estabelecimento da igualdade pode levar a um processo de opressão de grupos e pessoas não dominantes em uma coletividade mais ampla, como ocorreu no Brasil”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, p. 91-108, 2015. p. 97 .\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil sobre o processo histórico, assinale corretamente a alternativa que mostra em que lugar se estabeleceu o segmento branco hegemônico.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Lugar empírico."
        },
        {
          "letter": "B",
          "text": "Lugar social."
        },
        {
          "letter": "C",
          "text": "Lugar subalterno."
        },
        {
          "letter": "D",
          "text": "Lugar do oprimido."
        }
      ],
      "answer": "B",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se que “[...] Nesse processo histórico, o segmento branco hegemónico acabou por estabelecer 0 \"lugar social\". (texto-base, p. 97).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_29",
      "number": 29,
      "prompt": "Leia o fragmento de texto:\n\n“A construção das identidades, fundamentadas nos estudos pós-coloniais, não é entendida sob uma perspectiva essencialista, mas circunstancial”. Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antônio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, 2015. p. 97 .\n\nConsiderando o fragmento de texto e os conteúdos do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, as identidades históricas  resultam de:",
      "alternatives": [
        {
          "letter": "A",
          "text": "Contextos econômicos igualitários."
        },
        {
          "letter": "B",
          "text": "Contextos socioculturais específicos."
        },
        {
          "letter": "C",
          "text": "Contextos subjetivos específicos."
        },
        {
          "letter": "D",
          "text": "Contextos sociais unilaterais."
        }
      ],
      "answer": "B",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se,” As identidades são históricas, elaboradas no contexto das interações socioculturais, ou seja, resultam de contextos socioculturais específicos”. (texto-base, p. 97).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    },
    {
      "id": "q16_30",
      "number": 30,
      "prompt": "Considere o fragmento de texto:\n\n“[...] por intermédio do Ministério da Educação (MEC), estabeleceu o programa Bolsa Permanência para estudantes matriculados em curso com carga horária superior ou igual a cinco horas diárias e a estudantes indígenas e quilombolas\". Após esta avaliação, caso queira ler o texto integralmente, ele está disponível em: MARÇAL, José Antonio; LIMA, Silva Maria Amorim. Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil. Curitiba: Intersaberes, 2015. p. 82.\n\nConsiderando o fragmento do livro-base Educação escolar das relações étnico-raciais: história e cultura afro-brasileira e indígena no Brasil, assinale a alternativa que indica corretamente o primeiro objetivo do Programa de Bolsa Permanência.",
      "alternatives": [
        {
          "letter": "A",
          "text": "Viabilizar a permanência de estudantes em situação de vulnerabilidade socioeconômica, em especial os indígenas e quilombolas."
        },
        {
          "letter": "B",
          "text": "Reduzir o número de vagas ociosas para evitar prejuízos para as universidades privadas."
        },
        {
          "letter": "C",
          "text": "Incentivar o cadastro a estudantes brancos de escolas privadas que queiram fazer dois cursos simultanaemente."
        },
        {
          "letter": "D",
          "text": "impossibilitar a permanência de estudantes em situação de vulnerabilidade socioeconômica, em especial os indígenas e os negros."
        }
      ],
      "answer": "A",
      "explanation": "Comentário: Conforme o Livro-base a resposta correta refere-se ao “[...] primeiro objetivo da bolsa é: \"I — viabilizar a permanência de estudantes em situação de vulnerabilidade socioeconômica, em especial os indígenas e quilombolas\" (Brasil, 2013). (texto-base, p. 82).",
      "source": "Relações Étnico-raciais: Africana, Afro-brasileira e Indígena – Material de apoio."
    }
  ]
};

