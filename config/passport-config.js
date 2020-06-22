const passport = require('passport');
var bcrypt = require('bcrypt');
var db = require('../models');

var LocalStrategy = require('passport-local').Strategy;

function initialize() {
    var authenticateUser = async (email, password, done) => {
        var user = await db.Users.findOne({where: {email_address: email}});

        if (user == null) {
            console.log('Email not found');
            return done(null, false, {message: "User not found"});
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, {message: "Password incorrect"});
            }
        } catch(err) {
            return done(err);
        }
    }
    passport.use(new LocalStrategy({usernameField: "email"}, authenticateUser));
    passport.serializeUser((user, done)=>done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, async () => {
            var data = await db.Users.findOne({where: {id: user.id}});
            return data.id;
        });
    }); 
} 


module.exports = initialize;