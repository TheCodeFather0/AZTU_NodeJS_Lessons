// // const a = ""
// // const b = ''
// // const c = `${}`

// // for (let i = 0; i < user.length;i++) {
// //     console.log(user[i]);
// // }

// /*
//     1. pm,value ,immutable     -> 
//     2. npm,referans,immutable  ->


// */

// // const a = [1,2,3,4,5]
// // a[0] = 5;
// // console.log(a[0]);

// // let user = "ramin";
// // user[0] = "z"
// // console.log(user[0]);

// // for (let x in user) {
// //   user2 += user[x]
// // }
// // user2? -> n
// // user2? ->

// // strings are iterable

// // console.log(user[0]);
// // console.log(user[1]);
// // console.log(user[2]);
// // console.log(user[3]);
// // console.log(user[user.length - 1]);
// // ramin-2
// // +ramin
// // NaN-6

// /*
//     toUpperCase
//     toLowerCase

// */
// // const user = "ramin";
// // const upperUser = user.toUpperCase()
// // console.log(upperUser.toLowerCase());

// // const gender =  'q'
// // const name = 'Nigar';
// // if (gender.toLowerCase() === 'q') {
// //     console.log(`salam ${name} xanim`);
// // }else if (gender.toLowerCase() === 'k') {
// //     console.log(`salam ${name} bey`);
// // }else {
// //     console.log(`duzgun deyer daxil edin`);
// // }

// // case sensetive
// const user = "RöyaR";
// // const result = user.charAt(-3)
// // let result = user.orda('R')

// // funksiya yaziriq arqument olaraq bir soz ve bir herf alacaq,herf cumlede bir defe istifade edilibse ekrana cumlede 1 defe istifade edilib yazilsin,bir nece defe istifade edilibse ekrana bir nece istifade edilib yazilsin,eks halda istifade edilmeyib
// // findLetter(word,letter)
// // findLetter('salam','s') -> bir defe i.e
// // findLetter('salam','a') -> bir nece defe i.e
// // findLetter('salam','z') -> istifade edilmeyib.

// // const findLetter = (w,l) => {
// //     if (w.indexOf(l) === w.lastIndexOf(l) && w.indexOf(l) !== -1) {
// //         console.log('bir defe istifade edilib');
// //     }else if(w.indexOf(l) !== w.lastIndexOf(l)) {
// //         console.log('bir nece defe istifade edilib');
// //     }else {
// //         console.log('istifade edilmeyib');
// //     }
// // }

// // findLetter('amdina','s')

// // polindrom -> ana,ata,kök
// // const word = "ey babək kəbab ye";
// // let result = word.substr(5,2)

// // console.log(result);
// // console.log(word.replace("babək",'aydemir'));

// // const message = '      salaaam            '
// // let result = message.replaceAll("salam",'hello')
// // result = message.repeat(2)
// // console.log(message.trim());


// // const str1 = 'ata'
// // const str2 =  'sagol'
// // let result = str1.concat("-",str2)
// // console.log(result);

// // const car = 'bmw';
// // console.log(car.padStart(5,'*').padEnd(7,"*"));


// // let a = "sAlam olsun"
// // console.log(a.charCodeAt(1));


// const message = 'salam dostum men ejdaha developerem!'
// let gizliMesaj = ''
// for (let i = 0; i < message.length; i++) {
//     gizliMesaj += message.charCodeAt(i) + '-'
// }

// // let newMessage = '';
// // gizliMesaj.replaceAll('-',"")
// // for (let i = 0; i < gizliMesaj.length; i++) {
    
// // }

// html -> hyper text markup language

// console.log('salam heci');
// document.write("salam heci")

// const ad = prompt('adivi yaz brat');
// console.log(ad);





// const gender = prompt('enter your gender');
// const firstName = prompt('enter your first name');
// if (gender.toLowerCase() === 'q') {
//     console.log(`salam xanim ${firstName}`);
// }else if(gender.toLowerCase() === 'k' ) {
//     console.log(`salam cenab ${firstName}`);
// }else{
//     throw new Error("duzgun yaz bu xanani")
// }





const n1 = +prompt('birinci reqemi daxil edin');
const o = prompt('operatoru daxil edin');
const n2 = +prompt('ikinci reqemi daxil edin');
switch(o) {
    case '-':
        console.log(n1 - n2);
        break;
    case '+':
        console.log(n1 + n2);
}