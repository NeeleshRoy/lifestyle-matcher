const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name           : { type: String, required: true, max: 100 },
  provider       : { type: Number, max: 50 },
  adventurer     : { type: Number, max: 50 },
  corporate      : { type: Number, max: 50 },
  bohemian       : { type: Number, max: 50 },
  creative       : { type: Number, max: 50 },
  socialite      : { type: Number, max: 50 },
  activist       : { type: Number, max: 50 },
  academic       : { type: Number, max: 50 },
  technician     : { type: Number, max: 50 },
  naturelover    : { type: Number, max: 50 },
  gurusabound    : { type: Number, max: 50 },
  fitnessfocused : { type: Number, max: 50 },
  systemsavvy    : { type: Number, max: 50 },
  spiritual      : { type: Number, max: 50 },
  groupie        : { type: Number, max: 50 }
});

module.exports = mongoose.model('User', userSchema);
