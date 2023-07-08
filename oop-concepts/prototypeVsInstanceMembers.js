/**
 * Prototypical inheritance works in a manner thant - If a method is called and it is not available in the object, 
 * it will look for it in the prototype of that object. 
 * If it is not available there, it will look for it in the prototype of the prototype.
 */

/**
 * Now, we can leverage the prototypical inheritance to implement the draw() function
 */

// function Circle(radius){
// 	this.radius = radius;

// 	this.draw = function(){
// 		console.log('draw');
// 	}
// }

// const c1 = new Circle(1);
// const c2 = new Circle(2);

/**
 * In the above example, every time we create a new circle object, we are creating a new draw() function.
 * This is not efficient. Because, the draw() function is exactly the same for every circle object.
 * Rather, we can move the draw() function to the prototype of the Circle object.
 * In that case, every circle object will have access to the same draw() function.
 */

function Circle(radius){
	this.radius = radius;
	this.move = function(){
		this.draw(); // We can always reference prototype member from instance member and vice-versa
		console.log('move');
	}
}

// Prototype member
Circle.prototype.draw = function(){
	// this.move(); // We can always reference instance member from prototype member and vice-versa
	console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(2);

c1.draw();
c2.draw();
c1.move();

// Write c1 on the browser console for a better look into the prototype

// We can even override some default functions of the prototype
// The following will be executed, because this is more accessible than the default toString() method.
Circle.prototype.toString = function(){
	return 'Circle with radius ' + this.radius;
}

console.log(c1.toString());

/**
 * * The sequence doesn't matter. In the above example, the prototype member is defined after the object has been created.
 * * Yet, it will continue to be the same.
 */
