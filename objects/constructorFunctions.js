/**
 * A function to construct an <object data="
 * 
 * Constructor functions should use Pascal Notations, e.g - OneTwoThreeFour
 * 
 * Constructor functions are initiated with the 'new' keyword
 */

/**
 * Constructor function to create a circle
 * 
 * @param {int|float} radius 
 * @return {object} circle
 */
function Circle(radius){
	this.radius = radius;
	this.draw = function(){
		console.log('draw');
	}

	// return this; // This is done by default under the hood
}

/**
 * new keyword creates and empty JavaScript object
 * const circle = {}
 * the 'this' keyword references the object\
 * Then returns the object
 */
const circle = new Circle(1);
// console.log(circle);
