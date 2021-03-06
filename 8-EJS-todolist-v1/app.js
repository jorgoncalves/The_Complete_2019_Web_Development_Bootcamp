//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let day = date.getDate();

  res.render("list.ejs", {
    listTitle: "ToDo List, " + day,
    newListItems: items
  });

});

app.post("/", function(req, res) {

  let item = req.body.newItem;
  let listType = req.body.list;

  if (listType === "Work") {

    workItems.push(item);
    res.redirect("/work");

  } else {

    items.push(item);
    res.redirect("/");

  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, function() {
  console.log("Server is running for the ToDoList v1 Project");
});