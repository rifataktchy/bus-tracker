// models/Telemetry.js

const mongoose = require('mongoose');

const TelemetrySchema = new mongoose.Schema({
  busId: String,
  // Add other telemetry fields as needed
});

module.exports = mongoose.model('Telemetry', TelemetrySchema);
