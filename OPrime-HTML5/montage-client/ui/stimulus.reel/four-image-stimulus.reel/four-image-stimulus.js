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

	handleChooseImage1Mousedown: {
		value: function(e) {
			console.log("mousedown chooseImage1 child", e);
		}
	},

	captureAction: {
		value: function(e) {
			console.log("mousedown captue child", e);
		}
	},

	handleHover: {
		value: function(e) {
			console.log("hover child", e);
		}
	},

	captureHover: {
		value: function(e) {
			console.log("hover captue child", e);
		}
	}
});