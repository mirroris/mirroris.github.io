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
  nextSlide = document.getElementsByClassName(searchName)[0];
  prevTitle = nextTitle;
  nextTitle = document.getElementsByClassName(searchName+"Title")[0];
  console.log("currentSlide = " + prevSlide + ", nextSlide = " + nextSlide);
  if(searchName != currentMenu) {
    currentMenu = searchName;
    nextSlide.style.visibility = "visible";
    movement();
    emergence();
    prevSlide.style.visibility = "hidden"
    prevSlide.style.right = "100vw";
  }
  leftEdge = 100.0;
  titleOpacity=0;
};

function movement(){
  if(leftEdge>0){
    console.log("leftEdge = " + leftEdge);
    let num = leftEdge;
    nextSlide.style.left = num.toString() + "vw";
    prevSlide.style.right = num.toString() + "vw";
    nextTitle.style.opacity = ((100 -leftEdge)/100.0).toString();
    prevTitle.style.opacity = (leftEdge/100.0).toString();
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