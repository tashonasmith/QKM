if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');
var app = express();


var db = require("../models");
var path = require('path');
var passport = require('passport');
var bcrypt = require('bcrypt');

const { userInfo } = require('os');

//initializePassport(passport);

module.exports = function (app) {
  // Load login page
  app.get("/", checkNotAuthenticated, function (req, res) {
    res.render('login');
    /* db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    }); */
  });

  app.get("/register", checkNotAuthenticated, (req, res) => {
    res.render('register');
  });

  app.post("/auth/login", passport.authenticate('local', {
    successRedirect: '/index',
    failureRedirect: '/',
    failureFlash: true
  }));

    //Load index/landing page
    // app.get("/index", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../views/layouts/index.html"));
    // });

    


  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/');
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/index');
    }
    next();
  }

  // user logout route
  app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
  });

  // send form data and encrypt password to store in database

  app.post("/auth/register", (req, res) => {
    // make sure password and verify password fields match
    if (req.body.password !== req.body.rPassword) {
      // insert flash message here
      console.log('Passwords do not match');
      res.render('register');
      return;
    }
    // then we need to check it the supplied e-mail address exists in our database
    db.Users.findOne({ where: { email_address: req.body.email } }).then(async data => {
      if (!data) {

        //if no record found, encrypt password and store user information into database
        await bcrypt.hash(req.body.password, 10, (err, hashed) => {
          db.Users.create({ email_address: req.body.email, password: hashed });

        })
        res.redirect('/');
      } else {
        // insert flash message here
        console.log('Email address already exists');
        res.redirect('/register');
      }
    });

  });

  //check to see if user is logged in, if so load index.html
  app.get("/index", checkAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
    db.Kids.findAll({}).then(function(dbKids) {
      res.render("home", {
          Kids: dbKids
      });
  });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};