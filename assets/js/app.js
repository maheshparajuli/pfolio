// // get navbar and links
// const navbar = document.querySelector(".navbar");
// const navLinks = document.querySelectorAll(".navbar-link");

// navLinks.forEach(link => {
//   link.addEventListener("click", () => {
//     navbar.classList.remove("active"); // hide navbar after clicking
//   });
// });

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar-link");
const toggleBtn = document.querySelector(".nav-toggle-btn"); // your hamburger

// open/close when clicking toggle
toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// close when clicking a link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

