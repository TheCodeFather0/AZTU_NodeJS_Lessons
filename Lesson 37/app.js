import express, { urlencoded } from 'express'
import appRouter from './routers/appRotues.js'
import { connect } from 'mongoose'


const CONNECTION_STRING = 'mongodb+srv://mammadovramin02:f4H3RTc9KDK7Ohwb@cluster0.to2uzu8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(express.json())
app.use(express.static('./public'))
app.use(express.urlencoded())
app.use("/",appRouter)


app.listen(5050,() => {
    console.log('server is up');
    connect(CONNECTION_STRING).then(() => {
        console.log('mongo db connected');
    })
})