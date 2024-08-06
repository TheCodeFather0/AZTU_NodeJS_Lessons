import { userModel } from "../model/models.js";
import bcrypt from 'bcrypt'

export const signUpService = async(req,res) => {
    const {username,password} = req.body;
    const user = await userModel.findOne({username})
    console.log(req.body);
    
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            const token = '345678'
            res.redirect(`/profile/${token}`)
        }else {
            res.send("password is incorrect")
        }
    }else {
        res.send("user not found")
    }
}