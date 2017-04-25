'use strict';

var EventEmitter = require('events');

class Athlete {
    
    constructor(name, field, numOfMedals) {
        this.name = name;
        this.field = field;
        this.numOfMedals = numOfMedals;
    }

    increaseMedals(amount) {
        this.numOfMedals += amount;
        this.emit('medalsChanged');
    }


    decreaseMedals(amount) {
        this.numOfMedals -= amount;
        this.emit('medalsChanged');
    }
};

function incMed(){
    console.log(`inc med`);
}

// module.exports = (name, field, numOfMedals) => {
//     var athlete = new Athlete(name, field, numOfMedals);

//     return athlete;
// };

//module.exports.increaseMedals = increaseMedals(amount);

module.exports = class Athlete extends EventEmitter {
    constructor(info) {
        super();
        this.athlete = info;
        console.log("debug!");
    };
};