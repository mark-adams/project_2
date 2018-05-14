var expressSession = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("./models");
module.exports = function(app) {
  console.log("INSIDE PASSPORT JS");
  passport.use(
    new LocalStrategy(function(username, password, done) {
      db.Author.findOne({ where: { name: username } }).then(function(user) {
        if (!user || user.password !== password) {
          return done(null, false);
        }

        return done(null, user);
      });
    })
  );
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(userId, done) {
    db.Author.findById(userId).then(function(err, user) {
      if (err || !user) {
        return done(err);
      }

      return done(null, user);
    });
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.post(
    "/login",
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/",
      failureFlash: true
    }),
    function(req, res) {
      res.redirect("/amiloggedin");
    }
  );

  app.get("/logout", (req, res) => {
    req.logout();
    res.send({ message: "Goodbye!" });
  });

  function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      return res.status(401).send();
    }
  }

  app.get("/amiloggedin", checkAuth, (req, res) => {
    res.send({ message: "You sure are!" });
  });
};
