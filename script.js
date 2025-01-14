const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display-container');
const deleteButton = document.querySelector('.del');
const clearButton = document.querySelector('.clear');

let initNum = null;
let nextNum = null;
let operator = null;

const operate = (a, b) => {
    switch(operator) {
        case '+': return add(a, b);
        case '-': return substract(a, b);
        case 'x': return multiply(a, b);
        case '/': return divide(a, b);
        default: return null;
    };
};

const calculate = () => {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonValue = e.target.value;

            // limit displayed characters
            if(display.textContent.length > 22) {
                return;
            }

            if(e.target.classList.contains('number')) {
                display.textContent += buttonValue;
            } else if(['+', '-', 'x', '/'].includes(buttonValue)) {
                if (initNum === null) {
                    initNum = parseFloat(display.textContent);
                    console.log(initNum);
                }
                operator = buttonValue;
                display.textContent +=`${operator}` ;
            } else if (buttonValue === '=') {
                nextNum = parseFloat(display.textContent.split(operator)[1].trim());
                console.log(initNum);
                let result = operate(initNum, nextNum);
                display.textContent = result;
                initNum = result;
                operator = null;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        display.textContent = '';
        initNum = null;
        nextNum = null;
        operator = null;
    });

    deleteButton.addEventListener('click', () => {
        display.textContent = display.textContent.slice(0, -1);
    });
};

calculate()