(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),o=()=>{const e=r.querySelectorAll('a[href*="#"]'),t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),r.classList.toggle("is-open");const c=t?"enableBodyScroll":"disableBodyScroll";if(bodyScrollLock[c](document.body),e.length!==0){if(!t){e.forEach(i=>{i.addEventListener("click",o)});return}e.forEach(i=>{i.removeEventListener("click",o)})}};n.addEventListener("click",o),s.addEventListener("click",o),window.matchMedia("(min-width: 375px)").addEventListener("change",e=>{e.matches&&(r.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("quantity"),n=document.getElementById("unit-price"),s=document.getElementById("total-price");function o(){const e=parseInt(r.value),c=parseFloat(n.textContent)*e;s.textContent=c.toFixed(0)}r.addEventListener("input",o),o()});let l=0;const u=document.querySelector(".carousel-track"),d=document.querySelectorAll(".carousel-item").length;function a(){const r=document.querySelector(".carousel").offsetWidth;u.style.transform=`translateX(-${l*r}px)`}function m(){l=(l+1)%d,a()}setInterval(m,2500);
//# sourceMappingURL=commonHelpers.js.map
