/**
 * Getters and Setters of constructor property
 */

function Circle(radius) {
	this.radius = radius;
	let defaultLocation = { x: 0, y: 0 };

	this.defaultLocation = function () {
		console.log(defaultLocation);
	}

	// Define getter and setter
	Object.defineProperty(this, 'defaultLocation', {
		get: function () {
			return defaultLocation;
		},

		set: function (value) {
			if (!value.x || !value.y) throw new Error('Invalid location');
			defaultLocation = value;
		}
	})
}

const circle = new Circle(10);
circle.defaultLocation;

try {
	circle.defaultLocation = 1;
} catch (error) {
	console.log(error.message);
}