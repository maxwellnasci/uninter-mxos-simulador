const express = require('express');
const { dbAll } = require('../database');
const { autenticar } = require('../middleware/auth');
const router = express.Router();

router.get('/historico', autenticar, (req, res) => {
  try {
    const rows = dbAll(`
      SELECT r.tema_id as topicId, t.title as topicTitle,
             r.nota as score, r.acertos as correct, r.erros as wrong,
             r.total, r.status, r.created_at as createdAt
      FROM resultados r
      JOIN temas t ON t.id = r.tema_id
      WHERE r.aluno_id = ?
      ORDER BY r.created_at DESC
    `, [req.usuario.id]);
    return res.json({ history: rows });
  } catch (err) {
    console.error('Erro ao buscar histórico:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
