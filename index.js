var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Hashids = require("hashids");
var hashids = new Hashids("wnSv84EFfww38");
var db = require('./models');

app.set('view engine', 'jade');
app.use('/', express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: false}));
app.listen(5000);

//Routes
app.get('/', function(req, res) {
  res.render('index');
});

//Show the short url of the specified ID
app.get('/links/:id', function(req, res) {
  var id = req.params.id;
  db.link.findById(id).then(function(link) {
    res.render('show', {link: link});
  });
});

//Redirect to the long url from the db that matches the hash
app.get('/:hash', function(req, res) {
  var hash = req.params.hash;
  db.link.findOne({
    where: {
      hash: hash
    }
  }).then(function(result) {
    res.redirect(result.url);
  });
});

app.get('/links', function(req, res) {
  res.render('list');
});

app.post('/links', function(req, res) {
  var link = req.body.link;

  db.link.create({
    url: link,
  }).then(function(newLink) {
    newLink.hash = hashids.encode(newLink.id);
    newLink.save().then(function(){});
    return newLink;
  }).then(function(hashedLink) {
    res.redirect('/links/' + hashedLink.id);
  });

});
