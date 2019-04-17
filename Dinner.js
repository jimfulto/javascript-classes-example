// ES6 style import does not work in Node alone, so we need to use require!!!
// import {Meal} from './Meal';
const Meal = require('./Meal');
class Dinner extends Meal {
    /* 
        alternatively, we can use an object as our input, 
        and use destructuring to extract named properties 
        which are passed as input. This allows our functions to
        accept parameters in a more flexible manner, since the
        order of the arguments passed in no longer matters.
        Try it out!
        new Dinner({startTime: "9pm", courses: ["meatloaf"]})
        vs
        new Dinner({courses: ["soup","salad","pasta"], startTime: "5pm"})
        vs
        new Dinner()
    */
    constructor({ startTime = "7pm", courses = [] } = {}){
        /* 
            since this class inherits from Meal,
            we HAVE to instantiate it's parent first with 'super()'
            before setting any additional properties with 'this'.
            Read more here: http://javascript.info/class-inheritance
        */
        super("Dinner", startTime, courses);
    }
}

/* prototype based class extension */
function Lunch({ startTime = "12pm", courses = [] } = {}){
    //equivalent to calling super()
    Meal.call(this, 'Lunch', startTime, courses);
}

//define the lunch prototype to be an extension of Meal
Lunch.prototype = Object.create(Meal.prototype);
//we have to manually tell JS that the Lunch function
// is the constructor for the Lunch prototype
Lunch.prototype.constructor = Lunch;

module.exports = {Dinner,Lunch};