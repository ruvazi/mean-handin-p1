// IIFE -Immediately-Invoked Function Expressions
// at variabel eller en fucktion bliver slettet fra ram efter brug, bruges ved at sætte () efter funktion eller loop


// This is called an Immediate Invoked Function Expression (IIFE) and is simply an anonymous function which is invoked
// immediately. The parameter i which is passed to this IIFE is put on the call stack and is a different one than the
// outer i of the for loop. You can imagine it like creating a snapshot of the current i.

// In JavaScript variables which are declared with "var" are function scoped. So, all callbacks would access the
// same i (which is not what you want). By passing it to the IIFE (which is a function and thus introduces an own
// scope for the variable i) a new variable is created for each callback. It gets more obvious if you give the
// parameter of the IIFE another name. For example:

    (function(savedI) {
        // ...
    })(i);

// By naming the parameter i, the original i is shadowed. This means that you cannot access the "outer" i inside of the
// IIFE.

//A common alternative to using an IIFE, would be to use map instead. For example:

    _.range(urlList.length).map(function(i) {
        // ...
    });

//_.range is a utility function from underscore and gives an array reaching from 0 until urlList.length.
// The passed function will receive a parameter i which won't be overriden (like the for loop did it in your version).