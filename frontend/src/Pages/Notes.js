import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import algoliasearch from 'algoliasearch/lite'
import { Input,Skeleton, Card,Row,Col } from 'antd';
import axios from 'axios';
import baseUrl from '../baseURL';

const { Search } = Input;
const { Meta } = Card;

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID,process.env.REACT_APP_ALGOLIA_SEARCH_KEY)

const Notes = () => {
    const history = useHistory()
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

    const redirectLecture = (title,lecture_id,course_id) => {
        history.push("/courses/" + title + "/" + lecture_id + "/" + course_id);
      };
      console.log(notes)

    return (
        <div style={{ maxWidth: '60%', marginLeft:"24rem"}}>
           <Search size="large" style={{width:"100%", marginTop: '50px', marginBottom:'50px'}} placeholder="input search text" onSearch={onSearch} onChange={e => onSearch(e.target.value)}/>
           <Row gutter={[24, 16]} >
            {notes.length > 0 ? (
          notes.map((element) => (
            <Col span={8}>
            <Card key={element.id} hoverable
            style={{ width: 240, marginBottom: "2rem" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            onClick={() => redirectLecture(element.lecture_name,element.lecture_id,element.course_id)}>
              {element.lecture_name}
            </Card>
            </Col>
          ))
        ) : (
          <>
          <Col span={8}>
            <Card
          style={{ width: 300, marginTop: 16 }}>
          <Skeleton avatar active>
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
            </Col>
            <Col span={8}>
            <Card
          style={{ width: 300, marginTop: 16 }}>
          <Skeleton avatar active>
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
            </Col>
            <Col span={8}>
            <Card
          style={{ width: 300, marginTop: 16 }}>
          <Skeleton avatar active>
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
            </Col>
            </>
        )}
        </Row>
        </div>
    )
}

export default Notes
