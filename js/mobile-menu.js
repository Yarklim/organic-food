const burger = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mob-menu__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  mobMenu.classList.toggle('menu-open');
});

document.querySelectorAll('.mob-menu__nav-link').forEach(el =>
  el.addEventListener('click', e => {
    burger.classList.remove('is-open');
    mobMenu.classList.remove('menu-open');
  })
);
