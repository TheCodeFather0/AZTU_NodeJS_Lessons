
import { Router } from "express";
import bookModel from "../schema/book.js";

export const createBookRoute = new Router()

createBookRoute.post("/", (req, res) => {  
    bookModel.create(req.body);
    res.send("data yaradildi")
  });