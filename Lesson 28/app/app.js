import express from "express";
import dotenv from "dotenv";
import { usersRouter } from "./Routers/usersRoute.js";
import { appMiddleWare } from "./MiddleWares/appMiddleWare.js";

const app = express();
dotenv.config();
const port = process.env.NODE_PORT;

app.use("/users", usersRouter);

app.get("/", appMiddleWare, (req, res) => { 
  res.render("first.ejs", {count:req.count})
});

app.listen(port, () => {
  console.log(`server is up on ${port}`);
});
