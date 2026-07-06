/* ================================================================
   MXOS — Rota do Agente Tutor IA (Gemini Flash)
   ================================================================ */
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { autenticar } = require('../middleware/auth');

const router = express.Router();

// Inicializa o cliente Gemini com a chave do .env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/* ----------------------------------------------------------------
   PROMPT DO SISTEMA — Personalidade do tutor
   ---------------------------------------------------------------- */
const SYSTEM_PROMPT = `Você é o MXOS Tutor, um assistente educacional especializado em ajudar alunos da UNINTER a estudar e entender o conteúdo das disciplinas do curso de Segurança da Informação e áreas relacionadas.

SUAS REGRAS ABSOLUTAS:
1. NUNCA revele a resposta correta diretamente. Sua missão é guiar o aluno ao raciocínio certo.
2. Explique sempre com linguagem simples, clara e acessível — como se estivesse conversando com um amigo.
3. Use exemplos do dia a dia para ilustrar conceitos técnicos.
4. Seja sempre encorajador, paciente e positivo. Nunca faça o aluno se sentir burro.
5. Responda SEMPRE em português do Brasil.
6. Se o aluno perguntar algo fora do contexto da questão, redirecione gentilmente para o tema.
7. Seja conciso — respostas entre 3 e 8 linhas são ideais. Evite textos longos demais.
8. Use emojis com moderação para tornar a conversa mais amigável (máximo 2 por resposta).

SEU ESTILO:
- Tom: amigável, encorajador, como um colega mais experiente
- Linguagem: simples, sem jargão desnecessário
- Quando o aluno errar: explique o porquê do erro e aponte o caminho certo SEM dar a resposta
- Quando o aluno acertar: celebre e aprofunde o conceito para fixar o aprendizado`;

/* ----------------------------------------------------------------
   POST /api/simulado/tutor
   Body: { question, alternatives, subject, studentQuestion }
   ---------------------------------------------------------------- */
router.post('/tutor', autenticar, async (req, res) => {
  try {
    const { question, alternatives, subject, studentQuestion } = req.body;

    // Validação dos campos obrigatórios
    if (!question || typeof question !== 'string' || question.trim() === '') {
      return res.status(400).json({ error: 'O campo question é obrigatório.' });
    }
    if (!studentQuestion || typeof studentQuestion !== 'string' || studentQuestion.trim() === '') {
      return res.status(400).json({ error: 'O campo studentQuestion é obrigatório.' });
    }
    if (!subject || typeof subject !== 'string') {
      return res.status(400).json({ error: 'O campo subject é obrigatório.' });
    }

    // Limitar tamanho das entradas para segurança
    const questionTrim  = question.trim().slice(0, 1000);
    const studentTrim   = studentQuestion.trim().slice(0, 500);
    const subjectTrim   = (subject || '').trim().slice(0, 100);

    // Formatar as alternativas para o contexto
    let alternativesText = '';
    if (Array.isArray(alternatives) && alternatives.length > 0) {
      alternativesText = alternatives
        .map(a => `  ${a.letter}) ${a.text}`)
        .join('\n');
    }

    // Montar o contexto completo para o Gemini
    const contextMessage = `
CONTEXTO DA QUESTÃO ATUAL:
Matéria: ${subjectTrim}
Enunciado:
"${questionTrim}"
${alternativesText ? `Alternativas:\n${alternativesText}\n` : ''}
PERGUNTA DO ALUNO:
"${studentTrim}"
Responda como o MXOS Tutor, seguindo todas as suas regras.`.trim();

    // Chamar o Gemini Flash
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: SYSTEM_PROMPT,
    });

    const result = await model.generateContent(contextMessage);
    const answer = result.response.text();

    return res.json({ answer });

  } catch (err) {
    console.error('Erro no tutor IA:', err);

    // Erro de API key inválida ou cota esgotada
    if (err.message && err.message.includes('API_KEY')) {
      return res.status(503).json({ error: 'Tutor temporariamente indisponível. Tente novamente.' });
    }

    return res.status(500).json({ error: 'Erro ao processar sua pergunta. Tente novamente.' });
  }
});

module.exports = router;
