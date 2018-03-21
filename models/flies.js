var mongoose = require('mongoose');
var schema = {
	title: String;
	type: String
}

var Flies = mongoose.model("Flies", schema);

module.exports = Flies;