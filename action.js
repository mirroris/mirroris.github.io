var currentMenu = "mirroris";
var nextSlide;
var prevSlide;
var leftEdge = 100;
var prevTitle = "mirrorisTitle";
var nextTitle;
function slideRoll(className)  {
  var arg = className;
  console.log(className+" is pushed");
  var searchName = arg.replace("Trigger","");
  console.log("className = " + searchName);
  prevSlide = nextSlide;
  nextSlide = document.getElementsByClassName(searchName);
  prevTitle = nextTitle;
  nextTitle = document.getElementsByClassName(searchName+"Title");
  console.log("currentSlide = " + prevSlide + ", nextSlide = " + nextSlide);
  if(searchName != currentMenu) {
    currentMenu = searchName;
    nextSlide[0].style.visibility = "visible";
    movement();
    emergence();
    prevSlide[0].style.visibility = "hidden"
    prevSlide[0].style.right = "100vw";
  }
  leftEdge = 100.0;
  titleOpacity=0;
};

function movement(){
  if(leftEdge>0){
    let num = leftEdge;
    nextSlide[0].style.left = num.toString() + "vw";
    prevSlide[0].style.right = num.toString() + "vw";
    nextTitle[0].style.opacity = ((100 -leftEdge)/100.0).toString;
    prevTitle[0].style.opacity = (leftEdge/100.0).toString();
    leftEdge--;
    setTimeout(movement,50);
  }
}

function emergence(){
  if(titleOpacity<1){
    nextTitle[0].style.opacity = titleOpacity;
    titleOpacity+=0.01;
    setTimeout(emergence, 10);
  }
}