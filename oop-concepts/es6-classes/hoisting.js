/**
 * Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
 */

sayHi(); // This will work because of hoisting
// sayHello(); // This will not work because of hoisting
//console.log(number); // Renders error

// Function declaration, hoisted
function sayHi(){}

// Function expression, not hoisted
const sayHello = function(){};
// The semicolon at the end is conventional. As it is in other expressions, e.g - const name = "Arafat"; but not required.

// Variables are also hoisted, but not initialized
const number = 2;

/**
 * When it comes to classes in JS, both declaration and expression can be used. But these are not hoisted.
 */
class Circle{}
const square = class{}

