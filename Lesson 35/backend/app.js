import express from "express";
import appRoutes from "./routes/appRoutes.js";
import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded());

app.use("/", appRoutes);

app.listen(5050, () => {
  console.log("server is up");
  connect(process.env.CONNECTION_STRING).then(() => {
    console.log("connected DB");
  });
});
