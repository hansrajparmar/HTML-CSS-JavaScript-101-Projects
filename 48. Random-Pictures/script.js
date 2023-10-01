const imageContainer = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  imageCount = 1;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageCount; index++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainer.appendChild(newImg);
  }
}
