const { Router } = require('express');
const userRouter = require('./users.routes');

const router = Router();

router.use('/user', userRouter);

module.exports = router;
