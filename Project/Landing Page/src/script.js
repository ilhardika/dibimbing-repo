const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu").querySelector("nav");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
