
'use strict';

var fs = require('fs');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var multer = require('multer');

app.use(bodyparser.urlencoded({'extended': false}));

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/views', express.static(process.cwd() + '/views'));

app.route('/')
    .get(function(req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
    })

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'uploaded-files/');
    },
    filename: function(req, file, callback){
        callback(null, Date.now() + "-" + file.originalname)
    }
});

var upload = multer({storage:storage}).single('file');


app.post('/', upload, function(req,res){
  console.log(req.file);
  res.json({"size":req.file.size});
});

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

