const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswersSchema = new Schema({
  section: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  questions: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Answers", AnswersSchema);
