var db = require("../models");
var path = require('path');

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../views/login.html'));
    /* db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    }); */
  });

  app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  });

  app.post("/auth/login", (req, res) => {
    console.log(req.body);
    res.send("OK");
  });

  app.post("/auth/register", (req, res) => {
    console.log(req.body);
    res.send("OK");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
