const prices = [1, 2, -1, 3, 4];
/**
 * Let's consider the prices are price of a cart and need to add those, we can use for loops, forEach, reduce etc. to do it. 
 */

// let sum = 0;
// for (let price of prices) {
// 	sum += price;
// }

// console.log(sum);

const total = prices.reduce(
	(accumulator, currentValue) => accumulator + currentValue, 0); // Here 0 is the initial value of accumulator. If we don't provide it, the first value of accumulator will be the first value of the array.

console.log(total);
