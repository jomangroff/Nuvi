var commonjs = require("commonjs");
var express = require("express");
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var mainController = require('./Server/mainController');


var config = require ('./config');

var app = express();
app.use(bodyParser.json());
app.use(session({
  secret: config.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));

app.use(express.static('public'));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res, next) {
  res.send('Hello World');
});


var port = config.PORT;
app.listen(port, function() {
  console.log('listening to port',port);
})
