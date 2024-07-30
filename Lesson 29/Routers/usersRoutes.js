import { Router } from "express";

export const usersRoutes = new Router()

usersRoutes.get("/",(req,res) => {
    res.send("istifadecilerin basina das dusub.")
})

usersRoutes.get("/:id",(req,res) => {
    res.send("her hansisa bir user")
})