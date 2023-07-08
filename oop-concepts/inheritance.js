/**
 * Let's say we need to put two different shapes at a location, the function is called defaultLocation()
 * To implement the location of a circle and square, we will use the exact same implementation of the function.
 * Despite doing that, we can use inheritance.
 * 
 * i.e - create a shape class and put the defaultLocation() function in it, then inherit the shape class in circle and square.
 * 
 * This will help us to avoid duplication of code, update the code easily when needed.
 * 
 * Inheritance - 2 types - classical and prototypical
 * 
 * Prototype is a parent of an object. Every object in JS has a prototype. In fact every object in JS has a prototype except the root object.
 * You can test those writing in the console - a = {}, b= {} then Object.getPrototypeOf(circle) === Object.getPrototypeOf(square), will return true
 * Also you can access a.__proto__ === b.__proto__ will return true, __proto__ has been deprecated, still you can use it only in the console.
 * 
 * Multilevel inheritance: When object inherits from another object, that object inherits from another object and so on.
 * For example: let ar = [] then ar.__proto__ === Array.prototype will return true, Array.prototype.__proto__ === Object.prototype will return true
 * That means, array inherits from Array object, Array object inherits from Object object. 
 * 
 * This is called multilevel inheritance.
 * 
 * Now, when we use a constructor function, we create new objects, all their prototypes are the same.
 * i.e - Objects created by a given constructor will have the same prototype.
 */