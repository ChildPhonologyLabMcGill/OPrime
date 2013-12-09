/**
 * @module ui/one-image-stimulus.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
	AbstractStimulus = require("core/abstract-stimulus").AbstractStimulus,
	Response = require("ui/response.reel").Response;

/**
 * @class OneImageStimulus
 * @extends AbstractStimulus
 */
exports.OneImageStimulus = AbstractStimulus.specialize( /** @lends OneImageStimulus# */ {
	constructor: {
		value: function OneImageStimulus() {
			this.super();
			this.primeImage = "../../../assets/stimuli/image/01_PaulRejointSesAmisAuParcTousLesJours.jpg";

		}
	},
	myListProperty: {
		value: [new Response({
			"reactionTimeAudioOffset": null,
			"reactionTimeAudioOnset": null,
			"x": 132,
			"y": 334
		}), new Response({
			"reactionTimeAudioOffset": null,
			"reactionTimeAudioOnset": null,
			"x": 123,
			"y": 343
		}), new Response({
			"reactionTimeAudioOffset": null,
			"reactionTimeAudioOnset": null,
			"x": 312,
			"y": 3423
		})]
	}
});