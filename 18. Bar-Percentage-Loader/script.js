const count = document.querySelector(".count");
const bar = document.querySelector(".loading-bar-up");

let index = 0;

function updateCounter() {
  count.innerText = index + "%";
  bar.style.width = index + "%";
  index++;
  if (index < 101) {
    setTimeout(updateCounter, 20);
  }
}

updateCounter();
