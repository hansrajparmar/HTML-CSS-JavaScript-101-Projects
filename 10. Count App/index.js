const prevy = document.querySelector(".dec")
const nexty = document.querySelector(".inc")
const resety = document.querySelector(".reset");
const buttons = document.querySelector(".btn")
let countEl = document.querySelector(".count");

let counts = 0;

prevy.addEventListener("click",decrease);
nexty.addEventListener("click",increase);
resety.addEventListener("click",reset);

function increase(){
    counts++;
    countEl.innerHTML = counts;
    if(counts>0){
        countEl.style.color = "green";
    }
    if(counts==0){
        countEl.style.color = "black";
    }
}
function decrease(){
    counts--;
    countEl.innerHTML = counts; 
    if(counts<0){
        countEl.style.color = "red";
    }
    if(counts==0){
        countEl.style.color = "black";
    }
}
function reset(){
    counts=0;
    countEl.innerHTML = counts;
    countEl.style.color = "black";
}

