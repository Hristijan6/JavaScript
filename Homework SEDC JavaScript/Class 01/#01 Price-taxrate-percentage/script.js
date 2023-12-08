const taxRate = 5/100;
let phonePrice = 119.95;
let phonePieces = 30;

let taxOfAll = (phonePrice*phonePieces)*taxRate;
let totalPrice =  (phonePrice*phonePieces) + taxOfAll;
console.log(totalPrice);