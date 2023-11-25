import { subscribeModal, productModal } from '../src/data/modal-content';

const modal = document.querySelector('[data-modal]');
const openModal = document.querySelectorAll('[data-modal-open]');
const closeModal = document.querySelectorAll('[data-modal-close]');
const modalContent = document.querySelector('.modal__content');

openModal.forEach(el => {
  el.addEventListener('click', toggleModal);
});

closeModal.forEach(el => {
  el.addEventListener('click', toggleModal);
});

function toggleModal() {
  modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
