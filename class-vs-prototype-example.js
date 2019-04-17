//ES6 class syntax
class Phone {
    constructor(make, model, OS, phoneNumber){
        this.make = make;
        this.model = model;
        this.OS = OS;
        this.phoneNumber = phoneNumber;
    }

    getMake(){
        return this.make;
    }

    setMake(make){
        this.make = make;
    }
    //more getters/setters ...

    callSomeone(phoneNumber){
        console.log(`Calling ${phoneNumber}...`)
    }
}




/* 
    At the end of the day, all of the above "class" syntax is
    really just sugar for this:
*/

function OldPhone(make, model, OS) {
    this.make = make;
    this.model = model;
    this.OS = OS;
}

OldPhone.prototype.getMake = function() {
    return this.make
}

OldPhone.prototype.setMake = function (make) {
    this.make = make
}

module.exports = {
    Phone,
    OldPhone
}