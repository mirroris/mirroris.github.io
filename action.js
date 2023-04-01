
function handleScroll(opac) {
  let opacity = opac - (window.scrollY / window.innerHeight);
  element.style.opacity = opacity < 0 ? 0 : opacity;
  window.requestAnimationFrame(handleScroll(opacity));
}

function fadeoutScroll(element){
    window.requestAnimationFrame(handleScroll(element.style.opacity));
}
