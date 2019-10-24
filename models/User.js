const { Schema } = require('mongoose');

const User = new Schema({
    firstName: String,
    lastName: String,
    preferredName: String,
    preferredPronoun: String,
    year: String,
    cellNumber: String,
    netID: String,
    CCID: String,
    major: [String],
    skills: [String],
    interests: [String],
    github: String,
    discord: String,
    linkedin: String,
    bio: String
});

module.exports = User;
