const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  message: { type: String, required: true },
});

module.exports = mongoose.model("ContactUs", contactUsSchema);
