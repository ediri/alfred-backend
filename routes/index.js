const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({message: 'This is Albert the Butler'})
});


module.exports = router;
