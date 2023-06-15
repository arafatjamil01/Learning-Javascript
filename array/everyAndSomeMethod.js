const numbers = [1, 2, 3];

const everyNumberPositive = numbers.every(function(value){
	return value >= 0;
});

console.log(everyNumberPositive);


const mixedNums = [1,2,-1,3];

const atLeastOneNegative = mixedNums.some(value => value < 0);
console.log(atLeastOneNegative);