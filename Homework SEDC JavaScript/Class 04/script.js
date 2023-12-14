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

console.log("");
  console.log("EXERCISE 05");
  console.log("");

function findMaxMinSums(array) {
    let max = array[0];
    let min = array[0];
    let sum = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
      max = array[i];
    }
      if (array[i] < min) {
      min = array[i];
    }
    sum += array[i];
  }

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

let arrayOfNumbers = [1, 5, 12, 31, 56];
let resultSumMaxMinNumber = findMaxMinSums(arrayOfNumbers);
console.log(resultSumMaxMinNumber);


console.log("");
console.log("EXERCISE 06");
console.log("");

function combineNamesWithSurnames(firstNames, lastNames) {
    if (firstNames.length !== lastNames.length) {
      return "Arrays must have the same length";
  }

    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
      let fullName = `${firstNames[i]} ${lastNames[i]}`;
      fullNames.push(fullName);
  }

    return fullNames;
}

let firstNames = ["Bob", "Jill", "Matej"];
let lastNames = ["Gregory", "Wurtz", "Mateovski"];
const resultOfNamesAndSurnames = combineNamesWithSurnames(firstNames, lastNames);
console.log(resultOfNamesAndSurnames);



