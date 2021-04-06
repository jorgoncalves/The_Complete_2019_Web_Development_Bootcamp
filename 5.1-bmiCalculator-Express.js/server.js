var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/bmicalculator", function(request, response) {
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(request, response) {
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);
  var result = weight / Math.pow(height, 2);
  response.send("Your BMI is " + result);
});

app.listen(3000, function() {
  console.log("Server started for BMI Calculator.");
});