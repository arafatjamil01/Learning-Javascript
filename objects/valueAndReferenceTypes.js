/**
 * Values are copied by value
 * 
 * References are copied by reference
 */

const num = 20;

function increase(num){
	num++;
}

increase(num);
console.log(num); // The number type will not increase the value because it is passed by value. The value will be 20

const obj = { value: 10 };

function increaseObj(obj){
	obj.value++;
}

increaseObj(obj);
console.log(obj); // The object type will increase the value because it is passed by reference. The value will be 11