const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  // Here you would save the user to the database
  return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => res.redirect('http://localhost:3000/dashboard')
);

app.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/auth/status', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.json({ user: null });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
