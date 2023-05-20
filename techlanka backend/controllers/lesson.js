import Lesson from "../models/lesson.js";
const lessonController = {
  createLesson: async (req, res) => {
    try {
      //get  patient data from body
      const { lessonName, instructorId, lesson, lessonVideolink } = req.body;
      //check 
      const ExistingLesson = await Lesson.findOne({ lessonName });
      if (ExistingLesson)
        return res.status(400).json({
          message: "This Lesson  already Add to system.",
        });
      //checking all fields are fill
      if (!lessonName || !instructorId || !lesson || !lessonVideolink)
        return res.status(400).json({
          msg: "Please fill in all fields.",
        });

      const newLesson = new Lesson({
        lessonName,
        instructorId,
        lesson,
        lessonVideolink,
      });
      await newLesson.save();
      res.json({
        message: "Readable file create success",
        data: newLesson,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  //get all Lessons
  getLesson: async (req, res) => {
    try {
      const Lessons = await Lesson.find();
      res.json({
        message: "Lesson fetch success",
        data: Lessons
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  //get one Lesson
  getOneLesson: async (req, res) => {
    const id = req.params.id;
    try {
      const lesson = await Lesson.findOne({ _id: id });
      res.json({
        message: "Lesson fetch success",
        data: lesson
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  },
  updateLesson: async (req, res) => {
    try {
      const id = req.params.id;
      const { lessonName, instructorId, lesson, lessonVideolink  } = req.body;

      await Lesson.findOneAndUpdate(
        { _id: id },
        {lessonName, instructorId, lesson, lessonVideolink}
      );
      res.json({
        message: "Lesson update success",
        data: {lessonName, instructorId, lesson, lessonVideolink},
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  deleteLesson: async (req, res) => {
    try {
      const id = req.params.id;

      await Lesson.findByIdAndDelete({ _id: id });
      res.json({ message: "Lesson delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
export default lessonController;