const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quilSchema = Schema({
    lecture_id: {
        type: String,
    },
    course_id: {
        type: String
    },
    html: {
        type: String,
    },
    user_id: {
        type: String
    },
    lecture_name:{
        type: String
    }
},
    { timestamps: true }
);

const Quil = mongoose.model('quil_data', quilSchema);

module.exports = Quil;