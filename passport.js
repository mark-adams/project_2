module.exports = function() {
  console.log("INSIDE PASSPORT JS");
  passport.use(
    new LocalStrategy(function(username, password, done) {
      db.find(username, function(err, result) {
        if (err) {
          return done(err);
        }

        if (!user || user.password !== password) {
          return done(null, false);
        }

        return done(null, user);
      });
    })
  );
  passport.serializeUser(function(user, done) {
    done(null, author.id);
  });

  passport.deserializeUser(function(userId, done) {
    db.findById(userId, function(err, user) {
      if (err || !user) {
        return done(err);
      }

      return done(null, user);
    });
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.post("/login", passport.authenticate("local"), (req, res) => {
    res.send({ message: "Welcome!" });
  });

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
