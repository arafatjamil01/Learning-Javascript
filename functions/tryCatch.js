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
		if (typeof value !== 'string')
			throw new Error('Input must be string');

		const parts = value.split(' ');
		if (parts.length != 2)
			throw new Error('String must have first and last name');
		this.firstName = parts[0];
		this.lastName = parts[1];
	}
}

try{
	// person.fullName = 'Arafat Jamil';
	person.fullName = '';
} catch(e){
	console.log(e);
}

console.log(person.fullName); // getter can be accessed as property