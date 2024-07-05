// OOP -> OBJECT ORIENTED PROGRAMMING

// function User(ad, soyad, yas) {
//   this.firstName = ad;
//   this.lastName = soyad;
//   this.age = yas;
// }

// User.prototype.getFUllName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// const user1 = new User("Ramin", "Mammadzada", 23);

// user1.getFUllName();

// const boySkill = {
//   bosDanismaq: true,
//   dersOxumaq: true,
//   imtahanQorxusu: null,
//   pes13: true,
//   domino: true,
// };

// const girlSkill = {
//   susmamaq: true,
//   dersOxumaq: false,
//   imtahanQorxusu: undefined,
//   derseGelmek: null,
// };

// const ramin = {
//   firstName: "Ramin",
//   lastName: "Mammadzada",
//   age: 12,
//   getFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// const fidan = {
//   firstName: "Fidan",
//   lastName: "Mensimova",
//   age: 9,
// };

// ramin.getFullName.apply([]);

// ramin.__proto__ = boySkill;
// fidan.__proto__ = girlSkill;

// console.log(Math.max.apply(null, [1, 23, 54, 4, 65, 65, 6, 34, 3]));

// function User(ad, soyad, yas) {
//   this.firstName = ad;
//   this.lastName = soyad;
//   this.age = yas;
// }

// ES6
// getter
// class User {
//   constructor(ad, soyad, yas) {
//     this.fName = ad;
//     this.lName = soyad;
//     this.age = yas;
//   }

//   get fullName() {
//     console.log(this.fName + " " + this.lName + " " + this.age);
//   }

//   set _fName(ad) {
//     this.fName = ad;
//   }

//   set _age(yas) {
//     this.age = yas;
//   }

//   set _lName(soyad) {
//     this.lName = soyad;
//   }
// }

// const user1 = new User("Ramin", "Mammadzada", 23);
// user1._fName = "Adem";
// user1._age = 10;
// user1._lName = "Quliyev";

// user1.fullName;

// function Car(marka, model, year) {
//   this.marka = marka;
//   this.model = model;
//   this.year = year;
//   this.speed = 0;

//   this.gazVer = function () {
//     this.speed += 10;
//     console.log(this.speed + "🚀");
//   };
//   this.dayan = function () {
//     this.speed = 0;
//     console.log("avtomobil dayandi");
//   };

//   this.yavasla = function () {
//     if (this.speed !== 0) {
//       this.speed -= 10;
//       console.log(this.speed + "🚀");
//     } else {
//       console.log("dayanibda da el cek!");
//     }
//   };
// }

// class Car {
//   constructor(marka, model, year) {
//     this.marka = marka;
//     this.model = model;
//     this.year = year;
//     this.speed = 0;
//   }

//   set gazVer(limit) {
//     this.speed += limit;
//     console.log(this.speed);
//   }

//   dayan() {
//     this.speed = 0;
//     console.log("masin dayandi");
//   }

//   set yavasla(limit) {
//     if (this.speed - limit <= 0) {
//       this.speed = 0;
//       console.log("yavas ol karobka dagildi");
//     } else {
//       this.speed -= limit;
//     }
//     console.log(this.speed);
//   }
// }

// const QOCANIMASINI = new Car("Mercedess", "E320", 2001);
// console.log(QOCANIMASINI);
// console.log("-------------------------------------------");
// QOCANIMASINI.gazVer = 20;
// QOCANIMASINI.gazVer = 20;
// QOCANIMASINI.gazVer = 10;
// QOCANIMASINI.dayan();
// QOCANIMASINI.yavasla = 20;
// QOCANIMASINI.gazVer = 20;
// QOCANIMASINI.gazVer = 20;
// QOCANIMASINI.gazVer = 20;
// QOCANIMASINI.gazVer = 20;
// QOCANIMASINI.yavasla = 60;
// QOCANIMASINI.yavasla = 30;

// class Human {
//   constructor(ad, soyad, department, car, comp, yas) {
//     this.FNAME = ad;
//     this.LNAME = soyad;
//     this.AGE = yas;
//     this.DEPARTMENT = department;
//     this.CAR = car;
//     this.COMP = comp;
//   }
// }

// class Human2 extends Human {
//   constructor(ad, soyad, department, car, comp, age) {
//     super(ad, soyad, department, car, comp, age);
//   }
// }

// const r1 = new Human("ramin", "mammadzada", "development", null, undefined, 12);
// const r2 = new Human2("adem", "alizade", "avara", "07", undefined, 11);
// console.log(r1);
// console.log(r2);

// class Product {
//   constructor(ad, qiymet) {
//     this.ad = ad;
//     this.qiymet = qiymet;
//   }
// }

// class DProduct extends Product {
//   constructor(ad, qiymet, dis) {
//     super(ad, qiymet);
//     this.endirim = dis;
//   }
// }

// const qelem = new Product("qelem", 0.1);
// const defter = new DProduct("defter", 0.5, 0.1);
// console.log(qelem);
// console.log(defter);

class A {
  constructor(ad) {
    this.ad = ad;
  }

  static getTemp() {
    console.log("30 derece isti var");
  }
}

A.getTemp();
