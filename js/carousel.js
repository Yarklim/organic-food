const carousel = document.querySelector('.js-carousel');
const nextBtn = document.querySelector('.js-button-next');
const prevBtn = document.querySelector('.js-button-prev');

let position = 0;

nextBtn.addEventListener('click', toNextImg);
prevBtn.addEventListener('click', toPrevImg);

function toNextImg() {
  console.log(position);
  position -= 33.33;

  prevBtn.removeAttribute('disabled', 'disabled');
  carousel.style.transform = `translateX(${position}%)`;

  if (position === -66.66) {
    nextBtn.setAttribute('disabled', 'disabled');
    return;
  }
}
function toPrevImg() {
  position += 33.33;
  nextBtn.removeAttribute('disabled', 'disabled');
  carousel.style.transform = `translateX(${position}%)`;

  if (position === 0) {
    prevBtn.setAttribute('disabled', 'disabled');
    return;
  }
}

// Dragging
// let isDragStart = false,
//   prevPageX,
//   prevScrollLeft;

// const dragStart = e => {
//   isDragStart = true;
//   prevPageX = e.pageX || e.touches[0].pageX;
//   prevScrollLeft = carousel.scrollLeft;
// };

// const dragging = e => {
//   if (!isDragStart) return;

//   e.preventDefault();
//   let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//   carousel.scrollLeft = prevScrollLeft - positionDiff;
// };

// const dragStop = () => {
//   isDragStart = false;
// };

// carousel.addEventListener('mousedown', dragStart);
// carousel.addEventListener('touchstart', dragStart);

// carousel.addEventListener('mousemove', dragging);
// carousel.addEventListener('touchmove', dragging);

// carousel.addEventListener('mouseup', dragStop);
// carousel.addEventListener('mouseleave', dragStop);
// carousel.addEventListener('touchend', dragStop);
