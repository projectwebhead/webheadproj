const Answers = require(`../models/Answers`);

module.exports = async () => {
  try {
    const results = await Answers.find();

    return results;
  } catch (err) {
    return [];
  }
};
