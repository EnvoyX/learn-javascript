// Default Parameter
const leadSinger = (artist = "someone") => {
  console.log(`${artist} is the lead singer of Cold Play`);
};

leadSinger();
leadSinger("Adam Levine");

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const buyProduct = (product = "something") => {
  return console.log(`I'm going to buy ${product} from the grocery shop`);
};

buyProduct();
buyProduct("Milk");
