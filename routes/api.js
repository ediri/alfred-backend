const express = require('express');
const router = express.Router();
let theEngine = require('../backend/albertTheButlerEngine');
// let theDistanceDingends = require('../backend/distanceMatrix');
let webex = require('../backend/webex');
let confluence = require('../backend/confluence');

const _ = require('lodash');

router.post('/appointment', (req, res) => {

    let data = process.env.LOCAL ? require('../test_data/meetingCreateExample') : req.body;
    theEngine.getMeeting(data);

    res.send({hello: 'world'});
});

router.post('/dialogflow/appointment', (req, res) => {

    let data = process.env.LOCAL ? require('../test_data/dialogFlow') : req.body;
    theEngine.getMeetingDialogFlow(data);

    res.send({hello: 'world'});
});

router.get('/appointment', (req, res) => {


    const result2 = _.map(req.app.locals.calendars, 'events');

    const resultArray = [];
    _.forEach(result2, function (value) {
        const result = _.find(value, {'creator': req.query.creator, 'date-start': req.query.date});
        if (!_.isUndefined(result))
            resultArray.push(result);
    });

    console.log(resultArray);

    res.send(resultArray[0]);
});


router.post('/createMeetingRoom', (req, res) => {
    let data = {
        title: 'Title',
        startDate: '2018-11-04',
        mails: [
            'codecampwaldemar@outlook.com',
            'codecampengin@outlook.com'
        ]
    }
    webex.createMeetingRoom(data);
    res.send({room: 'created'});
});

router.post('/createMeetingNotes', (req, res) => {
    console.log(req.body);
    confluence.createMeetingNotes(req.body.data);
    res.send({notes: 'created'});
});

module.exports = router;