var currentMenu = "mirroris";
var startTime = new Date();
var currentTime;
var prioritySlide;
var leftEdge = 100.0;

function slideRoll(className)  {
  console.log(className);
  var className = className.replace("Trigger","");
  prioritySlide = document.getElementsByClassName(className);
  while((leftEdge>0)){
  }
};

function movement(){
    prioritySlide.style.left = toString(leftEdge/10.0) + "vw";
    leftEdge--;
    setTimeout(movement,50);
}