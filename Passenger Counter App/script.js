// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
// Camel Case
const countElement = document.getElementById("count-el"); // Pass in argument
console.log(countElement);
let count = 0;
function incrementCount() {
  count++;
  console.log(count);
  countElement.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  console.log(count);
}
