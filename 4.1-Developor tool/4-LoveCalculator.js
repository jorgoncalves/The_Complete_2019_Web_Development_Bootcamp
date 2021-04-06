var firstName = prompt("What is you name?");
var secondName = prompt("What is your love name?");

alert("Where is your compatability: " + loveScore() + ("%."));

function loveScore(){
    var n = Math.ceil(Math.random() * 100);
    return n;
}

