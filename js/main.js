import {Calculator} from './calculator.js'
let calculator = new Calculator;


let display = document.querySelector('.display-content');
let numButtons = document.querySelectorAll('.num-button');
let actionButtons = document.querySelectorAll('.action-button');


for (let numButton of numButtons) {
    numButton.addEventListener('click', () => {
        display.textContent += numButton.textContent;
    });
}

for (let actionButton of actionButtons) {
    actionButton.addEventListener('click', () => {
        calculator.firstNumber = Number(display.textContent);
        calculator.action = actionButton.textContent;
        display.textContent = '';
    });
}

document.querySelector('.result-button').addEventListener('click', () => {
    calculator.secondNumber = Number(display.textContent);
    calculator.calculateResult();
    display.textContent = calculator.firstNumber + ' ' + calculator.action + ' ' + calculator.secondNumber + ' = ' + calculator.result;
    console.log(calculator);
})

document.querySelector('.clear-button').addEventListener('click', () => {
    display.textContent = '';
    calculator = new Calculator;
});

