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

function Square(){
}

extend(Square, Shape);

// Duplicate function has many forms, so this is polymorphism
Square.prototype.duplicate = function(){
	console.log('Duplicate shape'); 
}

// Array of shape objects 
const shapes  = [
	new Circle(),
	new Square()
];

// Iterate over the array and call the duplicate method
for (let shape of shapes){
	shape.duplicate();
}