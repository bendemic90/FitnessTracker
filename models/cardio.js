const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardioSchema = new Schema ({

})

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;