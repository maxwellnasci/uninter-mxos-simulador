/* ================================================================
   MXOS — Rota de Autenticação (Login)
   ================================================================ */
const express = require('express');
const jwt = require('jsonwebtoken');
const { dbGet } = require('../database');

const router = express.Router();

const { JWT_SECRET } = require('../config');
const JWT_EXPIRES_IN = '8h';

router.post('/login', (req, res) => {
  try {
    const { ru } = req.body;

    if (!ru) {
      return res.status(400).json({ error: 'RU é obrigatório.' });
    }

    const aluno = dbGet('SELECT * FROM alunos WHERE ru = ? AND ativo = 1', [ru]);

    if (!aluno) {
      return res.status(401).json({ error: 'RU não encontrado.' });
    }

    const token = jwt.sign(
      { id: aluno.id, ru: aluno.ru, nome: aluno.nome },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return res.json({
      token,
      aluno: {
        id: aluno.id,
        ru: aluno.ru,
        nome: aluno.nome
      }
    });

  } catch (err) {
    console.error('Erro no login:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
