import express from "express";
import animals from "./data.js";
import { v4 } from "uuid";
import { zooRouter } from "./Routers/zooRouters.js";

const app = express();

app.use(express.json());

app.use("/",zooRouter);




app.listen(6785, () => {
  console.log("server is up on!");
});
