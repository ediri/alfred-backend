const express = require('express');
const router = express.Router();
let theEngine = require('../backend/albertTheButlerEngine');
let theDistanceDingends = require('../backend/distanceMatrix');

router.get('/findmeetingtimes', (req, res) => {
    theEngine.getMeeting();
    console.log(theDistanceDingends.findBestLocations([2,2,3]))
    res.send({ hello: 'world' });
});

module.exports = router;