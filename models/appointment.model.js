const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AppointmentSchema = new Schema({
    title: {type: String, required: true, max: 100},
    startTime: {type: Date, required: true},
    endTime: {type: Date, required: true},
});

// Export the model
module.exports = mongoose.model('Appointment', AppointmentSchema);