/**
 * Rest Operator, is used to get all the arguments passed to a function as an array.
 * It must be the last parameter of a function, hence it is called rest operator.
 * It will convert the input parameters as array.
 * 
 * @param  {...any} args 
 * @returns 
 */
function sum(...args){
	console.log(args);
	return args.reduce((a,b)=> a+b);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9,10));

// Count total cost of a shopping cart.
function totalCost(discount, ...prices){
	const total = prices.reduce((a,b)=> a+b);
	return total * (1-discount);
}

console.log(totalCost(0.1, 20, 30, 40, 50));