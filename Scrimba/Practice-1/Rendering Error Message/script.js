// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

const purchaseBtn = document.getElementById("purchase-btn");
const errorEl = document.getElementById("error");
console.log(purchaseBtn);
console.log(errorEl);

purchaseBtn.addEventListener("click", () => {
  console.log("Button has clicked");
  errorEl.textContent = "Something went wrong, please try again";
});
