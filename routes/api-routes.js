var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/views/main.html"));
  });
};
