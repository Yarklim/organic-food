const toTop = document.querySelector('.to-top__button');

window.addEventListener('scroll', () => {
  if (Math.round(window.scrollY) > 300) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

toTop.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
