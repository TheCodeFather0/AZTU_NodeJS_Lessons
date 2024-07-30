import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
})

const userModel = model("users",userSchema)
export default userModel