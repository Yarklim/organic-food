const toTop = document.querySelector('.to-top__button');

window.addEventListener('scroll', () => {
  if (Math.round(window.scrollY) > 200) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});
