#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magentaBright("Welcome to the Eraj's Number Guessing Game"))

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
   { 
    name: "UserGuessedNumber",
    type: "number",
    messsage: "Please Guess a Number between 1 to 5: ",
},
]);

if(answer.UserGuessedNumber === randomNumber) {
    console.log(chalk.green("Congratulations ! You Guessed a Correct Number."));
}
else{
    console.log(chalk.red("Sorry ! You Guessed a Wrong Number"));
}