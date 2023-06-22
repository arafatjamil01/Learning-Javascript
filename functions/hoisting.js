walk(); // This will work because of hoisting

/**
 * Hoisting is the process of moving function declarations to the top of the file. 
 * This is done automatically by the JavaScript engine.
 * That is why we can call a function before it is declared.
 * Not possible with function expressions.
 * That works just like variables.
 */

// Function declaration
function walk() {
	console.log('walk');
}

run(); // This will not work because of hoisting

// Function expression
const run = function(){
	console.log('run');
}

run();

