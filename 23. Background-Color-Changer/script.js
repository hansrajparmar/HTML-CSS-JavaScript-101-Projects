const btns = document.querySelectorAll(".btn");
const body = document.body;
// console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeBackground(number);
  });
});

function changeBackground(number) {
  // console.log(number);
  body.className = "";

  switch (number) {

      case "pink":
      body.classList.add("pink");
      break;
   
      case "royalblue":
      body.classList.add("royalblue");
      break;

      case "goldenrod":
      body.classList.add("goldenrod");
      break;
   
      case "tomato":
      body.classList.add("tomato");
      break;

      default:
      break;
  }
}