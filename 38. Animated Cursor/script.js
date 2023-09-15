const curserEl = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove",movement);

function movement(e){
   console.log("moving")
        let x = e.pageX;
        let y = e.pageY;
        curserEl.style.left = x + "px";
        curserEl.style.top = y + "px";
        curserEl.style.display = "block"

        
}

document.addEventListener("mouseout",()=>{
    curserEl.style.display = "none"
})