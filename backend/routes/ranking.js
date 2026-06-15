const express = require('express');
const { dbAll, dbGet } = require('../database');
const { autenticar } = require('../middleware/auth');
const router = express.Router();

router.get('/ranking/:topicId', autenticar, (req, res) => {
  try {
    const { topicId } = req.params;
    const tema = dbGet('SELECT * FROM temas WHERE id = ?', [topicId]);
    if (!tema) return res.status(404).json({ error: 'Tema não encontrado.' });
    const rows = dbAll(`
      SELECT a.nome as name, a.ru,
             r.nota as score, r.acertos as correct, r.status
      FROM resultados r
      JOIN alunos a ON a.id = r.aluno_id
      WHERE r.tema_id = ?
      ORDER BY r.nota DESC, r.acertos DESC
      LIMIT 10
    `, [topicId]);
    const ranking = rows.map((row, i) => ({
      position: i + 1,
      name: row.name,
      ru: row.ru,
      score: row.score,
      correct: row.correct,
      status: row.status
    }));
    return res.json({ topicId, topicTitle: tema.title, ranking });
  } catch (err) {
    console.error('Erro ao buscar ranking:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
