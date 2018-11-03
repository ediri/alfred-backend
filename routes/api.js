var express = require('express');
var router = express.Router();
let distanceMatrix = require('../backend/distanceMatrix');

router.get('/findmeetingtimes', (req, res) => {

    console.log(distanceMatrix[1][2])
    res.send({ hello: 'world' });
});


module.exports = router;
