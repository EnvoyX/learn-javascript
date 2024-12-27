// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];
const containerEl = document.querySelector(`#container`);

function renderImages() {
  for (i = 1; i < imgs.length + 1; i++) {
    containerEl.innerHTML += `<img class="team-img" src="images/hip${i}.jpg">`;
  }
  // OR
  //   let imgsDOM = "";
  //   for (let i = 0; i < imgs.length; i++) {
  //     imgsDOM += `<img alt="Employ" class="team-img" src="${imgs[i]}">`;
  //   }
  //   containerEl.innerHTML = imgsDOM;
}

renderImages();
