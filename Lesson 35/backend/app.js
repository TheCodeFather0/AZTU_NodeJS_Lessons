import express from 'express'
import appRoutes from './routes/appRoutes.js';

const app = express();
app.use(express.static("./public"))

app.use("/",appRoutes)


app.listen(5050,() => {
    console.log('server is up');
})