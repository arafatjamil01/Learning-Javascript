/**
 * Default parameteres can be set to a function
 * All other parameteres after that should also be given default parameteres.
 */

function interest(principal, rate = 3.5, years = 5){
	return principal * rate / 100 * years;
}

console.log(interest(10000, 5, 5));


// The following undefined is used to skip putting values, and use the default parameter value given in the function.
// console.log(interest(10000, undefined, 5)); // undefined will be 3.5 when executing the function
