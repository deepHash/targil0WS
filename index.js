var express = require('express');
    athlete = require('./athlete');
    app = express();
    athletes = [];
    data = [];

//first athlete
var firstAthlete = athlete("Gordie Howe", "Hockey");
athletes.push(firstAthlete);

firstAthlete.increaseMedals();
firstAthlete.decreaseMedals();
firstAthlete.decreaseMedals();
firstAthlete.increaseMedals();
firstAthlete.increaseMedals();

//second athlete
var secondAthlete = athlete("Michael Phelps", "Swimming");
athletes.push(secondAthlete);

secondAthlete.increaseMedals();
secondAthlete.increaseMedals();
secondAthlete.increaseMedals();
secondAthlete.decreaseMedals();
secondAthlete.increaseMedals();

//adding all the data that we have so we can send it to the client
for (var i=0; i<athletes.length; i++) {
    data.push({Athlete: athletes[i].getAllData(),
                 Messages: athletes[i].getOutput()}); 
}

app.get('/', function (req, res) {
    res.send(data);
})

var port = process.env.PORT || 8080
var server = app.listen(8080, function() {
    //var host = server.address().address;
    //var port = server.address().port;

    console.log("Listening at localhost:" + port);
})