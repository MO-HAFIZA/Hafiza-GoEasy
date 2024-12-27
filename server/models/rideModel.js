// models/Ride.js
const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
    pickupLocation: {
        type: String,
        required: true,
    },
    dropoffLocation: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Ride = mongoose.model("Ride", rideSchema);

module.exports = Ride;
