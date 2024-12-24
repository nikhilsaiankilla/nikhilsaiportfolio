const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Skills = sequelize.define(
  'Skill',
  {
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
    image_url : {
      type : DataTypes.STRING(255),
      allowNull : false,
    }
  },
  {
    tableName: 'skills',
    timestamps: false,
  }
);

module.exports = { Skills };
