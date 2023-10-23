// Check this file on the browser, you will get better view.

// let person = { name: "Arafat" }

// console.log(person.toString()); // This will work
/**
 * Simply, if I write, person.toString(), it will work, but if I try to get the list of methods of the person prototype, it won't work. 
 */
// for(let key in person) console.log(key) // This will show only name property, not toString method
// Similarly Object.keys(person) will also show only name property, not toString method
/**
 * Simply, why can't we iterate over the methods in javaScript? Because, there are attributes attached to them.
 */

/**
*! Property Descriptors
*
let objectBase = Object.getPrototypeOf(person); // This will return the prototype of person object
console.log(objectBase);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString'); // This will return the attributes of toString method
console.log(descriptor);
 * 
 */
/**
 * Returns 
 * configurable: true
 * enumerable: false
 * value: ƒ toString()
 * writable: true
 * 
 * 
 * That means toString method is not enumerable. That's why we can't iterate over it.
 * It is configurable, we can delete it.
 * It is writable, we can override it.
 */

// Now, let's try to change the attributes of custom object keys
let person = { name: "Arafat" }

Object.defineProperty(person, 'name', {
	writable: false,
	enumerable: true,
	configurable: false
});

delete person.name; // This will not delete the name property, because it is not configurable
person.name = "Arafat"; // This will not change the name property, because it is not writable
console.log(Object.keys(person)); // If enumerable is false, this will not show the name property