import bcrypt from "bcrypt";
import userModel from "../Schema/UserSchema.js";

export const registerService = async (req, res) => {
    const user = req.body;
    const isExist = await userModel.findOne({ email: user.email });
  
    if(user.email && user.username && user.password) {
      console.log(isExist);
      if (isExist) {
        res.send("user already has exist");
      } else {
        bcrypt.hash(user.password, 10, (err, password) => {
          userModel.create({
            username: user.username,
            email: user.email,
            password: password,
          });
          res.send("register is successfully");
        });
      }
    }else{
      res.send("invalid credentials")
    }
  }