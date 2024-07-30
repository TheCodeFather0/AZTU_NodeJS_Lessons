import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { carsRoutes } from "./routers/cars.js";
import { createCarService } from "./services/createCar.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

app.get("/", (req, res) => {
  res.send("ramcar MMC-ye xos gelmisin masinlar ucun /cars sehifesine kecin");
});

app.use("/cars",carsRoutes)
app.post("/createCar", createCarService);

app.listen(PORT, () => {
  console.log("server is up");

  mongoose.connect(CONNECTION_STRING).then(() => {
    console.log("mongo db connected!");
  });
});
