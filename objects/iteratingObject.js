/**
 * Iterating an object
 * 
 * in loop is for keys
 * of loop is for array
 */
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1
	},
	isVisible: true,
	draw: function () {
		console.log('draw');
	}
}

for (let key in circle) {
	console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) {
	console.log(key);
}

for (let key of Object.entries(circle)) { // Object.entries will return the key and value as an array
	console.log(key);
}

// Check if a property exists in an object
if ('radius' in circle) console.log('yes');