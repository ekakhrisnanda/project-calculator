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
    // keyboard event
    document.addEventListener('keydown', (e) => {
        const buttonValue = e.key;

        if (display.textContent.length > 20 && buttonValue.classList.includes('number')) {
            return;
        }

        if(!isNaN(buttonValue)) {
            display.textContent += buttonValue;
        } else if (['+', '-', 'x', '/'].includes(buttonValue)) {
            if (operator === null) {
                initNum = parseFloat(display.textContent);
                operator = buttonValue;
                display.textContent +=`${operator}`;
            } else {
                nextNum = parseFloat(display.textContent.split(operator)[1].trim());
                if(nextNum) {
                    let result = operate(initNum, nextNum);
                    display.textContent = result;
                    initNum = result;
                    operator = null;
                }
            }
        } else if (buttonValue === 'Enter') {
            if(operator !== null) {
                nextNum = parseFloat(display.textContent.split(operator)[1].trim());
                let result = operate(initNum, nextNum);
                display.textContent = result;
                initNum = result;
                operator = null;
            }
        }
    });

    // mouse event
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonValue = e.target.value;

            // limit displayed character
            if (display.textContent.length > 20 && e.target.classList.includes('number')) {
                return;
            }

            if(e.target.classList.contains('number')) {
                if(buttonValue === '.') {
                    let currentNumber = display.textContent.split(/[\+\-\x\/]/).pop();

                    if(currentNumber.includes(buttonValue)) {
                        return;
                    }
                }
                display.textContent += buttonValue;
            } 
            
            else if(['+', '-', 'x', '/'].includes(buttonValue)) {
                if (operator === null) {
                    initNum = parseFloat(display.textContent);
                    operator = buttonValue;
                    display.textContent +=`${operator}`;
                } else {
                    nextNum = parseFloat(display.textContent.split(operator)[1].trim());
                    if(nextNum) {
                        let result = operate(initNum, nextNum);
                        display.textContent = result;
                        initNum = result;
                        operator = null;
                    }
                }
            } 
            
            else if (buttonValue === '=') {
                if(operator !== null) {
                    nextNum = parseFloat(display.textContent.split(operator)[1].trim());
                    let result = operate(initNum, nextNum);
                    display.textContent = result;
                    initNum = result;
                    operator = null;
                }
            }
        });
    });

    const handleClear = () => {
        display.textContent = '';
        initNum = null;
        nextNum = null;
        operator = null;
    }

    clearButton.addEventListener('click', handleClear);
    document.addEventListener('keyup', (e) => {
        if(e.key === 'c' || e.key === 'C') {
            handleClear();
        }
    });

    const handleDelete = () => {
        if(display.textContent.length > 0) {
            display.textContent = display.textContent.slice(0, -1);

            if(display.textContent.indexOf(operator) === -1) {
                operator = null;
            }
        }
    }

    deleteButton.addEventListener('click', handleDelete);
    document.addEventListener('keyup', (e) => {
        if(e.key === 'Backspace') {
            handleDelete();
        }
    });
};

calculate();