
// her skal præciseres mere....

//JavaScript and this
//JavaScript this for Java Programmers
//
//JavaScript always makes me want to flip the table and say “F... this shit”. But I can never be sure what “this” refers to. source: Ölbaum
//
//Whenever a function is contained in the global scope, the value of this inside of that function will be the global object (window in a browser) or undefined if in strict mode
//Whenever a function is called by a preceding dot, the object before that dot is this.
//    Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
//Whenever JavaScript’s call or apply method is used, this is explicitly defined.



//eks :

function Car(make,model) {
    this.make = make;
    this.model = model;
}
var car = Car("Volvo","V70"); //Forgot new
console.log(car===undefined); //true
console.log(make); //Volvo, global Scope has been poluted


var counter = {
        count: 0,
        inc: function () {
            this.count++;
        }
    }
    > var func = counter.inc; //Store "reference" to inc
> func();
> counter.count  // 0, does not work


function Car(make,model) {
    this.make = make;
    this.model = model;
    this.show = function(){setTimeout(function(){ //This function gets it's own "this"
        console.log(this.make + ", " + this.model);
    },0)};
}
var car = new Car("Volvo","V70");
car.show(); //undefined, undefined


