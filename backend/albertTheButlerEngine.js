const _ = require('lodash');
const users = require('./users');
const moment = require('moment');

function findOwnerOrCreateOwnerEntry(creatorCalendar, data, calendar, owner) {
    if (_.isUndefined(creatorCalendar)) {
        creatorCalendar = {owner: owner, events: []};
        calendar.push(creatorCalendar);
    }
    const entry = {
        title: data.title,
        creator: data.creator,
        "date-start": data.startingDate,
        location: 1,
        location_name: "Leingarten",
        equipment: data.equipment
    };
    creatorCalendar.events.push(entry);
    const myArray = _.sortBy(creatorCalendar.events, dateObj => {
        return moment(dateObj['date-start']);
    });
    creatorCalendar.events = myArray;
    return creatorCalendar;
}

exports.getMeeting = (data, calendar) => {
    console.log("getMeeting", data);


    const player = [];
    const creator = _.find(users, {'name': data.creator});
    player.push(creator);
    const map1 = data.attendees.map(x => {
        player.push(_.find(users, {'name': x}));
    });
    const momentDate = moment(data.startingDate);
    // 1 monday -  7 sunday
    //console.log(momentDate.isoWeekday());

    let creatorCalendar = _.find(calendar, {'owner': data.creator});
    creatorCalendar = findOwnerOrCreateOwnerEntry(creatorCalendar, data, calendar, data.creator);

    data.attendees.map(x => {
        creatorCalendar = _.find(calendar, {'owner': x});
        findOwnerOrCreateOwnerEntry(creatorCalendar, data, calendar, x);
    });
};

exports.getMeetingDialogFlow = (data) => {

    console.log("getMeetingDialogFlow", data);
    const player = [];
    data.queryResult.outpoutContexts[0].parameters.Teilnehmer.map(x => {player.push(_.find(users,{'name':x}))});
    player.forEach(item => {
        if (item.name == 'Entwickler'){
            item.name = 'Waldemar';
        }
        if (item.name == 'Netzwerker'){
            item.name = 'Michael';
        }
    });

    var creator = _.find(users, {'name': 'Annika'});
    var meetingDate = data.queryResult.outpoutContexts[0].parameters.Datum;
    var bookTraditionalRoom = data.queryResult.outpoutContexts[0].parameters.FlagRaum;
    var content = data.queryResult.outpoutContexts[0].parameters.Content;
    var roomResources = data.queryResult.outpoutContexts[0].parameters.Ausstattung;


    var calendarEntry = _.find(calendar,{'owner': 'Annika'});

    //calendarEntry.push();


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