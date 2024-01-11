// Intermediate function inheritance
function extend(Child, Parent){
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape(){
}

Shape.prototype.duplicate = function(){
	console.log('duplicate');
}

function Circle(){
}

extend(Circle, Shape);

// The overriding must occur after the inheritance, otherwise it will be lost, since the prototype will be overridden
Circle.prototype.duplicate = function(){

	// Calling the parent method
	Shape.prototype.duplicate(); // when 'this' keyword is  not used
	Shape.prototype.duplicate.call(this); // when 'this' keyword is used

	console.log('duplicate circle');
}

const c = new Circle();