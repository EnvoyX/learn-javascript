let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Fetch the button from the DOM, store it in a variable
const janeScore = document.getElementById("btn");
// Use addEventListener() to listen for button clicks
janeScore.addEventListener("click", () => {
  // Log Jane's score when the button is clicked (via data)
  console.log(data[0].score);
});
