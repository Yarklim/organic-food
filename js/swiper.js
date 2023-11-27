const swiper = document.querySelector('.js-swiper');

// let isDragStart = false;

// const dragStart = () => {
//   isDragStart = true;
// };

// const dragging = e => {
//   if (!isDragStart) return;
//   e.preventDefault;
//   console.log(e.pageX);
//   swiper.scrollLeft = e.pageX;
// };

// swiper.addEventListener('mousedown', dragStart);
// swiper.addEventListener('mousemove', dragging);

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = e => {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = swiper.scrollLeft;
};

const dragging = e => {
  if (!isDragStart) return;

  e.preventDefault();
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  swiper.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
};

swiper.addEventListener('mousedown', dragStart);
swiper.addEventListener('touchstart', dragStart);

swiper.addEventListener('mousemove', dragging);
swiper.addEventListener('touchmove', dragging);

swiper.addEventListener('mouseup', dragStop);
swiper.addEventListener('mouseleave', dragStop);
swiper.addEventListener('touchend', dragStop);
