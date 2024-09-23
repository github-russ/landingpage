// Select a single element.
let header1 = document.querySelector('h1');

// Select multiple elements.
const productCards = document.querySelectorAll('.product-card');

// Modify your element's text.
header1.textContent = "Welcome to EasyPC!";

// Modify your element's styles.

header1.style.fontFamily = 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif';

// Add a button and event listener for button clicks.
function sayThankYou() {

    let emailInput = document.querySelector('#email');

    if (emailInput.value.trim() === '') {
        alert("Please fill in required fields.");
    } else if (!emailInput.value.includes('@') || !emailInput.value.includes('.com')) {
        alert("Please complete your email address.");
    } else {
        alert("You will now get latest updates and promotions from EasyPC!");
    }
}

let submit = document.getElementById("submit");
submit.addEventListener("click", sayThankYou);