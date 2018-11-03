var express = require('express');
var router = express.Router();


router.get('/findmeetingtimes', (req, res) => {
    res.send({ hello: 'world' });
});


module.exports = router;
