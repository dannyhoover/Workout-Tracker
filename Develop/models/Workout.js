const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["resistance", "cardio"] },
    name: { type: String, minlength: 1 },
    duration: { type: Number, validator: (num) => num > 0 },
    weight: {
      type: Number,
      required() {
        return this.distance === null;
      }, validator: (num) => num > 0
    },
    reps: {
      type: Number,
      required() {
        return this.distance === null;
      }, validator: (num) => num > 0
    },
    sets: {
      type: Number,
      required() {
        return this.distance === null;
      }, validator: (num) => num > 0
    },
    distance: { type: Number, validator: (num) => num > 0 },
  },
  { _id: false }
);
const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: {
    type: [exerciseSchema],
    default: Array,
  },
});

module.exports = mongoose.model("Workout", workoutSchema);
