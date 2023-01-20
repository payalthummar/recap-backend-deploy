const express = require("express");
const app = express.Router();
const {
  getAllCars,
  getOneCar,
  createCar,
} = require("../controllers/carController");

app.route("/").get(getAllCars).post(createCar);
app.route("/:id").get(getOneCar);

module.exports = app;
