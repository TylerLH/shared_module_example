if(typeof exports == "undefined"){
	exports = this;
}

Example = function() {
	this.init();
};

Example.prototype = {
	init: function() {
		console.log('hello world');
	}
};

exports.Example = new Example();