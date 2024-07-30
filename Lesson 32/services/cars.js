import { carModel } from "../schema/car.js";

export const getAllCarsService = async (req, res) => {
  const { marka, model, rentType } = req.query;
  const filter = {};

  if (marka) filter.marka = marka;
  else if (model) filter.model = model;
  else if (rentType) filter.rentType = rentType;

  const data = await carModel.find(filter);
  if (data.length > 0) {
    res.send(data);
  } else {
    res.send({ message: "not found" });
  }
};

export const getCarsByRentType = (req, res) => {
  const params = req.params.rentType;
  carModel.find({ rentType: params }).then((data) => {
    res.send(data);
  });
};

export const getCarsByRentTypeAndId = (req, res) => {
  carModel.find(req.params).then((data) => {
    res.send(data);
  });
};

export const getCarById = (req, res) => {
  const id = req.params.id;
  carModel
    .findById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      if (err) {
        res.status(404).send({
          massage: "can not found",
        });
      }
    });
};
