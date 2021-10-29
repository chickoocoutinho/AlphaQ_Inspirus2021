const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailValidate = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email);
}

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        lowercase: true,
        unique: true,
        validate: [emailValidate, 'Please enter a valid email'],
    },
    imageUrl:{
        type: String,
        required: [true,'Please enter your imageUrl']
    },
    googleId: {
        type: String,
        required: [true,'Please enter googleId']
    }
},
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;