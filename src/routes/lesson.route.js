const express = require('express');

const lessonsController = require('../controllers/lessons.controllers');

const router = express.Router();

router
  .route('/')
  .get(lessonsController.readLessons)
  .post(lessonsController.createLessons);

router
  .route('/:id')
  .get(lessonsController.readLessonsById)
  .patch(lessonsController.updateLessons);

lessonsexports = router;
