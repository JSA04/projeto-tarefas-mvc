const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tasks_db', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

try {
  sequelize.authenticate();
  console.log('🔌 Conexão com o PostgreSQL estabelecida com sucesso!');
} catch (error) {
  console.error('❌ Não foi possível conectar ao banco de dados:', error);
}

module.exports = sequelize;