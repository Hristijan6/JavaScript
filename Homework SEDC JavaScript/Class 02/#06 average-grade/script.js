const Physics = parseFloat(prompt("Enter Physics points:"));
const Chemistry = parseFloat(prompt("Enter Chemistry points:"));
const Biology = parseFloat(prompt("enter Biology points:"));
const Mathematics = parseFloat(prompt("Enter Mathematics points:"));
const Computer = parseFloat(prompt("Enter Computer points:"));

if (isNaN(Physics) || isNaN(Chemistry) || isNaN(Biology) || isNaN(Mathematics) || isNaN(Computer) || Physics < 0 || Chemistry < 0  ||Biology < 0 || Mathematics < 0 ||  Computer < 0 || Physics > 100 || Chemistry > 100 ||  Biology > 100 || Mathematics > 100 || Computer > 100){
console.log("Please enter points between 0 and 100.");
}
else {

 const Grades = Physics + Chemistry + Biology + Mathematics + Computer;
 const percentage = (Grades / 500) * 100;
 console.log("Your grade percentige is:", percentage, "%");

 if (percentage >= 90){
    console.log("Your grade is A");
 }
 else if (percentage >=80){
    console.log("Your grade is B");
 }
 else if (percentage >=70){
    console.log("Your grade is C");
 }
 else if (percentage >= 60){
    console.log("Your grade is D");
 }
 else if (percentage >= 40){
    console.log("Your grade is E");
 }
 else {
    console.log("Your grade is F");
}
}
 

