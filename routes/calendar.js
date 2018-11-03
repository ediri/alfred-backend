const express = require('express');
const router = express.Router();
const calendars = require('../backend/calendar');

router.get('/', function (req, res, next) {
    res.render('calendar', {calendars: calendars})
});


module.exports = router;
