const Courses = require('../models/courses.model');

exports.createCourses = async (req, res, next) => {
  const { name, description, duration, tags } = req.body;

  const newCourse = await Courses.create({
    name,
    description,
    duration,
    tags,
  });

  res.status(200).json({
    message: 'Course created',
    newCourse,
  });
};

exports.readCourses = async (req, res, next) => {
  const courses = await Courses.findAll({
    where: { status: 'active' },
  });

  res.status(200).json({
    message: 'Courses found',
    results: courses.length,
    courses,
  });
};

exports.readCoursesById = async (req, res, next) => {
  const { id } = req.params;

  const currentCourse = await Courses.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  res.status(200).json({
    message: 'Course found',
    results: currentCourse.length,
    currentCourse,
  });
};

exports.updateCourses = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const currentCourse = await Courses.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  await currentCourse.update({
    name,
  });

  res.status(200).json({
    message: 'Courses updated',
    currentCourse,
  });
};

exports.deleteCourses = async (req, res, next) => {
  const { id } = req.params;

  const currentCourse = await Courses.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  await currentCourse.update({
    status: 'unavailable',
  });

  res.status(200).json({
    message: 'Course deleted',
    currentCourse,
  });
};
