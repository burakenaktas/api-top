const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  feedback: { type: String, required: true },
  contactMe: { type: Boolean, required: true },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
