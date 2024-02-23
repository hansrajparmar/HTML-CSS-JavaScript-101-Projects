const input = document.getElementById("inp");
const qrcodeContainer = document.getElementById("qrcode-container");
const qrimg = document.getElementById("qrimg");
const btn = document.getElementById("btn");
 
btn.addEventListener("click", () => {
  if (input.value) {
    qrimg.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`
    );

    qrcodeContainer.style.display = "flex";
  } else {
    alert("Please Enter URL/TEXT!!");
  }
});

//Enter press krte hi input form submit hone k liye niche wala code 👇

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
