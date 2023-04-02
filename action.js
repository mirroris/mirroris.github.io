var currentMenu = "mirroris";
function slideRoll()  {
  var className = (this.className).replace("Trigger","");
  var prioritySlide = document.getElementsByClassName(className);
  var leftEdge = 1000;
  while(leftEdge>0){
    prioritySlide.style.left = toString(leftEdge/10) + "vw";
    leftEdge--;
  }
};