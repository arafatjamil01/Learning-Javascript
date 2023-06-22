// Function declaration
function walk() {
	console.log('walk');
}

// Function expression
const run = function(){
	console.log('run');
}

run();
let move = run;
move();


// Named function expression
const run1 = function run1() {
	console.log('run1');
}

run1();
