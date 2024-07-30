import express from 'express';
import { authMiddleware } from './middlewares/auth.js';
import { protectedRoute } from './Routers/protectedRoutes.js';
import { usersRoutes } from './Routers/usersRoutes.js';

const app = express();

app.get('/',(req,res) => {
    res.send('proqrama xos gelmisiniz,gizli datalar ucun /private url-ne kecid edin'
    )
})

app.get("/salam",(req,res) => {
    res.send("tutaqki eleykim")
})

app.use('/',protectedRoute)






app.listen(5050)