/* ================================================================
   MXOS — Rota do Agente Tutor IA (Gemini 2.5 Flash) com memória
   ================================================================ */
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { autenticar } = require('../middleware/auth');
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `Você é o MXOS Tutor, um assistente educacional Socrático para alunos de Segurança da Informação da UNINTER.

REGRAS ABSOLUTAS:
1. NUNCA dê a resposta correta diretamente. Jamais diga "a resposta é a letra X".
2. SEJA SOCRÁTICO: Responda perguntas com outras perguntas reflexivas que guiem o aluno à resposta.
3. DICAS PROGRESSIVAS: Analise o histórico da conversa. Se o aluno estiver no início da dúvida, dê apenas um pequeno empurrão conceitual. Se o histórico mostrar que o aluno já errou ou está muito confuso, dê dicas mais fortes e diretas — mas ainda exija que ele conecte os pontos finais.
4. LINGUAGEM: Use linguagem simples, empática, amigável e conversacional. Use metáforas do dia a dia.
5. CONCISÃO: Suas respostas devem ser curtas (2 a 4 linhas no máximo). Evite paredes de texto.
6. FOCO: Use o contexto da questão atual fornecido para basear suas explicações.
7. Quando o aluno demonstrar que entendeu a lógica, parabenize-o e reforce o conceito principal resumidamente.
8. INÍCIO PROATIVO: Se a mensagem do aluno for exatamente "[SYSTEM_INIT_PROACTIVE]", NÃO responda a essa string literalmente. Em vez disso, inicie a conversa de forma super natural, entusiasmada e proativa. Comente sobre o tema da questão atual e faça uma pergunta engajadora para descobrir o que o aluno já sabe sobre o assunto. Aja como se estivesse puxando assunto. Exemplo: "Vi que estamos falando sobre criptografia! O que você acha mais confuso sobre esse tema?"
9. Responda SEMPRE em português do Brasil.`;

router.post('/tutor', autenticar, async (req, res) => {
  try {
    const { question, alternatives, subject, studentQuestion, history } = req.body;

    if (!question || typeof question !== 'string' || question.trim() === '') {
      return res.status(400).json({ error: 'O campo question é obrigatório.' });
    }
    if (!studentQuestion || typeof studentQuestion !== 'string' || studentQuestion.trim() === '') {
      return res.status(400).json({ error: 'O campo studentQuestion é obrigatório.' });
    }
    if (!subject || typeof subject !== 'string') {
      return res.status(400).json({ error: 'O campo subject é obrigatório.' });
    }

    const questionTrim = question.trim().slice(0, 1000);
    const studentTrim = studentQuestion.trim().slice(0, 500);
    const subjectTrim = subject.trim().slice(0, 100);

    let alternativesText = '';
    if (Array.isArray(alternatives) && alternatives.length > 0) {
      alternativesText = alternatives
        .map(a => `  ${a.letter}) ${a.text}`)
        .join('\n');
    }

    // Mapeia o histórico para o formato do Gemini
    const formattedHistory = Array.isArray(history) ? history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    })) : [];

    // System instruction dinâmica com contexto da questão atual
    const systemInstruction = `${SYSTEM_PROMPT}

QUESTÃO ATUAL (NUNCA REVELE A RESPOSTA):
Matéria: ${subjectTrim}
Enunciado: "${questionTrim}"
${alternativesText ? `Alternativas:\n${alternativesText}` : ''}`;

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemInstruction,
    });

    const chat = model.startChat({
      history: formattedHistory
    });

    const result = await chat.sendMessage(studentTrim);
    const answer = result.response.text();

    return res.json({ answer });

  } catch (err) {
    console.error('Erro no tutor IA:', err);
    if (err.message && err.message.includes('API_KEY')) {
      return res.status(503).json({ error: 'Tutor temporariamente indisponível.' });
    }
    return res.status(500).json({ error: 'Erro ao processar sua pergunta. Tente novamente.' });
  }
});

module.exports = router;
