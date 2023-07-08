/**
 * Iterating Instance and Prototype Members
 * Getting object keys
 */

function Circle(radius){
	this.radius = radius;
	this.move = function(){
		console.log('move');
	}
}

const c1 = new Circle(1);

Circle.prototype.draw = function(){
	console.log('draw');
}

console.log(Object.keys(c1)); // This will return only the instance members, not the prototype members

for(let key in c1) console.log(key); // This will return all the instance and prototype members

// * So, for in loop will return all the members, but Object.keys() will return only the instance members

// In javascript, often instance is 

/**
 * * We can use the hasOwnProperty() method to check if a property is an instance member or a prototype member
 * * Instance member is also called 'own property'
 */
console.log(c1.hasOwnProperty('radius')); // This will return true
console.log(c1.hasOwnProperty('draw')); // This will return false
