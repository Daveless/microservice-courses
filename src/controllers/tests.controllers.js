const Modules = require('../models/modules.model');
const Test = require('../models/tests.model');

exports.createTests = async (req, res, next) => {
  const { description, content } = req.body;

  try {
    const newTest = await Test.create({
      description,
      content,
    });

    res.status(200).json({
      message: 'Test created',
      newTest,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.readTests = async (req, res, next) => {
  try {
    const { id } = req.params;

    const tests = await Modules.findByPk(id,{
        include: Test
    }); 
    /* const Tests = await Test.findAll(); */
    if (tests) {
      res.status(200).json({
        message: 'Tests found',
        results: tests.length,
        tests,
      });
    } else {
      res.status(400).json({ message: 'Tests not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.readTestsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const currentTest = await Test.findOne({
      where: {
        id,
      },
    });
    if (currentTest) {
      res.status(200).json({
        message: 'Test found',
        results: currentTest.length,
        currentTest,
      });
    } else {
      res.status(400).json({ message: 'Test not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTests = async (req, res, next) => {
  const { id } = req.params;
  const test = req.body;

  try {
    const currentTest = await Test.findOne({
      where: {
        id,
      },
    });

    await currentTest.update({
      test,
    });

    res.status(200).json({
      message: 'Tests updated',
      currentTest,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* exports.deleteTests = async (req, res, next) => {
  const { id } = req.params;

  const currentTest = await Test.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  await currentTest.update({
    status: 'unavailable',
  });

  res.status(200).json({
    message: 'Test deleted',
    currentTest,
  });
}; */
