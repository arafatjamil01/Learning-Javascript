/**
 * The operator with `` is called template literals, `` are called backticks
 * 
 * Works similar to breaking and concatenation of strings
 */

let address = 'Stret 123 \n' + 'Manhattan \n' + 'New York \n' + '10001';
console.log(address);

console.log('=======');

// Using template literals
let address2 = `Stret 123
Manhattan
New York
10001`;

console.log(address2);
console.log('=======');

// Emailing exmple
let name = 'Arafat';
let email = `
Hi ${name},
Welcome to my mailing list.

Best Regards,
Jamil`;

console.log(email);