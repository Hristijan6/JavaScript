console.log("EXERCISE 01");
console.log("");


function tellStory (array) {
   
 if (array.lenght > 3) {
        return "Error in array"
    }


let [name, mood, activity] = array;
let story = `This is ${name}, ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
return story;


}

let storyArray = ["Bojan", "sleepy", "programming"];
let storyResult = tellStory(storyArray);
console.log(storyResult);

console.log("");
console.log("EXERCISE 02");
console.log("");

function sumNumbers(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++){  
        sum += array[i];
    }
    
    return `The sum of the numbers is: ${sum}`;
}

let numbersArray = [1, 2, 3, 4, 5];
let sumNumbersResult = sumNumbers(numbersArray);
console.log(sumNumbersResult);

console.log("");
console.log("EXERCISE 03");
console.log("");

function printStrings(array) {
    let  printStrings = array.join(" ");
    return printStrings;
}

let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
let stringResult = printStrings(stringArray);
console.log(stringResult);

console.log("");
console.log("EXERCISE 04");
console.log("");


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + '\n');
    } else {
      console.log(i + ' ');
    }
  }


