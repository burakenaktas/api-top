const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema({
  name: String,
  realization: String,
  title: String,
  email: String,
  topic: String,
  isApproved: Boolean,
});

module.exports = mongoose.model("Contribution", contributionSchema);
