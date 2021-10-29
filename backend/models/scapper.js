const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScapperSchema = Schema({
    query: {
        type: String,
    },
    books: {
        type: Array
    },
    projects: {
        type: Array
    },
    papers: {
        type: Array
    }
},
    { timestamps: true }
);

const Scapper = mongoose.model('Scrapper', ScapperSchema);

module.exports = Scapper;