const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('[data-modal]');
const openModal = document.querySelectorAll('[data-modal-open]');
const closeModal = document.querySelectorAll('[data-modal-close]');
const submitBtn = document.querySelector('.modal__form--btn');

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    toggleModal();
  }
});

backdrop.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    toggleModal();
  }
});

openModal.forEach(el => {
  el.addEventListener('click', toggleModal);
});

closeModal.forEach(el => {
  el.addEventListener('click', toggleModal);
});

submitBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
