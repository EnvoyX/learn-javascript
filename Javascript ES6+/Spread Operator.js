let contacts = ["Mary", "Joel", "Danny"];

// this contacts is act as a references, so personalFriends not create a new variable
let personalFriends = contacts;

console.log(personalFriends);
contacts.push("John");

console.log(contacts);

// personalFriends still have the same value as contacts
console.log(personalFriends);

// Use Spread Operator to solve the issue
let myContacts = ["Evelyn", "Miyabi", "Astra Yao"];
let personalAllies = [...myContacts];
myContacts.push("Lycaon");

console.log(myContacts);

// personalAllies variable doesn't change
console.log(personalAllies);

//

let newContacts = ["Acheron", ...myContacts, "Zhu Yuan"];
console.log(newContacts);

// Object Spread Operator
let person = {
  name: "Adam",
  age: 25,
  city: "Manchester",
};

let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer",
};

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/
const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = ["Apple", ...shoppingList, "Pineapple", "Pocari Sweat"];

console.log(shoppingBasket);
