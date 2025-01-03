let incomes = [62000, 67000, 75000];
let total = 0;

// For of Loop needs an iterable object
for (const income of incomes) {
  console.log(income);
  total += income;
}

console.log(total);

let fullName = "Dylan Coding God Faden";

for (const char of fullName) {
  console.log(char);
}

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" },
];

for (const student of students) {
  console.log(`${student.name} lives in ${student.city}`);
}
