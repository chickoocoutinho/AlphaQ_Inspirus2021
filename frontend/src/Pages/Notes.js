import React, {useEffect, useState} from 'react'
import algoliasearch from 'algoliasearch/lite'
import { Input} from 'antd';
import axios from 'axios';
import baseUrl from '../baseURL';

const { Search } = Input;

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID,process.env.REACT_APP_ALGOLIA_SEARCH_KEY)

const Notes = () => {
    const [notes,setNotes] = useState([]);
    const onSearch = (value) => {
        let index = searchClient.initIndex(localStorage.getItem("user_id"));
        console.log(index)
        index.search(value)
        .then(res=>{
            console.log(res.hits);setNotes(res.hits)})
    };

    useEffect(() => {
        axios.get(`${baseUrl}algolia/all-notes?user_id=${localStorage.getItem("user_id")}`).then(res=> {
            console.log(res.data.notes);
            setNotes(res.data.notes);})
    },[])

    return (
        <div>
             <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} onChange={e => onSearch(e.target.value)}/>
        </div>
    )
}

export default Notes
