const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.render('calendar', {calendars: req.app.locals.calendars})
});


module.exports = router;
