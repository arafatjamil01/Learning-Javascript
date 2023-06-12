/**
 * Cloning an object, or creating copy of an object
 */

const circle = {
	radius: 1,
	draw: function () {
		console.log('draw');
	}
}

// Old way
// const another = {};
// for (let key in circle) {
// 	another[key] = circle[key];
// }

// Modern way
const another = Object.assign({}, circle); // This will create a new object and copy all the properties from circle to the new object
console.log(another);

// Another modern way, using spread operator
const cloned = { ...circle }; // This will create a new object and copy all the properties from circle to the new object
console.log(cloned);
