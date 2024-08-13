import { Router } from "express";
import path from 'path'
import { customizedMulter, updateProfilePhoto } from "../multer.js";
import { signInService } from "../services/singinService.js";
import { signUpService } from "../services/signUpService.js";
import { authMiddleware } from "../middleware/auth.js";
import { profileService } from "../services/profileServive.js";
import { blogModel, userModel } from "../model/models.js";


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

// appRouter.get("/blog")
appRouter.get("/blogs/:userId",async(req,res) => {
    const userId = req.params.userId
    const blogs = await blogModel.find({userId})
    res.send(blogs)
})

// --------------------------------------------------------------

// post requests
appRouter.post('/sign-in',customizedMulter.single('avatar'),signInService)
appRouter.post('/sign-up',signUpService)
appRouter.post("/create-blog/:token",authMiddleware,(req,res) => {
    blogModel.create({
        userId:req.user._id,
        ...req.body
    }).then(() => {
        res.send({message:'blog cretaed'})
    })
})


// PUT/PATHC
appRouter.patch('/edit-profile/:id',updateProfilePhoto.single('avatar'),(req,res) => {
    const {id} = req.params
    userModel.findOneAndUpdate({_id:id},{
        photo:req.file.filename
    }).then((response) => {
        res.send({message:'data updated successfully'})
    })
})


export default appRouter