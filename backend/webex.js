const spark = require('ciscospark/env');

exports.createMeeting = (title) => {
    spark.rooms.create({
        title: title
    })
    // Make sure to log errors in case something goes wrong.
        .catch(function(reason) {
            console.error(reason);
            process.exit(1);
        });
}