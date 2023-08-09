function gen(){

    var n1 = Math.floor(Math.random()*256);
    var n2 = Math.floor(Math.random()*256);
    var n3 = Math.floor(Math.random()*256);
    var n = "rgb("+ n1+","+n2+","+n3+")";
    // console.log(n);
// Math.floor(Math.random()*256)
document.body.style.background = n;
}

document.querySelector("button").addEventListener("click",function(){
    gen();
})
