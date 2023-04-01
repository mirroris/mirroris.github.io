var element = document.querySelector('.mirroris');
var windowHeight = window.innerHeight;
var initialPostion = 0;

window.addEventListener('scroll', function() {
  var distanceFromTop =  window.scrollY - initialPosition;

  if (distanceFromTop < 0) {
    distanceFromTop = 0;
  }

  var opacity = opacity - 6*(distanceFromTop / window.scrollY);
  opacity = opacity < 0 ? 0 :opacity;
  element.style.opacity = opacity;
});
