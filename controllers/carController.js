const { Car } = require("../models/Cars");

//get all cars

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      cars,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const getOneCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json({
      car,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const createCar = async (req, res) => {
  try {
    console.log(req.body);
    const { model, year } = req.body;
    const car = await Car.create({ model, year });
    res.status(201).json({
      car,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getAllCars, getOneCar, createCar };
