/* ================================================================
   MXOS — Rota para Responder e Validar Questões
   ================================================================ */
const express = require('express');
const { dbAll, dbGet, dbRun } = require('../database');
const { autenticar } = require('../middleware/auth');

const router = express.Router();

router.post('/responder', autenticar, (req, res) => {
  try {
    const { questao_id, alternativa_letra } = req.body;

    if (!questao_id || !alternativa_letra) {
      return res.status(400).json({ error: 'questao_id e alternativa_letra são obrigatórios.' });
    }

    const questao = dbGet('SELECT * FROM questoes WHERE id = ?', [questao_id]);

    if (!questao) {
      return res.status(404).json({ error: 'Questão não encontrada.' });
    }

    const letraUpper = alternativa_letra.toUpperCase().trim();
    if (!/^[A-E]$/.test(letraUpper)) {
      return res.status(400).json({ erro: 'Alternativa inválida.' });
    }
    const correta = letraUpper === questao.resposta_correta;

        const resposta = {
      questao_id: questao.id,
      correta: correta,
      explicacao: questao.explicacao,
      fonte: questao.fonte
    };
    if (correta) {
      resposta.resposta_correta_letra = questao.resposta_correta;
    }
    return res.json(resposta);

  } catch (err) {
    console.error('Erro ao responder questão:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

router.post('/finalizar', autenticar, (req, res) => {
  try {
    const { tema_id, respostas } = req.body;

    if (!tema_id || !respostas || Array.isArray(respostas) || typeof respostas !== 'object') {
      return res.status(400).json({ error: 'tema_id e respostas são obrigatórios.' });
    }

    const tema = dbGet('SELECT * FROM temas WHERE id = ?', [tema_id]);
    if (!tema) {
      return res.status(404).json({ error: 'Tema não encontrado.' });
    }

    const questoes = dbAll('SELECT * FROM questoes WHERE tema_id = ?', [tema_id]);

    let acertos = 0;
    let erros = 0;
    const detalhes = [];

    for (const q of questoes) {
      const respostaAluno = (respostas[String(q.id)] || '').toUpperCase().trim();
      const correto = respostaAluno === q.resposta_correta;

      if (respostaAluno === '') {
        erros++;
      } else if (correto) {
        acertos++;
      } else {
        erros++;
      }

      detalhes.push({
        questao_id: q.id,
        numero: q.numero,
        sua_resposta: respostaAluno || '(sem resposta)',
        correto: correto,
        resposta_correta: q.resposta_correta,
        explicacao: q.explicacao,
        fonte: q.fonte
      });
    }

    const total = tema.total;
    if (!total || total === 0) {
      return res.status(400).json({ erro: 'Tema sem questões.' });
    }
    const nota = parseFloat(((acertos / total) * 10).toFixed(1));
    const status = acertos >= tema.passingScore ? 'APROVADO' : 'REPROVADO';

    const jaFinalizado = dbGet('SELECT id FROM resultados WHERE aluno_id = ? AND tema_id = ?', [req.usuario.id, tema_id]);
    if (jaFinalizado) {
      return res.status(400).json({ erro: 'Simulado já finalizado anteriormente.' });
    }

    const alunoId = req.usuario.id;
    dbRun(
      'INSERT INTO resultados (aluno_id, tema_id, acertos, erros, total, nota, status, respostas) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [alunoId, tema_id, acertos, erros, total, nota, status, JSON.stringify(respostas)]
    );

    return res.json({
      tema_id,
      tema_title: tema.title,
      acertos,
      erros,
      total,
      nota,
      nota_minima: tema.passingScore,
      percentual: parseFloat(((acertos / total) * 100).toFixed(1)),
      status,
      detalhes
    });

  } catch (err) {
    console.error('Erro ao finalizar simulado:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
