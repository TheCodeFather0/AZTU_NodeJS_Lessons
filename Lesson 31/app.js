import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { bookRouters } from "./routers/bookRoutes.js";
import { createBookRoute } from "./routers/createBook.js";
import cors from 'cors'

const app = express();
dotenv.config();
const PORT = process.env.NODE_PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;


app.use(cors())
app.use(express.json())
app.use("/books",bookRouters)
app.use("/createBook",createBookRoute)



app.listen(PORT, () => {
  console.log("server is up");

  mongoose.connect(CONNECTION_STRING).then(() => {
    console.log("connected mongodb");
  });
});
