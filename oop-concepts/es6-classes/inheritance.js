/**
 * Inheritance is much simpler with classes. We can use the extends keyword to inherit from a class.
 */

class Shape{
	constructor(color){
		this.color = color;
	}

	move(){
		console.log('move');
	}
}

class Circle extends Shape{
	constructor(color,radius){
		super(color);
		this.radius = radius;
	}

	draw(){
		console.log('draw');
	}
}

const c = new Circle("red", 15);
console.log(c);
