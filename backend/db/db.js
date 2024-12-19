const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('portfolio', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database.' .green);
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log('All tables have been recreated.' .yellow);
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err.message .red);
  });

module.exports = sequelize;
