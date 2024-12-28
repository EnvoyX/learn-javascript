//function declaration
function breakfastMenu() {
  return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function () {
  return "I'm going to eat pizza for lunch";
};

const dinnerMenu = (food) => {
  return `I'm going to eat a ${food} for dinner`;
};

console.log(dinnerMenu("chicken salad"));

// Implicit Return
const newCharacter = (char) => `${char} has been added to the roster!`;
console.log(newCharacter("Reina"));
