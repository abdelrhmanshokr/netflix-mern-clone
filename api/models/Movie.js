const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String
    },
    // cover image
    imgCover: {
        type: String
    },
    // title image
    imgTitle: {
        type: String
    },
    // small view image
    imgSmallView: {
        type: String
    },
    trailer: {
        type: String
    },
    // actual movie
    video: {
        type: String
    },
    year: {
        type: Number
    },
    ageLimit: {
        type: Number
    },
    genre: {
        type: String
    },
    // either a movie or a series 
    isSeries: {
        typs: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Movie", MovieSchema);