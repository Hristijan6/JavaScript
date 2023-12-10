console.log("+++++++++++++++++++++EXERCISE 01++++++++++++++++++++++");

function checkParameter(parameter) {
    return typeof(parameter);
}

let car = {
    brand: "Audi",
    model: "s6",
    year: 2020
};

let typeObject = checkParameter(car);
console.log(typeObject);


let typeBoolean = checkParameter(true);
console.log(typeBoolean);

let typeNumber = checkParameter(10);
console.log(typeNumber);

let typeString = checkParameter("This is String");
console.log(typeString);

let typeUndefined = checkParameter();
console.log(typeUndefined);


console.log("");

console.log("++++++++++++++++++++++++++++EXERCISE 02 DOG YEARS CONVERSIOn++++++++++++++++++++++++++");


console.log("");

function calculateDogYears(yearsToConvert, convertRatio) {
    let dogYears = yearsToConvert * convertRatio;
    let humanYears = yearsToConvert / convertRatio;
    return `Age in dogs age is: ${dogYears}, in human age is ${humanYears}`;
}

let yearsToConvert = parseFloat(prompt("Enter years:"))
let convertRatio = 7;

let finalAge = calculateDogYears(yearsToConvert, convertRatio);
console.log(finalAge);



console.log("++++++++++++++++++++++EXERCISE 03 ATM +++++++++++++++++++++++++");


let balance = 5000; 

function get_balance() {
    alert('Your current balance is: ' +balance);
    atm();
}

function make_deposit() {
    let deposit = parseFloat(prompt('How much would you like to deposit?'));
    if (isNaN(deposit) || deposit === '') {
        alert('Error: please enter a number!');
        make_deposit();
    } else {
        balance += deposit;
        get_balance();
    }
}

function make_withdrawal() {
    let withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
    if (isNaN(withdrawal) || withdrawal === '') {
        alert('Error: please enter a number!');
        make_withdrawal();
    } else {
        balance -= withdrawal;
        get_balance();
    }
}

function error() {
    alert('Check your numbers');
    atm();
}

function exit() {
    let confirm_leave = confirm('You have selected exit.');
    if (confirm_leave) {
        // window.close();
    } else {
        atm();
    }
}

function atm() {

    let choice = parseInt(prompt(' 1.Balance 2.Deposit 3.Withdrawal 4.Exit')); 

    if (choice === 1) {
        get_balance();
    } else if (choice === 2) {
        make_deposit();
    } else if (choice === 3) {
        make_withdrawal();
    } else if (choice === 4) {
        exit();
    } else {
        error();
    }
}

let atmFinish = atm();
console.log(atmFinish);