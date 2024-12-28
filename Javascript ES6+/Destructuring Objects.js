const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
  },
};

console.log(player.club);
console.log(player.address.city);

// Destructuring

const {
  name,
  club,
  address: { city },
} = player;

console.log(`${name} plays for ${club}`);
console.log(`${name} lives in ${city}`);

// Rest Parameters

const [firstValue, ...values] = [1, 2, 3, 4, 5];
console.log(firstValue);
console.log(values);
console.log(values[2]);

// Assigment without Declaration
({ major, studentID } = { major: `Computer Science`, studentID: `13523069` });
console.log(major);
console.log(studentID);

// Assign to new Variable

const mahasiswa = {
  name: `Hanif Hafizhan`,
  age: 20,
  university: `Institut Teknologi Bandung`,
};

console.log(mahasiswa.name);
console.log(mahasiswa.university);

const { name: newName, age: newAge, university: newUniversity } = mahasiswa;

console.log(newName);
console.log(newUniversity);

// Give a default value

const mahasiswa1 = {
  nameChar: `Jayce Talis`,
  ageChar: 33,
  university: `Institut Teknologi Bandung`,
};

const {
  nameChar = `Lorem Ipsum`,
  ageChar = `x`,
  university = `University/College in Indonesia`,
  email = `email@default.com`,
} = mahasiswa1;

console.log(nameChar);
console.log(email);

// Give a default value + assignment to new variable

// case given default value
const student = {
  name: `Jayce Talis`,
  age: 33,
  university: `Institut Teknologi Bandung`,
};

const {
  name: studentName = `Lorem Ipsum`,
  age: studentAge = `x`,
  university: studentUniversity = `University/College in Indonesia`,
  email: studentEmail = `email@default.com`,
} = student;

console.log(studentAge);
console.log(studentEmail);

// case value of property are given

const student1 = {
  name: `John Wick`,
  age: 25,
  university: `Institut Teknologi Bandung`,
  email: `13523060@mahasiswa.itb.ac.id`,
};

const {
  name: student1Name = `Lorem Ipsum`,
  age: student1Age = `x`,
  university: student1University = `University/College in Indonesia`,
  email: student1Email = `email@default.com`,
} = student1;

console.log(student1Email);

// Rest Parameter Objects
const jinxArcane = {
  nameCharacter: `Jinx`,
  age: 20,
  faction: `Zaun`,
  sibling: `Violet`,
  signatureWeapon: `Arsenal of Ranged Weapon and Ordances`,
  id: 12345,
};

const { nameCharacter, ...property } = jinxArcane;
console.log(nameCharacter);
console.log(property);
console.log(property.sibling);
console.log(property.faction);
// Mengambil field pada object, setelah dikirim sebagai Parameter untuk function

function getZaunCitizenId(jinxArcane) {
  return jinxArcane.id;
}

function getZaunCitizenName(jinxArcane) {
  return jinxArcane.nameCharacter;
}

// We can also give the parameter object's property directly
function getArcaneCharacterFaction({ faction }) {
  return faction;
}

console.log(getZaunCitizenName(jinxArcane));
console.log(getZaunCitizenId(jinxArcane));
console.log(getArcaneCharacterFaction(jinxArcane));
/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/
const studentMIT = {
  nama: "Kyle",
  age: 24,
  projects: {
    diceGame: "Two player dice game using JavaScript",
  },
};
// Solution

const {
  nama,
  age,
  projects: { diceGame },
} = studentMIT;

console.log(`${nama} is ${age} years old`);
console.log(`${nama} have worked in ${diceGame} projects`);
