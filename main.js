console.log("Welcome to Sadia ATM machine");
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
//  1234 === 12345 false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkbalance", "fastcash"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAnswer.amount <= 2000 && amountAnswer.amount >= 500) {
            myBalance -= amountAnswer.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log("invalid amount");
        }
    }
    else if (operationAnswer.operation === "checkbalance") {
        console.log(`your balance is: + ${myBalance}`);
    }
    else {
        console.log("Incorrect pin number");
    }
}
