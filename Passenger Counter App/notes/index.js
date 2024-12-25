// Grab the welcome-el paragraph and store it in a variable called welcomeEl
const welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Andi Jafar";
let greeting = "Welcome Back, ";
let message = name + greeting + " ";

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = name + greeting;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

welcomeEl.innerText = message + "👋";
// Or
welcomeEl.innerHTML += "👋";
