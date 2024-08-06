import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    username:String,
    name:String,
    surname:String,
    email:String,
    password:String,
    photo:String
},{versionKey:false})

const blogSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    title:String,
    description:String
},{
    versionKey:false,timestamps:true
})

const categorySchema = new Schema({
    name:String,
},{versionKey:false})


export const userModel = model('users',userSchema)
export const blogModel = model('blogs',blogSchema)
export const categoryModel = model('categories',categorySchema)