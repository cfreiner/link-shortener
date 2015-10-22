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
