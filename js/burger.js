const burger = document.querySelector('.burger');
const burgerLines = document.querySelector('.line-burger');
const menue = document.querySelector('.nav-link-wrapper');
const navLinks = document.querySelectorAll('.nav-link')

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    burgerLines.classList.toggle('open');
    menue.classList.toggle('open');
});


navLinks.forEach(link => link.addEventListener('click', () => {
    burger.classList.toggle('open');
    burgerLines.classList.toggle('open');
    menue.classList.toggle('open');
}));