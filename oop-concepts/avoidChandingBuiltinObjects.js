Array.prototype.shuffle = function(){
	//..
}

const array = [];
array.shuffle();

/**
 * This can be done, but this will cause problems in the future. Debugging will be horrible.
 * Again, some other library might have a function called shuffle(), and that might cause a conflict.
 */