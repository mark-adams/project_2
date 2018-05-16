var express = require("express");
var app = express();
var passport = require("passport");
var expressSession = require("express-session");
var bodyParser = require("body-parser");
var env = require("dotenv").load();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(
  expressSession({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.static("public"));
var models = require("./models");
require("./config/passport/passport.js")(passport, models.Author);

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

db.sequelize
  .query("SET FOREIGN_KEY_CHECKS = 0")
  .then(function() {
    return db.sequelize.sync({ force: false });
  })
  .then(function() {
    db.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
