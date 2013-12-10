/**
 * @module ui/four-image-stimulus.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
	AbstractStimulus = require("core/abstract-stimulus").AbstractStimulus;

/**
 * @class FourImageStimulus
 * @extends AbstractStimulus
 */
exports.FourImageStimulus = AbstractStimulus.specialize( /** @lends FourImageStimulus# */ {
	constructor: {
		value: function FourImageStimulus() {
			this.super();
			this.primeImage = "http://fc09.deviantart.net/fs71/f/2012/338/2/1/wat__dash_by_reallyunimportant-d5gl3y0.png";
		}
	},

	handleMousedown: {
		value: function(e) {
			console.log("mousedown child", e);
		}
	},

	handleFooMousedown: {
		value: function(e) {
			console.log("mousedown Foo js", e);
		}
	},

	handleBarMousedown: {
		value: function(e) {
			console.log("mousedown Bar serialization", e);
		}
	},

	captureBarMousedown: {
		value: function(e) {
			console.log("mousedown capture Bar serialization", e);
		}
	},

	captureMousedown: {
		value: function(e) {
			console.log("mousedown captue child", e);
		}
	},

	enterDocument: {
		value: function(e) {
			console.log("enterDocument");
			// this.element.addEventListener("mousedown", this, false);
					this.templateObjects["foo"].element.addEventListener("mousedown", this, false);

			// for (var i in this.templateObjects) {
			// 		console.log(this.templateObjects[i]);
			// 	if (this.templateObjects[i].classList && this.templateObjects[i].classList.contains("Stimulus-record-touch-response")) {
			// 		// this.templateObjects[i].element.addEventListener("touchend", this, false);
			// 		// this.templateObjects[i].element.addEventListener("touchcancel", this, false);
			// 	}
			// }
		}
	}

});