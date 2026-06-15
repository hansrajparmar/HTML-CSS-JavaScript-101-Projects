const successScreen = document.querySelector('.success-screen');
const header = document.querySelector('.success-screen__header');
const toast = document.querySelector('.toast');
const button = document.querySelector('.button');

button.addEventListener('click', simulateLoad);
button.addEventListener('touchend', simulateLoad);

function simulateLoad() {
  button.classList.add('button--loading');
  button.disabled = true;
  button.querySelector('span').innerHTML = 'Loading...';
  setTimeout(showSuccessScreen, 2000);
}

function showSuccessScreen() {
  button.classList.add('button--hide');
  successScreen.classList.add('success-screen--show');
  Confetti.render(); 

  setTimeout(() => {
    header.classList.add('success-screen__header--show');
  }, 500)

  setTimeout(() => {
    toast.classList.add('toast--show');
  }, 2000)
}

const Confetti = (function () {
  const confettiContainer = document.querySelector('.confetti-container');
  const animationSpeeds = ['slow', 'medium', 'fast'];
  const types = ['round', 'rectangle'];
  let renderInterval = null;

  function render() {
    renderInterval = setInterval(() => {
      const particle = document.createElement('div');
      
      const particleType = types[Math.floor(Math.random() * types.length)];
      const particleLeft = (Math.floor(Math.random() * confettiContainer.offsetWidth)) + 'px';
      const particleAnimation = animationSpeeds[Math.floor(Math.random() * animationSpeeds.length)];
      
      particle.classList.add(
        'confetti__particle', 
        `confetti__particle--animation-${particleAnimation}`,
        `confetti__particle--${particleType}`
      );
      particle.style.left = particleLeft;
      particle.style.webkitTransform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
      
      particle.removeTimeout = setTimeout(function() {
        particle.parentNode.removeChild(particle);
      }, 15000);
      
      confettiContainer.appendChild(particle);
    }, 300);
  }

  return {
    render
  }
})();