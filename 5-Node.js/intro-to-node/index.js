//jshint esversion:6
//

// // using internal node.js module
// const fs = require("fs");
//
// fs.copyFileSync("file1.txt", "file2.txt");

// using external node.js module
var superheroes = require("superheroes");
var supervillains = require("supervillains");

var mySuperheroName = superheroes.random();
var mySuperVillainName = supervillains.random();


console.log("mySuperheroName: " + mySuperheroName);
console.log("mySuperVillainName: " + mySuperVillainName);