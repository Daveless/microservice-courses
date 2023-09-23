const express = require('express');

const modulesController = require('../controllers/modules.controllers');

const router = express.Router();

router
  .route('/')
  .get(modulesController.readModules)
  .post(modulesController.createModules);

router
  .route('/:id')
  .get(modulesController.readModulesById)
  .patch(modulesController.updateModules)
  .delete(modulesController.deleteModules);

module.exports = router;
