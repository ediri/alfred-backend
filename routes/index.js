var express = require('express');
var router = express.Router();
const _ = require('lodash');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({message: 'This is Albert the Butler'})
});


module.exports = router;
