const yearOfBirth = parseFloat(prompt("Enter your birth year"));
let zodiacCalc = (yearOfBirth - 4)%12;

if (isNaN(zodiacCalc)) {
    console.log("Enter valid year of birth");
}
else if (zodiacCalc == 0){
    console.log("Your Chinese Zodiac is 'RAT'");
} 
else if (zodiacCalc == 1){
    console.log("Your Chinese Zodiac is 'OX'");
}
else if (zodiacCalc == 2){
    console.log("Your Chinese Zodiac is 'Tiger'");
}
else if (zodiacCalc == 3){
    console.log("Your Chinese Zodiac is 'RABBIT'");
}
else if (zodiacCalc == 4){
    console.log("Your Chinese Zodiac is 'DRAGON'");
}
else if (zodiacCalc == 5){
    console.log("Your Chinese Zodiac is 'SNAKE'");
}
else if (zodiacCalc == 6){
    console.log("Your Chinese Zodiac is 'HORSE'");
}
else if (zodiacCalc == 7){
    console.log("Your Chinese Zodiac is 'GOAT'");
}
else if (zodiacCalc == 8){
    console.log("Your Chinese Zodiac is 'MONKEY'");
}
else if (zodiacCalc == 9){
    console.log("Your Chinese Zodiac is 'ROOSTER'");
}
else if (zodiacCalc == 10){
    console.log("Your Chinese Zodiac is 'DOG'");
}
else if (zodiacCalc == 2){
    console.log("Your Chinese Zodiac is 'PIG'");
}
