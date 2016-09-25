var express = require('express');
var app = express();
var path = require('path');
var bcrypt = require('bcryptjs')
var mongoose = require( 'mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'./client')));
app.use(express.static(path.join(__dirname,'./bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app)

app.listen(8000, function(){
  console.log("Cool things happening on 8000!");
})
