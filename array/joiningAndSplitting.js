/**
 * Joining elements of an array
 */

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let joined = nums.join(':'); // Converts the array into a string and joins the elements with the passed parameter.
console.log(joined);

let message = 'This is my first message';
const parts = message.split(' '); // Converts the string into an array and splits the elements with the passed parameter.
console.log(parts);

// Joining the elements of an array, following format is used in URL
const combined = parts.join('-');
console.log(combined);