var express = require("express");
var bodyParser = require("body-parser");
var expressSession = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

require("./passport.js");

app.use(
  expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false
  })
);

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize
  .query("SET FOREIGN_KEY_CHECKS = 0")
  .then(function() {
    return db.sequelize.sync({ force: true });
  })
  .then(function() {
    db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
