/*
    Author: William
    Description: A plug-in component for picking color
*/

var ColorPicker = function() {
	this.pickerRG = document.createElement("canvas");
	this.pickerB = document.createElement("canvas");
	this.dom = document.createElement("div");
}

ColorPicker.prototype = {
	add: function(element) {
		element.append(this.pickerRG);

	}
}