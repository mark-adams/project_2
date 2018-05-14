//dependencies
var path = require("path");

//routes
module.exports = function (app) {

  //home.html route
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });

  //dashboard.html route
  app.get("/dashboard", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/dashboard.html"));
  });

};

