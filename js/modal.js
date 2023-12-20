// import { contactModal, productModal } from './modal-content';

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelectorAll('[data-modal-open]');
const closeModalBtn = document.querySelectorAll('[data-modal-close]');
// const contentContainer = document.querySelector('.modal__content');

// const modalContent = document.createElement('div');

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
  //   makeModalContent(e);
  modal.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}
function closeModal(e) {
  modal.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}

// function makeModalContent(e) {
//   if (e.currentTarget.dataset.modalContent === 'product') {
//     modalContent.innerHTML = productModal;
//     contentContainer.append(modalContent);
//   } else {
//     modalContent.innerHTML = contactModal;
//     contentContainer.append(modalContent);

//     const submitBtn = document.querySelector('.modal__form--btn');
//     submitBtn.addEventListener('click', closeModal);
//   }
// }
