/**
 * Getters => access properties
 * Setters => change (mutate) them
 * 
 * get keyword is used to define a getter method.
 * set keyword is used to define a setter method.
 */

const person = {
	firstName: 'John',
	lastName: 'Doe',
	get fullName() {
		return `${person.firstName} ${person.lastName}`
	},
	set fullName(value) {
		const parts = value.split(' ');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
}

person.fullName = 'Arafat Jamil'; // Set the name as a property, rather than calling a fucntion
console.log(person.fullName); // getter can be accessed as property