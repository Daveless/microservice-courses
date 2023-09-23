const express = require('express');

const coursesController = require('../controllers/courses.controllers');

const router = express.Router();

router
  .route('/')
  .get(coursesController.readCourses)
  .post(coursesController.createCourses);

router
  .route('/:id')
  .get(coursesController.readCoursesById)
  .patch(coursesController.updateCourses)
  .delete(coursesController.deleteCourses);

module.exports = router;
