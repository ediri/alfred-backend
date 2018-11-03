const spark = require('ciscospark/env');

exports.createMeetingRoom = (title) => {
    spark.rooms.create({
        title: title
    })
        .then(function(res) {
            console.log(res)
            spark.memberships.create({
                roomId: res.id,
                personEmail: "codecampwaldemar@outlook.de",
                isModerator: false
            })
                .catch(function(reason) {
                    console.error(reason);
                    // process.exit(1);
                });
        })
    // Make sure to log errors in case something goes wrong.
        .catch(function(reason) {
            console.error(reason);
            // process.exit(1);
        });
}