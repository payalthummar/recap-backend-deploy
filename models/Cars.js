const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const bikesSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  numberOfTyres: {
    type: Number,
    required: true,
  },
});

const Car = mongoose.model("Car", carsSchema);
const Bike = mongoose.model("Bike", bikesSchema);

module.exports = { Car, Bike };
//two objects two schemas please destructure car in controller {car}
