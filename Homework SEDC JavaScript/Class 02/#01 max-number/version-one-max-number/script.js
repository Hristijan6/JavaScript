let numOne = prompt("Put the first number");
let numTwo = prompt("Put the second number");


if (isNaN(numOne) || isNaN(numTwo)){
    console.log("Put a valid numbers");
}
else if (numOne > numTwo){
    console.log(numOne, "is bigger than", numTwo);
}
else if (numTwo > numOne){
    console.log(numTwo, "is bigger than", numOne);
}
else if (numOne = numTwo) {
    console.log(numOne, "is equal to", numTwo);
}
else {
    console.log("error404");
}