const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Lessons = db.define('tests', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content:{
    type: DataTypes.STRING,
    allowNull: false
  },
  resources: {
    type: DataTypes.ARRAY,
  },
});

module.exports = Lessons;
