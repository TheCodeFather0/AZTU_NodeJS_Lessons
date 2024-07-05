import { createReadStream, createWriteStream } from "fs";
import { Transform } from "stream";

const fileName = createReadStream("./data.txt", {
  encoding: "utf-8",
});
const _writeFile = createWriteStream("./data3.txt");

const basherfleriboyut = new Transform({
  transform(chunk, encoding, cb) {
    cb(null, CapitalizeWord(chunk.toString()));
  },
});

const CapitalizeWord = (txt) => {
  return txt
    .split(" ")
    .map((w) => w.toLowerCase().replace(w[0], w[0].toUpperCase()))
    .join(" ");
};

fileName.pipe(basherfleriboyut).pipe(_writeFile);

fileName.on("end", () => {
  console.log("oxunma ugurla basa catdi");
  console.log("yazdirilir...");
  _writeFile.end();
});

_writeFile.on("finish", () => {
  console.log("yazdirilma ugurla tamamlandi");
});
