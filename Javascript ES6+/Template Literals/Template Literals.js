let word1 = "Dylan";
let word2 = "Faden";
let num1 = 2;
let num2 = 3;

// const fullName = word1 + " " + word2;
let fullName = `${word1} ${word2}`;
console.log(fullName);

fullName = `${num1 + num2} ${word2}`;
console.log(fullName);

let example = `${word1}
${word2}
`;
// console.log(fullName);
console.log(example);
document.getElementById("example").innerText = example;
