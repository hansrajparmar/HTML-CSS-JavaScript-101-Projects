var text = document.querySelector(".text")
var classic = document.querySelector(".classic")
var body = document.querySelector("body")

var a = document.querySelector("#i");
var b = document.querySelector("#n");
var c = document.querySelector("#s");
var d = document.querySelector("#t");
var e = document.querySelector("#a");
var f = document.querySelector("#g");
var g = document.querySelector("#r");
var h = document.querySelector("#o");
var i = document.querySelector("#m");

text.addEventListener("mouseover", function(){

        a.style.color = "#FCBD0B";
        b.style.color = "#FF7D1F";
        c.style.color = "#FE3F33";
        d.style.color = "#F7445B";
        e.style.color = "#DD1B7F";
        f.style.color = "#CC15B0";
        g.style.color = "#BA0FDF";
        h.style.color = "#921AED";
        i.style.color = "#6A45FD";
        classic.style.boxShadow = "0 0 30px white";
        text.style.cursor = "pointer"
});

text.addEventListener("mouseout", function(){
     
        a.style.color = "white";
        b.style.color = "white";
        c.style.color = "white";
        d.style.color = "white";
        e.style.color = "white";
        f.style.color = "white";
        g.style.color = "white";
        h.style.color = "white";
        i.style.color = "white";
        classic.style.boxShadow = "none";

});