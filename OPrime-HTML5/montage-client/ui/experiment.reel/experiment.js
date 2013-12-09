/**
 * @module ui/experiment.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Experiment
 * @extends Component
 */
exports.Experiment = Component.specialize( /** @lends Experiment# */ {

	_currentStimulus: {
		value: null
	},

	_currentTestBlock: {
		value: null
	},

	constructor: {
		value: function Experiment() {
			this.super();
			this._currentStimulus = {
				"auditoryStimuli": "auditory_stimuli_1",
				"audioFile": "1.wav",
				"primeImage": "animal1.png",
				"targetImage": "04_scie.png",
				"distractorImages": ["01_feu.png", "03_but.png", "02_chat.png"],
				"responses": [{
					"reactionTimeAudioOffset": null,
					"reactionTimeAudioOnset": null,
					"x": 12,
					"y": 34
				}]
			};
		}
	},

	currentResponse: {
		get: function() {

			var emptyResponse = {
				"x": 0,
				"y": 0
			};
			if (this._currentStimulus && this._currentStimulus.responses && this._currentStimulus.responses.length > 0) {
				var response = this._currentStimulus.responses[this._currentStimulus.responses.length - 1];
				console.log(response);
				return response;
			} else {
				console.log(response);
				return emptyResponse;
			}
		},
		set: function(value) {
			if (!this._currentStimulus) {
				return;
			}

			this._currentStimulus.responses = this._currentStimulus.responses || [];
			this._currentStimulus.responses.push(value);
		}
	},

	run: {
		value: function() {}
	},

	next: {
		value: function() {}
	},

	previous: {
		value: function() {}
	},

	pause: {
		value: function() {}
	}
});