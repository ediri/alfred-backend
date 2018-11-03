const express = require('express');
const router = express.Router();
let theEngine = require('../backend/albertTheButlerEngine');
// let theDistanceDingends = require('../backend/distanceMatrix');
let webex = require('../backend/webex');
let confluence = require('../backend/confluence');

const _ = require('lodash');

router.post('/appointment', (req, res) => {

    let data = process.env.LOCAL ? require('../test_data/meetingCreateExample') : req.body.data;
    theEngine.getMeeting(JSON.parse(data));

    res.send({hello: 'world'});
});

router.get('/appointment', (req, res) => {


    const result = _.find(calendars, {'creator': req.param.creator});
    console.log(result);

    res.send({hello: 'world'});
});


router.post('/createMeetingRoom', (req, res) => {
    webex.createMeetingRoom('test');
    res.send({room: 'created'});
});

router.post('/createMeetingNotes', (req, res) => {
    let data = {
        "date": req.body.date,
        "title": req.body.title,
        "notes": req.body.notes
    }
    confluence.createMeetingNotes(data);
    res.send({ notes: 'created' });
});

module.exports = router;