/**
 * Stack implementation using ES6 classes
 * Stack object
 * Property: count (shows the number of items in the stack)
 * Methods in prototype:
 * count - counts the number of items
 * peek - returns the top item in the stack, but doesn't delete it
 * push - adds an item to the stack
 * pop - returns the top item in the stack, and deletes it
 * get count - getter to return the count property
 */

const _items = new WeakMap();

class Stack{
	constructor(){
		_items.set(this, []);
	}

	push(obj){
		_items.get(this).push(obj)
	}

	pop(){
		const items = _items.get(this);
		if( items.length === 0 )
			throw new Error('Stack is empty');

		return items.pop();
	}

	peek(){
		const items = _items.get(this);

		if( items.length === 0 )
			throw new Error('Stack is empty');

		return items[items.length-1];
	}

	get count(){
		return _items.get(this).length;
	}
}

const st = new Stack();