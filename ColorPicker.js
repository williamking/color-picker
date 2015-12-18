/*
    Author: William
    Description: A plug-in component for picking color
*/

function windowTocanvas(canvas, x, y) {
    var bbox = canvs.getBoundingClientRect();
    return {
        x: x - (canvas.width / bbox.width),
        y: y - (canvas.height / bbox.height)
    };
}

var ColorPicker =   {
    RGB_picker: function() {
	    this.pickerRG = document.createElement("canvas");
	    this.pickerB = document.createElement("canvas");
	    this.dom = document.createElement("div");
        this.sample = document.createElement("div");
        this.sample.className = "color-sample"
        this.dom.className = "color-picker";
        this.pickerRG.className = "rg-picker";
        this.pickerB.className = 'b-picker';
        this.dom.appendChild(this.pickerRG);
        this.dom.appendChild(this.pickerB);
        this.dom.appendChild(this.sample);
 
        this.RGCanvas = this.pickerRG.getContext('2d');
        this.BCanvas = this.pickerB.getContext('2d');

        this.PickRGEvent = (function(that) {
            return function(e) {
                var loc = windowTocanvas(that.RGCanvas, e.clientX, e.clientY);           
            }
        })(this);

        this.init();
    }   
}

ColorPicker.RGB_picker.prototype = {
	addTo: function(element) {
		element.appendChild(this.dom);
	},
    init: function(height, width) {
        this.pickerRG.style.height = this.pickerB.style.height = (height || 40) + 'px';
        this.pickerRG.style.width = this.pickerB.style.width = (width || 100) + 'px';
        this.pickerRG.height = this.pickerB.height = ((height || 40));
        this.pickerRG.width = this.pickerB.width = ((width || 100));

        this.initCanvas();
        this.addEvent();
    },
    addEvent: function() {
        this.pickerRG.addEventListener(0, 0, this.pickerB.width, 0);

    },
    initCanvas: function() {
        var gradient = this.RGCanvas.createLinearGradient(0, 0, this.pickerRG.width, 0);
        gradient.addColorStop(0, '#F00');
        gradient.addColorStop(0.2, '#FF0');
        gradient.addColorStop(0.4, '#0F0');
        gradient.addColorStop(0.6, '#0FF');
        gradient.addColorStop(0.8, '#00F');
        gradient.addColorStop(1, '#F0F');
        this.RGCanvas.fillStyle = gradient;
        this.RGCanvas.fillRect(0, 0, this.pickerRG.width, this.pickerRG.height);

        gradient = this.BCanvas.createLinearGradient(0, 0, this.pickerB.width, 0);
        gradient.addColorStop(0, '#FFFFFF');
        gradient.addColorStop(1, '#FF0000');
        this.BCanvas.fillStyle = gradient;
        this.BCanvas.fillRect(0, 0, this.pickerB.width, this.pickerB.height);
    }
}
