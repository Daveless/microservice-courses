const Lesson = require('../models/lessons.model');
const Modules = require('../models/modules.model');

exports.createLessons = async (req, res, next) => {
  const { title, description, content, resources,moduleId } = req.body;

  try {
    const newLesson = await Lesson.create({
      title,
      description,
      content,
      resources,
      moduleId
    });

    res.status(200).json({
      message: 'Lesson created',
      newLesson,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.readLessons = async (req, res, next) => {
  try {
    const { id } = req.query;

    const Lessons = await Modules.findByPk(id,{
        include: Lesson
    }); 
    /* const Lessons = await Lesson.findAll({
      include: Tests,
    }); */
    if (Lessons) {
      res.status(200).json({
        message: 'Lessons found',
        results: Lessons.length,
        Lesson:[Lessons.lessons],
      });
    } else {
      res.status(404).json({ message: 'Lessons not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.readLessonsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const currentLesson = await Lesson.findOne({
      where: {
        id,
      },
    });
    if (currentLesson) {
      res.status(200).json({
        message: 'Lesson found',
        results: currentLesson.length,
        currentLesson,
      });
    } else {
      res.status(404).json({ message: 'Lesson not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateLessons = async (req, res, next) => {
  const { id } = req.params;
  const Lesson = req.body;

  try {
    const currentLesson = await Lesson.findOne({
      where: {
        id,
      },
    });

    await currentLesson.update({
      Lesson,
    });

    res.status(200).json({
      message: 'Lessons updated',
      currentLesson,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* exports.deleteLessons = async (req, res, next) => {
  const { id } = req.params;

  const currentLesson = await Lesson.findOne({
    where: {
      id,
      status: 'available',
    },
  });

  await currentLesson.update({
    status: 'unavailable',
  });

  res.status(200).json({
    message: 'Lesson deleted',
    currentLesson,
  });
}; */
