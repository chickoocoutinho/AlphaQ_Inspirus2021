const User = require("../models/user_model");

module.exports.signup = async (req,res) => {
    try{
        const {name, email, imageUrl, googleId} = req.body;
        const user = await User.findOneAndUpdate({email},{name,email,imageUrl,googleId},{upsert: true});
        res.status(200).json({user_id: user._id})
    }
    catch(e){
        console.log(e);
        res.status(500).json("Internal server error");
    }
    
}