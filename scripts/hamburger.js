let hamburger = document.querySelector(".navbar-mobile__hamburger");
let navList = document.querySelector(".navbar-mobile__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("navbar-mobile__list--active");
    navList.classList.toggle("navbar-mobile__list--active");
})

document.querySelectorAll(".navbar-mobile__link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("navbar-mobile__list--active");
    navList.classList.remove("navbar-mobile__list--active");
}))
