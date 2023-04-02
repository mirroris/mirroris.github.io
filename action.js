var element = document.querySelector('.mirroris::before');
var windowHeight = window.innerHeight;
var initialPostion = 0;
var intialopacity = 0.4;
var opacity = 0.0;
const currentColor = currentStyle.getPropertyValue('opacity');

window.addEventListener('scroll', function() {
  opacity = initalopacity - 6*(window.scrollY/this.window.innerHeight);
  opacity = opacity < 0 ? 0 :opacity;
  element.style.opacity = opacity;
});
