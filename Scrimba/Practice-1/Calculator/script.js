let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
let result = 0;
function add() {
  return (result = num1 + num2);
}
function subtract() {
  return (result = num1 - num2);
}
function divide() {
  return (result = num1 / num2);
}
function multiply() {
  return (result = num1 * num2);
}
// Call the correct function when the user clicks on one of the buttons
const addEl = document.getElementById("add");
const subtractEl = document.getElementById("subtract");
const divideEl = document.getElementById("divide");
const multiplyEl = document.getElementById("multiply");

// Perform the given calculation using num1 and num2
sumEl = document.getElementById("sum-el");

addEl.addEventListener("click", () => {
  add();
  sumEl.textContent = `Sum: ${result}`;
});
subtractEl.addEventListener("click", () => {
  subtract();
  sumEl.textContent = `Sum: ${result}`;
});
divideEl.addEventListener("click", () => {
  divide();
  sumEl.textContent = `Sum: ${result}`;
});
multiplyEl.addEventListener("click", () => {
  multiply();
  sumEl.textContent = `Sum: ${result}`;
});

// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
