$(document).keypress(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
  setTimeout(function() {
    $("h1").css("color", "green");
  }, 100);
});