class Animal {
  constructor(type, legs, color) {
    this.type = type;
    this.legs = legs;
    this.color = color;
  }
  makeNoise(sound = "Loud Noise") {
    console.log(sound);
  }

  // The static keyword defines a static method or field for a class, or a static initialization block.
  // Static properties cannot be directly accessed on instances of the class.
  // Instead, they're accessed on the class itself.

  //  Static methods are often utility functions,
  //  such as functions to create or clone objects,
  //  whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
  static move() {
    return `Animal just moves!`;
  }
  static identify = "This is Animal Class";

  //   This gettter here, allowed us to treat this as property in object
  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}, Color: ${this.color}`;
  }
}

// Define new class
let cat = new Animal("Cat", 4, "White");

console.log(cat.metaData);

console.log(cat.type);
console.log(cat.legs);

// Change class variable
cat.color = "Black";
console.log(cat.color);

// Method
cat.makeNoise("Meow");

// Call methods without instantiate new objects
console.log(Animal.move());
console.log(Animal.identify);

// Inherit

class Cat extends Animal {
  constructor(type, legs, color, tail) {
    // super keyword
    // to pass in all available property from Animal Class
    super(type, legs, color);
    this.tail = tail;
  }
  makeNoise(sound = "meow") {
    console.log(sound);
  }
  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}, Color: ${this.color}, Tails: ${this.tail}`;
  }
}

let bengalCat = new Cat("Bengal Cat", 4, "Orange", "Long Tails");

bengalCat.makeNoise();

console.log(bengalCat.metaData);

// **Classes Challenge**:

// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

class Player {
  constructor(name, country) {
    this.name = name;
    this.country = country;
  }

  fetchData = () => `${this.name} was born in ${this.country}`;
  get playerMetaData() {
    return `Name: ${this.name}, Country: ${this.country}`;
  }
}

let messi = new Player("Messi", "Argentina");
console.log(messi.playerMetaData);
console.log(messi.fetchData());

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country);
    this.age = age;
  }
  fetchData = () =>
    `${this.name} was born in ${this.country} and ${this.age} years old`;
}

let rafaelNadal = new TennisPlayer("Rafael Nadal", "America", 25);
console.log(rafaelNadal.fetchData());
