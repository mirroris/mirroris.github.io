var element = document.querySelector('.mirroris');
var initialPosition = element.getBoundingClientRect().top + window.scrollY;
var windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
  var currentPosition = element.getBoundingClientRect().top + window.scrollY;
  var distanceFromTop = currentPosition - initialPosition;

  if (distanceFromTop < 0) {
    distanceFromTop = 0;
  }

  var opacity = opacity - 6*(distanceFromTop / windowHeight);
  opacity = opacity < 0 ? 0 :opacity;
  element.style.opacity = opacity;
});
