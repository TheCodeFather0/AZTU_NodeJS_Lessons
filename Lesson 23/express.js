import express from "express";
import path from "path";
import { users } from "./data.js";

const server = express();

server.get("/", (req, res) => {
  res.sendFile(path.resolve("./pages/index.html"));
});

server.get("/about", (req, res) => {
  res.sendFile(path.resolve("./pages/about.html"));
});

server.get("/contact", (req, res) => {
  res.sendFile(path.resolve("./pages/contact.html"));
});

server.get("/users", (req, res) => {
  res.json(users);
  res.end()
});

server.get("/*", (req, res) => {
  res.sendFile(path.resolve("./pages/error.html"));
});

server.listen(3000, () => {
  console.log("server is up on");
});
