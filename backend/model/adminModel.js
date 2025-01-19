const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const MyData = sequelize.define('MyData', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Keep only essential unique constraints
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    social_links: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    profile_resume: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    otp: {
        type: DataTypes.INTEGER,
    },
    otp_expiration: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'my_data',
    timestamps: false,
    indexes: [],
});

module.exports = { MyData };