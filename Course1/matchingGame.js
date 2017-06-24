var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide")

function generateFaces(){
  theLeftSide.backgroundColor = "blue";
  for (var count in numberOfFaces){
    var face = document.createElement("img");
    face.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
    var topPx = Math.floor(Math.random()*401);
    var leftPx = Math.floor(Math.random()*401);
    face.style.top = topPx + "px";
    face.style.left = leftPx + "px";
    theLeftSide.appendChild(face);
  }
}
