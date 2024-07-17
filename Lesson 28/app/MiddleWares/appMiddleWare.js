import { readFile, writeFile, writeFileSync } from "fs";

export const appMiddleWare = (req, res, next) => {
  readFile("./data.txt", (err, data) => {
    if (err) {
      writeFile("./data.txt", "0", (err) => {
        if (!err) {
          console.log("The resource has been successfully created");
        }
      });
      req.count = 0;
      next();
    } else {
      let count = +data.toString() + 1;
      writeFileSync("./data.txt", count.toString());
      req.count = count;
      next();
    }
  });
};
