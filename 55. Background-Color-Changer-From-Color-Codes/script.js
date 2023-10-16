const color = document.querySelector(".color")

color.oninput = () => {
    document.querySelector(".main").style.backgroundColor = color.value
    document.querySelector(".text").innerHTML = color.value
}