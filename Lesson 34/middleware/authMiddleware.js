import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  // res.send("icaze yoxdur")
  const token = req.headers.authorization?.split(" ")[1];
  const secret_key = process.env.JWT_SECRET_KEY;
  if (!token) {
    res.send("please login")
  }
    
  jwt.verify(token,secret_key,(err,decode) => {
    if(err) {
        res.send("please login")
    }else {
        req.user = decode;
        next();
    }
  })
};
