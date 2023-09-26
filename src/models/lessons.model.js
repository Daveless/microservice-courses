const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Lessons = db.define('lessons', {
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
  content: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  resources: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  moduleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Lessons;
