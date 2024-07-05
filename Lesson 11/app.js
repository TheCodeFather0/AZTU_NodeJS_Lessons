// ES6

// 1. foreach
// 2. map -> orjinal massivi deyismir,geriye massiv qaytarir ve elementleri deyismek ucundur
// 3. filter -> orjinali massivi deyismir,geriye massiv qaytarir ve elementleri verdiyimiz setde gore filter edib bize geriye qaytarir
// 4. every -> eger verdiyimiz serti butun elementler odeyirse geriye true yoxsa false
// 5. some -> eger serti elementlerden biri bele odese true eks halda false qaytarir
// 6. sort -> geriye massiv qaytarir amma bu massiv sort olunmus versiyada,orjinal massivi deyisir





const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const students = ["Fidan", "Roya", "Nigar"];

// students.forEach((student,index,arr) => {
//     console.log(`${index}: ${student}`);
//     console.log(arr);
// });

// number = numbers.map((number) => number ** 2);
// console.log(doubleNumbers);
// console.log(numbers);


// const ulduzluTebeleler = students.map(student => {
//     return '**_' + student + '_**'
// })
// console.log(ulduzluTebeleler);


// const newStud = students.filter((student) => student.length > 4 )
// console.log(newStud);



// const boyukdur5 = numbers.filter(n => {
//     // if (n > 5) {
//     //     return n
//     // }

//     // return n > 5 ? n : null
//     // return n > 5 && n
//     return n < 5
// })
// console.log(boyukdur5);
// 4.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.
// menfilerden ibaret bir massiv yaradirsiz,sonra hemin massivi yoxlayirsiniz eger bosdursa ekrana bosdur deyilse reqemler cixmalidir



// const getNegativeNumbers = (arr) =>  {
//     const menfiler = numbers2.filter(n => n < 0)
    
//     if (menfiler.length > 0) {
//         console.log(menfiler);
//     }else {
//         console.log('listde menfi reqem yoxdur...');
//     }
// }
// getNegativeNumbers(numbers2)


// const numbers2 = [2,3,4,54,5,4,33,43,45,43,-1]
// const isPositive = numbers2.some(n => n < 0);
// console.log(isPositive);



// console.log(djamaat);

// const alpabeticDjamaat = djamaat.sort()

// console.log(djamaat);


// // 1,2,4,11,22,28,33,45
// nums.sort((a,b) => a - b);
// console.log(nums);

// const nums = [1,2,33,11,22,28,45,4,-4]
// const cem = nums.reduce((a,b) => {
//     return a > b ? a : b
// })
// console.log(cem);


// reduce(() => )

// const djamaat = ['Adil','Qoca','Azad','Miri','Beyrek','Camal']
// let enUzunAd  = djamaat.reduce((a,b) => {
//     return a.length > b ? a : b
// },'')
// console.log(enUzunAd);
