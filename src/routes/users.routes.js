const express = require('express');

const userController = require('../controllers/user.controllers');

const router = express.Router();

router.route('/signup').post(userController.findUsers);

module.exports = router;
