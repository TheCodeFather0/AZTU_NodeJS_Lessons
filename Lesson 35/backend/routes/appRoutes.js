import path from 'path'
import { Router } from "express";

const appRoutes = new Router()

appRoutes.get("/",(req,res) => {
    res.sendFile(path.resolve('./frontend/index.html'))
})

appRoutes.get('/users',(req,res) => {
    res.sendFile(path.resolve("./frontend/users.html"))
})

export default appRoutes;