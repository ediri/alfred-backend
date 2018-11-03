const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoomSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true, max: 100},
    size: {type: Number, required: true},
    resources: [String],
    location: {
        name: {type: String},
        longitude: {type: Number},
        latitude: {type: Number},
    },
});

// Export the model
module.exports = mongoose.model('Room', RoomSchema);