const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resistanceSchema = new Schema ({
    
})

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;