const express = require('express');
const router = express.Router();
const config = require('../config/database');
const mongoose = require('mongoose');
const Video = require('../models/video');

const db = "mongodb://justin:justin@ds113749.mlab.com:13749/tippet"
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err)) {
	if(err) {
		console.error("Error! " + err);
	}
});

router.get('/videos', function(req, res) {
	console.log('Get request for all videos');
	Video.find({})
	.exec(function(err, videos) {
		if(err) {
			console.log("Error retrieving videos");
		} else {
			res.json(videos);
		}
	});
});

module.exports = router;