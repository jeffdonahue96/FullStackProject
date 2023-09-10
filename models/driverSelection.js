const mongoose = require('mongoose')

const driverSelectionSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    }
})

module.exports = mongoose.model('driverSelection', driverSelectionSchema)