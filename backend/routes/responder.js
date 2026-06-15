/* ================================================================
   MXOS — Rota para Responder e Validar Questões
   ================================================================ */
const express = require('express');
const { dbAll, dbGet, dbRun } = require('../database');
const { autenticar } = require('../middleware/auth');

const router = express.Router();

router.post('/responder', autenticar, (req, res) => {
  try {
    const { questionId, answerLetter } = req.body;

    if (!questionId || !answerLetter) {
      return res.status(400).json({ error: 'questionId e answerLetter são obrigatórios.' });
    }

    const questao = dbGet('SELECT * FROM questoes WHERE id = ?', [questionId]);

    if (!questao) {
      return res.status(404).json({ error: 'Questão não encontrada.' });
    }

    const letraUpper = answerLetter.toUpperCase().trim();
    if (!/^[A-E]$/.test(letraUpper)) {
      return res.status(400).json({ error: 'Alternativa inválida.' });
    }
    const correta = letraUpper === questao.resposta_correta;

        const resposta = {
      questionId: questao.id,
      isCorrect: correta,
      explanation: questao.explicacao,
      source: questao.fonte
    };
    if (correta) {
      resposta.correctAnswerLetter = questao.resposta_correta;
    }
    return res.json(resposta);

  } catch (err) {
    console.error('Erro ao responder questão:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

router.post('/finalizar', autenticar, (req, res) => {
  try {
    const { topicId, answers } = req.body;

    if (!topicId || !answers || Array.isArray(answers) || typeof answers !== 'object') {
      return res.status(400).json({ error: 'topicId e answers são obrigatórios.' });
    }

    const tema = dbGet('SELECT * FROM temas WHERE id = ?', [topicId]);
    if (!tema) {
      return res.status(404).json({ error: 'Tema não encontrado.' });
    }

    const questoes = dbAll('SELECT * FROM questoes WHERE tema_id = ?', [topicId]);

    let acertos = 0;
    let erros = 0;
    const detalhes = [];

    for (const q of questoes) {
      const respostaAluno = (answers[String(q.id)] || '').toUpperCase().trim();
      const correto = respostaAluno === q.resposta_correta;

      if (respostaAluno === '') {
        erros++;
      } else if (correto) {
        acertos++;
      } else {
        erros++;
      }

      detalhes.push({
        questionId: q.id,
        number: q.numero,
        yourAnswer: respostaAluno || '(sem resposta)',
        isCorrect: correto,
        correctAnswer: q.resposta_correta,
        explanation: q.explicacao,
        source: q.fonte
      });
    }

    const jaFinalizado = dbGet('SELECT id FROM resultados WHERE aluno_id = ? AND tema_id = ?', [req.usuario.id, topicId]);
    if (jaFinalizado) {
      return res.status(400).json({ error: 'Simulado já finalizado anteriormente.' });
    }

    const total = tema.total;
    if (!total || total === 0) {
      return res.status(400).json({ error: 'Tema sem questões.' });
    }
    const nota = parseFloat(((acertos / total) * 10).toFixed(1));
    const status = acertos >= tema.passingScore ? 'APROVADO' : 'REPROVADO';

    const alunoId = req.usuario.id;
    dbRun(
      'INSERT INTO resultados (aluno_id, tema_id, acertos, erros, total, nota, status, respostas) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [alunoId, topicId, acertos, erros, total, nota, status, JSON.stringify(answers)]
    );

    return res.json({
      topicId,
      topicTitle: tema.title,
      correct: acertos,
      wrong: erros,
      total,
      score: nota,
      passingScore: tema.passingScore,
      percentage: parseFloat(((acertos / total) * 100).toFixed(1)),
      status,
      details: detalhes
    });

  } catch (err) {
    console.error('Erro ao finalizar simulado:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
