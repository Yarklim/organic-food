const carousel = document.querySelector('.js-carousel');
const nextBtn = document.querySelector('.js-button-next');
const prevBtn = document.querySelector('.js-button-prev');

let position = 0;

nextBtn.addEventListener('click', toNextImg);
prevBtn.addEventListener('click', toPrevImg);

function toNextImg() {
  if (position === -66.66) {
    nextBtn.setAttribute('disabled', 'disabled');
    return;
  }

  position -= 33.33;
  prevBtn.removeAttribute('disabled', 'disabled');
  carousel.style.transform = `translateX(${position}%)`;
}
function toPrevImg() {
  if (position === 0) {
    prevBtn.setAttribute('disabled', 'disabled');
    return;
  }
  position += 33.33;
  nextBtn.removeAttribute('disabled', 'disabled');
  carousel.style.transform = `translateX(${position}%)`;
}
