const { Sequelize } = require('sequelize');
const colors = require('colors');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database.'.green);
    return sequelize.sync({ force: true });
  })
  .then(() => {
    console.log('All tables have been recreated.'.yellow);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err.message);
  });

module.exports = sequelize;
