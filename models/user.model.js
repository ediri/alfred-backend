const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    awardPoints: {type: Number, required: false},
    imagePath: {type: String, required: false},
    roleId: {type: Number, required: true},
});

// Export the model
module.exports = mongoose.model('User', UserSchema);