/**
 * Combining arrays with spread operator( done in ES6)
 */
let first = [1, 2, 3];
let second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);

// Adding elements easily within arrays
const newCombined = [...combined, 'a', ...second, 'b'];
console.log(newCombined);