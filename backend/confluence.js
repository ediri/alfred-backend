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
            'Content-Type': 'application/json',
            'X-Atlassian-Token': 'no_check'
        },
        body: bodyData
    };

    request.post({
        url: 'https://codecampheilbronn.atlassian.net/wiki/rest/api/content',
        options: options
    }, function(error, resp, body){
        console.log("Error: " + error);
        console.log("Resp: " + JSON.stringify(resp))
    });
}