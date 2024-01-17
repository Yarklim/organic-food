const slider = document.querySelector('.js-carousel');
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
  slider.style.transform = `translateX(${position}%)`;
}

// Dragging

// slider.addEventListener('mousedown', dragStart);
// slider.addEventListener('touchstart', dragStart);

// document.addEventListener('mousemove', dragging);
// slider.addEventListener('touchmove', dragging);

// document.addEventListener('mouseup', dragStop);
// // slider.addEventListener('mouseleave', dragStop);
// slider.addEventListener('touchend', dragStop);

// let isDragStart = false;
// let startPosition;
// let endPosition;
// let positionX;

// function dragStart(e) {
//   isDragStart = true;
//   startPosition = e.pageX || e.touches[0].pageX;
//   positionX = slider.scrollLeft;

//   console.log('start', startPosition);
//   console.log('position', positionX);
// }

// function dragging(e) {
//   if (!isDragStart) return;

//   e.preventDefault();
//   slider.classList.add('dragging');
//   slider.style.transform = `translateX(${positionX - startPosition}px)`;

//   //   slider.style.left = `${positionX - startPosition}px`;
// }

// function dragStop() {
//   isDragStart = false;
// }
