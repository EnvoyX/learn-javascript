let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

//  push() add new element at the end of array & pop()
//  pop() remove an element at the end of array & pop()
largeCountries.pop();
largeCountries.push("Pakistan");
console.log(largeCountries);

//  unshift() add new element at the start of array
//  shift() remove an element at the start of array
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);
