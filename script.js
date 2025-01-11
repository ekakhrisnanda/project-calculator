const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let initNum;
let operator;
let nextNum;

const operate = (a, b, operator) => {
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
    }
}