const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        name: { type: String, required: true },
        row: { type: Number, required: true },
        hobbies: { type: Array, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)