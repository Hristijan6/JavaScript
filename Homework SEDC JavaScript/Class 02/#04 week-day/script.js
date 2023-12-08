const weekDay = prompt("Put number to choose a day in a week");

if (isNaN(weekDay)){
    console.log("Enter a valid number");
}
else if (weekDay == 1){
    console.log("Monday");
}
else if (weekDay == 2){
    console.log("Tuesday");
}
else if (weekDay == 3){
    console.log("Wednesday");
}
else if (weekDay == 4){
    console.log("Thursday");
}
else if (weekDay == 5){
    console.log("Friday");
}
else if (weekDay == 6){
    console.log("Saturday");
}
else if (weekDay == 7){
    console.log("Sunday");
}
else if (weekDay >=8  || weekDay <= 0){
    console.log("Put number between 1 and 7");
}
else {
    console.log("error");
}