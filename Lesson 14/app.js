// // xml
// // json -> js object notation

// const user = {
//   firstName: "Ramin",
//   lastName: "Mammadzada",
//   department: "Development",
//   isHaveCar: false,
//   age: 23,
//   computer: null,
//   notebook: undefined,
//   getAllName: function () {
//     return this.firstName;
//   },
// };
// const data = JSON.stringify(user, null, 2);
// // const obj = JSON.parse(data);
// console.log(data);

// abstraksiya
// endpoint -> son noqte

// XHR -> XML HTTP REQUEST
// const url = "https://jsonplaceholder.typicode.com/users";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", url);
// xhr.send();

// xhr.onreadystatechange = (e) => {
//   const { readyState, responseText } = xhr;
//   if (readyState === 4) {
//     const data = JSON.parse(responseText);

//     data.forEach((obj) => {
//       console.log(obj);
//     });
//   }
// };

// what is promise?

// 1. pending
// 2. fullfilled
// 3. rejected

/*
    http request

    1. GET -> datani getirmek ucundur
    2. POST -> yeni data elave etmek ucundur
    3. DELETE -> datani silmek ucundur
    4. PUT -> deyisdirmek ucundur
    5. PATCH -> deyisdirmek ucundur
*/

// const newPromise = new Promise((resolve, reject) => {
//   resolve({
//     firstName: "Ramin",
//     lastName: "Mammadzada",
//   });
// });

// newPromise.then((value) => {
//   console.log(value);
// });

// a
// b
// c

// const a = async () => {
//     await
// }

const url = "https://jsonplaceholder.typicode.com/users";
// const cards = document.getElementById("cards");
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach(({ name, username, email }) => {
//       cards.innerHTML += `<div class="card">
//         <h2>${username}</h2>
//         <h2>${name}</h2>
//         <h2>${email}</h2>
//       </div>`;
//     });
//   });

// username
// name
// email

axios(url).then(({ data }) => {
  console.log(data);
});
