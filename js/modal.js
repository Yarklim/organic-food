const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

backdrop.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
});

openModalBtn.forEach(el => {
  el.addEventListener('click', openModal);
});

closeModalBtn.forEach(el => {
  el.addEventListener('click', closeModal);
});

function openModal(e) {
  modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}
function closeModal(e) {
  modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}
