const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScapperSchema = Schema({
    lecture_id: {
        type: String,
    },
    user_id:{
        type:String
    },
    html: {
        type: String,
    },
},
    { timestamps: true }
);

const Scapper = mongoose.model('User', ScapperSchema);

module.exports = Scapper;