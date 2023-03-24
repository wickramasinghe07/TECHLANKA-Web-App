const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please enter your first name !"],
      trim: true,
    },

    last_name: {
        type: String,
        required: [true, "Please enter your last name !"],
        trim: true,
      },

    email: {
      type: String,
      required: [true, "Please enter your email !"],
      trim: true,
      unique: true,
    },

    phone: {
        type: Number,
        required: [true, "Please enter your last name !"],
        trim: true,
      },

    password: {
      type: String,
      required: [true, "Please enter your password !"],
    },

    confirm_password: {
        type: String,
        required: [true, "Please enter your confirm password !"],
      },

    role: {
      type: String,
      required: true,
      enum: ["student", "instructor"],
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/af-project/image/upload/v1651039444/avatar/51f6fb256629fc755b8870c801092942_al0mka.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);