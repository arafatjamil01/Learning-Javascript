const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using for of loop
for (let num of nums) console.log(num);

console.log('------------------');

// Using forEach method
nums.forEach((num, index) => console.log(index, num))