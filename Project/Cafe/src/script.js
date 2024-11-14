// JavaScript for Hamburger Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex"); // Add this line to show the menu when toggled
});

// fade in
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("fade-in-header");
  header.classList.remove("opacity-0");
  header.classList.add("opacity-100");
});

// fade in up
document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".card-service");
  serviceItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove("opacity-0", "translate-y-4");
      item.classList.add("opacity-100", "translate-y-0");
    }, index * 200);
  });
});
