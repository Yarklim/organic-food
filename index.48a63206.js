!function(){var e=document.querySelector(".burger-menu"),t=document.querySelector(".mob-menu__nav");e.addEventListener("click",(function(){e.classList.toggle("is-open"),t.classList.toggle("menu-open")})),document.querySelectorAll(".mob-menu__nav-link").forEach((function(n){return n.addEventListener("click",(function(n){e.classList.remove("is-open"),t.classList.remove("menu-open")}))}));var n=document.querySelector(".js-carousel"),o=document.querySelector(".js-button-next"),c=document.querySelector(".js-button-prev"),r=0;o.addEventListener("click",(function(){if(-66.66===r)return void o.setAttribute("disabled","disabled");r-=33.33,c.removeAttribute("disabled","disabled"),n.style.transform="translateX(".concat(r,"%)")})),c.addEventListener("click",(function(){if(0===r)return void c.setAttribute("disabled","disabled");r+=33.33,o.removeAttribute("disabled","disabled"),n.style.transform="translateX(".concat(r,"%)")}));var d=document.querySelector(".backdrop"),i=document.querySelector("[data-modal]"),l=document.querySelectorAll("[data-modal-open]"),a=document.querySelectorAll("[data-modal-close]"),s=document.querySelector(".modal__form--btn");function u(e){i.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}document.addEventListener("keydown",(function(e){"Escape"===e.code&&u()})),d.addEventListener("click",(function(e){e.currentTarget===e.target&&u()})),l.forEach((function(e){e.addEventListener("click",u)})),a.forEach((function(e){e.addEventListener("click",u)})),s.addEventListener("click",u);var m=document.querySelector(".to-top__button");window.addEventListener("scroll",(function(){Math.round(window.scrollY)>300?m.classList.add("active"):m.classList.remove("active")})),m.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.48a63206.js.map
