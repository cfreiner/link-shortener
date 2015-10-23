var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/static'));
app.listen(5000);

//Routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/links/:id', function(req, res) {
  //show the short url of the specified ID
});

app.get('/links/:hash', function(req, res) {
  //redirects the user to the url stored in the database
});

app.post('/links', function(req, res) {
  //takes post data, creates shit, redirects to the show page
});
