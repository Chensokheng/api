const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

const router = require('./router/api.routes');

const app = express();

// bodypaser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router
app.use('/api', router);

// session
app.use(
  session({
    secret: 'thisisarandom125%2',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

/*
 * Passort config
 */

app.use(passport.initialize());
app.use(passport.session());

// passport for session
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = app;
