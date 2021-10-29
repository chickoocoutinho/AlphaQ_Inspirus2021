const User = require("../models/user_model");

module.exports.signup = async (req,res) => {
    try{
        const {name, email, imageUrl, googleId} = req.body;
        const user = await User.create({name,email,imageUrl,googleId});
        res.status(200).json({user_id: user._id})
    }
    catch(e){
        res.status(500).jso("Internal server error");
    }
    
}