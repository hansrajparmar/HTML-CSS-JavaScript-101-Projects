const inputt = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;

function updateResults() {
  if (inputt.value <= 0 || isNaN(inputt.value)) {
    errorEl.innerText = "Please enter a valid number!";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = "";
      inputt.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (+inputt.value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputt.value = "";
    }, 10000);
  }
}

inputt.addEventListener("input", updateResults);