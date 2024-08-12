import { Router } from "express";
import path from 'path'
import { customizedMulter } from "../multer.js";
import { signInService } from "../services/singinService.js";
import { signUpService } from "../services/signUpService.js";
import { authMiddleware } from "../middleware/auth.js";
import { profileService } from "../services/profileServive.js";


const appRouter = new Router()

// get request
appRouter.get('/',(req,res) => {
    res.sendFile(path.resolve("./views/index.html"))
})

appRouter.get('/sign-in',(req,res) => {
    res.sendFile(path.resolve("./views/sign-in.html"))
})

appRouter.get('/sign-up',(req,res) => {
    res.sendFile(path.resolve("./views/sign-up.html"))
})

appRouter.get("/profile/:token",authMiddleware,profileService)
appRouter.get("/profile",(req,res) => {
    res.sendFile(path.resolve("./views/loginerror.html"))
})

// --------------------------------------------------------------

// post requests
appRouter.post('/sign-in',customizedMulter.single('avatar'),signInService)
appRouter.post('/sign-up',signUpService)

appRouter.post('/edit-profile/:id',(req,res) => {
    console.log(req.body);
    
    res.send(req.body)
})


export default appRouter