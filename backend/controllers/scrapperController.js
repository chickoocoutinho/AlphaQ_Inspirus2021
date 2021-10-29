const Scrapper = require("../models/scapper");
const axios = require('axios');

module.exports.scrap = async (req,res) => {
    const projectAPI = process.env.REPO_SEARCH;
    const bookAPI = process.env.BOOK_SEARCH;
    const paperAPI = process.env.PAPER_SEARCH;
    const size = 3

    try{
        const query = req.query.q;
        data = await Scrapper.find({query})
        if(data.length === 0){
            let projects, books, papers;
            let promises= [axios.get(`${projectAPI}=${query}`).then(res => {
                projects = res.data.items.slice(0,size)
                projects = projects.map(({name,html_url}) => {return {name,html_url}});
            }),
            axios.get(`${bookAPI}=${query}`).then(res=>{
                books = res.data.items.slice(0,size)
                books = books.map(({title,link}) => {return {title,link}})
            }),
            axios.get(`${paperAPI}=${query}`).then(res=>{
                papers = res.data.items.slice(0,size)
                papers = papers.map(({title,link}) => {return {title,link}})
            })]

            Promise.all(promises)
            .then(()=>{res.status(200).json({projects,books,papers});
            Scrapper.create({
                projects,
                books,
                papers,
                query
            })
        })
        }
        else{
            const {projects,books,papers} = data[0];
            res.status(200).json({projects,books,papers})
        }
    }
    catch(e){
        console.log(e);
        res.status(500).json("Internal server error");
    }
    
}