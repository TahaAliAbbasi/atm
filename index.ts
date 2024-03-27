#! /usr/bin/env node

import inquirer from "inquirer";
const myPin = 1234
let myBalance= 10000


let pinanswer =await inquirer.prompt(
[
    {
        name : "pin",
        message : "enter your pin",
        type :"number",
    },
]
);
if (pinanswer.pin === myPin){
    console.log("Correct pin code !!!")

    let operationAns= await inquirer.prompt(
        [
            {
                name : "operation",
                message: "Please select option",
                type: "list",
                choices: ["Withdraw", "Check balance"],

            },
        ]
    );
    if (operationAns.operation === "Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your ammount",
                    type: "number",
                },
            ]
        );
        
        if (amountAns.amount <= myBalance){
            myBalance -= amountAns.amount
        console.log("Your remaining balance is : "  + myBalance )
        }
        else{
            console.log("Insuficient amount, your account balance is : " + myBalance)
        }
        
      
    }
    else if (operationAns.operation === "Check balance"){
        console.log("Your balance is :" + myBalance)
    }

}
else{
    console.log("Incorrect pin number")
}