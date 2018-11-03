const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoomSchema = new Schema({
    name: {type: String, required: true, max: 100},
    size: {type: Number, required: true},
    ressources: [String],
    location: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('Room', RoomSchema);