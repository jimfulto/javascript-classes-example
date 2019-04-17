/*
    ES6 Class syntax
*/

class Meal {
    //default argument values may be defined  in the constructor signature, such as courses below
    constructor(name, startTime , courses = []){
        this._name = name;
        this._startTime = startTime;
        this._courses = courses;
    }

    //ES6 getters & setters keywords
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
    
    //properties that *only* have getters and no setters are READONLY
    get startTime() {
        return this._startTime;
    }

    getCourses(){
        return this._courses;
    }
    
    addCourse(foodCourse){
        this._courses.push(foodCourse);
    }

    getNumberOfCourses(){
        return this._courses.length;
    }
}

module.exports = Meal;



//try running this in the node REPL!