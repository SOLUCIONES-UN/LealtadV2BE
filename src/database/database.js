const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('lealtad', 'root', 'root123?', {
    host: '192.168.10.30',
    dialect: 'mysql'
  });

  module.exports = {sequelize}