const body = document.querySelector("body");
const lcmBtn = document.querySelector("#lcmBtn");
const numLcm1 = document.querySelector("#numLcm1");
const numLcm2 = document.querySelector("#numLcm2")
const lcm = document.querySelector("#lcm");
const resultLcm = document.querySelector(".resultLcm");


lcmBtn.textContent = "Click here to find LCM of two numbers.";


document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
        box.style.display = "none";
    });


    const resultBtns = document.querySelectorAll(".resultBtn");
    resultBtns.forEach(function(btn) {
        btn.addEventListener("mouseover", function() {
            resultBtns.forEach(function(btn) {
                btn.style.color = "";
            });
        });

        btn.addEventListener("mouseout", function() {
            resultBtns.forEach(function(btn) {
                btn.style.color = "black";
            });
        });
    });
});

const findLcm = () => {
        $(".resultboxLcm").slideToggle("slow");

        // const slideToggle = () => {
        //     const target = document.querySelector(".resultboxLcm");
        //     target.classList.toggle('slow');
        //   };          
        //   slideToggle('resultboxLcm');


        
        lcm.addEventListener("click", (e) => {
            e.preventDefault();
            const num1 = numLcm1.value ;
            const num2 = numLcm2.value;

            let min = (num1 < num2) ? num1 : num2;
            let flag= true;
            while(flag){
                if(min % num1 == 0 && min % num2 == 0){
                    resultLcm.innerHTML = `LCM of ${num1} and ${num2} is ${min}`;
                    if(min % 2 == 0){
                        evenLcm.style.opacity = 1;
                        oddLcm.style.opacity = 0.5;
                    }else{
                        oddLcm.style.opacity = 1;
                        evenLcm.style.opacity = 0.5;
                    }
                    break;
                }
                min++;
            }
        })
}


lcmBtn.addEventListener("click", findLcm)