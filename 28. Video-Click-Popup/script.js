const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");
const videoContainer = document.querySelector(".video-container");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
  videoContainer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
  videoContainer.classList.add("active");
  video.pause();
  video.currentTime = 0;
});