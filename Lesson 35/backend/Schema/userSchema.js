import { model, Schema } from "mongoose"

const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
    avatar:String
},{versionKey:false})

export const userModel = model('users',userSchema)