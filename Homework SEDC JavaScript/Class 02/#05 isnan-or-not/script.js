const inputOne = parseInt(prompt("Enter the number"));

if(typeof inputOne  === "number"){
    console.log(!isNaN(inputOne), "true = number, false = not a number");
}

