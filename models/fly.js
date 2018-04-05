const mongoose = require('mongoose');
const config = require('../config/database');

//Fly Schema
const FlySchema = mongoose.Schema({
	title: {
		type: String,
		required:true
	},
	flyType: {
		type: String,
		required:true
	}
});

// const Fly = module.exports = mongoose.model('Fly', FlySchema);

// module.exports.getFlyById = function (id, callback) {
// 	const query = id;
// 	Fly.findById(query, callback);
// }

// module.exports.getFlyByTitle = function (title, callback) {
// 	const query = {title: title}
// 	Fly.findOne(query, callback);
// }

module.exports = mongooose.model('fly', FlySchema, 'flies');