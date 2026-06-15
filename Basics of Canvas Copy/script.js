window.onload = () => {
    let canvas = document.querySelector('canvas')
    let guru = canvas.getContext('2d')


    var start = new Date();
    window.requestAnimationFrame(RandomRectangle);

    function RandomRectangle() {

        var now = new Date();
        if (now - start >= 500) {
            start = now;

            // guru.clearRect(0, 0, canvas.width, canvas.height);

            let color = createRandomRGBColor();
            let fillColor = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b +  ')';
            let borderColor = 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ')';

            let x = getRandomInt(0, canvas.width);
            let y = getRandomInt(0, canvas.height);
            let w = getRandomInt(0, canvas.width - x);
            let h = getRandomInt(0, canvas.height - y);
            // let f = getRandomInt(0, 50);

            guru.beginPath()
            guru.fillStyle = fillColor;
            guru.strokeStyle = borderColor;
            guru.arc(x, y, w, 0, h);
            // guru.arc(95, 50, 40, 0, 2 * Math.PI);
            guru.stroke();
            guru.fill();
        }

        //Animate
        window.requestAnimationFrame(RandomRectangle);

    }


    function createRandomRGBColor() {
        var red = getRandomInt(0, 257);
        var green = getRandomInt(0, 257);
        var blue = getRandomInt(0, 257);
        return { r: red, g: green, b: blue };
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
