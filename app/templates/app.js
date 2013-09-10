var express = require('express');
var app = express();

app.use('/bower', express.static(__dirname + '/bower_modules'));

app.get('/hello', function(req, res) {
  res.send('hello!');
});

module.exports = app;