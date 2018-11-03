const express = require('express');
const router = express.Router();
let theEngine = require('../backend/albertTheButlerEngine');

router.get('/findmeetingtimes', (req, res) => {

    theEngine.getMeeting();
    res.send({ hello: 'world' });
});


module.exports = router;
