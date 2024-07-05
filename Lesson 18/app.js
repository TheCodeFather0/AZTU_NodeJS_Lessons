import chalk from "chalk";
import {
  readFile,
  readFileSync,
  writeFile,
  writeFileSync,
  renameSync,
  linkSync,
  unlinkSync,
  write,
} from "fs";

// // const yazilar = readFileSync("./data.txt");
// readFile("./data.txt", (err, data) => {
//   if (err) {
//     console.log(chalk.red("brat nese sef var..."));
//   } else {
//     console.log(chalk.green("fayl oxundu..."));
//     console.log(data.toString());
//   }
// });

// writeFileSync("./data.txt", "men geldim!");
// writeFileSync("./data.txt", "\n node ejdaha", {
//   encoding: "utf-8",
//   flag: "a",
// });

// append

// const a = readFileSync("./data.txt", {
//   encoding: "utf-8",
// });
// console.log(a.toString());

// const message = "salam olsun yaxsi qardasalara....";
// writeFile("./data2.txt", message, (err) => {
//   if (err) {
//     console.log("error var...");
//   } else {
//     console.log("fayl ugurla yaradildi...");
//   }
// });

// 1. yeni fayl yaradib icerisine elifbadaki herfleri yazidirin
// 2. vurma cedvelini yeni bir fayl yaradib ora yazdirin

// renameSync("./data.txt", "/yaxsiqardas.txt");
// linkSync("./data2.txt", "salam");

// linkSync("./data.txt", "new.txt");
// unlinkSync("./new.txt");

// npm init -y

// console.log(String.fromCharCode());

let boyukHerfler = [];
let kicikHerfler = [];
for (let i = 65; i < 91; i++) {
  kicikHerfler.push(String.fromCharCode(i + 32));
  boyukHerfler.push(String.fromCharCode(i));
}

writeFileSync("./alphabet.txt", kicikHerfler.join("-"));
writeFileSync("./alphabet.txt", "\n" + boyukHerfler.join("-"), {
  flag: "a",
});
