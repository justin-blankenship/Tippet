const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Fly = require('../models/fly');
const passport = require('passport');
const jwt = require('jsonwebtoken');

// //Get all flies
// router.get('/', function(req, res, next) {
// 	Fly.find(function(err, fly) {
// 		if(err) return next(err);
// 		return res.json(fly);
// 	});
// });


//Profile
router.get('/flies', passport.authenticate('jwt', {session:false}), (req, res, next) => {
	res.json({fly:req.fly});
});




module.exports = router;