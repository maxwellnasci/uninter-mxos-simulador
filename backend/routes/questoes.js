/* ================================================================
   MXOS — Rota de Questões (SEM gabarito!) — Otimizado com JOIN
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

    // Query única com JOIN — substitui N+1 queries por 1 query só
    const rows = dbAll(
      `SELECT q.id, q.numero, q.pergunta,
              a.letra, a.texto
       FROM questoes q
       LEFT JOIN alternativas a ON a.questao_id = q.id
       WHERE q.tema_id = ?
       ORDER BY q.numero ASC, a.letra ASC`,
      [req.params.id]
    );

    // Agrupa alternativas por questão
    const questoesMap = new Map();
    for (const row of rows) {
      if (!questoesMap.has(row.id)) {
        questoesMap.set(row.id, {
          id: row.id,
          number: row.numero,
          prompt: row.pergunta,
          alternatives: []
        });
      }
      if (row.letra) {
        questoesMap.get(row.id).alternatives.push({
          letter: row.letra,
          text: row.texto
        });
      }
    }

    const questoes = Array.from(questoesMap.values());

    return res.json({
      tema: {
        id: tema.id,
        title: tema.title,
        shortTitle: tema.shortTitle,
        total: tema.total,
        passingScore: tema.passingScore
      },
      questoes
    });

  } catch (err) {
    console.error('Erro ao buscar questões:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
