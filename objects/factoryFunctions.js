/**
 * Just like a factory produced products, a factory function produces objects.
 * 
 * we use camel notations in factory Functions, e.g - oneTwoThreeFour
 */

function createCircle(radius){
	return {
		radius, //IF the key and value are the same, you can just use the key, current code is equivalent to radius: radius
		draw(){
			console.log('draw'); // Equivalent to draw: function(){console.log('draw');}
		}
	}
}

const circle1 = createCircle(5);
console.log(circle1);
