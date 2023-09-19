const menu = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialListsEl = document.querySelector(".social-lists");
const liEls = document.querySelectorAll(".social-lists li");

menu.addEventListener("click", () => {
  socialListsEl.classList.toggle("hide");
  menu.classList.toggle("rotate");
});

liEls.forEach((elem) => {
  elem.addEventListener("click", () => {
    menuTextEl.innerHTML = elem.innerHTML;
    socialListsEl.classList.add("hide");
    menu.classList.toggle("rotate");
  });
});
