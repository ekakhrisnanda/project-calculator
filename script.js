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
        const operatorSymbol = operator.value;
        switch(operatorSymbol) {
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

// when the number buttons are clicked, it goes until max n length
// when the operate number is clicked, stores the value to initNum variable and prohibit to add another operator
// the number buttons clicked again, once the equal button is clicked, 
// stores the value to nextNum variable and execute operate
// display the value
