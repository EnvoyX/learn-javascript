// const countEL = document.getElementById("count-el");
// countEL.innerHTML = "5";

let count = 0;
let batch = 10;
let secondbatch = 12;

count = 5 + 7;
count = batch + secondbatch;

// #1
// 1. Create a variable, myAge, and set its value to your age
let myAge = 20;
// 2. Log the myAge variable to the console
console.log(myAge);
console.log(count);

// #2
// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge
// 3. Log myDogAge to the console

const humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

count = count + 8;

count += 20;

console.log(count);

// #3
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70

let bonusPoints = 50;
console.log(bonusPoints);
bonusPoints += 50;
console.log(bonusPoints);
bonusPoints -= 75;
console.log(bonusPoints);
bonusPoints += 45;
console.log(bonusPoints);

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

count = 0;

function increment() {
  console.log(count++);
}

// Setting up the the race 🏎 🏎 🏎

function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎
countdown();
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

//#4
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function show42() {
  console.log(42);
}

show42();

//#5
// Create a function that logs out the sum of all the lap times

// THIS IS GLOBAL SCOPE
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalAllLaps() {
  // THIS IS FUNCTION SCOPE
  //   totalLaps = lap1 + lap2 + lap3;
  //   console.log(totalLaps);
  return console.log(lap1 + lap2 + lap3);
}

totalAllLaps();

// Create a function that increments the lapsCompleted variable with one
// Run it three times
let lapsCompleted = 0;

function incrementLaps() {
  lapsCompleted++;
  //   lapsCompleted += 1;
}
incrementLaps();
incrementLaps();
incrementLaps();

console.log(lapsCompleted);

let username = "per";

// Create a variable, message, that stores the string: "You have tree new notifications"
let message = "You have tree new notifications";

console.log(message);
console.log(username);
console.log(message + username);
console.log(message + " " + username + "!");

// Create a variable, messageToUser, that contains the message we have logged

let messageToUser = message + " " + username + "!";
console.log(messageToUser);

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

let name = "Hanif";
let greeting = "Hi, my name is ";

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let myGreeting = greeting + name;
console.log(myGreeting);

let points = 4;
bonusPoints = "10";

// Number + String still works
let totalPoints = points + bonusPoints;

console.log(totalPoints);

console.log(4 + 5); //9
console.log("2" + "4"); // "24"
console.log("5" + 1); // "51"
console.log(100 + "100"); // "100100"
