import path from "path";
import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const { token } = req.params;
  jwt.verify(token, "nodejs", (err, decode) => {
    if (err) {
      res.sendFile(path.resolve("./views/loginerror.html"));
    } else {
      req.user = decode.user;
      next();
    }
  });
};
