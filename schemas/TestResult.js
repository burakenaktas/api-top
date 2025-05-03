const mongoose = require("mongoose");

const testResultSchema = new mongoose.Schema({
  gender: String,
  email: String,
  answers: [
    {
      id: Number,
      answer: String,
    },
  ],
  results: {
    R: Number,
    I: Number,
    L: Number,
    C: Number,
    T: Number,
  },
});

module.exports = mongoose.model("TestResult", testResultSchema);
