const ClickBtn = document.querySelector(".click");
const okBtnEl = document.querySelector(".okBtn");
const popUpEl = document.querySelector(".pop-up");

ClickBtn.addEventListener("click",()=>{
    popUpEl.classList.add("pop-up-open");
})

okBtnEl.addEventListener("click",()=>{
    popUpEl.classList.remove("pop-up-open");
})