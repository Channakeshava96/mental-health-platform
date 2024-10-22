const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  description: { type: String, required: true },
  postedBy: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Problem', problemSchema);
