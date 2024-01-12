/*
Create an HtmlElement object that has click() own method, focus() prototype method
Now create an HtmlSelectElement object that inherits from HtmlElement and has addItem() and removeItem() own methods

HtmlSelectElement should have items array property and own addItem() and removeItem() methods, but must inherit click() and focus() methods from HtmlElement

*/

function HtmlElement(){
	this.click = function(){
		console.log('clicked');
	}
}

HtmlElement.prototype.focus = function(){
	console.log('focused');
}

function HtmlSelectElement(items=[]){
    this.items = items;

	this.addItem = function(item){
		this.items.push(item);
	}

	this.removeItem = function(item){		
		this.items.splice(this.items.indexOf(item), 1);
	}
}

// The following implementation will override the click() function.
// HtmlSelectElement.prototype = HtmlElement.prototype;

// The following implementation will preserve the click() function. 
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const c = new HtmlSelectElement();
