!function(){var e=document.querySelector(".burger-menu"),t=document.querySelector(".mob-menu__nav");e.addEventListener("click",(function(){e.classList.toggle("is-open"),t.classList.toggle("menu-open"),document.body.classList.toggle("no-scroll")})),document.querySelectorAll(".mobile-link").forEach((function(n){return n.addEventListener("click",(function(n){e.classList.remove("is-open"),t.classList.remove("menu-open"),document.body.classList.toggle("no-scroll")}))})),window.matchMedia("(min-width: 992px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.classList.remove("menu-open"),document.body.classList.remove("no-scroll"))}));var n=document.querySelector(".js-carousel"),i=document.querySelector(".js-button-next"),o=document.querySelector(".js-button-prev"),a=0;function s(e){var t=document.createElement("div");t.classList.add("modal__content--product");var n=document.createElement("div");n.classList.add("modal__product--img"),n.classList.add("".concat(e.id)),n.src=e.src,n.alt=e.alt,n.width=e.width,n.height=e.height;var i=document.createElement("h2");i.classList.add("modal__product--title"),i.textContent=e.title;var o=document.createElement("h2");return o.classList.add("modal__product--descr"),o.textContent=e.descr,t.append(n,i,o),t}i.addEventListener("click",(function(){if(-66.66===a)return void i.setAttribute("disabled","disabled");a-=33.33,o.removeAttribute("disabled","disabled"),n.style.transform="translateX(".concat(a,"%)")})),o.addEventListener("click",(function(){if(0===a)return void o.setAttribute("disabled","disabled");a+=33.33,i.removeAttribute("disabled","disabled"),n.style.transform="translateX(".concat(a,"%)")}));var r=[{id:"product-1",src:"../src/images/pictures/item-1.jpg",alt:"Cucumbers",width:"250",height:"250",title:"Cucumbers",descr:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero eligendi accusantium voluptates voluptas saepe dignissimos dolor voluptatibus blanditiis, quaerat similique illo rem asperiores aspernatur!"},{id:"product-2",src:"../src/images/pictures/item-2.jpg",alt:"Orangess",width:"250",height:"250",title:"Oranges",descr:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero eligendi accusantium voluptates voluptas saepe dignissimos!"},{id:"product-3",src:"../src/images/pictures/item-3.jpg",alt:"Lettuce",width:"250",height:"250",title:"Lettuce",descr:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero eligendi accusantium voluptates voluptas saepe dignissimos dolor voluptatibus blanditiis, quaerat similique illo rem asperiores aspernatur!"},{id:"product-4",src:"../src/images/pictures/item-4.jpg",alt:"Apples",width:"250",height:"250",title:"Apples",descr:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure vero eligendi dignissimos dolor voluptatibus blanditiis, quaerat similique illo rem asperiores aspernatur!"}],l=document.querySelector(".backdrop"),c=document.querySelector("[data-modal]"),d=document.querySelectorAll("[data-modal-open]"),m=document.querySelectorAll("[data-modal-close]"),u=document.querySelector(".modal__content");function p(e){if(c.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),"contact"===e.target.dataset.modalContent){u.innerHTML='\n\t<form class="modal__form" name="contacts-form" id="modal__form">\n        <strong class="modal__form--title">Contact Us</strong>\n        <div\n          class="modal__form--details"\n          role="group"\n          aria-labelledby="modal__form"\n        >\n          <div class="modal__form--field">\n            <label for="name" class="modal__form--label"> Name </label>\n            <input\n              class="modal__form--input"\n              type="text"\n              name="name"\n              id="name"\n              autocomplete="name"\n              placeholder="Enter your name"\n            />\n            <div class="form__input--icon person"></div>\n          </div>\n\n          <div class="modal__form--field">\n            <label for="email" class="modal__form--label"> Email </label>\n            <input\n              type="email"\n              name="email"\n              id="email"\n              autocomplete="email"\n              class="modal__form--input"\n              placeholder="Enter your email"\n            />\n            <div class="form__input--icon email"></div>\n          </div>\n        </div>\n        <div class="modal__form--checkbox">\n          <label class="form__label--agree">\n            <input\n              class="form__input--agree"\n              type="checkbox"\n              name="agree"\n              value="agree"\n            />\n\n            <div class="label__agree--icon"></div>\n\n            <span>I agree to receive the newsletter and subscribe</span>\n          </label>\n        </div>\n\n        <button type="button" class="modal__form--btn btn">Subscribe</button>\n      </form>\n\t',document.querySelector(".modal__form--btn").addEventListener("click",v)}else{var t=Number(e.target.getAttribute("id"));u.append(s(r[t]))}}function v(e){u.innerHTML="",c.classList.add("is-hidden"),document.body.classList.remove("no-scroll")}document.addEventListener("keydown",(function(e){"Escape"===e.code&&v()})),l.addEventListener("click",(function(e){e.currentTarget===e.target&&v()})),d.forEach((function(e){e.addEventListener("click",p)})),m.forEach((function(e){e.addEventListener("click",v)}));var b=document.querySelector(".to-top__button");window.addEventListener("scroll",(function(){Math.round(window.scrollY)>300?b.classList.add("active"):b.classList.remove("active")})),b.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.11536138.js.map
