/**
 * Private properties and methods using Symbols
 */

const _radius = Symbol();
const _draw = Symbol();

class Circle{
	constructor(radius){
		this[_radius] = radius;
	}

	// Computed property names
	[_draw](){
		console.log(`Circle with radius ${this[_radius]}`);
	}
}

const c = new Circle(1);

// The following code can get the the content of the symbol, but not recommended in production code.
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]); // 1