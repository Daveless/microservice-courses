const { Router } = require('express');
const modulesRouter = require('./modules.route');
const coursesRouter = require('./course.route');
const testsRouter = require('./test.route');
const lessonsRouter = require('./lesson.route');

const router = Router();

router.use('/modules', modulesRouter);
router.use('/courses', coursesRouter);
router.use('/tests', testsRouter);
router.use('/lessons', lessonsRouter);

module.exports = router;
