import express from 'express'
import { connect } from 'mongoose'
import appRouter from './routers/appRotues.js'


const CONNECTION_STRING = 'mongodb+srv://mammadovramin02:f4H3RTc9KDK7Ohwb@cluster0.to2uzu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(express.json())
app.set("view engine","ejs")
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))
app.use("/",appRouter)


app.listen(5050,() => {
    console.log('server is up port 5050');
    connect(CONNECTION_STRING).then(() => {
        console.log('mongo db connected');
    })
})