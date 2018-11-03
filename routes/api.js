const express = require('express');
const router = express.Router();
let theEngine = require('../backend/albertTheButlerEngine');
// let theDistanceDingends = require('../backend/distanceMatrix');
let webex = require('../backend/webex')

router.get('/findmeetingtimes', (req, res) => {
    theEngine.getMeeting();
    // console.log(theDistanceDingends.findBestLocations([2,2,3]))
    res.send({ hello: 'world' });
});

router.post('/createMeetingRoom', (req, res) => {
    webex.createMeeting('test')
    res.send({ room: 'created' })
})

module.exports = router;