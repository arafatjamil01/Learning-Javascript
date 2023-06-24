/**
 * this keyword refers to the object that is executing the current function.
 * method -> obj
 * function -> global (window, global)
 */

// const video = {
// 	title: 'a',
// 	play(){
// 		console.log(this);
// 	}
// }

// video.play(); // Returns the video object

// video.stop = function(){
// 	console.log(this);
// }

// video.stop(); // Returns the video object

// function globalPlayer(){
// 	console.log(this);
// }

// globalPlayer();

function Video(title){ // Constructor function, to initiate object Video

	this.title = title;
	console.log(this);
}

const v = new Video('b'); // Returns the Video object
