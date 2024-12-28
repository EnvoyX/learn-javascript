// const photos = [];

// function photoUpload() {
//   let uploadStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       photos.push("Profile Pic");
//       resolve("Photo Uploaded");
//     }, 3000);
//   });

//   let result = uploadStatus;

//   //   This happens because Javascript runs synchronusly
//   console.log(result); // Promise
//   console.log(photos.length); // 0
// }
// photoUpload();

// const foto = [];

// async function uploadPhoto() {
//   let uploadStatus = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       foto.push("Profile Pic");
//       resolve("Photo Uploaded");
//     }, 3000);
//   });

//   let result = await uploadStatus;

//   console.log(result); // Photo Uploaded
//   console.log(foto.length); // 1
// }

// uploadPhoto();

//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";

// Fetch Only
// fetch(apiUrl)
//   .then((response) => {
//     console.log(response);
//     hasilResponse = response.json();
//     console.log(hasilResponse);
//     return hasilResponse;
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.value);
//   });

//   Fetch with Async & Await

async function getJoke() {
  const response = await fetch(apiUrl);
  console.log(response);

  const data = await response.json();
  console.log(data);
  console.log(data.value);
}

getJoke();
