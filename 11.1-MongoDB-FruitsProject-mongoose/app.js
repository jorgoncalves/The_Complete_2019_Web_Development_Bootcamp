//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check the name of the fruit."]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   rating: 10,
//   review: "Peachs are awesome!"
// });

// Fruit.deleteOne({
//   _id: "5c615b2888007d52a465db9d"
// }, function(err) {
//   if (err) {
//     console.log("Error: " + err);
//   } else {
//     console.log("Succesfully deleted!");
//   }
// });

// Fruit.updateOne({
//   _id: "5c6162c2cc95c268481017e1"
// }, {
//   name: "Peach"
// }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });

// fruit.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me."
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   score: 3,
//   review: "Weird texture"
// });
//
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log("Error: " + err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const lemon = new Fruit({
  name: "Lemon",
  score: 2,
  review: "So sour!"
});

lemon.save();

Person.updateOne({
  name: "Jogn"
}, {
  name: "John",
  favoriteFruit: lemon
}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated Jogn");
  }
});

// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit."
// });
//
// pineapple.save();
//
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });
//
// person.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log("Error: " + err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

Person.find(function(err, person) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    person.forEach(function(per) {
      console.log(per);
    });
  }
});