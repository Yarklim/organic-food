// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
// })();

const modal = document.querySelector('[data-modal]');
const openModal = document.querySelectorAll('[data-modal-open]');
const closeModal = document.querySelectorAll('[data-modal-close]');

openModal.forEach(el => {
  el.addEventListener('click', toggleModal);
});

closeModal.forEach(el => {
  el.addEventListener('click', toggleModal);
});

function toggleModal() {
  modal.classList.toggle('is-hidden');
}
