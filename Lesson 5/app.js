// DRY -> Don't repeat yourself

// const calculator = (n1, n2, operator) => {
//   let result = "";

//   if (!isNaN(n1) && !isNaN(n2)) {
//     switch (operator) {
//       case "+":
//         result = `${n1} + ${n2} = ${n1 + n2}`;
//         break;
//       case "-":
//         result = `${n1} - ${n2} = ${n1 - n2}`;
//         break;
//       case "*":
//         result = `${n1} * ${n2} = ${n1 * n2}`;
//         break;
//       case "/":
//         result = `${n1} / ${n2} = ${n1 / n2}`;
//         break;
//       default:
//         result = "duzgun operator daxil edin...";
//     }
//   } else {
//     result = "reqemleri duzgun daxil edin...";
//   }
//   return result
// }

// console.log(calculator("s", 4, "+"));
// console.log(calculator(5, 6, "-"));

// function sayHello(user="ey beni adem!"){
//     // argument
//     const message = "salam " + user
//     console.log(message);
// }

// sayHello("Sanhan"); //parameter
// sayHello("Roya");
// sayHello();

// isTruethy bu adda funksiya yaziriq
// bir arqument alir
// arqument truethy deyerdirse consola ok deyilse error yazilsin
// Boolean("salam") ->
// Boolean(null) ->

// function isTruethy(parameter){
//     let message = parameter ? "ok" : 'error'
//     console.log(message);
// }

// isTruethy("Hello")
// isTruethy()

/*
    1. function declaration
    2. function expression
    3. anonym function
    4. arrow function

*/
// function sayHello(user){
//     console.log('salam ' + user);
// }
// function declaration

// const sayHello = function(){}; //function expression
// const sayHello = () => {}

// let a = "salam" // string expression
// let n = 5; // number expression
// let b = true // boolean expression

// hoisting
// a()

// function a(){
//     console.log('i am function');
// }

// function sayHello() {
//   return 5 * 5;
// }
// const a = sayHello();
// console.log(a);

// enBoyukReqem.Bu funksiya bizden 2 arqument alacaq,bu arqumentlerden en boyuyunu geri qaytaracaq.Function arrow olacaq,geri qaytaracaq deyirikse return olacaq.

const enBoyukeded = (a, b) => {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "beraberdirler";
  }
};
 console.log(enBoyukeded(9,8))
