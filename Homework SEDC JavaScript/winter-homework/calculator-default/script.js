let display = document.getElementById('displayScreen');
let currentInput = ''; 


function updateDisplay(value) {
    display.textContent = value;
}


function appendToInput(char) {
    currentInput += char;
    updateDisplay(currentInput);
}


function clearDisplay() {
    currentInput = '';
    updateDisplay('0');
}


function clearLastElement() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        updateDisplay('0');
    } else {
        updateDisplay(currentInput);
    }
}


function calculateResult() {
    try {
        let result = Function('"use strict"; return (' + currentInput + ')')();
        updateDisplay(result);
        currentInput = result.toString();
    } catch (error) {
        updateDisplay('Error');
        currentInput = '';
    }
}


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendToInput(button.textContent);
    });
});


const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendToInput(button.textContent);
    });
});


document.getElementById('buttonReset').addEventListener('click', clearDisplay);
document.getElementById('buttonDelete').addEventListener('click', clearLastElement);
document.getElementById('buttonEquals').addEventListener('click', calculateResult);
