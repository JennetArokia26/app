// schema.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  person: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Person', personSchema);