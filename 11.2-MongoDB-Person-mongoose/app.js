//jshint esversion: 6
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/personsDB", {
  useNewUrlParser: true
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

person.save();