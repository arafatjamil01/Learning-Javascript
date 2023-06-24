/**
 * Difference between var and let keyword
 * 
 * Doing a var keyword global variable when created, is accessible with window.variableName, which is very bad practice
 * This should be avoided and let keyword should be used instead.
 */
function start() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
	}

	console.log('-------');

	// console.log(i); // Will produce error
}

start();

/**
 * var => function scoped
 * ES6 (ES2015): let, const => block-scoped
 */

function varScopeTest() {
	for (var i = 5; i < 11; i++) { // var keyword is used instead of let
		if (true) {
			var color = 'red'; // using let won't let the variable be accessible outside the if block
		}
		console.log(i);
	}
	
	console.log(color); // Is accessible, even though it is inside the if block.
	console.log(i); // Is accessible, the loop printed up to 10, 11 is printed by this line
}

varScopeTest();