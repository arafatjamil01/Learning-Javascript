/**
 * As soon as prototypical inheritance is used, the constructor property is lost.
 * We have worked on an example in - ownPrototypicalInheritance.js file
 * In order to get our constructor back, we will need to reset the constructor.
 */

function Shape(){}

Shape.prototype.duplicate = function(){
	console.log('duplicate');
}

function Circle(radius){
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // This will set the prototype of Circle to Shape
Circle.prototype.constructor = Circle; // ! This will reset the constructor of Circle to Circle from Shape

Circle.prototype.draw = function(){
	console.log('draw');
}

const c1 = new Circle(1);