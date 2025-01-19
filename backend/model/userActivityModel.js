const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const UserActivity = sequelize.define('UserActivity', {
    ip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endpoint: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = { UserActivity };
