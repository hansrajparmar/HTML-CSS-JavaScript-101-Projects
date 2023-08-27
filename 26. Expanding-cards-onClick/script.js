const slides = document.querySelectorAll(".slider");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    removeCurrentActives();
    slide.classList.add("active");
  });
});

function removeCurrentActives() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}