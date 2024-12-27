const mongoose = require("mongoose");

// Define the coffee order schema
const coffeeSchema = new mongoose.Schema({
    flavor: {
        type: String,
        required: true, // Makes the field mandatory
        enum: ['Espresso', 'Latte', 'Cappuccino', 'Americano', 'Mocha'], // Allows only specific flavors
    },
    quantity: {
        type: Number,
        required: true, // Makes the field mandatory
        min: 1, // Ensures quantity is at least 1
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create the Coffee model
const CoffeeOrder = mongoose.model("CoffeeOrder", coffeeSchema);

module.exports = CoffeeOrder;
