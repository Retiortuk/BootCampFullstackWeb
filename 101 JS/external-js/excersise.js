// Simple Calculator In JS

let num1 = parseFloat(prompt("Enter The First Number: "));
let operator = prompt("Enter The Operator +, x, -, :, = ");
let num2 = parseFloat(prompt("Enter The Second Number: "));

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "x") {
    result = num1 * num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === ":") {
    result = num1 / num2;
} else {
    result = "Selecet Available Operator";
}

alert("The result is: " + result);

alert("Hello World");

