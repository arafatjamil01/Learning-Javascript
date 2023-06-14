/**
 * Create a blog using objects
 * 
 * title
 * body
 * author
 * views
 * comments
 *   ( atuthor, body )
 * isLive
 */

// Object literal. Not a good way to create objects.
// let post = {
// 	title: 'a',
// 	body: 'b',
// 	author: 'c',
// 	views: 10,
// 	comments: [
// 		{ author: 'a', body: 'b' },
// 		{ author: 'c', body: 'd' }
// 	],
// 	isLive: true
// }

// Initialize the post
let post = new Post('a', 'b', 'c');
console.log(post);

// Write a constructor function to create a post
// Use as less parameter for a function possible, to avoid long parameter list and difficulty to maintain
function Post(title, body, author){
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = 0;
	this.comments = [];
	this.isLive = false;
}