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
const historyWindow = document.getElementById("historyWindow");
const resultNumber = document.getElementById("resultNumber");

let firstNumber = null;
let secondNumber = null;
let action = null;
// add the number to either the first or second variable depending on if the action variable is null or not.
// doesn't allow user to input more than 1 period.
function addNumber(input) {
    let hold = input;
        
    if (action == null || firstNumber == null) {
        if (firstNumber == null) {
            firstNumber = hold;
        } else {
            if (firstNumber.search(/\./) >= 0 && hold == ".") {
                return;
            }
            firstNumber += hold;
        } resultNumber.innerHTML = firstNumber;
    } else { 
        if (secondNumber == null) {
            secondNumber = hold
        } else {
            if (secondNumber.search(/\./) >= 0 && hold == ".") {
                return;
            }
        secondNumber += hold;
    } resultNumber.innerHTML = secondNumber;
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
    addAction("/");
});
multiple.addEventListener("click", () => {
    addAction("*");
});
minus.addEventListener("click", () => {
    addAction("-");
});
plus.addEventListener("click", () => {
    addAction("+");
});
clearButton.addEventListener("click", () => {
    firstNumber = null;
    secondNumber = null;
    action = null;
    resultNumber.innerHTML = firstNumber;
});
deleteButton.addEventListener("click", () => {
    if (action == null) {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
        resultNumber.innerHTML = firstNumber;
    } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
        resultNumber.innerHTML = secondNumber;
    }
});
function addAction(input) {
    if (firstNumber != null && secondNumber != null) {
        doTheMath();
    } action = input;
}
function doTheMath() {
    let first = Number(firstNumber);
    let second = Number(secondNumber);
    let div;
    if (firstNumber == null || secondNumber == null) {
        return;
    }
    switch (action) {
        case "/":
            if (second == 0) {
                resultNumber.innerHTML = "I'm afraid I can't do that, Dave.";
                firstNumber = null;
                secondNumber = null;
                action = null;
                return;
            } else {
            firstNumber = String(first / second);
            }
        break;
        case "*":
            firstNumber = String(first * second);
        break;
        case "-":
            firstNumber = String(first - second);
        break;
        case "+":
            firstNumber = String(first + second);
        break;

    } 
        div = document.createElement("div");
        div.classList.add("historyWindowDiv");
        historyWindow.appendChild(div);
        resultNumber.innerHTML = firstNumber;
        div.innerHTML = firstNumber;
        secondNumber = null;
        action = null;
}
equals.addEventListener("click", () => {
    doTheMath();
});

