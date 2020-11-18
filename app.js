var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mlogger = require('morgan');
var cors = require('cors');

var logger = require('./config/logger');
//var con = require('./config/connection').connection;

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(mlogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

var prefix = '/api';
app.use(prefix + '/', indexRouter);

/**
 * ***********************************
 * Database Connection
 * ***********************************
 */
  //Close the existing collection
  //con.close();

  //New Connection
  /* con.connect().then(function () {
    logger.logInfo('DB Connection successful!!');
  })
  .catch(function (err) {
    logger.logError(err.message);
  }) */
  /**
   * **********************************
   */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
