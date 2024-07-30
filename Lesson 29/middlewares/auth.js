export const authMiddleware = (req,res,next) => {
    const myToken = 'test123'
    const token = req.headers.authorization.split(" ")[1]

    if (token === myToken){
        next()
    }else {
        res.status(401).send("brat senin tokenin yoxdur!")
    }
}