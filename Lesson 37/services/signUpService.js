import bcrypt from 'bcrypt'
import { userModel } from "../model/models.js";
import jwt from 'jsonwebtoken'

export const signUpService = async(req,res) => {
    const {username,password} = req.body;
    const user = await userModel.findOne({username})
    
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
        const token = jwt.sign({user}, 'nodejs');
            res.redirect(`/profile/${token}`)
        }else {
            res.send("password is incorrect")
        }
    }else {
        res.send("user not found")
    }
}