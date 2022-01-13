const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      defeult: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
