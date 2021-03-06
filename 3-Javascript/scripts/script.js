//variables
var startDate = new Date();
var startTime = startDate.getTime();
//functions
function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function setRandomColor(elementID){
    document.getElementById(elementID).style.backgroundColor = getRandomColor();
}
function getRandomSize(elementID){
    var random_Shape = document.getElementById(elementID);
    var min_Height = parseInt(random_Shape.style.minHeight);//.replace(/[^-\d\.]/g, '');
    var min_Width = parseInt(random_Shape.style.minWidth)//.replace(/[^-\d\.]/g, '');
    var max_Height = parseInt(random_Shape.style.maxHeight);//.replace(/[^-\d\.]/g, '');
    var max_Width = parseInt(random_Shape.style.maxWidth)//.replace(/[^-\d\.]/g, '');
    if (min_Height < min_Width){
        var size = Math.floor((Math.random() * (max_Height - min_Height) + min_Height));
        return size;
    }
    else{
        var size = Math.floor((Math.random() * (max_Width- min_Width) + min_Width));
        return size;
    }
}
function setRandomSize(elementID){
    var size = getRandomSize(elementID);
    document.getElementById(elementID).style.height = size +"px";
    document.getElementById(elementID).style.width = size +"px";
}
function setMinHeight(elementID, minH){
    document.getElementById(elementID).style.minHeight = minH + "px";
}
function setMinWidth(elementID, minW){
    document.getElementById(elementID).style.minWidth = minW + "px";
}
function setMaxHeight(elementID, maxH){
    document.getElementById(elementID).style.maxHeight = maxH + "px";
}
function setMaxWidth(elementID, maxW){
    document.getElementById(elementID).style.maxWidth = maxW + "px";
}
function setHeight(elementID, h){
    document.getElementById(elementID).style.height = h + "vh";
}
function setWidth(elementID, w){
    document.getElementById(elementID).style.width = w + "vw";
}
function getCircleOrSquare(){
    var isCircle = false;
    var shapeSelector = Math.floor(Math.random()*2);
    if (shapeSelector == 1){
        isCircle = true;
        return "50%";
    }
    else {
        isCircle = false;
        return "0%";
    }
}
function setCircleOrSquare(elementID){

    document.getElementById(elementID).style.borderRadius = getCircleOrSquare();
}
//Takes an element and sets its left and top value relative to a random number between 0 and the viewport-height/width
function setRandomPosition(elementID, areaID){
    var random_Shape = document.getElementById(elementID);
    var areaDiv = document.getElementById(areaID);
    var shapeWidth = parseInt(random_Shape.style.width);
    var shapeHeight = parseInt(random_Shape.style.height);
    var spaceWidth = parseInt(window.getComputedStyle(areaDiv,null).getPropertyValue("width"));
    var spaceHeight = parseInt(window.getComputedStyle(areaDiv,null).getPropertyValue("height"));
    random_Shape.style.position = "relative";
    random_Shape.style.left = Math.floor(Math.random()*(spaceWidth-shapeWidth)) + "px";
    random_Shape.style.top = Math.floor(Math.random()*(spaceHeight-shapeHeight)) + "px";
}
function getNewTime(){
    var newDate = new Date();
    var newTime = newDate.getTime();
    return newTime;
}
function setStartTime(){
    var newStartDate = new Date();
    var newStartTime = newStartDate.getTime();
    startTime = newStartTime;
}
function getStartTime(){
    return startTime;
}
function sleep(milliseconds){
      var start = new Date().getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
}
function createShape() {
    var startTime = getStartTime();
    var newTime = getNewTime();
    var reactionTime = newTime - startTime;
    var randomWaitTime = Math.floor(Math.random()*3000);
    reactionTime = reactionTime / 1000;
    document.getElementById("insertTime").innerHTML = reactionTime;
    sleep(randomWaitTime);
    setMinHeight("randomShape",40);
    setMinWidth("randomShape",40);
    setMaxHeight("randomShape",200);
    setMaxWidth("randomShape",200);
    setRandomColor("randomShape");
    setRandomSize("randomShape");
    setCircleOrSquare("randomShape");
    setRandomPosition("randomShape", "shapeSpace");
    setStartTime();
}
//main
setHeight("shapeSpace", 70);
setWidth("shapeSpace", 70);
setTimeout(function (){createShape();}, 1000);