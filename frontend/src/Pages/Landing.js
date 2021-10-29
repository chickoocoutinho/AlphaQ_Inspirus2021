import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { Row, Col } from 'antd';

function Landing() {
    return (
        <div style={{position: 'relative',maxWidth:'80%',marginLeft:"10%"}}>
        <div style={{ position: 'absolute'}}>
            <Row>
                <Col span={12}>
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/private_files/lf30_JenNba.json"
                    style={{ height: '820px', width: '820px' }}
                    >
                    </Player>
                </Col>
                <Col span={12}>
                    <h1 style={{ textAlign: 'center', marginTop: '13rem', fontSize: 100, fontFamily: "Roboto" }}>ClassBuddy</h1>
                    <p style={{ textAlign: 'center', fontSize: 20, fontFamily: "Roboto", marginRight: "2rem",marginLeft: "2rem" }}>“Online learning is rapidly becoming one of the most cost-effective ways to educate the world’s rapidly expanding workforce.” - Jack Messman</p>
                </Col>
            </Row>
        </div>
        <div style={{position: 'absolute',zIndex:10, marginTop:'40rem'}}>
            <Row>
                <Col span={12}>
                    <h1 style={{ textAlign: 'center', marginTop: '23rem', fontSize: 20, fontFamily: "Roboto" , marginRight: "2rem",marginLeft: "2rem"}}>We Make In Easier and Hassle Free for you to integrate the courses you registered for on Google Classroom</h1>
                    <p style={{ textAlign: 'center', fontSize: 15, fontFamily: "Roboto" }}>“Online learning is rapidly becoming one of the most cost-effective ways to educate the world’s rapidly expanding workforce.” - Jack Messman</p>
                </Col>
                <Col span={12}>
                <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/packages/lf20_bjyiojos.json"
                    style={{ height: '800px', width: '800px' }}
                    >
                    </Player>
                </Col>
            </Row>
        </div>
        <div style={{position: 'absolute',zIndex:10, marginTop:'65rem'}}>
            <Row>
            <Col span={12}>
                <Player
                    autoplay
                    loop
                    src="https://assets10.lottiefiles.com/packages/lf20_ddz8yrig.json"
                    style={{ height: '800px', width: '800px' }}
                    >
                    </Player>
                </Col>
                <Col span={12}>
                    <h1 style={{ textAlign: 'center', marginTop: '22rem', fontSize: 20, fontFamily: "Roboto" , marginRight: "2rem",marginLeft: "2rem"}}>We provide you with a feature rich text editor with lecture related web suggestions which lets you take notes on the go</h1>
                    <p style={{ textAlign: 'center', fontSize: 15, fontFamily: "Roboto", marginRight: "2rem",marginLeft: "2rem" }}>Get all the classes you’ve registered for just by signing into our platform using Google.</p>
                </Col>
            </Row>
        </div>
        <div style={{position: 'absolute',zIndex:10, marginTop:'90rem'}}>
            <Row>
                <Col span={12}>
                    <h1 style={{ textAlign: 'center', marginTop: '25rem', fontSize: 20, fontFamily: "Roboto" , marginRight: "2rem",marginLeft: "2rem"}}>Our Platform features an AI based Search using Algolia</h1>
                    <p style={{ textAlign: 'center', fontSize: 15, fontFamily: "Roboto", marginRight: "2rem",marginLeft: "2rem" }}>The AI based search checks for all notes across the platform which are  closely related to the search query.  </p>
                </Col>
                <Col span={12}>
                <Player
                    autoplay
                    loop
                    src="https://assets3.lottiefiles.com/packages/lf20_ftlw1wbu.json"
                    style={{ height: '800px', width: '800px' }}
                    >
                    </Player>
                </Col>
            </Row>
        </div>
            
            

        </div>
    )
}

export default Landing
