const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    type: {
        type: String,
        trim: true,
        required: "Cardio or Resistance",
    },
    name: {
        type: String,
        trim: true,
        required: "Name of the exercise required"
    },
    duration: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;