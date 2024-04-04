#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
const myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        message: "Type your pin code",
        type: "number",
        name: "pin",
    },
]);
if (pinAnswer.pin === myPin) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast amount selection"]
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        console.log(`Your current balance is : ${myBalance}`);
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount "
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is : " + myBalance);
        }
        else {
            console.log("Insuficient balance");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your balance is : " + myBalance);
    }
    else if (operationAns.operation === "Fast amount selection") {
        console.log(`Your current balance is : ${myBalance}`);
        let fastCashSelection = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select one of the following :",
                type: "list",
                choices: ["500", "1000", "2000", "4000", "8000",]
            }
        ]);
        myBalance -= fastCashSelection.fastCash;
        console.log("Your remaining balance is : " + myBalance);
    }
}
else {
    console.log("Incorrect pin code");
}
