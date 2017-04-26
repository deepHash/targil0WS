'use strict';

var EventEmitter = require('events');

class Athlete extends EventEmitter{
    
    //update to hold numOfMedals in constructor with a default value of 0
    constructor(name, field) {
        super();
        this.name = name;
        this.field = field;
        this.numOfMedals = 0;
        this.on("medalsChanged", this.medalsChanged);
    }

    increaseMedals() {
        this.numOfMedals++;
        this.emit('medalsChanged');
    }


    decreaseMedals() {
        this.numOfMedals--;
        this.emit('medalsChanged');
    }

    getAllData() {
        var data = {Name: `${this.name}`,                                 
                    Field: `${this.field}`,
                    Medals: `${this.numOfMedals}`};
        return data;
    }

    //emit method
    medalsChanged(){
        console.log(`${this.name}s medals count has changed to: ${this.numOfMedals}`);
    }
};


module.exports = (name, field, numOfMedals) => {
    var athlete = new Athlete(name, field);
    return athlete;
}
