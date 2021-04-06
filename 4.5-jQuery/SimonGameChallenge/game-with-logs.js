var gamePattern = [];
console.log("gamePattern: " + gamePattern);

var userClickedPattern = [];
console.log("userClickedPattern: " + userClickedPattern);

var level = 0;
console.log("level: " + level);

var started = false;
console.log("started: " + started);

var buttonColours = ["red", "blue", "green", "yellow"];
console.log("buttonColours: " + buttonColours);

$(document).keypress(function() {
  if (!started) {
    started = true;
    nextSequence();
  }
});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  console.log("userChosenColour: " + userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log("userChosenColour -> userClickedPattern: " + userClickedPattern);

  playSound(userChosenColour);
  animatedPress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {

  userClickedPattern = [];

  var randomNumber = Math.round(Math.random() * 3);
  console.log("nextSequence() -> randomNumber: " + randomNumber);

  var randomChosenColour = buttonColours[randomNumber];
  console.log("nextSequence() -> randomChosenColour: " + randomChosenColour);
  gamePattern.push(randomChosenColour);
  console.log("nextSequence() -> gamePattern: " + gamePattern);

  $("#" + randomChosenColour).fadeOut(50).fadeIn(50);

  playSound(randomChosenColour);

  level++;
  $("#level-title").text("Level " + level);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatedPress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Sucess!!");
    console.log("checkAnswer() -> Sucess - gamePattern: " + gamePattern);
    console.log("checkAnswer() -> Sucess - userClickedPattern: " + userClickedPattern);
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {

    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    startover();

    console.log("Wrong!!");
    console.log("checkAnswer() -> Wrong - gamePattern: " + gamePattern);
    console.log("checkAnswer() -> Wrong - userClickedPattern: " + userClickedPattern);
  }
}

function startover() {
  level = 0;
  gamePattern = [];
  started = false;
}