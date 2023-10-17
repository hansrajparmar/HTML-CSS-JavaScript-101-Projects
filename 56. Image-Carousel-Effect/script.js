const body = document.body;
const images = document.querySelectorAll(".img");
const arrowBtns = document.querySelectorAll(".arrow-btn");

let activeImgFlag = 0;

function activeImages() {
  images.forEach((img) => {
    img.classList.remove("active");
    img.classList.remove("animateTransition");
  });

  images[activeImgFlag].classList.add("active");
  images[activeImgFlag].classList.add("animateTransition");
}

setImageAsBackground();

function setImageAsBackground() {
  body.style.backgroundImage = images[activeImgFlag].style.backgroundImage;
}

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList == "right-arrow") {
      activeImgFlag++;
      if (activeImgFlag > images.length - 1) {
        activeImgFlag = 0;
      }
    } else {
      activeImgFlag--;
      if (activeImgFlag < 0) {
        activeImgFlag = images.length - 1;
      }
    }

    setImageAsBackground();
    activeImages();
  });
});
