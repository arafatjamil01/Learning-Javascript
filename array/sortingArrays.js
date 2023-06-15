/**
 * Sorting Arrays
 */
// const numbers = [2, 3, 1];
// numbers.sort();
// console.log(numbers);

// Reverse numbers
// numbers.reverse();
// console.log(numbers);

const courses = [
	{ id: 1, name: 'Node.js' },
	{ id: 2, name: 'JavaScript' },
]

courses.sort(function (a, b) {
	// Following code is case sensitive.
	// if(a.name < b.name) return -1;
	// if(b.name < a.name) return 1;
	// return 0;

	// Case insensitive sorting
	const nameA = a.name.toUpperCase();
	const nameB = b.name.toUpperCase();

	if(nameA < nameB) return -1;
	if(nameB < nameA) return 1;
	return 0;
});

console.log(courses);