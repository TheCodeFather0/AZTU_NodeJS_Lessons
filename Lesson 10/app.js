// massiv
// ?const students = ['Fidan','Nigar','Miri','Senhan','Ulvi','Natiq','Omar',[1,2,3],{name:'Nigar'},false]

// for(let i = 0; i < students.length;i++) {
//     console.log(students[i]);
// }
// for (let i of a) {
//     console.log(i);
// }

// console.log(typeof students);

// FIFO -> FIRST IN FIRST OUT
// LIFO -> LAST IN FIRST OUT

/*
    push
    pop

    unshift
    shift

*/
const students = ["Fidan", "Nigar", "Roya"];
students.push("Eldeniz");
students.pop();
students.pop();
students.shift();
students.unshift("Fidan");
// console.log(students);

// const matrix = [0,1,3,4,4,55,6,57,5,4,43,43,432,4];
// matrix.length = 2;
// matrix[6] = 2
// console.log(matrix);
// //
// function a(...numbers){
//     console.log(numbers);
// }
// a(1,2,32,43,43,4,3,3)

// students[0] = 'Ramin'
// console.log(...students);

// const a  = '5'
// const b  = 5
// console.log(a == b);
// console.log(a === b);
// let result = students.toString()
// console.log(result);

// const str = 'salam-olsun-yaxsi-developerlere';
// let result = str.split("-")
// console.log(result);

// const checkEmail = (email) => {
//   const splittedEmail = email.split("@")
//   if (splittedEmail.length == 2) {
//     const splittedExtention = splittedEmail[1].split(".");
//     if (splittedExtention.length == 2) {
//       console.log("OK");
//     } else {
//       console.log("zehrimari duz yaz!");
//     }
//   }
// };
// checkEmail("mammadovramin02@gmail.com");

// const email = "mammadovramin02@gmail.com"
// console.log(email.split('@').join('-'));


// students.push('Roya')
// students.push("Miri")

// const deletedStudenst = students.splice(1,0,"Ramin","Omar")

// console.log(deletedStudenst);
// console.log(students);
// const ad = 'Ramin';
// console.log(ad.split("").join("-"));

// const matrix = [
//     [1,2,3],
//     [4,5,6]
// ]
// const test = matrix.flat()
// console.log(test);

// console.log(Math.min(...['32,31,34,36,31'].split(",")));
console.log(`${2+2}`);