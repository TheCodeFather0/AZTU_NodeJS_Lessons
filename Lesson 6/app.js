// callback
// const checkAge = (ad, yas, success, error) => {
//     yas >= 18 ? success(ad) : error();
// };
// const successFunc = (ad) => {
//   console.log(`hormetli ${ad},partiye xos gelmisiniz`);
// };
// const errorFunc = () => {
//   console.log("yasiniz catmir");
// };
// checkAge("Ramin", 19, successFunc, errorFunc);

// evi satin almaq ucun funksiya yaziriq,bizden 4 parametr alir
// budce,evinqiymeti,succes,error
// eger budce evin qiymetinden azdirsa error funksiyasi cagrilacaq
// eger budce evin qiymetinden coxdursa success funksiyasi cagrilacaq

const ad = "Azad";
const soyad = "Musayev";
const age = 12;
const isHaveCar = false;
const job = "alverci";

const car = {
  marka: "mercedess",
  model: "E320",
  year: 2001,
  engine: 3200,
  gettFullInfo: function () {
    const message = `${this.marka} ${this.model} ${this.year}`;
    console.log(message);
  },
};
//  metod
// // bind
// car.gettFullInfo();

//  bank karti haqqinda obyekt yaradin
/*
    propertyler 
        fullname -> ad soyad
        kartnumber -> 234567890
        pincode -> 1234
        balance -> balans


    metodlar
        withdraw -> pul cekmek ucun,arqument olaraq reqem alacaq,eger balansda pul varsa mene pulu verecek ve balansdan cixacaq,yoxdursa balansinizda kifay. qed. ves. yoxdur deyecek

        refill -> refill metodu bir arqument alcaq,aldigi pulu balansin uzerine gelecek,bu metod kartin balansini artirmaq ucundur,=



*/

const card = {
  fullname: "Ramin Mammadzada",
  kartnumber: 1234567890,
  pincode: 1234,
  balance: 1200,
  withdraw:function(n){
    if (this.balance >= n) {
        this.balance = this.balance - n;
        console.log(`emeliyyat ugurla basa catdi,balansiniz ${this.balance}`);
    }else{ 
        console.log('omru boyu tenha yasa ay kasib oglan🚬');
    }
  },
  refill:function(n){
    this.balance += n
    console.log(`emeliyyat ugurla basa catdi,balansiniz ${this.balance}`);
  }
};

card.withdraw(1100)
card.refill(200)
