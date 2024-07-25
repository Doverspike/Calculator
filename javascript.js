const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const zeroButton = document.getElementById("0");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");
const pointButton = document.getElementById(".");
const divide = document.getElementById("/");
const multiple = document.getElementById("*");
const minus = document.getElementById("-");
const plus = document.getElementById("+");
const equals = document.getElementById("=");


let firstNumber = NaN;
let secondNumber = NaN;
let action = NaN;

function addNumber(input) {
    if (action = NaN) {
        if (firstNumber = NaN) {
        firstNumber = input;
        } else {
            firstNumber += input;
        }
    } else { 
        if (secondNumber = NaN) {
            secondNumber = input
            
        } else {
        secondNumber += input;
    }
}};
zeroButton.addEventListener("click", () => {
    addNumber("0");
});
oneButton.addEventListener("click", () => {
    addNumber("1");
});
twoButton.addEventListener("click", () => {
    addNumber("2");
});
threeButton.addEventListener("click", () => {
    addNumber("3");
});
fourButton.addEventListener("click", () => {
    addNumber("4");
});
fiveButton.addEventListener("click", () => {
    addNumber("5");
});
sixButton.addEventListener("click", () => {
    addNumber("6");
});
sevenButton.addEventListener("click", () => {
    addNumber("7");
});
eightButton.addEventListener("click", () => {
    addNumber("8");
});
nineButton.addEventListener("click", () => {
    addNumber("9");
});
pointButton.addEventListener("click", () => {
    addNumber(".");
});
divide.addEventListener("click", () => {
    action = "/";
});
multiple.addEventListener("click", () => {
    action = "*";
});
minus.addEventListener("click", () => {
    action = "-";
});
plus.addEventListener("click", () => {
    action = "+";
});
clearButton.addEventListener("click", () => {
    firstNumber = NaN;
    secondNumber = NaN;
    action = NaN;
});
deleteButton.addEventListener("click", () => {
    if (action = NaN) {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    } else {
        secondNumber = secondNumber.slice(0, secondNumber - 1);
    }
});

equals.addEventListener("click", () => {
    let first = firstNumber;
    Number(first);
    let second = secondNumber;
    Number(second);

    switch (action) {
        case "/":
            
        break;
        case "*":

        break;
        case "-":

        break;
        case "+":

        break;

    }

});

