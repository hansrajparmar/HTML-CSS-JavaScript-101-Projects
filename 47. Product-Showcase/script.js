let image1Btn = document.getElementById("image1");
let image2Btn = document.getElementById("image2");
let image3Btn = document.getElementById("image3");
let image4Btn = document.getElementById("image4");
let bike = document.getElementById("bike");

image1Btn.onclick = function() {
    bike.style.backgroundImage = "url(image/headset1.png)"
};

image2Btn.onclick = function() {
    bike.style.backgroundImage = "url(image/headset2.png)"
};

image3Btn.onclick = function() {
    bike.style.backgroundImage = "url(image/headset3.png)"
};

image4Btn.onclick = function() {
    bike.style.backgroundImage = "url(image/headset4.png)"
};