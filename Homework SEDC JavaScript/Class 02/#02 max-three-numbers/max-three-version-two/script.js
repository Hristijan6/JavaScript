
const numOne = prompt("Enter first number: ");
const numTwo = prompt("Enter second number: ");
const numThree = prompt("Enter third number: ");

if(numOne >= numTwo && numOne >= numThree) {
    console.log("The largest is:", numOne);
}
else if (numTwo >= numOne && numTwo >= numThree) {
    console.log("The largest is:", numTwo);
}
else if (numThree >= numOne && numThree >= numTwo) {
    console.log("The largest is:", numThree);
}
else {
    console.log("error404");
}