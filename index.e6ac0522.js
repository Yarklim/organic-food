const e=document.querySelector(".burger-menu"),o=document.querySelector(".mob-menu__nav");e.addEventListener("click",(()=>{e.classList.toggle("is-open"),o.classList.toggle("menu-open")})),document.querySelectorAll(".mob-menu__nav-link").forEach((t=>t.addEventListener("click",(t=>{e.classList.remove("is-open"),o.classList.remove("menu-open")}))));const t=document.querySelector("[data-modal]"),c=document.querySelectorAll("[data-modal-open]"),n=document.querySelectorAll("[data-modal-close]");document.querySelector(".modal__content");function l(){t.classList.toggle("is-hidden")}c.forEach((e=>{e.addEventListener("click",l),document.body.classList.add("no-scroll")})),n.forEach((e=>{e.addEventListener("click",l),document.body.classList.remove("no-scroll")}));
//# sourceMappingURL=index.e6ac0522.js.map