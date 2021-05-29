const menuIcon = document.querySelector 
('.nav-links');
const navbar = document.querySelector ('.nav-links');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
})