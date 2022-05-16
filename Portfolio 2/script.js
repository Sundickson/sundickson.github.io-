let menuIcon = document.querySelector(".menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", mobileMenu);

function mobileMenu() {
  menuIcon.classList.toggle("active");
  navlist.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  menuIcon.classList.remove("active");
  navlist.classList.remove("active");
}
