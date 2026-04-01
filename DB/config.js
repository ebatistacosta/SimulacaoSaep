const { Pool } = require('pg');

// Configuração da conexão com o banco de dados PostgreSQL
const config = {
  host: 'localhost', // Host do banco de dados
  port: 5432,        // Porta padrão do PostgreSQL
  database: 'simulacaoSAEP', // Nome do banco de dados
  user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
  password: 'root', // Substitua pela sua senha do PostgreSQL
  max: 20,           // Número máximo de conexões no pool
  idleTimeoutMillis: 30000, // Tempo limite para conexões ociosas
  connectionTimeoutMillis: 2000, // Tempo limite para estabelecer conexão
};

// Criando o pool de conexões
const pool = new Pool(config);

// Testando a conexão
pool.on('connect', () => {
  console.log('Conectado ao banco de dados PostgreSQL');
});

pool.on('error', (err) => {
  console.error('Erro inesperado no pool de conexões:', err);
  process.exit(-1);
});

module.exports = pool;