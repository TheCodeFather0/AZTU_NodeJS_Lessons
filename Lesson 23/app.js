import { readFile } from "fs";
import { createServer } from "http";

const readPage = (url,res) => {
  readFile(`./pages/${url}.html`, (err, data) => {
    res.write(data);
    res.end();
  });
};

const server = createServer((req, res) => {
  if (req.url === "/") {
    readPage('index', res);
  } else if (req.url === "/about") {
    readPage(req.url, res);
  } else if (req.url === "/contact") {
    readPage(req.url, res);
  } else {
    res.write("error page");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is active");
});
