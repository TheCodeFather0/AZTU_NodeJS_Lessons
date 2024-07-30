import express from "express";
import dotenv from "dotenv";
import { DBConntect } from "./utils/connectDb.js";
import { registerService } from "./Services/Register.js";
import { loginService } from "./Services/loginService.js";
import { authMiddleware } from "./middleware/authMiddleware.js";

const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("ana sehife");
});
app.get("/profile", authMiddleware, (req, res) => {
  res.send(req.user);
});

app.post("/register", registerService);
app.post("/login", loginService);

app.listen(5050, () => {
  console.log("server is up");
  DBConntect();
});
