import Answer from "../models/answer.js";
const answerController = {
  createAnswer: async (req, res) => {
    try {
      //get  patient data from body
      const { lessonID, studentId, answer} = req.body;
      //check 
    //   const ExistingLesson = await Answer.findOne({ lessonName });
    //   if (ExistingLesson)
    //     return res.status(400).json({
    //       message: "This Lesson  already Add to system.",
    //     });
      //checking all fields are fill
      if (!lessonID || !studentId || !answer)
        return res.status(400).json({
          msg: "Please fill in all fields.",
        });

      const newAnswer = new Answer({
        lessonID, 
        studentId, 
        answer
      });
      await newAnswer.save();
      res.json({
        message: "Answer file create success",
        data: newAnswer,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  //get all Lessons
  getAnswer: async (req, res) => {
    try {
      const answers = await Answer.find();
      res.json({
        message: "Answers fetch success",
        data: answers
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  //get one Lesson
  getOneAnswer: async (req, res) => {
    const id = req.params.id;
    try {
      const answer = await Answer.findOne({ _id: id });
      res.json({
        message: "Answer fetch success",
        data: answer
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  },
  updateAnswer: async (req, res) => {
    try {
      const id = req.params.id;
      const { lessonID, studentId, answer } = req.body;

      await Answer.findOneAndUpdate(
        { _id: id },
        {lessonID, studentId, answer}
      );
      res.json({
        message: "Answer update success",
        data: {lessonID, studentId, answer},
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  deleteAnswer: async (req, res) => {
    try {
      const id = req.params.id;

      await Answer.findByIdAndDelete({ _id: id });
      res.json({ message: "Answer delete success !" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
export default answerController;