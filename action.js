var currentMenu = "mirroris";
var prioritySlide;
var leftEdge = 100.0;

function slideRoll(className)  {
  console.log(className+"is pushed");
  var className = className.replace("Trigger","");
  prioritySlide = document.getElementsByClassName(className);
  if(className != currentMenu) {
    className = currentMenu;
    movement();
  }
  leftEdge = 100.0;
};

function movement(){
  if(leftEdge>0){
    prioritySlide.style.left = toString(leftEdge) + "vw";
    leftEdge--;
    setTimeout(movement,50);
  }
}