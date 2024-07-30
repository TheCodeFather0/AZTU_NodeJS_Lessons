import path from 'path'
import express from 'express'
import upload  from './utils/multer.js'

const app = express()

app.get('/',(req,res) => {
    res.sendFile(path.resolve('./index.html'))
})


app.post("/register",upload.single("profilSekli"),(req,res) => {
    res.send(req.body)
})



app.listen(5050,() => {
    console.log('server is up');
})