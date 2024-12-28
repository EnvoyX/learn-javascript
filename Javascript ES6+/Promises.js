// Promises

const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   const error = false;
      const error = false;
      if (error) {
        reject("Sorry your payment was not successful");
      } else {
        resolve("Thank you, your payment was successful");
      }
    }, 3000);
  });
};

// If true or success runs .then methods
// If false or error runs .catch methods
buyFlightTicket()
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 *
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

const user = {
  name: `Andi Jafar`,
  age: 19,
  college: `Universitas Komputer`,
  gender: `Male`,
};

// const { name, age, college, gender } = user;
const { name, ...property } = user;

const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = true;
      if (found) {
        resolve(`User:
            name : ${name}
            age : ${property.age}
            college : ${property.college}
            gender : ${property.gender}`);
      } else {
        reject(`User not found`);
      }
    }, 2000);
  });
};

fetchUserData()
  .then((success) => {
    console.log(success);
  })
  .catch((error) => console.log(error));
