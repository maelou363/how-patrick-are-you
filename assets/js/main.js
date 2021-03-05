// import libraries, packages etc...
import startFirebase from "./firebase.js";

// Navbar toggler implementation
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('#burger-icon');
    const navLinks = document.querySelector('#nav-links');

    // Add "is-active" class to navLinks & burgerIcon to change default Bulma utility display states on click of burger-icon
    burgerIcon.addEventListener('click', () => {
        navLinks.classList.toggle('is-active');
        burgerIcon.classList.toggle('is-active');
    });
});

// initiliazes the firebase app (firebase.js) so we can use the functions to access data
startFirebase();
