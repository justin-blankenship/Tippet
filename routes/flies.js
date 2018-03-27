const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Fly = require('../models/fly');

//Get all flies
router.get('/flies', function(req, res, next) {
	Fly.find(function(err, flies) {
		if(err) return next(err);
		return res.json(flies);
	});
});

module.exports = router;