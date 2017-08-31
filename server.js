
'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var multer = require('multer');
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds161913.mlab.com:61913/testinglogin');

app.use(bodyparser.urlencoded({'extended': false}));

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/views', express.static(process.cwd() + '/views'));


app.route('/')
    .get(function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
    })

app.post('/input', function(req,res){
  var name = req.body.username;
  console.log(name);
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

