var btn = document.getElementById('button');

window.addEventListener('scroll', function() {

    if (window.scrollY > 200) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
