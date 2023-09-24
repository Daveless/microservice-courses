const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Tests = db.define('tests', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content:{
    type: DataTypes.ARRAY,
    allowNull: false
  }
});

module.exports = Tests;
