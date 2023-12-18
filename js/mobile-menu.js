const burger = document.querySelector('.burger-menu');
const mobMenu = document.querySelector('.mob-menu__nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('is-open');
  mobMenu.classList.toggle('menu-open');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.mobile-link').forEach(el =>
  el.addEventListener('click', e => {
    burger.classList.remove('is-open');
    mobMenu.classList.remove('menu-open');
    document.body.classList.toggle('no-scroll');
  })
);

window.matchMedia('(min-width: 992px)').addEventListener('change', e => {
  if (!e.matches) return;
  burger.classList.remove('is-open');
  mobMenu.classList.remove('menu-open');
  document.body.classList.remove('no-scroll');
});
