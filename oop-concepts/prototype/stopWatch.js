/**
 * To build a stopwatch: 
 * 1. Create a constructor function called Stopwatch with a property called duration and a method called start and stop
 * 2. Duration should be a private property, so use let instead of this
 * 3. Start method should start the stopwatch and stop method should stop the stopwatch
 * 4. Duration should be accessible from outside, so use getter
 * 5. Reset method should reset the stopwatch
 * 6. Create a new stopwatch object and call start, stop and duration methods
 */

function Stopwatch(){
	let startTime, endTime, running, duration = 0;

	this.start = function(){
		if( running ) throw new Error('Stopwatch has already started.');
		running = true;
		startTime = new Date();
	}

	this.stop = function(){
		if( !running ) throw new Error('Stopwatch is not started.');
		running = false;
		endTime = new Date();
		duration = (endTime.getTime() - startTime.getTime()) / 1000;
	}

	this.reset = function(){
		duration = 0;
		running = false;
		startTime = null;
		endTime = null;
	}

	Object.defineProperty( this, 'duration', {
		get: function(){
			return duration;
		}
	})
}

const sw = new Stopwatch();