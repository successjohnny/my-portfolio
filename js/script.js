// Confirm that JavaScript is connected correctly
console.log("Portfolio loaded successfully!");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

console.log(menuToggle);
console.log(navLinks);

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});