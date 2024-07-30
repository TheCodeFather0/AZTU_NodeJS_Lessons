import { carModel } from "../schema/car.js";

export const createCarService = (req, res) => {
    const data = req.body;
    carModel.create(data);
    res.status(201).send({
      message: "Car has been successfully created!",
    });
  }