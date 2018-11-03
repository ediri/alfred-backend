var express = require('express');
var router = express.Router();
const _= require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {

    const users = [
      { 'id': 'codecampengin@outlook.de', 'name': 'Engin' },
      { 'id': 'codecampmichael@outlook.de', 'name': 'Michael' },
      { 'id': 'codecampannika@outlook.de', 'name': 'Annika' },
      { 'id': 'codecamphassan@outlook.de', 'name': 'Hassan' },
      { 'id': 'codecampalex@outlook.de', 'name': 'Alex' },
      { 'id': 'codecampwaldemar@outlook.de', 'name': 'Waldemar' }
    ];

    const location = [
      { 'id': 0, 'name': 'Webex'},
      { 'id': 1, 'name': 'Leingarten'},
      { 'id': 2, 'name': 'Roetelstrasse'},
      { 'id': 3, 'name': 'Stiftsberg'},
      { 'id': 4, 'name': 'Schwabenhof'},
      { 'id': 5, 'name': 'Flein'},
      { 'id': 6, 'name': 'Weinsberg'},
      { 'id': 7, 'name': 'Strasbourg'},
      { 'id': 8, 'name': 'Thessaloniki'}
    ];

    if (!_.isEmpty(req.query)) {
        const user = _.find(users, {'user': req.query.name});
        if (_.isUndefined(user))
            res.send({message: 'no user found'})
        else {
            res.send({name: user.name});
        }
    } else {
        res.send({message: 'please send name as url parameter'})
    }

});


module.exports = router;
