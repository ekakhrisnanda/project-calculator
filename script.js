const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display-container');
let initNum;
let nextNum;

const operate = (a, b, operators) => {
    for (const operator of operators) {
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
    }
};

