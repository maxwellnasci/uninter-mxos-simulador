/* ================================================================
   MXOS — Rota de Temas
   ================================================================ */
const express = require('express');
const { dbAll, dbGet } = require('../database');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const temas = dbAll('SELECT * FROM temas ORDER BY id');
    return res.json({ topics: temas });
  } catch (err) {
    console.error('Erro ao listar temas:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

router.get('/:id', (req, res) => {
  try {
    const tema = dbGet('SELECT * FROM temas WHERE id = ?', [req.params.id]);
    if (!tema) {
      return res.status(404).json({ error: 'Tema não encontrado.' });
    }
    return res.json({ tema });
  } catch (err) {
    console.error('Erro ao buscar tema:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
