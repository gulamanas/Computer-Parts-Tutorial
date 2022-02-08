const burger = document.querySelector('.burger');
const navSlider = document.querySelector('.nav_list');

burger.addEventListener('click', onNavSlide);

function onNavSlide() {
    burger.classList.toggle('switch');
    navSlider.classList.toggle('navSwitch');
}