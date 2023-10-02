let box = document.querySelector(".box"),
input = document.querySelector("input");

input.addEventListener("input", ()=>{
    box.style.borderRadius = input.value;
    box.style.background = input.value;
})
