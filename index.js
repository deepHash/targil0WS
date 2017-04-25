var express = require('express');
var athlete = require('./athlete');
var EventEmitter = require('events');

var app = express()

//first athlete
var athlete1 = {
    name: 'Gordie Howe',
    field: 'Hockey',
    medals: '0'
}

var a1 = new athlete(athlete1);

 a1.increaseMedals(2);
//a1.incMed();

app.get('/', function (req, res) {
    res.send(a1);
})

var server = app.listen(3000, function() {
    //var host = server.address().address;
    var port = server.address().port;

    console.log("Listening at localhost:" + port);
})