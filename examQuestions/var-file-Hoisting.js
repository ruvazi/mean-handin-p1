/**
 * Created by Rune on 15-02-2016.
 */

//hoisting sikre at efter begyndt brug af var kan man deklarer den. eks:
// giver ikke mening ved strict

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

// eks 2:
var x; // Declare x
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

// hvor det er initialisering og ikke hoisting

var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

var y = 7; // Initialize y