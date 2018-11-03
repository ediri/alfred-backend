let request = require('request')

// meetingNotes
// {
//     date: " ",
//     title: " ",
//     notes: " "
// }
exports.createMeetingNotes = (meetingNotes) => {
    console.log(meetingNotes);
    let bodyData = {
        title: meetingNotes.date + ' - ' +meetingNotes.title,
        type: "page",
        space: {
            key: "CODECAMP"
        },
        body: {
            storage: {
                value: meetingNotes.notes,
                representation: "storage"
            }
        }
    };

    let options = {
        auth: { username: 'codecampengin@outlook.de', password: 'codecamp01' },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: bodyData
    };

    request.post({
        url: 'https://codecampheilbronn.atlassian.net/wiki/rest/api/content',
        options: options
    }, function(error, resp, body){
        console.log("Error: " + error);
    });
}