/**
 * Say we need to create another object called square, and we need prototypical inheritance to Shape for that.
 */

function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function () {
	console.log('duplicate');
}

// * Inspite of writing prototype = Object.create(Shape.prototype), we can use the following function

/**
 * Intermediate Function
 * 
 * @param {object} Child Child is the constructor function that will inherit from Parent
 * @param {object} Parent Parent is the constructor function from which Child will inherit
 */
function extend(Child, Parent ) { // parameters are capitalized to depict that they are constructor functions
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Circle(radius, color) {
	Shape.call(this, color);
	this.radius = radius;
}

extend(Circle, Shape); // ! Here we have used extend as an intermediate function to inherit from Shape

Circle.prototype.draw = function () {
	console.log('draw');
}

const c1 = new Circle(1, 'red');

// Create a square that will inherit from shape
function Square(size, color) {
	Shape.call(this, color);
	this.size = size;
}

extend(Square, Shape);

const t1 = new Square(1, 'blue');