const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const buttons = document.querySelectorAll('.button')
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

const displayValue = () => {
    buttons.forEach(button => {
        let val = button.value
        button.addEventListener('click', (e) => {
           let val = e.target.value;
           if(e.target.classList.contains('operator') || e.target.classList.contains('number')) {
            display.textContent = val;
           } 
        });
    });
};

displayValue()



// if a number button pressed stores the value in the initNum variable
// if an operator buttons pressed store the values and prohibit to add another operator
// if a number after operator pressed stores the value in the nextNum variable