const Lessons = require('./lessons.model');
const Tests = require('./tests.model');
const Courses = require('./courses.model');
const Modules = require('./modules.model');
const { DataTypes } = require('sequelize');

const initModel = () => {
  Courses.hasMany(Modules);
  Modules.belongsTo(Courses);
  Modules.hasMany(Lessons);
  Lessons.belongsTo(Modules);
  Modules.hasOne(Tests);
  Tests.belongsTo(Modules);
};

module.exports = initModel;
