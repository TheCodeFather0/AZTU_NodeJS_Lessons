import { readFileSync, writeFileSync } from "fs";

export const getData = () => {
  let data = readFileSync("./db/data.db");
  data = JSON.parse(data.toString());
  return data;
};

export const writeData = (data) => {
  writeFileSync("./db/data.db", JSON.stringify(data, null, 2));
};
