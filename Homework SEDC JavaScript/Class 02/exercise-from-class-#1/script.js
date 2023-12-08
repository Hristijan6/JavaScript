let userMoney = prompt("Enter the amount of money you have");

if (isNaN(userMoney)){
    console.log("Enter valid amount");
}
else if (userMoney >= 100){
    console.log("You can spend mindlessly");
}
else if (userMoney >= 70 && userMoney < 100){
    console.log("You can go on dinner and in cinema");
}
else if (userMoney >= 30 && userMoney < 70){
    console.log("You can go in cinema");
}
else {
    alert("Go work and get money");
}