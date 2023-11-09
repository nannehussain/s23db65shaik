var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eggRouter = require('./routes/egg');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var egg = require("./models/egg");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/egg', eggRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

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

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
const mongoose = require('mongoose');
mongoose.connect(connectionString);


//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})

async function recreateDB(){
  // Delete everything
  await egg.deleteMany({});
  let instance1 = new 
  egg({egg_color: "brown", egg_type: "egg",egg_price:20});
  await instance1.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("First object saved")
  //});
 
  let instance2 = new 
  egg({egg_color: "brown", egg_type: "egg",egg_price:5});
  await instance2.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("second object saved")
  //});
 
  let instance3 = new 
  egg({egg_color: "white", egg_type: "fresh egg",egg_price :400});
  
  await instance3.save();
  //instance1.save( function(err,doc) {
  //if(err) return console.error(err);
  console.log("Third object saved")
  //});
 }
 let reseed = true;
 if (reseed) { recreateDB();}

module.exports = app;

