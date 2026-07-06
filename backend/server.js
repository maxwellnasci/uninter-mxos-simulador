/* ================================================================
   MXOS v2 — Servidor Principal
   ================================================================ */
/* Carrega variáveis de ambiente do .env */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { PAYLOAD_LIMIT } = require('./config');
const path = require('path');

// ================================================================
// Rotas
// ================================================================
const authRoutes = require('./routes/auth');
const temasRoutes = require('./routes/temas');
const questoesRoutes = require('./routes/questoes');
const responderRoutes = require('./routes/responder');
const historicoRoutes = require('./routes/historico');
const rankingRoutes   = require('./routes/ranking');
const tutorRoutes     = require('./routes/tutor');

const app = express();
const PORT = process.env.PORT || 4000;

// ================================================================
// Middlewares
// ================================================================
app.use(cors({
  origin: ['https://simulado.mxos.com.br', 'http://localhost:4000'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: PAYLOAD_LIMIT }));

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// ================================================================
// Rotas da API
// ================================================================
app.use('/api/auth', authRoutes);
app.use('/api/simulado/temas', temasRoutes);
app.use('/api/simulado/temas', questoesRoutes);
app.use('/api/simulado', responderRoutes);
app.use('/api/simulado', historicoRoutes);
app.use('/api/simulado', rankingRoutes);
app.use('/api/simulado', tutorRoutes);

// ================================================================
// Health check
// ================================================================
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ================================================================
// Rota principal (frontend)
// ================================================================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
});

// ================================================================
// Inicializar banco e servidor
// ================================================================
async function iniciar() {
  const { getDatabase, dbGet } = require('./database');

  // Inicializar banco (async)
  await getDatabase();
  console.log('📦 Banco SQLite inicializado');

  
  const resultado = dbGet('SELECT COUNT(*) as total FROM temas');
  const qtdTemas = resultado ? resultado.total : 0;

  if (qtdTemas === 0) {
    console.log('⚠️  Nenhum dado encontrado! Execute: npm run seed');
  } else {
    console.log(`✅ ${qtdTemas} temas encontrados no banco`);
  }

  app.listen(PORT, () => {
    console.log(`\n🚀 MXOS Simulador rodando em:`);
    console.log(`   🌐 http://localhost:${PORT}`);
    console.log(`   📁 Frontend: http://localhost:${PORT}`);
    console.log(`   🔌 API: http://localhost:${PORT}/api\n`);
  });
}

iniciar().catch(err => {
  console.error('❌ Erro ao iniciar servidor:', err);
});
