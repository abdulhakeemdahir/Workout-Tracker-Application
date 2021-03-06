const router = require("express").Router();
const path = require("path");
const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
	Workout.find({})
		.then(workout => {
			res.json(workout);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.post("/api/workouts", (req, res) => {
	console.log(req.body);
	Workout.create(req.body)
		.then(workout => {
			res.json(workout);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {
	const newExercise = req.body;

	Workout.findByIdAndUpdate(
		req.params.id,
		{
			$push: {
				exercises: newExercise,
			},
		},
		{
			new: true,
		}
	)
		.then(workout => {
			res.json(workout);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get("/api/workouts/range", (req, res) => {
	Workout.find({})
		.limit(7)
		.then(range => {
			res.json(range);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
