/*
ES6 Classes are syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax is not introducing a new object-oriented inheritance model to JavaScript. JavaScript classes provide a much simpler and clearer syntax to create objects and deal with inheritance.
*/

// Previous method of constructors
// function Circle(radius){
// 	this.radius = radius;

// 	this.draw = function(){
// 		console.log('draw');
// 	}
// }

class Circle{
	constructor(radius){
		this.radius = radius;

		// This will end up in the object as own method
		this.move = function(){
			console.log('move');
		}
	}


	// Functions like the following will end up in prototype
	draw(){
		console.log('draw');
	}
}

const c = new Circle(1);