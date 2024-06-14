const mongoose = require("mongoose");

const loveFormSchema = new mongoose.Schema({
  pureKindThoughtful: Boolean,
  noCigarettesAlcohol: Boolean,
  openToImprovement: Number,
  selfConfident: Number,
  selfAware: Number,
  lovesHerself: Number,
  relationshipWillingness: Number,
  speakRealities: Number,
  relationshipBuild: Number,
  playingInstrument: Boolean,
  sportActivity: Boolean,
  noSocialMedia: Boolean,
  noTattoo: Boolean,
  noColoredHair: Boolean,
  succeededSomething: Boolean,
  anyRelationship: Boolean,
  interestedInPsychology: Boolean,
  awareOfSucceeding: Boolean,
  phoneNumber: String,
});

module.exports = mongoose.model("LoveForm", loveFormSchema);
