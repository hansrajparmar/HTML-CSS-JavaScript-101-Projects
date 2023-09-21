var btn = document.querySelector(".btn");
var inputs = document.querySelectorAll(".input");
btn.onclick = function () {
  btn.classList.toggle("active");
  setTimeout(() => {
    btn.classList.toggle("active");
    inputs[1].classList.toggle("active");
  }, 1500);
  setTimeout(() => {
    inputs[1].classList.toggle("active");
  }, 3000);
};