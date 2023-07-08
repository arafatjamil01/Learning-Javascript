/**
 * Closure in JavaScript is a form of lexical scoping used to preserve variables from the outer scope of a function in the inner scope of a function
 * 
 * @returns {String} Display Name
 */
function makeFunc() {
  const name = "Mozilla";

  function displayName() { // This function can access the name variable of the parent function, even after the parent function has closed. This is a closure.
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Adder closure example, with function factory
function makeAdder(x) {
	return function (y) {
	  return x + y;
	};
  }
  
  const add5 = makeAdder(5); // add5 is a closure
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12