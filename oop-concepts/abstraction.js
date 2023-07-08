/**
 * Abstraction is Hiding unnecessary data from outer world, e.g - DVD Player => Reduces complexity + Impact of changes
 */

/**
 * In the following example, with circle. we can see the methods and properties are exposed to the outer world.
 * We can access them and change them.
 * But in abstraction, we don't actually need defaultLocation object or computeOptimumLocation() method to be exposed to the outer world.
 * We can use data abstraction here. So instead, we will use let, to turn it into a local variable.
 * 
 * @param {float} radius 
 */

/*

function Circle(radius) {
	this.radius = radius;
	this.defaultLocation = { x: 0, y: 0 };
	this.computeOptimumLocation = function (factor) {
		// ...
	};
	this.draw = function () {
		this.computeOptimumLocation(0.1);
		console.log("draw");
	};
}

const circle = new Circle(10);
circle.draw();
*/

/**
 * The following is an example of abstraction.
 */
function Circle(radius) {
	this.radius = radius;
	let defaultLocation = { x: 0, y: 0 };
	let computeOptimumLocation = function (factor) {
		// ...
	};
	this.draw = function () {
		computeOptimumLocation(0.1); // This function can be accessed due to closure.
		console.log("draw");
	};
}

const circle = new Circle(10);
circle.draw();

// circle. with this notation, e can access only draw() method and radius