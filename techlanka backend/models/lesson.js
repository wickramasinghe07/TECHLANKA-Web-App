import mongoose from "mongoose";
const { Schema, model } = mongoose;

const lessonSchema = new Schema(
    {
        lessonName: {
            type: String,
            required: true,

        },
        instructorId: {
            type: String,
            required: true,

        },
        lesson: {
            type: String,

        },
        lessonVideolink: {
            type: String,
            required: true,

        },
    },
    {
        timestamps: true,
    }
);

export default model("Lesson", lessonSchema);