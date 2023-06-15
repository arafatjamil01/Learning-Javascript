/**
 * There are several processes
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 1. Using empty array
arr = []; // Only the reference is changed, if other reference remain, the array will remain.

// 2. Using length property
arr.length = 0; // the reference and the values are gone.

// 1 and 2 are preferred.

// 3. Using splice
arr.splice(0, arr.length); 

// 4. Using pop
while (arr.length) arr.pop(); // Bad process