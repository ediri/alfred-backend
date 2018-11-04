const _ = require('lodash');
const users = require('./users');
const moment = require('moment');
const webex = require('./webex');

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

    const webexData = {
        title: data.title,
        startDate: data.startingDate,
        mails: [_.map(player, 'mail')]
    }
    webex.createMeetingRoom(webexData);
};

exports.getMeetingDialogFlow = (data, calendar) => {

    console.log("getMeetingDialogFlow", data);
    var resp = data.queryResult.outputContexts[0];
    console.log(resp);
    const player = [];
    resp.parameters.Teilnehmer.map(x => {
        player.push(_.find(users, {'name': x}))
    });
    player.forEach(item => {
        if (item.name == 'Entwickler') {
            item.name = 'Waldemar';
        }
        if (item.name == 'Netzwerker') {
            item.name = 'Michael';
        }
    });

    var creator = _.find(users, {'name': 'Annika'});
    var meetingDate = resp.parameters.Datum;
    var bookTraditionalRoom = resp.parameters.FlagRaum;
    var content = resp.parameters.Content;
    var roomResources = resp.parameters.Ausstattung;

    let creatorCalendar = _.find(calendar, {'owner': creator.name});

    let meetingItem = {startingDate: moment(), title: content, equipment: roomResources, location_name: "Flein"}
    creatorCalendar = findOwnerOrCreateOwnerEntry(creatorCalendar, meetingItem, calendar, creator.name);

    player.map(x => {
        creatorCalendar = _.find(calendar, {'owner': x.name});
        creatorCalendar= findOwnerOrCreateOwnerEntry(creatorCalendar, meetingItem, calendar, x.name);
    });

    const webexData = {
        title: content,
        startDate: meetingDate,
        mails: [_.map(player, 'mail')]
    }
    webex.createMeetingRoom(webexData);
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