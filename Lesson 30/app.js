import express from "express";
import { usersRoutes } from "./Routers/usersRoutes.js";
import { client } from "./utils/connectDB.js";

const app = express();
app.use("/users", usersRoutes);

app.listen(5050, () => {
  console.log("server is up");

  client.connect().then(() => {
    console.log("connect mongodb successfully");
  });
});
