/**
 * Instance methods are available on the instance of the class
 * Static methods are available on the class itself
 * 
 * Use static methods to create utility functions that are not specific to a given object
 * For example we are using Math.floor()
 */

class Circle {
	constructor(radius){
		this.radius = radius;
	}

	// Instance method
	draw(){
		console.log('draw');
	}

	// Static method to create a new circle from a JSON input.
	static parse(str){
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}
}

const c = Circle.parse('{"radius": 15}');
console.log(c);