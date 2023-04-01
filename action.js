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

  var opacity = initialOpacity - 6*(distanceFromTop / windowHeight);
  opacity = opacity < 0 ? 0 :opacity;
  element.style.opacity = opacity;
});
