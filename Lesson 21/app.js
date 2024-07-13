import { number } from "@inquirer/prompts";
import chalk from "chalk";
import inquirer from "inquirer";

const numbers = Array.from(
  { length: 5 },
  () => Math.floor(Math.random() * 100) + 1
).join("-");

inquirer
  .prompt({
    type: "input",
    name: "username",
    message: "nick name daxil edin: ",
  })
  .then(({ username }) => {
    console.log(`hormetli ${username}, oyun basladi...`);
    console.log("reqemler: ", numbers);

    setTimeout(() => {
      console.clear();
      inquirer
        .prompt({
          type: "input",
          name: "userChoices",
          message: "reqemleri oldugu formada yazin: ",
        })
        .then(({ userChoices }) => {
          if (userChoices === numbers) {
            console.log(chalk.green(`${username} siz ejdahasiniz!`));
          } else {
            console.log(chalk.red("omega3 var tanis aptekde!"));
            console.log(chalk.yellow(`duzgun cavab: ${numbers} idi`));
          }
        });
    }, 5000);
  });
