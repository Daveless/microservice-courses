const Module = require('../models/modules.model');

exports.createModules = async (req, res, next) => {
  const { name, courseId } = req.body;

  const newModule = await Module.create({
    name,
    courseId,
  });

  res.status(200).json({
    message: 'Module created',
    newModule,
  });
};

exports.readModules = async (req, res, next) => {
  const modules = await Module.findAll({
    where: { status: 'available' },
  });

  res.status(200).json({
    message: 'Modules found',
    results: modules.length,
    modules,
  });
};

exports.readModulesById = async (req, res, next) => {
  const { id } = req.params;

  const currentModule = await Module.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  res.status(200).json({
    message: 'Module found',
    results: currentModule.length,
    currentModule,
  });
};

exports.updateModules = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const currentModule = await Module.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  await currentModule.update({
    name,
  });

  res.status(200).json({
    message: 'Modules updated',
    currentModule,
  });
};

exports.deleteModules = async (req, res, next) => {
  const { id } = req.params;

  const currentModule = await Module.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  await currentModule.update({
    status: 'unavailable',
  });

  res.status(200).json({
    message: 'Module deleted',
    currentModule,
  });
};
