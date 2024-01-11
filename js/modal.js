import { makeContactsModalContent } from './modal-content.js';
import { makeProductModalContent } from './modal-content.js';
import { products } from '../src/data/products.js';

const backdropEl = document.querySelector('.backdrop');
const modalEl = document.querySelector('[data-modal]');
const openModalBtnEl = document.querySelectorAll('[data-modal-open]');
const closeModalBtnEl = document.querySelectorAll('[data-modal-close]');
const modalContentContainer = document.querySelector('.modal__content');

document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

backdropEl.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
});

openModalBtnEl.forEach(el => {
  el.addEventListener('click', openModal);
});

closeModalBtnEl.forEach(el => {
  el.addEventListener('click', closeModal);
});

function openModal(e) {
  modalEl.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');

  if (e.target.dataset.modalContent === 'contact') {
    modalContentContainer.innerHTML = makeContactsModalContent();

    const forBtnEl = document.querySelector('.modal__form--btn');

    forBtnEl.addEventListener('click', closeModal);
  } else {
    const productId = Number(e.target.getAttribute('id'));

    modalContentContainer.append(makeProductModalContent(products[productId]));
  }
}
function closeModal(e) {
  modalContentContainer.innerHTML = '';
  modalEl.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}
