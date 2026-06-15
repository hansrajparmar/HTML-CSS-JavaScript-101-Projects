
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  var canvas = document.getElementById('canvas'),
                  w = window.innerWidth,
                  h = window.innerHeight;
                  canvas.width = w;
                  canvas.height = h;
                    //c = canvas.getContext('2d'),
                    particles = [];
                    tick = 0;
      var x = 0;
      function loop() {

          createParticles();
          updateParticles();
          killParticles();
          drawParticles();
        requestAnimFrame(loop);

      }
      requestAnimFrame(loop);

      function createParticles() {
var randVal1 = Math.floor(Math.random()*255),
  randVal2 = Math.floor(Math.random()*255),
  randVal3 = Math.floor(Math.random()*255);
        
          //every 10th tick
          if( tick % 10 == 0 ) {
          //add particle if < 100
              if ( particles.length < 100 ) {
                  particles.push({
                  x: Math.random()*canvas.width, //0 and width
                  y: 0,
                  speed: 2+Math.random()*3,//2-5
                  radius: 5+Math.random()*5,//5-10
                  color: 'rgb(' + randVal1 + ',' + randVal2 + ',' + randVal3 + ')'/*'white'*/,
                  });
              }
          }
      }
              
      function updateParticles() {
          for ( var i in particles ) {
              var part = particles[i];
              part.y += part.speed;
          }
      }

      function killParticles() {
          for ( var i in particles ) {
              
              var part = particles[i];
              
              if ( part.y > canvas.height ) {
                  //console.log('x');
                  part.y = 0;
              }
          }
     }

     function drawParticles() {

          var c = canvas.getContext('2d');
          c.fillStyle = 'black';
          c.fillRect (0, 0, canvas.width, canvas.height);
          for ( var i in particles ) {
              var part = particles[i];
              c.beginPath();
              c.arc(part.x, part.y, part.radius, 0, Math.PI*2);
              c.closePath();
              c.fillStyle = part.color;
              c.fill();
          }
   }

     