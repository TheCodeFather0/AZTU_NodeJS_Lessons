import { Schema,model } from "mongoose";

const carSchema = new Schema({
    marka:String,
    model:String,
    year:Number,
    transmission:String,
    fuelType:String,
    price:Number,
    currency:String,
    discount:Number,
    rentType:String
},{versionKey:false})

export const carModel = model("cars",carSchema)