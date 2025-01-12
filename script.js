const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const buttons = document.querySelectorAll('.button')
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display-container');
const deleteButton = document.querySelector('.del');
const clearButton = document.querySelector('clear');

let initNum;
let nextNum;
let operator;

const operate = (a, b) => {
    switch(operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            substract(a, b);
            break;
        case 'x':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);
    };
};

const calculate = () => {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonValue = e.target.value;
           if(e.target.classList.contains('operator') || e.target.classList.contains('number')) {
            display.textContent += buttonValue;
           } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '/') {
            initNum = parseFloat(display.textContent);
            operator = buttonValue;
           } else if (buttonValue === '=') {
            nextNum = parseFloat(display.textContent);
            const result = operate(initNum, nextNum);
            display.textContent = result;
           }
        });
    });
};

calculate()

// when the number buttons are clicked, it goes until max n length
// when the operate number is clicked, stores the value to initNum variable and prohibit to add another operator
// the number buttons clicked again, once the equal button is clicked, 
// stores the value to nextNum variable and execute operate
// display the value
