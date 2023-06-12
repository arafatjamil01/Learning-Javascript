/**
 * You can always add remove content from an object
 */

/**
 * Even though circle is a constant, yet, we can add/remove object properties, but in this case,
 * we cannot reassign the object to a new object, e.g - circle = {}; will throw an error
 */ 
const circle = {
	radius: 1
}

circle.color = 'green';
circle.draw = function(){
	console.log('draw');
}

// Deleting a property
delete circle.color;

console.log(circle);
circle.draw();