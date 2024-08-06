import bcrypt from 'bcrypt'
import { userModel } from '../model/models.js'

export const signInService = async(req,res) => {
    const {username,name,surname,email,password} = req.body
    const hassedPassword =  bcrypt.hashSync(password,10)
  
    if (username && name && surname && email && password && req.file ) {
        const {filename,destination} = req.file
        
        const isextistUsername = await userModel.findOne({username}) 
        const isextistEmail = await userModel.findOne({email})

        if (isextistUsername) {
            res.send('username is already exist')
        }else if(isextistEmail) {
            res.send('email is already exist')
        }else {
            userModel.create({
                username,name,surname,email,
                password:hassedPassword,
                photo:`${destination}/${filename}`
            })
            res.redirect("/sign-up")
        }
       
    }else {
        res.send("datalari duz yaz!")
    }
}