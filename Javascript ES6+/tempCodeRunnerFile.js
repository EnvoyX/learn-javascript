const photos = [];

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