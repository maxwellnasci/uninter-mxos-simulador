/* ================================================================
   MXOS — Configurações centralizadas
   ================================================================ */
module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'mxos-secret-key-dev',
  JWT_EXPIRES_IN: '24h',
  PORT: process.env.PORT || 4000,
  PAYLOAD_LIMIT: '100kb'
};
