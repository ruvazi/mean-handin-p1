//JavaScript Prototypes
//
//All JavaScript objects inherit the properties and methods from their prototype.
//
//    Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
//
//    Objects created with new Date() inherit the Date.prototype.
//
//    The Object.prototype is on the top of the prototype chain.
//
//    All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

//eks:
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

// er prototype for disse:

var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

//The person constructor function is the prototype for the person objects.