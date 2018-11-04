const _ = require('lodash');
const users = require('./users');
const moment = require('moment');

exports.getMeeting = (data) => {
    console.log("getMeeting", data);


    const player = [];
    const creator = _.find(users, {'name': data.creator});
    player.push(creator);
    const map1 = data.attendees.map(x => {
        player.push(_.find(users, {'name': x}));
    });
    const momentDate = moment(data.startingDate);
    // 1 monday -  7 sunday
    console.log(momentDate.isoWeekday());
};

exports.getMeetingDialogFlow = (data) => {
    console.log("getMeetingDialogFlow", data);


    //const player = [];
    //const creator = _.find(users, {'name': data.creator});
    //player.push(creator);
    //const map1 = data.attendees.map(x => {
    //    player.push(_.find(users, {'name': x}));
    //});
    //const momentDate = moment(data.startingDate);
    // 1 monday -  7 sunday
    //console.log(momentDate.isoWeekday());
};

/*exports.findBestLocations = (locations) => {
    const result = [];
    locations.map(loc => {
        let minDist = 2000;
        let index = 0;
        for (let i = 1; i < distanceMatrix[loc].length; i++){
            if (i !== j){
                if (distanceMatrix[loc][i] < minDist){
                    index = i;
                    minDist = distanceMatrix[loc][i];
                }
            }
        }
        result.push(index)
    })
    return result
}*/