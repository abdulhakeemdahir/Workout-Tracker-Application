const router = require("express").Router();
const path = require("path");

router.get("/api/workouts", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/api/workouts/range", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
