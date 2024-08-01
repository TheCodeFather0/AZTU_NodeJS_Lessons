import path from "path";
import { Router } from "express";
import { userModel } from "../Schema/userSchema.js";
import { upload } from "../utils/multer.js";
import { hashSync } from "bcrypt";

const appRoutes = new Router();

// get requests
appRoutes.get("/", (req, res) => {
  res.sendFile(path.resolve("./frontend/index.html"));
});

appRoutes.get("/users", (req, res) => {
  res.sendFile(path.resolve("./frontend/users.html"));
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

export default appRoutes;
