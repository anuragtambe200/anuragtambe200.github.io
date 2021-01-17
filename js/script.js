burger = document.querySelector('.burger');
navbar = document.querySelector('.navigation');
navList = document.querySelector('.nav-left');
rightNav = document.querySelector('.nav-right');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});