import express from "express";
import dotenv from 'dotenv'
import { users } from "./db.js";

dotenv.config();
const app = express();
const {env:{NODE_PORT:port}} = process

app.get('/users/:id',(req,res)=>{
    const data = users.find(({id}) => id == req.params.id)
    console.log(res.statusCode);
    if (data) {
        res.json(data)
    }else{
        res.send('bele bir id tapilmadi...')
    }
})

app.get("/users",(req,res) => {
    const splittedUrl = req.url.split("?")
    if(splittedUrl.length > 1) {
        const [key,value] = splittedUrl[1].split('=')
        const data = users.find((user) => user[key] === value) 
        if(data) {
            res.json(data)
        }else {
            res.send("sorguya cavab tapilmadi")
        }
    }
    res.json(users)
})

app.listen(port,() =>{ 
    console.log(`server is up on ${port}`);
})
