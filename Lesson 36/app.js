const endpoint = "https://jsonplaceholder.typicode.com/users";
// fetch(endpoint).then((res) => {
//     return res.json()
// }).then(data => {
//     console.log(data);
// })

const getData = async () => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return data
};


const writeData  = async() => {
    const data = await getData()
    console.log(data);
}

writeData()