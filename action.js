var element = document.querySelector('.my-element');
var initialPosition = element.getBoundingClientRect().top + window.scrollY;
var windowHeight = window.innerHeight;
var initialOpacity = element.opacity;

window.addEventListener('scroll', function() {
  var currentPosition = element.getBoundingClientRect().top + window.scrollY;
  var distanceFromTop = currentPosition - initialPosition;

  if (distanceFromTop < 0) {
    distanceFromTop = 0;
  }

  var opacity = 1 - (distanceFromTop / windowHeight);

  element.style.opacity = opacity;
});
