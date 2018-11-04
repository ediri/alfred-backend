const spark = require('ciscospark/env');

// data.mails - data.title
exports.createMeetingRoom = (data) => {
    spark.rooms.create({
        title: data.title
    })
        .then(function(res) {
            data.mails.map(mail => {
                addToChannel(mail, res.id)
            });
            writeToChannel('Euer Termin findet am ' + data.startDate + ' statt.');
        })
    // Make sure to log errors in case something goes wrong.
        .catch(function(reason) {
            console.error(reason);
            // process.exit(1);
        });
}

let addToChannel = function(mail, channelId) {
    spark.memberships.create({
        roomId: channelId,
        personEmail: mail,
        isModerator: false
    })
        .catch(function(reason) {
            console.error(reason);
            // process.exit(1);
        });
}

let writeToChannel = function(message, channelId){
    spark.messages.create({
        text: message,
        roomId: room.id
    });
}