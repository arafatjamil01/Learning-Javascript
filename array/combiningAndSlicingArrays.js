const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); // If the array had an object, only the reference is copied.
console.log(combined);

const slice = combined.slice(2,4);
console.log(slice);

// If no parameter is passed, the whole array is just copied.
const slice2 = slice.slice();
console.log(slice2);
