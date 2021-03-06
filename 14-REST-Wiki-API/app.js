//jshint esversion:6

const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParse.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true
});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

////////////////////////////////////////////////////Requests Targetting All Articles ////////////////////////////////////////////////////////////////////////
app.route("/articles")

  .get(function (req, res) {

    Article.find({}, function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });

  })

  .post(function (req, res) {

    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });

    newArticle.save(function (err) {
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send(err);
      }
    });

  })

  .delete(function (req, res) {

    Article.deleteMany({}, function (err) {
      if (!err) {
        res.send("Successfully deleted all articles");
      } else {
        res.send(err);
      }
    });
  });
////////////////////////////////////////////////////Requests Targetting A Specific Articles ////////////////////////////////////////////////////////////////////////

app.route("/articles/:articleTitle")
  .get(function (req, res) {

    const title = req.params.articleTitle;

    Article.findOne({
      title: title
    }, function (err, foundArticle) {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No articles matching that title was found.");
      }
    });
  })
  .put(function (req, res) {

    const title = req.params.articleTitle;

    Article.update({
      title: title
    }, {
      title: req.body.title,
      content: req.body.content
    }, {
      overwrite: true
    }, function (err) {
      if (!err) {
        res.send("Successfully updated article.");
      }
    });
  })

  .patch(function (req, res) {

    const title = req.params.articleTitle;

    Article.update({
      title: title
    }, {
      $set: req.body
    }, function (err) {
      if (!err) {
        res.send("Successfully updated article.");
      } else {
        res.send(err);
      }
    });
  })

  .delete(function (req, res) {

    const title = req.params.articleTitle;

    Article.deleteOne({
      title: title
    }, function (err) {
      if (!err) {
        res.send("Successfully deleted article!");
      } else {
        res.send(err);
      }
    });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});