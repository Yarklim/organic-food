const e=document.querySelector(".burger-menu"),t=document.querySelector(".mob-menu__nav");e.addEventListener("click",(()=>{e.classList.toggle("is-open"),t.classList.toggle("menu-open")})),document.querySelectorAll(".mob-menu__nav-link").forEach((o=>o.addEventListener("click",(o=>{e.classList.remove("is-open"),t.classList.remove("menu-open")}))));const o=document.querySelector(".js-carousel"),n=document.querySelector(".js-button-next"),c=document.querySelector(".js-button-prev");let r=0;n.addEventListener("click",(function(){if(-66.66===r)return void n.setAttribute("disabled","disabled");r-=33.33,c.removeAttribute("disabled","disabled"),o.style.transform=`translateX(${r}%)`})),c.addEventListener("click",(function(){if(0===r)return void c.setAttribute("disabled","disabled");r+=33.33,n.removeAttribute("disabled","disabled"),o.style.transform=`translateX(${r}%)`}));const d=document.querySelector(".backdrop"),s=document.querySelector("[data-modal]"),l=document.querySelectorAll("[data-modal-open]"),a=document.querySelectorAll("[data-modal-close]"),i=document.querySelector(".modal__form--btn");function u(e){s.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.addEventListener("keydown",(e=>{"Escape"===e.code&&u()})),d.addEventListener("click",(e=>{e.currentTarget===e.target&&u()})),l.forEach((e=>{e.addEventListener("click",u)})),a.forEach((e=>{e.addEventListener("click",u)})),i.addEventListener("click",u);const m=document.querySelector(".to-top__button");window.addEventListener("scroll",(()=>{Math.round(window.scrollY)>300?m.classList.add("active"):m.classList.remove("active")})),m.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.3c3dc8ec.js.map
