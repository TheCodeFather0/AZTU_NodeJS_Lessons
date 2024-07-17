import { Router } from "express"

const users = [
    {id:'0',username:'TheCodeFather'},
    {id:'1',username:'AzadSkairipa'},
    {id:'2',username:'Senhan-debug'},
    {id:'3',username:'userNigar'},
    {id:'4',username:'TheCodeMother'},
    {id:'5',username:'HuseynT'},
    {id:'6',username:'UlviRasulov'},
    {id:'7',username:'RoyaM'},
    {id:'8',username:'omardev'},
]

export const usersRouter = new Router();

usersRouter.get("/",(req,res) => {
    res.status(200).json(users)
})

usersRouter.get("/:id",(req,res) => {
    const user = users.find(({id}) => id === req.params.id)
    if(user) {
        res.status(200).json(user)
    }else {
        res.status(404).json({message:`The requested resource could not be found on the server.`})
    }
})

