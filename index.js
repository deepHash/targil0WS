var express = require('express');
var athlete = require('./athlete');
var EventEmitter = require('events');

var app = express()

//first athlete
var a1 = athlete("Gordie Howe", "Hockey");

a1.increaseMedals();
a1.decreaseMedals();
a1.increaseMedals();

var data = a1.getAllData();


app.get('/', function (req, res) {
    res.send(data);
})

var server = app.listen(3000, function() {
    //var host = server.address().address;
    var port = server.address().port;

    console.log("Listening at localhost:" + port);
})