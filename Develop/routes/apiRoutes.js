const { Router } = require("express");
const router = Router();

const db = require("../models");

router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((workouts) => {
      res.send(workouts);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});
router.post("/workouts", (req, res) => {
  db.Workout.create({})
    .then((newWorkout) => {
      res.status(201).send(newWorkout);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).end();
    });
});
router.put("/workouts/:id", (req, res) => {
  const { id } = req.params;
  const { type, name, duration, weight, sets, reps, distance } = req.body;
  db.Workout.findByIdAndUpdate(id, {
    $push: {
      exercises: { type, name, duration, weight, sets, reps, distance },
    },
  })
    .then((workout) => {
      res.send(workout);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).end();
    });
});

router.get("/workouts/range", (req, res) => {
  db.Workout.find()
    .then((workout) => {
      res.send(workout);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).end();
    });
});
module.exports = router;
