console.log("+++++++++++++++++++ATM HOMEWORK+++++++++++++++++++++++++++");

let balance = 5000;

function atm(withdrawAmount){
    if (withdrawAmount <= balance) {
        balance -= withdrawAmount;
        console.log(`You withdraw ${withdrawAmount} and left ${balance}`);
        return;
    }
    else{
        return "Not enough money";
    }
}

let withdrawAmount = parseFloat(prompt("Enter the amount to withdraw:"));

let amount = atm(withdrawAmount);
console.log(amount);