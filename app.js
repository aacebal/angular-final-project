const express       = require('express');
const path          = require('path');
const favicon       = require('serve-favicon');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const layouts       = require('express-ejs-layouts');
const mongoose      = require('mongoose');
const cors          = require('cors');
const session       = require('express-session');
const passport      = require('passport');
const passportSetup = require('./config/passport');
const request       = require('request');

require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI);

const app           = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session({
  secret: 'beer finder secret',
  saveUninitialized: true,
  resave: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  credentials: true,
  origin: [ 'https://friendlybeerfinder.herokuapp.com', 'http://www.friendlybeerfinder.co/' ]
}));

const usersRoutes = require('./routes/users-routes');
app.use('/', usersRoutes);

const authRoutes = require('./routes/auth-routes');
app.use('/', authRoutes);

const beerRoutes = require('./routes/beer-routes');
app.use('/', beerRoutes);

const friendsRoutes = require('./routes/friends-routes');
app.use('/', friendsRoutes);

const eventsRoutes = require('./routes/event-routes');
app.use('/', eventsRoutes);

const profileRoutes = require('./routes/profile-routes');
app.use('/', profileRoutes);

app.use((req, res, next) => {
  res.sendfFile(__dirname + '/public/index.html');
});

require('dotenv').config();

passportSetup(passport);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
