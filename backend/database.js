/* ================================================================
   MXOS — Database: SQLite (sql.js — 100% JS)

   Inclui helpers: dbAll, dbGet, dbRun para compatibilidade
   com a API estilo better-sqlite3.
   ================================================================ */
const initSqlJs = require('sql.js');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, 'mxos.db');

let db = null;

async function getDatabase() {
  if (db) return db;

  const SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  criarTabelas();
  salvar();

  return db;
}

function salvar() {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

let _saveTimer = null;
function salvarDebounced() {
  if (_saveTimer) clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => { salvar(); _saveTimer = null; }, 500);
}

function criarTabelas() {
  db.run(`CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ru TEXT UNIQUE NOT NULL,
    nome TEXT NOT NULL,
    senha_hash TEXT,
    ativo INTEGER DEFAULT 1,
    created_at TEXT DEFAULT (datetime('now'))
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS temas (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    shortTitle TEXT NOT NULL,
    description TEXT NOT NULL,
    accent TEXT NOT NULL,
    icon TEXT NOT NULL,
    total INTEGER NOT NULL,
    passingScore INTEGER NOT NULL
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS questoes (
    id TEXT PRIMARY KEY,
    tema_id TEXT NOT NULL,
    numero INTEGER NOT NULL,
    pergunta TEXT NOT NULL,
    resposta_correta TEXT NOT NULL,
    explicacao TEXT NOT NULL,
    fonte TEXT NOT NULL,
    FOREIGN KEY (tema_id) REFERENCES temas(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS alternativas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    questao_id TEXT NOT NULL,
    letra TEXT NOT NULL,
    texto TEXT NOT NULL,
    FOREIGN KEY (questao_id) REFERENCES questoes(id)
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS resultados (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    aluno_id INTEGER,
    tema_id TEXT NOT NULL,
    acertos INTEGER NOT NULL,
    erros INTEGER NOT NULL,
    total INTEGER NOT NULL,
    nota REAL NOT NULL,
    status TEXT NOT NULL,
    respostas TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (aluno_id) REFERENCES alunos(id),
    FOREIGN KEY (tema_id) REFERENCES temas(id)
  )`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_resultados_aluno ON resultados(aluno_id)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_resultados_tema ON resultados(tema_id)`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_resultados_nota ON resultados(tema_id, nota DESC)`);
}

// ================================================================
// HELPERS — estilo better-sqlite3
// ================================================================

function dbAll(sql, params = []) {
  const stmt = db.prepare(sql);
  if (params.length > 0) stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

function dbGet(sql, params = []) {
  const rows = dbAll(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

function dbRun(sql, params = []) {
  db.run(sql, params);
  salvarDebounced();
}

function closeDatabase() {
  if (db) {
    salvar();
    db.close();
    db = null;
  }
}

module.exports = { getDatabase, closeDatabase, salvar, salvarDebounced, dbAll, dbGet, dbRun };
