import { Router } from "express";
import path from 'path'
import { customizedMulter } from "../multer.js";
import { signInService } from "../services/singinService.js";
import { signUpService } from "../services/signUpService.js";


const appRouter = new Router()

// get request
appRouter.get('/',(req,res) => {
    res.sendFile(path.resolve("./pages/index.html"))
})

appRouter.get('/sign-in',(req,res) => {
    res.sendFile(path.resolve("./pages/sign-in.html"))
})

appRouter.get('/sign-up',(req,res) => {
    res.sendFile(path.resolve("./pages/sign-up.html"))
})
// --------------------------------------------------------------

// post requests
appRouter.post('/sign-in',customizedMulter.single('avatar'),signInService)
appRouter.post('/sign-up',signUpService)


export default appRouter