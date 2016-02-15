// Callback funktions
// A callback function, also known as a higher-order function, is a function that is passed to another function
// (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed)
// inside the otherFunction. A callback function is essentially a pattern,
// and therefore, the use of a callback function is also known as a callback pattern.

var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index){
    console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

//http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/