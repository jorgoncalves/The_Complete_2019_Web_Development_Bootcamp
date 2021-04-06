// function forEach(array, callback, scope) {
//   for (var i = 0; i < array.length; i++) {
//     callback.call(scope, i, array[i]);
//   }
// }
//
// var myNodeList = document.querySelectorAll("button");
// forEach(myNodeList, function(index) {
//   myNodeList[index].addEventListener("click", handleClick);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.querySelectorAll("button").forEach(addEventListener("click", handleClick));


var myNodeList = document.querySelectorAll(".drum");

for (var i = 0; i < myNodeList.length; i++) {
  myNodeList[i].addEventListener("click", handleClick);
}

function handleClick() {
  //imprime o html que correspondente ao butao que foi clicado
  //console.log(this.innerHTML);

  var buttonInnerHTML = this.innerHTML;

  switch (buttonInnerHTML) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(this.innerHTML);


  }
}