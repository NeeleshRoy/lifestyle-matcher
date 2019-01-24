const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name             : { type: String, required: true, max: 100 },
  lifestyle_scores : { type: Array, default: [] }
});

module.exports = mongoose.model('User', userSchema);
