const Courses = require('../models/courses.model');
const Modules = require('../models/modules.model');

exports.createModules = async (req, res, next) => {
  const { name, courseId } = req.body;
  console.log(name, courseId);
  try {
    const newModule = await Modules.create({
      name,
      courseId,
    });
    res.status(200).json({
      message: 'Module created',
      newModule,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.readModules = async (req, res, next) => {
  const { id } = req.query;
  console.log(id);

  const modules = await Courses.findByPk(id, {
    include: Modules,
  });
  /* const modules = await Modules.findAll({
    where: { status: 'available' },
  }); */
  if (modules) {
    res.status(200).json({
      message: 'Modules found',
      results: modules?.length,
      modules: [modules.modules],
    });
  } else {
    res.status(404).json({error:"not found"})
  }
};

exports.readModulesById = async (req, res, next) => {
  const { id } = req.params;

  const currentModule = await Modules.findOne({
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

  const currentModule = await Modules.findOne({
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

  const currentModule = await Modules.findOne({
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
