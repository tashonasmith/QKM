if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');
var app = express();

var db = require("../models");
var path = require('path');
var passport = require('passport');
var flash = require('express-flash');
var session = require('express-session');
var initializePassport = require("../config/passport-config");
const { userInfo } = require('os');

app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false

}));
app.use(passport.initialize());
app.use(passport.session());


initializePassport(passport);
   


module.exports = function(app) {
    // Load login page
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

  app.post("/auth/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    //failureFlash: true
  }));

    app.post("/auth/register", (req, res) => {
        console.log(req.body);
        res.send("OK");
    });

    //Load index/landing page
    app.get("/index", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
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