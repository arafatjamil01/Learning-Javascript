function mixin(target, ...sources){
	Object.assign(target, ...sources);
}

canEat = {
	eat: function(){
		this.hunger--;
		console.log('eating');
	}
}

canWalk = {
	walk: function(){
		console.log('walking');
	}
}

canSwim = {
	swim: function(){
		console.log('swimming');
	}
}

const person = Object.assign({}, canEat, canWalk);
console.log(person);

// We can also create an object early on, later add the other functions to that object.
function Person2(){

}

// This doesn't require any variable, we can directly add any properties with the prototype of the Person2 object.
Object.assign(Person2.prototype, canEat, canWalk, canSwim);
console.log(Person2.prototype);

// Now we will use the mixin function to create a goldfish object.
function Goldfish(){
}

// Using the mixin function created above
mixin(Goldfish.prototype, canEat, canSwim);

const gfish = new Goldfish();
console.log(gfish);