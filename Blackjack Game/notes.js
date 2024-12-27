// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 21;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if (age <= 21) {
  console.log(`You cannot enter the club`);
} else {
  console.log(`Welcome!`);
}

// Check if the person is elegible for a birthday card from the King! (100)

age = 100;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
  console.log(`Not Eligible`);
} else if (age === 100) {
  console.log(`Here is your birthday card from the king!`);
} else {
  console.log(`Not eligible, you have already gotten one!`);
}

// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
  "Check out my Netflix clone", // 0
  "Here's the code for my project", // 1
  "I've just relaunched my portfolio", // 2
];

console.log(featuredPosts[2]);
console.log(featuredPosts.length);

// Create an array that lists your i.e. experience, education, licenses, skills or similar
// The items of the array should be strings

let experience = [
  "CEO at Scrimba",
  "Frontend developer at Xeneta",
  "People counter for Norstat",
];

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

let per = ["Per Harald Borgen", 35, true];

// Push - add new item to last index of array
let cards = [7, 4];

cards.push(6);

console.log(cards);

// Push the newMessage to the messages array, and then log out the array
let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

let newMessage = "Same here!";

messages.push(newMessage);

// How can you remove the last item in an array? Try to google it!
messages.pop();
console.log(messages);

//  Loop

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for (let count = 1; count < 21; count += 1) {
  console.log(count);
}

for (let count = 10; count <= 20; count += 1) {
  console.log(count);
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}

let pesan = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
];

for (let i = 0; i < pesan.length; i++) {
  console.log(pesan[i]);
}

cards = [7, 3, 9];

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for (let i = 0; i < cards.length; i++) {
  console.log(cards[i]);
}

// let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
// let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textConten

// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += `${sentence[i]} `;
// }

// Return Value Function

let player1Time = 102;
let player2Time = 107;

// cmd+d - ctrl+d
function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
  return player1Time + player2Time;
}

let totalTime = getTotalRaceTime();
console.log(totalTime);
let fastestRace = getFastestRaceTime();
console.log(fastestRace);

let randomNumber = Math.random();

console.log(randomNumber);

/* 

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)

*/

// Dice Rundom

let diceRandomNumber = Math.random() * 6;

console.log(diceRandomNumber);

/* 

In which range will our diceRandomNumber be now?

From: 0
To: 5.999999

*/

// Math Floor

let flooredNumber = Math.floor(3.45632);

console.log(flooredNumber);

/* 

What does Math.floor() do to positive numbers?

Your answer: it removes the decimals

*/

// Math.floor + Math.random
randomNumber = Math.floor(Math.random() * 6 + 1);

console.log(randomNumber);

/* 

Write down all the possible values randomNumber can hold now!

 1,2,3,4,5,6


*/

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

console.log(rollDice());

// Logical Operator
let hasCompletedCourse = false;
let givesCertificate = true;

if (hasCompletedCourse === true && givesCertificate === true) {
  generateCertificate();
}

function generateCertificate() {
  console.log("Generating certificate....");
}

let hasSolvedChallenge = true;
let hasHintsLeft = false;

if (hasSolvedChallenge === false && hasHintsLeft === false) {
  showSolution();
}

function showSolution() {
  console.log("Showing the solution....");
}

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = true;
let likesStartups = false;

if (likesDocumentaries === true || likesStartups === true) {
  recommendMovie();
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}

// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
  title: "Learn CSS Grid for free",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"],
};

console.log(course.length);
console.log(course.tags);
console.log(course["tags"]);

console.log(course["tags"]);

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let castle = {
  title: "Live like a king in my castle",
  price: 190,
  isSuperHost: true,
  images: ["img/castle1.png", "img/caste2.png"],
};

console.log(castle.price);
console.log(castle.isSuperHost);

let player = {
  name: "Per",
  chips: 200,
  sayHello: function () {
    console.log("Heisann!");
  },
};

console.log();
player.sayHello();
