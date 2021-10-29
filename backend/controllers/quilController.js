const algoliasearch = require("algoliasearch");
const Quil = require('../models/quil_data');
require('dotenv').config();   

const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY);

const index = client.initIndex('sdfnjdsn');

module.exports.create_algolia_search_instance = (req,res) => {
    const { user_id, lecture_id, lecture_name, course_id, html } = req.body;
    const index = client.initIndex(user_id);
    const objects = [
        {
          objectID: lecture_id,
          lecture_name,
          course_id,
          html
        }
    ];
    Quil.findOneAndUpdate({user_id,lecture_id}, 
        {user_id,lecture_id,lecture_name,course_id,html}, 
        {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        index
        .saveObjects(objects)
        .then(() => {
            return res.status(200).json({msg: "Updated successfully"});
        })
        .catch(err => {
            console.log(err)
            return res.status(500).json("Internal server error")
        });
    });
}
