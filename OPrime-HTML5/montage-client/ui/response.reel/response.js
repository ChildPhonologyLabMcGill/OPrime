/**
 * @module ui/response.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Response
 * @extends Component
 */
exports.Response = Component.specialize( /** @lends Response# */ {
	constructor: {
		value: function Response(obj) {
			console.log("constructing ", obj);
			if (obj) {
				this.x = obj.x;
				this.y = obj.y;
			}

			this.super();
			console.log("constructed response", this.x, this.y);

		}
	},

	x: {
		value: null
	},

	y: {
		value: null
	},

	templateDidLoad: {
		value: function(e) {
			if (!this.x) {
				this.x = Date.now();
			}
			console.log("loaded response", this.x, this.y);
		}
	}
});