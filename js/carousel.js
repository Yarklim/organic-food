const carousel = document.querySelector('.js-carousel');
const nextBtn = document.querySelector('.js-button-next');
const prevBtn = document.querySelector('.js-button-prev');

let position = 0;

nextBtn.addEventListener('click', toNextImg);
prevBtn.addEventListener('click', toPrevImg);

function toNextImg() {
  position -= 33.33;

  prevBtn.removeAttribute('disabled', 'disabled');

  toChangeImage(position);

  if (position === -66.66) {
    nextBtn.setAttribute('disabled', 'disabled');
    return;
  }
}

function toPrevImg() {
  position += 33.33;

  nextBtn.removeAttribute('disabled', 'disabled');

  toChangeImage(position);

  if (position === 0) {
    prevBtn.setAttribute('disabled', 'disabled');
    return;
  }
}

function toChangeImage(position) {
  carousel.style.transform = `translateX(${position}%)`;
}

// Dragging

// carousel.addEventListener('mousedown', dragStart);
// carousel.addEventListener('touchstart', dragStart);

// carousel.addEventListener('mousemove', dragging);
// carousel.addEventListener('touchmove', dragging);

// carousel.addEventListener('mouseup', dragStop);
// carousel.addEventListener('mouseleave', dragStop);
// carousel.addEventListener('touchend', dragStop);

// let isDragStart = false;
// let startDrag;
// let endDrag;
// let positionX;

// function dragStart(e) {
//   isDragStart = true;
//   startDrag = e.clientX || e.touches[0].clientX;
//   prevScrollLeft = carousel.scrollLeft;
// }

// function dragging(e) {
//   if (!isDragStart) return;

//   e.preventDefault();

// 	positionX = e.offsetX;

// 	carousel.style.left = `${positionX - startDrag}px`
// }

// function dragStop() {
//   isDragStart = false;
// }
