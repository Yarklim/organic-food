export function makeContactsModalContent() {
  return `
	<form class="modal__form" name="contacts-form" id="modal__form">
        <strong class="modal__form--title">Contact Us</strong>
        <div
          class="modal__form--details"
          role="group"
          aria-labelledby="modal__form"
        >
          <div class="modal__form--field">
            <label for="name" class="modal__form--label"> Name </label>
            <input
              class="modal__form--input"
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              placeholder="Enter your name"
            />
            <div class="form__input--icon person"></div>
          </div>

          <div class="modal__form--field">
            <label for="email" class="modal__form--label"> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="modal__form--input"
              placeholder="Enter your email"
            />
            <div class="form__input--icon email"></div>
          </div>
        </div>
        <div class="modal__form--checkbox">
          <label class="form__label--agree">
            <input
              class="form__input--agree"
              type="checkbox"
              name="agree"
              value="agree"
            />

            <div class="label__agree--icon"></div>

            <span>I agree to receive the newsletter and subscribe</span>
          </label>
        </div>

        <button type="button" class="modal__form--btn btn">Subscribe</button>
      </form>
	`;
}

export function makeProductModalContent(content) {
  const productModalContainerEL = document.createElement('div');
  productModalContainerEL.classList.add('modal__content--product');

  const productModalImageEl = document.createElement('div');
  productModalImageEl.classList.add('modal__product--img');
  productModalImageEl.classList.add(`${content.id}`);
  productModalImageEl.src = content.src;
  productModalImageEl.alt = content.alt;
  productModalImageEl.width = content.width;
  productModalImageEl.height = content.height;

  const productModalTitleEl = document.createElement('h2');
  productModalTitleEl.classList.add('modal__product--title');
  productModalTitleEl.textContent = content.title;

  const productModalDescrEl = document.createElement('h2');
  productModalDescrEl.classList.add('modal__product--descr');
  productModalDescrEl.textContent = content.descr;

  productModalContainerEL.append(
    productModalImageEl,
    productModalTitleEl,
    productModalDescrEl
  );

  return productModalContainerEL;
}
