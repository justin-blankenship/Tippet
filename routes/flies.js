const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Fly = require('../models/fly');

// //Get all flies
// router.get('/', function(req, res, next) {
// 	Fly.find(function(err, fly) {
// 		if(err) return next(err);
// 		return res.json(fly);
// 	});
// });


//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	res.json({user:req.user});
});

module.exports = router;