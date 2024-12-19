const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/db');  

const Contact = sequelize.define('Contact', {
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
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  message : {
    type : DataTypes.TEXT,
    allowNull : false,
  },
  submitted_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,  
    allowNull: false,
  },
}, {
  tableName: 'contacts',  
  timestamps: false,
});

module.exports = { Contact };
