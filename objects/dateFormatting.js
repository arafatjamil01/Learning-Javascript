/**
 * Formatting dates, getting and inputting dates
 */

// Get the current date and time, pass no parameters
const now = new Date();
console.log(now);

const date1 = new Date('June 13 2023 13:00');
console.log(date1.getDate());
console.log(date1.toDateString());
console.log(date1.getMonth()); // Month starts from 0, 0-11 is the span of Jan - Dec

const date2 = new Date(2030,9,20,11,30,0);

// Conversions
console.log(date2.toDateString());
console.log(date2.toTimeString());
console.log(date2.toISOString()); // Used so much to softwares and logs, clients and servers.



