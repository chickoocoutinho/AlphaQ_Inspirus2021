import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import algoliasearch from 'algoliasearch/lite'
import { Input,Skeleton, Card,Row,Col } from 'antd';
import axios from 'axios';
import baseUrl from '../baseURL';

const { Search } = Input;
const { Meta } = Card;

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID,process.env.REACT_APP_ALGOLIA_SEARCH_KEY)
const myImgLinks = ["https://i.ibb.co/Ry9V0tR/anamnesis33-pj-X8-VSNo2-Ts-unsplash.jpg", "https://i.ibb.co/RjD1S2Z/faraz-arshad-hj-Ydr-Ujo7-JY-unsplash.jpg", "https://i.ibb.co/pZvz41G/ospan-ali-V-77-Fxf-Ge-QU-unsplash.jpg","https://i.ibb.co/hmSWWrp/patrick-fore-M1-Vo1-MFMv-XI-unsplash.jpg","https://i.ibb.co/xSyVptB/raimond-klavins-Afm-By-Tk-HK-Q-unsplash.jpg","https://i.ibb.co/PM2Xxp9/raimond-klavins-Ql6-Jh-Gdb-Qg0-unsplash.jpg","https://i.ibb.co/RQnm2j1/ransel-yoho-arkg-Tj3-XJq-A-unsplash.jpg","https://i.ibb.co/bvvvx8h/s-o-c-i-a-l-c-u-t-g-REi-9t-I5-Mg-unsplash.jpg" ]; 

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
        <div style={{ maxWidth: '60%', marginLeft:"26rem"}}>
            <Search size="large" style={{width:"100%", marginTop: '50px', marginBottom:'50px'}} placeholder="input search text" onSearch={onSearch} onChange={e => onSearch(e.target.value)}/>
            <div style={{marginTop: '2rem', marginLeft: '10%'}}>
            
           <Row gutter={[32, 16]} >
            {notes.length > 0 ? (
          notes.map((element) => (
            <Col span={8}>
            <Card key={element.id} hoverable
            style={{ width: 240, marginBottom: "2rem" }}
            cover={<img alt="example" src={myImgLinks[Math.floor(Math.random() * myImgLinks.length)]} />}
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
        </div>
    )
}

export default Notes
