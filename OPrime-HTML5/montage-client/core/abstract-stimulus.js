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


});