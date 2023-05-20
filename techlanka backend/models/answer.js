import mongoose from "mongoose";
const { Schema, model } = mongoose;

const answerSchema = new Schema(
    {
        lessonID: {
            type: String,
            required: true,

        },
        studentId: {
            type: String,
            required: true,

        },
        answer: {
            type: String,
            required: true,

        },
    },
    {
        timestamps: true,
    }
);

export default model("Answer", answerSchema);