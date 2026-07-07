/* ================================================================
   MXOS — Rota do Agente Tutor IA (Gemini 2.5 Flash)
   Professor direto com conhecimento completo da questão
   ================================================================ */
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { autenticar } = require('../middleware/auth');
const { dbGet } = require('../database');
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `Você é o MXOS Tutor, um professor experiente e direto de Segurança da Informação para alunos da UNINTER.

FILOSOFIA:
- Você é como um professor particular: adapta-se ao ritmo e ao pedido do aluno.
- Se o aluno pedir a resposta diretamente, DIGA A RESPOSTA e explique o raciocínio.
- Se o aluno quiser uma dica, dê uma dica.
- Não force o método socrático se o aluno não está pedindo isso.

REGRAS:
1. Você conhece a resposta correta e a explicação completa da questão (fornecidas abaixo).
2. NUNCA invente respostas — use APENAS as informações fornecidas no contexto da questão.
3. LINGUAGEM: simples, empática, amigável e direta. Use metáforas do dia a dia quando ajudar.
4. CONCISÃO: respostas de 2 a 5 linhas. Evite paredes de texto.
5. Se o aluno pedir a resposta, dê a letra correta e explique o PORQUÊ de forma clara.
6. Se o aluno quiser apenas uma dica, dê um empurrão conceitual sem revelar a letra.
7. INÍCIO PROATIVO: Se a mensagem for "[SYSTEM_INIT_PROACTIVE]", não responda essa string. Inicie naturalmente comentando sobre o tema da questão e fazendo uma pergunta engajadora.
8. Responda SEMPRE em português do Brasil.`;

router.post('/tutor', autenticar, async (req, res) => {
  try {
    const { question, alternatives, subject, studentQuestion, history, questionId } = req.body;

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

    // Busca gabarito no banco
    let gabarito = null;
    if (questionId && typeof questionId === 'string') {
      gabarito = dbGet(
        'SELECT resposta_correta, explicacao, fonte FROM questoes WHERE id = ?',
        [questionId]
      );
    }

    // Mapeia histórico para o formato do Gemini
    const formattedHistory = Array.isArray(history) ? history.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    })) : [];

    // System instruction dinâmica com contexto completo
    const systemInstruction = `${SYSTEM_PROMPT}

QUESTÃO ATUAL:
Matéria: ${subjectTrim}
Enunciado: "${questionTrim}"
${alternativesText ? `Alternativas:\n${alternativesText}` : ''}
${gabarito ? `
GABARITO COMPLETO (use para ensinar — revele a letra se o aluno pedir):
Resposta correta: ${gabarito.resposta_correta}
Explicação: ${gabarito.explicacao}
Fonte: ${gabarito.fonte}` : ''}`;

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
