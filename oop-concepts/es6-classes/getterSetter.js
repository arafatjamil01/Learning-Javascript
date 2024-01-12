/**
 * Previously we have used Object.defineproperty() to define getters and setters. But in ES6, we can use get and set keywords to define getters and setters.
 */

const _radius = new WeakMap();

class Circle{
	constructor(radius){
		_radius.set(this, radius);
	}

	// In ES6, we can use get and set keywords to define getters and setters.

	get radius(){
		return _radius.get(this);
	}

	set radius(value){
		if(value <= 0) throw new Error('Invalid radius');
		_radius.set(this, value);
	}
}

const c = new Circle(1);
console.log(c.radius);