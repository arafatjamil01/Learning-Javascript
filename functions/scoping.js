/**
 * The scope of a variable is where the variable can be accessed
 */

const color = 'red'; //Global Scope, bad practice to set global variable, produces bugs easily.

function start(){
	const message = 'hi'; // Can be accessed in this function only
	// console.log(color); // Accessible
	const color = 'blue'; // Local variable will take precedence over global one.
	console.log(color); 
}

function end(){
	const message = 'bye';
}

start();