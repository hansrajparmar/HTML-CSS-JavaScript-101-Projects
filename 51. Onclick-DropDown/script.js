const Head = document.querySelectorAll(".item-header");

Head.forEach((accordion) => {
    accordion.addEventListener("click", collapseAccordions);

    function collapseAccordions(){
        const activePass = document.querySelector(".active");
        if(activePass && activePass !== accordion){
            activePass.classList.toggle("active");
            activePass.nextElementSibling.style.maxHeight = 0;
        }

        accordion.classList.toggle("active");
        const ItemBody = accordion.nextElementSibling;

        if(accordion.classList.contains("active")){
            ItemBody.style.maxHeight = ItemBody.scrollHeight + "px";
        } else{
            ItemBody.style.maxHeight = 0;
        }
    }
});
