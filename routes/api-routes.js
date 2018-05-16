var db = require("../models");
var passport = require("passport");
var authController = require("../controllers/authcontroller.js");

module.exports = function(app) {
  //GET route for getting ALL of the letters (need to figure out how we are going to make this user specific)
  app.get("/api/letters/", function(req, res) {
    db.Letter.findAll({}).then(function(result) {
      res.json(result);
    });
  });

  //GET route for returning jSON of all letters of a particular category
  app.get("/api/letters/category/:category", function(req, res) {
    db.Letter.findAll({
      where: {
        category: req.params.category
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //GET route for finding one letter by id and returning jSON
  app.get("/api/letters/:id", function(req, res) {
    db.Letter.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //POST route for creating new letter
  app.post("/api/letters", function(req, res) {
    db.Letter.create({
      title: req.body.title,
      letter: req.body.letter,
      category: req.body.category
    }).then(function(result) {
      res.json(result);
    });
  });

  // DELETE route for deleting a single post by id
  app.delete("/api/letters/:id", function(req, res) {
    db.Letter.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //PUT route for updating a letter
  app.put("/api/letters", function(req, res) {
    db.Letter.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",

      failureRedirect: "/"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",

      failureRedirect: "/signin"
    })
  );

  // app.get("/dashboard", isLoggedIn, authController.dashboard);
  // app.get("/new", isLoggedIn, authController.dashboard);
};
