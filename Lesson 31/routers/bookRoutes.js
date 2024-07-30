import { Router } from "express";
import { deleteBook, getBookById,changeBook, getAllBooks } from "../services/bookServices.js";

export const bookRouters = new Router()

bookRouters.get("/",getAllBooks)
bookRouters.get("/:id",getBookById)
bookRouters.put("/:id",changeBook)
bookRouters.delete("/:id",deleteBook)