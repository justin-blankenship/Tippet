const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Fly = require('../models/fly');

//Get all flies
router.get('/flies', function(req, res) {
	console.log('Get request for all flies.');
	Fly.find({})
	.exec(function(err, flies) {
		if (err) {
			console.log("Error retrieving flies.");
		} else {
			res.json(flies);
		}
	});
});

//Get fly by id
router.get('/flies/:id', function(req, res) {
	console.log('Get request for a single fly.');
	Fly.findById(req.params.id)
	.exec(function(err, fly) {
		if (err) {
			console.log("Error retrieving fly.");
		} else {
			res.json(flies);
		}
	});
});

//Create a new fly
router.post('/flies', function (req, res) {
	console.log('Post a fly.');
	var newFly = new Fly();
	newFly.title = req.body.title;
	newFly.flyType = req.body.flyType;
	newFly.save(function(err, insertedFly) {
		if (err) {
			console.log('Error saving fly');
		} else {
			res.json(insertedFly);
		}
	});
});

//Update a fly
router.put('/fly:id', function(req, res) {
	console.log('Update fly.');
	Fly.findByIdAndUpdate(req.params.id,
	{
		$set: {title: req.body.title, flyType: req.body.flyType}
	},
	{
		new: true
	},
	function(err, updatedFly) {
		if(err) {
			res.send("Error updating fly.");
		} else {
			res.json(updatedFly);
		}
	}
	);
});

//Delete a fly
router.delete('/flies/:id', function(req, res) {
	console.log("Deleting a fly.");
	Fly.findByIdAndRemove(req.params.id, function(err, deletedFly) {
		if(err) {
			res.send("Error deleting fly.");
		} else {
			res.json(deletedFly);
		}
	});
})

module.exports = router;