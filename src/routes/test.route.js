const express = require('express');

const testsController = require('../controllers/tests.controllers');

const router = express.Router();

router
  .route('/')
  .get(testsController.readTests)
  .post(testsController.createTests);

router
  .route('/:id')
  .get(testsController.readTestsById)
  .patch(testsController.updateTests)

Test.exports = router;
