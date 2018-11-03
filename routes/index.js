var express = require('express');
var router = express.Router();
const _= require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {

    const users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
    ];

    if (!_.isEmpty(req.query)) {
        const user = _.find(users, {'user': req.query.name});
        if (_.isUndefined(user))
            res.send({message: 'no user found'})
        else {
            res.send({age: user.age});
        }
    } else {
        res.send({message: 'please send name as url parameter'})
    }

});


module.exports = router;
