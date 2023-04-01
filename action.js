var element = document.querySelector('.mirroris');
var windowHeight = window.innerHeight;
var initialPostion = 0;
var intialopacity = element.opacity;

window.addEventListener('scroll', function() {
  var opacity = initalopacity - 6*(distanceFromTop / window.scrollY);
  opacity = opacity < 0 ? 0 :opacity;
  element.style.opacity = opacity;
});
