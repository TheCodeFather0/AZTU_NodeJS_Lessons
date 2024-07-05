/*
    obj = {
        property:value
    }

    strgin
    number
    boolean
    null 
    undefined
    funksiya
*/
// constructor

/*
    Data Types
        primitive,value
            1. String
            2. Number
            3. Boolean
            4. undefined
            5. null

        non-primitive,reference
            6. object
*/
// let a = "salam"
// let b = 5;
// let c = false
// let d = {
//     ad:'Qoca'
// }

// const username = "Fidan"
// const username2 = "Raul"
// const is = false

// const user = {
//     ad:'Admin',
//     soyad:'Admin'
// }

// const user2 = {
//     ad:'Admin2',
//     soyad:'Admin2'
// }

// const a = {
//     ad:'Eldar'
// };
// const b = {
//     ad:'Eldar'
// };
// console.log(b === a);

// const a = {
//     ad:'Qoca'
// }
// const b = a;
// a.ad = "Samir"

// console.log(a === b);
// console.log("a: ",a.ad); //samir
// console.log("b: ",b.ad);

// const user1 = {
//     ad:'Samir',
//     soyad:'Quliyev',
//     yas:12
// }

// const user2 = user1

// user2.ad = "Eldeniz"
// user1.yas = 18
// user2.soyad = "Vaqif"

// console.log(user1);
// console.log(user2);
// 0554707372

// const user = {
//     ad:'Ramin',
//     soyad:'Mammadzada',
//     yas:56,
//     sahe:'development',
//     hobbi:'ps-3',
//     computer:'hp',
//     ayaqabi:null,
//     avto:'e320',
//     key:'salam',
// }

// for (let key in user) {
// console.log(user[key]);
// }

// const a = 'ad'
// console.log(user['avto']);

const data = {
  ad: "Ramin",
  soyad: "Mammadzada",
  yas: 23,
};

// for (let key in data) {
//   console.log(key + " - " + data[key]);
// }

// ad - ramin
// soyad - mammadzada
// yas - 23

/*
    referans ile birlikde
    sadece deyeri kopyalamaq
 */

// const user2 = Object.assign({},user1);
// const user2 = {...user1}
// user2.yas = 45

// user2 = {
//     ad: "Ramin",
//     soyad: "Mammadzada",
//     yas:56
//   };

// for (let key in user1) {
//     user2[key] = user1[key]
// }
// user1.ad ='eldar'
// console.log("user1 :",user1);
// console.log("user2 :",user2);

// ...
// rest operatoru
// spread
// function a(salam,...numbers){
//     console.log(numbers);
// }
// a(1,2,3,4)

// const user1 = {
//   ad: "Ramin",
//   soyad: "Mammadzada",
//   yas: 56,
// };

// const user2 = {};

// const copyObj = (obj1,obj2) => {
//     for (let key in obj1) {
//         if (key !== 'yas') {
//             obj2[key] = obj1[key]
//         }
//         obj2.yas = 34
//     }
// }
// copyObj(user1,user2)
// delete user2.ad
// console.log(user2);




// const ramin = {
//     ad:'Ramin',
//     soyad:'Mammadzada',
//     yas:23
// }

// const qoca ={
//     ad:'Qoca',
//     soyad:'Qoca',
//     yas:123
// }

// const emil = {
//     ad:'Emil',
//     soyad:'developer',
//     yas:undefined
// }



// constructor
function User(name,surname,age){
    this.ad = name
    this.soyad  = surname
    this.yas = age
    this.fullName = function(){
        return this.ad + " " + this.soyad
    }
}
const ramin = new User("Ramin","Mammadzada",23)
const qoca = new User("Qoca","Avtosh",12)
/*
    1. constructor yaradin -> markaAndModel,speed,gas,brake
    2. gas ve brake metod olacaq
    3. gas funksiyasini cagiranda suret 10 artmalidir ve ekranda gorsenmelidir
    4. brake funksiyasini cagiranda suret 10 azalmalidir ve ekranda gorsenmelidir
    5. suret 0dan asagi duse bilmez
    6. suret 50den qalxa bilmez
    7. duuut duuut,avtomobil dayanib
    8. 3 ferqli obyekt yaradin
*/









// console.log("ramin: ",ramin.fullName());
// console.log("qoca: ",qoca);