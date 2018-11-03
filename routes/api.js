const express = require('express');
const router = express.Router();
let theEngine = require('../backend/albertTheButlerEngine');
// let theDistanceDingends = require('../backend/distanceMatrix');
let webex = require('../backend/webex')
let confluence = require('../backend/confluence')

router.post('/appointment', (req, res) => {

    let data = process.env.LOCAL ? require('../test_data/meetingCreateExample') : req.body.data;
    theEngine.getMeeting(JSON.parse(data));

    res.send({hello: 'world'});
});

router.post('/createMeetingRoom', (req, res) => {
    webex.createMeetingRoom('test');
    res.send({ room: 'created' });
});

router.post('/createMeetingNotes', (req, res) => {
    confluence.createMeetingNotes(JSON.parse(req.body.data));
    res.send({ notes: 'created' });
});

module.exports = router;