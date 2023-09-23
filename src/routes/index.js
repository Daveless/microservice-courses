const { Router } = require('express');
const modulesRouter = require('./modules.route');
const coursesRouter = require('./course.route');

const router = Router();

router.use('/modules', modulesRouter);
router.use('/courses', coursesRouter);

module.exports = router;
