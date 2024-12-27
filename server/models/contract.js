const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  agreementText: { type: String, required: true },
  agreed: { type: Boolean, default: false },
  signedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contract', contractSchema);
