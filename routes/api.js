const express = require('express');
const router = express.Router();
let theEngine = require('../backend/albertTheButlerEngine');
// let theDistanceDingends = require('../backend/distanceMatrix');
let webex = require('../backend/webex')

router.post('/appointment', (req, res) => {

    let data = process.env.LOCAL ? require('../test_data/meetingCreateExample') : {};
    theEngine.getMeeting(data);

    res.send({hello: 'world'});
});

router.post('/createMeetingRoom', (req, res) => {
    webex.createMeeting('test')
    res.send({room: 'created'})
})

module.exports = router;