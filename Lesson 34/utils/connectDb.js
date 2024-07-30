import mongoose from "mongoose";

export const DBConntect = () => {
    mongoose.connect(process.env.CONNECTION_STRING).then(() => {
        console.log('connected mongodb');
    })
}