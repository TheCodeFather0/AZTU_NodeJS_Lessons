import bcrypt from "bcrypt";
import userModel from "../Schema/UserSchema.js";
import jwt from "jsonwebtoken";

export const loginService = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email });
  const secret_key = process.env.JWT_SECRET_KEY;

  if (user) {
    const isCorrect = bcrypt.compareSync(password, user.password);
    if (isCorrect) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 30,
          email: user.email,
          username: user.username,
        },
        secret_key
      );

      res.send({ email: user.email, username: user.username, token });
    } else {
      res.send("password is incorrect");
    }
  } else {
    res.send("invalid credentials");
  }
};
