import { createReadStream, createWriteStream } from 'fs'
import inquirer from 'inquirer'
import { userInfo } from 'os';

// const reader = createReadStream('./files/data.txt', {
//     highWaterMark: 2
// });

// const writer = createWriteStream('./newData.txt', {
//     highWaterMark: 2
// })

// reader.on('data', function (chunk) {
//     writer.write(chunk, () => {
//     })
// });

//----------------------------------------------------------------

// inquirer.prompt([{
//     name:"name",
//     type: 'input',
//     message: "adin nedir? "
// },
// {
//     type: "password",
//     message: 'sifreniz: ',
//     mask:true,
//     name:"password"
// }]).then((answers) => {
//     if (answers.password === '12345') {
//         console.log(`Xos geldin ${answers.name}`)
//     };
// }
// )

//----------------------------------------------------------------

const data = [
    {
        ad: "User",
        soyad: "Useroglu",
        finkod: "12345",
        dogumTarixi: "12/08/7821",
        dogulduguYer: "Uganda"
    },
    {
        ad: "İstifadeci",
        soyad: "İstifadeciOglu",
        finkod: "98765",
        dogumTarixi: "98/76/4324",
        dogulduguYer: "Madagascar"
    }
]

inquirer.prompt([
    {
        type: "input",
        name: "fincode",
        message: "finkodu yazın"
    }
]).then((cavablar) => {
    const currentUser= data.find(({finkod}) => finkod === cavablar.fincode) 
    if(currentUser) {
        console.log(currentUser);
    }else{
        console.log('error');
    }
})