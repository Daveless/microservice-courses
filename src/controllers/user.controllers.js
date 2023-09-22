const catchAsync = require('../utils/catchAsync');

exports.findUsers = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: 'Users foundxd',
  });
});
