const router = require("express").Router();
const path = require("path");
const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
	Workout.find()
		.then(workouts => {
			res.json(workouts);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.post("/api/workouts", (req, res) => {
	Workout.create(req.body)
		.then(workout => {})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {});

router.get("/api/workouts/range", (req, res) => {});

module.exports = router;
