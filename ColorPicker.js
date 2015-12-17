/*
    Author: William
    Description: A plug-in component for picking color
*/

var ColorPicker = function() {
    this.RGB_picker = function() {
	    this.pickerRG = document.createElement("canvas");
	    this.pickerB = document.createElement("canvas");
	    this.dom = document.createElement("div");
        this.dom.className = "color-picker"
        this.dom.append(this.pickerRG);
        this.dom.append(this.pickerB);
    }   
}

ColorPicker.RGB_picker.prototype = {
	addTo: function(element) {
		element.append(this.dom);
	},

}
