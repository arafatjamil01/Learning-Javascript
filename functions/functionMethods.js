/**
 * Functions ar objects. Functions have methods. Like - apply, bind, call etc.
 * 
*/

function sayHi() {
	console.log(this);
	// console.log(arguments);
}

sayHi.call({name: 'Arafat'}, 1, 2, 3); // First argument: reference to this object, second argument: list of arguments
sayHi.apply({name: 'Jamil'}, [1, 2, 3]); // First argument: reference to this object, second argument: array of arguments
// The only difference in the above two is the second argument.

sayHi.bind({name: 'Husband'})(); // Returns a new function. We can store it in a variable and call it later. No matter how we call it, it will always refer to the bound function.


