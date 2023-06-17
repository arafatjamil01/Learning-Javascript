/**
 * Array methods can be chained together.
 */

const nums = [1, 2, -1, -2, 3, 4, 5];

let items =
	nums.filter(n => n >= 0)
	.map(num => ({ value: num }))
	.filter(obj => obj.value > 1);
console.log(items);