import { Router } from "express";
import { getAllUsers, getUserById } from "../services/usersService.js";

export const usersRoutes = new Router()


usersRoutes.get('/',getAllUsers)
usersRoutes.get("/:id",getUserById)