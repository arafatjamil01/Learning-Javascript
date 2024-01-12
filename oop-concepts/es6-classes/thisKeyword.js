
'use strict'
/**
 * this keyword, when called inside a method, returns the current object.
 * when called inside a function, returns the global object (window in browser, global in node)
 * 
 * we can enable 'strict' mode in JS to avoid this behavior, just using 'use strict' at the top will solve.
 * When used strict mode, the window object will be undefined.
 */

const Circle = function(){
	this.draw = function(){
		console.log(this);
	}
}

const c = new Circle();
// Method call
c.draw(); // returns Circle object

const draw = c.draw;
draw(); // returns window object in browser, global in node

/**
 * In a class, the 'this' keyword is always in strict mode in the class body
 * 
 * this will prevent us to accidentally modify the global object
 */
class Square{
	move(){
		console.log(this);
	}
}

const s = new Square();
// Method call
s.move(); // returns Square object
const move = s.move;
move(); // returns undefined
