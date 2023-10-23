/**
 * In the following constructor example, we can use the instance by working only once.
 * Yet, if we do premature optimization ( negative optimization ), and add methods to prototypes, 
 * that will cause issues with data abstraction.
 */
function Stopwatch() {
	let startTime, endTime, running, duration = 0;

	Object.defineProperty(this, 'duration', {
		get: function () { return duration; }
	})

	Object.defineProperty(this, 'startTime', {
		get: function () { return startTime; }
	})

	Object.defineProperty(this, 'endTime', {
		get: function () { return endTime; }
	})
	Object.defineProperty(this, 'running', {
		get: function () { return running; }
	})
}


Stopwatch.prototype.start = function () {
	if (this.running) throw new Error('Stopwatch has already started.');
	this.running = true;
	this.startTime = new Date();
}

Stopwatch.prototype.start = function () {
	if (this.running) throw new Error('Stopwatch has already started.');
	running = true;
	startTime = new Date();
}
 
/*
* Here we can't use the 'this' keyword for duration, because it is a private property
* Adding 'this' will lead to big problems, because user will be able to access it from 
* his end
*/
Stopwatch.prototype.stop = function () {
	if (!this.running) throw new Error('Stopwatch is not started.');
	running = false;
	endTime = new Date();
	duration = (endTime.getTime() - startTime.getTime()) / 1000;
}

Stopwatch.prototype.reset = function () {
	duration = 0;
	running = false;
	startTime = null;
	endTime = null;
}

Object.defineProperty(this, 'duration', {
	get: function () {
		return duration;
	}
})

const sw = new Stopwatch();

/* 
! Premature optimization is the root of all evils. 	
 */