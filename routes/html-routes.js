//dependencies
var path = require("path");
var authController = require("../controllers/authcontroller.js");

//routes
module.exports = function(app) {
  //home.html route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });

  //dashboard.html route
  app.get("/dashboard", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/dashboard.html"));
  });

/*   //new.html route
  app.get("/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/new.html"));
  }); */
  
  //loginSignUp.html route
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/loginSignUp.html"));
  });

  //new.html route
  app.get("/new", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/new.html"));
  });

  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};
