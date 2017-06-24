var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var body = document.getElementsByTagName("body")[0];

function startGame(){
  generateFaces();
  addHandlers();
}

function addHandlers(){
  theLeftSide.lastChild.onclick = function continueToNextLevel(){
    event.stopPropagation();
    numberOfFaces += 5;
    clearFaces();
    generateFaces();
    addHandlers();
  };
  body.onclick = function gameOver(){
    alert("GAME OVER!!")
    body.onclick = null;
    theLeftSide.lastChild.onclick = null;
  }
}

function generateFaces(){
  for (var i = 0; i < numberOfFaces; i++){
    var face = document.createElement("img");
    face.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
    var topPx = Math.floor(Math.random()*401);
    var leftPx = Math.floor(Math.random()*401);
    face.style.top = topPx + "px";
    face.style.left = leftPx + "px";
    theLeftSide.appendChild(face);
  }

  var leftSideFacesCopy = theLeftSide.cloneNode(true);
  leftSideFacesCopy.removeChild(leftSideFacesCopy.lastChild);
  theRightSide.appendChild(leftSideFacesCopy);
}

function clearFaces(){
  while (theLeftSide.firstChild){
    theLeftSide.removeChild(theLeftSide.lastChild);
  }
  theRightSide.removeChild(theRightSide.lastChild);
}
