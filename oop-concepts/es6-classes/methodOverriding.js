class Shape{
	move(){
		console.log('move');
	}
}


class Circle extends Shape{
	move(){
		super.move(); // If the parent method is required to execute, you can call it like this
		console.log('move circle');
	}
}

const c = new Circle();
c.move(); // move circle