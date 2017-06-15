var listOfColors = ["azure", "cornsilk", "deepskyblue", "gainsboro", "gold", "lightcoral",
                    "lightsalmon", "mistyrose", "peru", "seashell", "silver", "thistle"];
var correctAnswer;
var finished = false;
var numGuesses = 0;

function play_game(){
  correctAnswer = generate_rand_color()
  while(!finished){
    var guess = prompt("I am thinking of one of these colors: \n\n" +
    listOfColors.join(", ") + "\n\n" +
    "What color am I thinking of?");
    generate_message(guess)
  }
}

function generate_rand_color(){
  var rand = Math.random()*listOfColors.length;
  var index = Math.floor(rand);
  return listOfColors[index]
}

function generate_message(guess){
  numGuesses++;
  if (guess == correctAnswer){
    document.body.style.backgroundColor = correctAnswer;
    alert("Congratulations! You have guessed the color! It took you " + numGuesses + " guesses to finish the game! \n\n" +
    "You can see the color in the background.");
    finished = true;
  }else if(listOfColors.indexOf(guess) < 0){
    alert("Sorry, I don't recognize your color \n\nPlease try again.")
  }else if (guess < correctAnswer) {
    alert("Sorry, your guess is not correct!\n\n" +
          "Hint: your color is alphabetically lower than mine.\n\n"+
          "Please try again.")
  }else{
    alert("Sorry, your guess is not correct!\n\n" +
          "Hint: your color is alphabetically higher than mine.\n\n"+
          "Please try again.")
  }

}
