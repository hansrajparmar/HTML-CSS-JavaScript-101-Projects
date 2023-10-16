const textW = document.getElementById("text");
const speedE = document.getElementById("speed");
const text = "Hey There, Hope You Are Doing Great!";
let index = 1;
let speed = 300 / speedE.value;

const writeText = () => {
  textW.innerText = text.slice(0, index);
  index++;
  if (index > text.length) index = 1;
  setTimeout(writeText, speed);
};

writeText();

speedE.addEventListener("input", (e) => (speed = 300 / e.target.value));