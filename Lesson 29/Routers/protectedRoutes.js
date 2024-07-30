import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { usersRoutes } from "./usersRoutes.js";

export const protectedRoute = new Router()

protectedRoute.use(authMiddleware)
protectedRoute.use("/users",usersRoutes)


protectedRoute.get("/private",(req,res) => {
    res.send("bu gizli mesajdir.")
})
protectedRoute.get("/contact",(req,res) => {
    res.send("bu gizli mesajdir.")
})
