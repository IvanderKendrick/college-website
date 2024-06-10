// Navbar
const ul = document.querySelector("ul.navbar-nav");
const nav = document.querySelector("nav");

nav.addEventListener("click", () => {
  ul.classList.toggle("active");
});

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!nav.contains(e.target) && !ul.contains(e.target)) {
    ul.classList.remove("active");
  }
});
