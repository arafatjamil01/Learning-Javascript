function sum(){
	// console.log(arguments);
	let total = 0;
	for(let value of arguments)
		total += value;
	return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9,10));