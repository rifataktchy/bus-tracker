const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  busId: String,
  lat: Number,
  lon: Number,
  nextStop: String
});

module.exports = mongoose.model('Bus', busSchema);
