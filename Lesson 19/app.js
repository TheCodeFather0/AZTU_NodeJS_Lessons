import {
  appendFile,
  appendFileSync,
  link,
  linkSync,
  mkdir,
  rmdir,
  unlink,
  writeFile,
} from "fs";

// const qovluqYarat = (qovluqAdi) => {
//   mkdir(qovluqAdi, (err) => {
//     if (err) {
//       console.log("nese xeta bas verdi");
//     } else {
//       console.log("qovluq ugurla yaradildi");
//     }
//   });
// };

// // qovluqYarat("../../TEST");

// const deleteFolder = (folderName) => {
//   rmdir(folderName, (err) => {
//     if (err) {
//       console.log("nese xeta bas verdi");
//     } else {
//       console.log("qovluq ugurla silindi");
//     }
//   });
// };
// deleteFolder("../../TEST");

// console.log(process.argv);

const arr = process.argv;
console.log(process.argv);
const command = arr[2];
const folderName = arr[3];

if (command === "createFol") {
  mkdir(folderName, (err) => {
    if (err) {
      console.log("nese xeta bas verdi");
    } else {
      console.log("qovlug ugurla yaradildi");
    }
  });
} else if (command === "delFol") {
  rmdir(folderName, (err) => {
    if (err) {
      console.log("nese xeta bas verdi");
    } else {
      console.log("qovlug ugurla silindi");
    }
  });
}
// linkSync("test.txt", "test2.txt");
// appendFileSync("test.txt", "salam olsun");
