import path from "path";
import { Router } from "express";
import { userModel } from "../Schema/userSchema.js";
import { upload } from "../utils/multer.js";
import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

const appRoutes = new Router();

// get requests
appRoutes.get("/", (req, res) => {
  res.sendFile(path.resolve("./frontend/index.html"));
});

appRoutes.get("/users", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const secret_key = process.env.JWT_SECRET;
  jwt.verify(token, secret_key, (err, decode) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

appRoutes.get("/login", (req, res) => {
  res.sendFile(path.resolve("./frontend/login.html"));
});

appRoutes.get("/register", (req, res) => {
  res.sendFile(path.resolve("./frontend/register.html"));
});

// post requests
appRoutes.post("/register", upload.single("avatar"), async (req, res) => {
  const { username, email, password } = req.body;
  const { filename: avatar } = req.file;
  const hassedPass = hashSync(password, 10);

  const isExistUsername = await userModel.findOne({ username });
  const isExistEmail = await userModel.findOne({ email });

  if (!isExistUsername && !isExistEmail) {
    const data = { username, email, password: hassedPass, avatar };
    userModel
      .create(data)
      .then(() => {
        res.status(200).send("register is successfully");
      })
      .catch((err) => {
        if (err) {
          res.status(400).send("something went rong");
        }
      });
  } else {
    res.status(400).send("username or email are alreayd exist");
  }
});

appRoutes.post("/login", async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  const secret_key = process.env.JWT_SECRET;

  if (user) {
    const isValidPassword = compareSync(req.body.password, user.password);
    if (isValidPassword) {
      const token = jwt.sign(
        {
          email: req.body.email,
          username: req.body.username,
          exp: Math.floor(Date.now() / 1000) + 60,
        },
        secret_key
      );
      res.send({
        email: user.email,
        password: user.password,
        token: token,
      });
    } else {
      res.send("invalid password");
    }
  } else {
    res.status(404).send("bele bir istifadeci tapilmadi");
  }
});

export default appRoutes;
