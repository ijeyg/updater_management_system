const Sequelize = require('sequelize');
const sequelize = require('../config/database')


const Release = sequelize.define('release',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    version:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    file:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    description:{
        type: Sequelize.TEXT,
        length: 500,
        allowNull: true,
    }
})

module.exports = Release;