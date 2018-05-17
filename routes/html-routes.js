//dependencies
var path = require("path");
var passport = require("passport");

//routes
module.exports = function(app) {
  //home.html route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });

  //dashboard.html route
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/dashboard.html"));
  });


  //new.html route
  app.get("/new", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/new.html"));
  });

  //loginSignUp.html route
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/loginSignUp.html"));
  });

  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/login"
    })
  );

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/login"
    })
  );
};
