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
const saveEl = document.getElementById("save-el");
console.log(countElement);
let count = 0;
function incrementCount() {
  count++;
  //   count += 1;
  console.log(count);
  countElement.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  // 1. Grab the save-el paragrah and store it in a variable called saveEl
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let savelog = ` ${count} - `;
  // 3. Render the variable in the saveEl using innerText
  saveEl.textContent += savelog;
  count = 0;
  countElement.textContent = 0;
  // NB: Make sure to not delete the existing content of the paragraph
  console.log(count);
}

function reset() {
  count = 0;
  countElement.innerText = count;
}
