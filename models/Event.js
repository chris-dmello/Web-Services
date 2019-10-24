const { Schema } = require('mongoose');

const Event = new Schema({
    room: [String],
    organization: [String],
    sponsors: [String],
    eventName: [String],
    dateOfEvent: [Date],
    desc: String

});

module.exports = Event;