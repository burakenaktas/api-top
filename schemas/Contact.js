const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    contactInfo: {
      type: String,
      required: true,
      trim: true,
    },
    lastContactDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    userId: {
      type: String,
      required: false, // Made optional to match your current pattern
      default: "default",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
