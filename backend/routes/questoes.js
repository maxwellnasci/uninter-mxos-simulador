/* ================================================================
   MXOS — Rota de Questões (SEM gabarito!)
   ================================================================ */
const express = require('express');
const { dbAll, dbGet } = require('../database');
const { autenticar } = require('../middleware/auth');

const router = express.Router();

router.get('/:id/questoes', autenticar, (req, res) => {
  try {
    const tema = dbGet('SELECT * FROM temas WHERE id = ?', [req.params.id]);
    if (!tema) {
      return res.status(404).json({ error: 'Tema não encontrado.' });
    }

    const questoes = dbAll(
      'SELECT id, numero, pergunta FROM questoes WHERE tema_id = ? ORDER BY numero ASC',
      [req.params.id]
    );

    const questoesComAlternativas = questoes.map(q => {
      const alternativas = dbAll(
        'SELECT letra, texto FROM alternativas WHERE questao_id = ? ORDER BY letra ASC',
        [q.id]
      ).map(a => ({
        letter: a.letra,
        text: a.texto
      }));
      return {
        id: q.id,
        number: q.numero,
        prompt: q.pergunta,
        alternatives: alternativas
      };
    });

    return res.json({
      tema: {
        id: tema.id,
        title: tema.title,
        shortTitle: tema.shortTitle,
        total: tema.total,
        passingScore: tema.passingScore
      },
      questoes: questoesComAlternativas
    });

  } catch (err) {
    console.error('Erro ao buscar questões:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
