/**
 * Fetch
 *
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => {
    console.log(response);
    const hasilResponse = response.json();
    console.log(hasilResponse);
    return hasilResponse;
  })
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify({
    postId: 1,
    name: "Dylan",
    email: "dylansemail310@gmail.com",
    body: "That was dope!",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//   **
//  * Fetch - Challenge
//  *
//  * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
//  * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
//  *
//  * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
//  * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//  */

// Fetch defaults at GET
fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/comments/1", {
  method: "POST",
  body: JSON.stringify({
    postId: 1,
    name: "Andi Jafar",
    email: "andijafartampan@gmail.com",
    body: "This is confusing comment!",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
