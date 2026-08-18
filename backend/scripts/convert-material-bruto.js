#!/usr/bin/env node
/* ================================================================
   Converte os arquivos brutos em material-bruto/ para o formato
   de AULA usado em seed.js (AULA09..AULA12).
   ================================================================ */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const MATERIAL_DIR = path.join(ROOT, 'material-bruto');

const ALT_RE = /^\t([A-D])\t+(.*)$/;
const SELECTED_RE = /^Você assinalou essa alternativa \(([A-D])\)\s*$/;
const CORRECT_RE = /^Você acertou!?\s*$/;
const NOTA_RE = /^Nota:\s*[\d.,]+\s*$/;
const LER_RE = /^\s*Ler em voz alta\s*$/;
const QUESTAO_RE = /^Questão\s+\d+\/\d+/;
const FONTE_RE = /^(Fonte|Referência|Referencia)\s*:/i;
const ROTA_RE = /^(ROTA|Rota)\b/;
const GABARITO_RE = /^Gabarito comentado:\s*$/i;
const CORRETA_PREFIX_RE = /^Correta[:.]\s*/i;

function cleanParagraphs(lines) {
  // Junta linhas em parágrafos, removendo linhas em branco redundantes.
  const paragraphs = [];
  let buf = [];
  for (const line of lines) {
    if (line.trim() === '') {
      if (buf.length) {
        paragraphs.push(buf.join(' ').trim());
        buf = [];
      }
    } else {
      buf.push(line.trim());
    }
  }
  if (buf.length) paragraphs.push(buf.join(' ').trim());
  return paragraphs.filter(Boolean).join('\n\n');
}

function parseBlock(lines, fallbackSource) {
  // Tokeniza
  const tokens = [];
  for (const line of lines) {
    if (LER_RE.test(line)) continue;
    if (NOTA_RE.test(line)) continue;
    if (GABARITO_RE.test(line)) continue;

    const altM = line.match(ALT_RE);
    if (altM) {
      tokens.push({ type: 'ALT', letter: altM[1], text: altM[2].trim() });
      continue;
    }
    const selM = line.match(SELECTED_RE);
    if (selM) {
      tokens.push({ type: 'SELECTED', letter: selM[1] });
      continue;
    }
    if (CORRECT_RE.test(line)) {
      tokens.push({ type: 'CORRECT' });
      continue;
    }
    tokens.push({ type: 'TEXT', text: line });
  }

  // 1) Prompt = TEXT tokens iniciais, até o primeiro ALT
  let i = 0;
  const promptLines = [];
  while (i < tokens.length && tokens[i].type === 'TEXT') {
    promptLines.push(tokens[i].text);
    i++;
  }
  const prompt = cleanParagraphs(promptLines);

  // 2) Alternativas + resposta selecionada + explicação/fonte
  const altLines = { A: [], B: [], C: [], D: [] };
  const order = [];
  let selectedLetter = null;
  let currentAltLetter = null;
  let inExplanation = false;
  // Algumas apostilas (ex.: Matemática Elementar) trazem feedback por
  // alternativa ("Correta."/"Incorreta. ...") logo abaixo de cada opção.
  // Isso não é o texto da alternativa nem a explicação da questão — deve
  // ser descartado.
  let skippingAltFeedback = false;
  const explanationLines = [];
  const sourceLines = [];

  for (; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === 'ALT') {
      currentAltLetter = t.letter;
      inExplanation = false;
      skippingAltFeedback = false;
      if (!order.includes(t.letter)) order.push(t.letter);
      if (t.text) altLines[t.letter].push(t.text);
    } else if (t.type === 'SELECTED') {
      selectedLetter = t.letter;
      currentAltLetter = null;
      inExplanation = true;
      skippingAltFeedback = false;
    } else if (t.type === 'CORRECT') {
      inExplanation = true;
      skippingAltFeedback = false;
    } else if (t.type === 'TEXT') {
      const trimmed = t.text.trim();
      const isFonte = FONTE_RE.test(trimmed) || (inExplanation && ROTA_RE.test(trimmed));
      if (isFonte && (inExplanation || !currentAltLetter)) {
        sourceLines.push(trimmed.replace(/^Fonte:\s*Fonte:/i, 'Fonte:'));
        continue;
      }
      if (inExplanation) {
        explanationLines.push(t.text);
      } else if (currentAltLetter) {
        if (skippingAltFeedback) continue;
        if (/^(Correta|Incorreta)\b/i.test(t.text.trim())) {
          skippingAltFeedback = true;
          continue;
        }
        altLines[currentAltLetter].push(t.text);
      }
    }
  }

  const alternatives = order.map((letter) => ({
    letter,
    text: cleanParagraphs(altLines[letter]),
  }));

  const explanation = cleanParagraphs(explanationLines).replace(CORRETA_PREFIX_RE, '')
    || 'Resposta correta conforme gabarito oficial.';
  const source = sourceLines.join(' ').trim() || fallbackSource;

  return {
    prompt,
    alternatives,
    answer: selectedLetter,
    explanation,
    source,
  };
}

function parseFile(filePath, fallbackSource) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const lines = raw.split(/\r?\n/);

  const blocks = [];
  let current = null;
  for (const line of lines) {
    if (QUESTAO_RE.test(line)) {
      if (current) blocks.push(current);
      current = [];
      continue;
    }
    if (current) current.push(line);
  }
  if (current) blocks.push(current);

  return blocks.map((block) => parseBlock(block, fallbackSource));
}

function buildAula({ id, title, shortTitle, description, accent, icon, folder }) {
  const dir = path.join(MATERIAL_DIR, folder);
  const fallbackSource = `${title} – Material de apoio.`;
  const apol1 = parseFile(path.join(dir, 'apol1'), fallbackSource);
  const apol2 = parseFile(path.join(dir, 'apol2'), fallbackSource);
  const combined = [...apol1, ...apol2];

  const errors = [];
  combined.forEach((q, idx) => {
    if (q.alternatives.length !== 4) {
      errors.push(`Questão ${idx + 1}: ${q.alternatives.length} alternativas (esperado 4)`);
    }
    if (!q.answer || !q.alternatives.some((a) => a.letter === q.answer)) {
      errors.push(`Questão ${idx + 1}: resposta correta inválida ou ausente ("${q.answer}")`);
    }
    if (!q.prompt) {
      errors.push(`Questão ${idx + 1}: enunciado vazio`);
    }
  });

  const numPrefix = id.replace('aula', '');
  const questions = combined.map((q, idx) => ({
    id: `q${numPrefix}_${idx + 1}`,
    number: idx + 1,
    prompt: q.prompt,
    alternatives: q.alternatives,
    answer: q.answer,
    explanation: q.explanation,
    source: q.source,
  }));

  return {
    aula: {
      id,
      title,
      shortTitle,
      description,
      accent,
      icon,
      total: questions.length,
      passingScore: 21,
      questions,
    },
    errors,
  };
}

const SUBJECTS = [
  {
    id: 'aula09',
    title: 'Computação Forense',
    shortTitle: 'Computação Forense',
    description: 'Perícia digital, cadeia de custódia, exame de mídias e ferramentas forenses.',
    accent: '#0d9488',
    icon: '🔍',
    folder: 'Computação Forense',
  },
  {
    id: 'aula10',
    title: 'Direito e Novas Tecnologias',
    shortTitle: 'Direito e Tecnologia',
    description: 'LGPD, Marco Civil da Internet, crimes cibernéticos e certificação digital.',
    accent: '#b91c1c',
    icon: '⚖️',
    folder: 'Direito e Novas Tecnologia',
  },
  {
    id: 'aula11',
    title: 'Investigação de Crimes Digitais',
    shortTitle: 'Crimes Digitais',
    description: 'Direito penal, provas digitais, perícia e crimes cometidos no ambiente virtual.',
    accent: '#4338ca',
    icon: '🕵️',
    folder: 'Investigação de Crimes Digitais',
  },
  {
    id: 'aula12',
    title: 'Matemática Elementar',
    shortTitle: 'Matemática Elementar',
    description: 'Conjuntos, potenciação, radiciação, equações e geometria básica.',
    accent: '#ca8a04',
    icon: '🧮',
    folder: 'Matemática Elementar',
  },
];

function main() {
  const results = SUBJECTS.map(buildAula);

  let hasErrors = false;
  for (const { aula, errors } of results) {
    console.log(`\n=== ${aula.id} — ${aula.title} (${aula.questions.length} questões) ===`);
    if (errors.length) {
      hasErrors = true;
      errors.forEach((e) => console.log(`  ⚠️  ${e}`));
    } else {
      console.log('  ✅ sem problemas detectados');
    }
  }

  const outDir = path.join(__dirname, 'output');
  fs.mkdirSync(outDir, { recursive: true });

  const varNames = ['AULA09', 'AULA10', 'AULA11', 'AULA12'];
  let jsOutput = '';
  results.forEach(({ aula }, idx) => {
    jsOutput += `const ${varNames[idx]} = ${JSON.stringify(aula, null, 2)};\n\n`;
  });
  const outFile = path.join(outDir, 'aulas-09-12.js');
  fs.writeFileSync(outFile, jsOutput, 'utf8');

  console.log(`\nArquivo gerado: ${outFile}`);
  if (hasErrors) {
    console.log('\n⚠️  Foram encontrados possíveis problemas — revise antes de inserir no seed.js.');
    process.exitCode = 1;
  } else {
    console.log('\n✅ Conversão concluída sem problemas detectados.');
  }
}

main();
