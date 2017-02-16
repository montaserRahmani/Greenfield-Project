var express = require('express');
var bodyParser = require('body-parser');
var handlers = require('./handlers.js')
var port = 8000;
// var morgan = require('morgan');

var app = express();
// app.set('port', (process.env.PORT || port));
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


app.post('/api/users/signin', handlers.signin);
app.post('/api/users/signup', handlers.signup);

app.post('/api/orders', handlers.addOrder);

app.get('/api/users/:username', handlers.getCookerProfile)

app.listen(process.env.PORT || port);