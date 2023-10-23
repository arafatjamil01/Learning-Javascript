/**
 * Say we have a constructor function called Circle
 * We need a method called duplicate
 * Later we will work with triangle and that will also use the same duplicate method
 * Rather than crating the duplicate method twice, we can create it once and share it between the two objects
 * We can create another object called shape and put the duplicate method in it
 * Later we can inherit the shape object in circle and triangle
 * We will implement this using prototypical inheritance in JavaScript
 */

function Shape(){}

Shape.prototype.duplicate = function(){
	console.log('duplicate');
}

function Circle(radius){
	this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); // This is the default under the hood implementation
Circle.prototype = Object.create(Shape.prototype); // This will set the prototype of Circle to Shape

// ! The following method draw, if declared before prototypical inheritance is called, it will be lost. Because
// ! The prototype would be overridden by the default Object.prototype
Circle.prototype.draw = function(){
	console.log('draw');
}

const c1 = new Circle(1);