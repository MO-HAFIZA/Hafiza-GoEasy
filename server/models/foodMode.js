const mongoose = require("mongoose");

// new => for creating an object from the class
const foodSchema = new mongoose.Schema({
  foodItem: String,
  quantity: Number,
});

const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;
