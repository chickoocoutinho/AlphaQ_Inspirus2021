const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quilSchema = Schema({
    lecture_id: {
        type: String,
    },
    html: {
        type: String,
    },
},
    { timestamps: true }
);

const Quil = mongoose.model('quil_data', quilSchema);

module.exports = Quil;