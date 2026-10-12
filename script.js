
// MOBILE NAVIGATION


const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// CLOSE MOBILE MENU


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});



// CHANGE NAVBAR WHEN SCROLLING


const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// CURRENT YEAR IN FOOTER


const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {
    footerYear.textContent =
        `© ${currentYear} STEMTech with Lulu. All Rights Reserved.`;
}