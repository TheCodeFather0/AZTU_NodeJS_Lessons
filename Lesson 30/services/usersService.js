import { ObjectId } from "mongodb"
import { client } from "../utils/connectDB.js"

export const getAllUsers = async (req,res) => {
    const users = await client.db('sample_mflix')
    .collection("users")
    .find()
    .toArray()

    res.json(users)
}

export const getUserById = async (req,res) => {
    const id = req.params.id;
    const user = await client.db('sample_mflix')
    .collection("users")
    .findOne({
        _id:new ObjectId(id)
    })

    res.json(user)
}