/**
 * If we want all the Shapes to have a color, we can add a color property to the Shape constructor function.
 * Later, this color property will be inherited by the Circle constructor, triangle constructor, etc.
 * To call the super constructor, we will use the call method.
 */

function Shape(color){
	this.color = color;
}

Shape.prototype.duplicate = function(){
	console.log('duplicate');
}

function Circle(radius, color){
	Shape.call(this, color); // ! 'this' refers to the object, color refers to argument
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function(){
	console.log('draw');
}

const c1 = new Circle(1, 'red');