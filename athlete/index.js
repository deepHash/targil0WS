'use strict';
var EventEmitter = require('events');

class Athlete extends EventEmitter{
    
    //update to hold numOfMedals in constructor with a default value of 0
    constructor(name, field) {
        super();
        var output;
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
        //checks if the number of medals is zero before decreasing 
        if (this.numOfMedals == 0){
            this.output += `Error: ${this.name} has zero medals\n`;
            console.log(this.output);
        }
        else {
            this.numOfMedals--;
            this.emit('medalsChanged');   
        }

    }

    getAllData() {
        var data = {Name: `${this.name}`,                                 
                    Field: `${this.field}`,
                    Medals: `${this.numOfMedals}`};
        return data;
    }

    //emit method
    medalsChanged(){
        this.output += `${this.name}s medals count has changed to: ${this.numOfMedals} in ${this.field}\n`;
        console.log(this.output);
    }

    getOutput() {
        return this.output;
    }

};
module.exports = (name, field, numOfMedals) => {
    var athlete = new Athlete(name, field);
    return athlete;
}
