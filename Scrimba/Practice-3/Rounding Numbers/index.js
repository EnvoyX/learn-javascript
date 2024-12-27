// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455;
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy €${totalPrice.toFixed(2)}`;

// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it
const price2 = "320.3425325";
const btn2 = document.getElementById("purchase-btn-2");
btn2.textContent = `Buy €${parseFloat(price2).toFixed(2)}`;
