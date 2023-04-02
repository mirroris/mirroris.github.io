var currentMenu = "mirroris";
var prioritySlide;
var leftEdge = 100.0;
var prevTitle = "mirrorisTitle";
var nextTitle;
function slideRoll(className)  {
  console.log(className+" is pushed");
  var className = className.replace("Trigger","");
  prioritySlide = document.getElementsByClassName(className);
  prevTitle = nextTitle;
  nextTitle = document.getElementsByClassName(className+"Title");
  if(className != currentMenu) {
    className = currentMenu;
    movement();
    emergence();
  }
  leftEdge = 100.0;
  titleOpacity=0;
};

function movement(){
  if(leftEdge>0){
    let num = leftEdge;
    prioritySlide.style.left = num.toString + "vw";
    prevTitle.style.opacity = leftEdge/100.0;
    leftEdge--;
    setTimeout(movement,50);
  }
}

function emergence(){
  if(titleOpacity<1){
    nextTitle.style.opacity = titleOpacity;
    titleOpacity+=0.01;
    setTimeout(emergence, 10);
  }
}