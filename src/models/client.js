const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('client', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    domain: {
        type: Sequelize.STRING,
        allowNull: true
    },
    token: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    expire_at: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
    }
});

module.exports = Client;