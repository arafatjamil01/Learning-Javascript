/**
 * WeakMaps are called weak because they don't prevent garbage collection.
 * 
 */

// Single weakmap for each private property approach
const _radius = new WeakMap();
const _move = new WeakMap();

// One weakmap for all private properties approach
const privateProps = new WeakMap();

class Circle{
	constructor(radius){
		_radius.set(this, radius);

		_move.set(this, () => {
			console.log('move');
		});

		privateProps.set(this, {
			'perimeter':15,
			'arc':20
		});
	}

	rad(){
		return _radius.get(this);
	}

	getWidth(){
		return privateProps.get(this).perimeter;
	}
}

const c = new Circle(1);
console.log(c.rad());
console.log(c.getWidth());