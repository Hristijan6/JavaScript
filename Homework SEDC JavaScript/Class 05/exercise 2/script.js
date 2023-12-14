
let numbers = [1, 2, 3, 4, 5];
let numberList = document.getElementById("numList");
let sumElement = document.getElementById("sum");

function displayNumbersAndSum() {
  let sum = 0;

  numberList.innerHTML = '';
  for (let i = 0; i < numbers.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = numbers[i];
    numberList.appendChild(listItem);

    sum += numbers[i];
  }

  sumElement.innerText = `Sum: ${sum}`;
}

displayNumbersAndSum();

