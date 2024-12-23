const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Skills = sequelize.define('Skills', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
  tableName: 'skills',
  timestamps: false,
});

module.exports = { Skills };
