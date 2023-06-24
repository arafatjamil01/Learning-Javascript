/**
 * An anonymous function is a function without a name. If function() keyword defines a function
 * and the function is within any method of an object, the anonymous function won't refer
 * 'this' keyword as the object itself. It will refer to the global object (window, global).
 * Because, the anonymous function() is not a method of the object.
 */

// const video = {
// 	title: 'a',
// 	tags: ['a', 'b', 'c'],
// 	showTags(){

// 		// Solution 1: adding a second parameter of forEach() method, which is not always possible for other functions.
// 		this.tags.forEach(function(tag){
// 			// console.log(tag); // No problem until this point, this keyword is still pointing to the video object
// 			// In the following function, title will return undefined, because this keyword is now pointing to the window object
// 			console.log(this.title, tag);
			
// 		}, this ); // The second argument of forEach() method is the value of this keyword, 'this' refers to video object here.

// 		// Another way to solve this problem is to use arrow function
// 	}
// }

// const video = {
// 	title: 'a',
// 	tags: ['a', 'b', 'c'],
// 	showTags(){
// 		// Solution 2: having a reference of the current object in another variable.
// 		const self = this; // some people use variable name that, this process is not recommended.
// 		this.tags.forEach(function(tag){
// 			console.log(self.title, tag);
			
// 		});
// 	}
// }

// const video = {
// 	title: 'a',
// 	tags: ['a', 'b', 'c'],
// 	showTags(){
// 		// Solution 3: using bind method.
// 		this.tags.forEach(function(tag){
// 			console.log(this.title, tag);
			
// 		}.bind(this));
// 	}
// }

// video.showTags();

const video = {
	title: 'a',
	tags: ['a', 'b', 'c'],
	showTags(){
		// Solution 4: Using arrow function
		this.tags.forEach( tag => {
			console.log(this.title, tag)
		});
	}
}

video.showTags();