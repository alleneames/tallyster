let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let tallysterSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    },
    comments: [String]
});

module.exports = mongoose.model("tallyster", tallysterSchema);