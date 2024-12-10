const Sequelize = require('sequelize');

const sequelize = new Sequelize('update_management_system', 'root', 'amitisPass', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
})

module.exports = sequelize;