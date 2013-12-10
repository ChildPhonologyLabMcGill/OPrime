/**
 * @module ui/stimulus.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
	Response = require("ui/response.reel").Response,
	RangeController = require("montage/core/range-controller").RangeController;

/**
 * @class Stimulus
 * @extends Component
 */
exports.AbstractStimulus = Component.specialize( /** @lends Stimulus# */ {
	constructor: {
		value: function Stimulus() {
			this.super();
			this.responses = [{
				"reactionTimeAudioOffset": null,
				"reactionTimeAudioOnset": null,
				"x": 1223,
				"y": 34
			}, {
				"reactionTimeAudioOffset": null,
				"reactionTimeAudioOnset": null,
				"x": 12342,
				"y": 34
			}, {
				"reactionTimeAudioOffset": null,
				"reactionTimeAudioOnset": null,
				"x": 165432,
				"y": 34
			}];
			this.rangeController = new RangeController().initWithContent(this.responses);
		}
	},

	rangeController: {
		value: null
	},

	handleMousedown: {
		value: function(e) {
			console.log("mousedown parent", e);
		}
	},

	captureMousedown: {
		value: function(e) {
			console.log("mousedown captue parent", e);
		}
	},

	enterDocument: {
		value: function(e) {
			console.log("enterDocument");
			// this.element.addEventListener("mousedown", this, false);

			for (var i in this.templateObjects) {
				if (this.templateObjects[i].classList && this.templateObjects[i].classList.contains("Stimulus-record-touch-response")) {
					this.templateObjects[i].element.addEventListener("mousedown", this, false);
					// this.templateObjects[i].element.addEventListener("touchend", this, false);
					// this.templateObjects[i].element.addEventListener("touchcancel", this, false);
				}
			}
		}
	}

});