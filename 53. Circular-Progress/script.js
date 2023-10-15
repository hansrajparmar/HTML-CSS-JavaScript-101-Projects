var circularBar = document.querySelector(".circular-bar"),
    progressValue = document.querySelector(".progress-value");

var progressStartValue = 0,
    progressEndValue = 100,    
    speed = 50;
    
var progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularBar.style.background = `conic-gradient(orange ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);
