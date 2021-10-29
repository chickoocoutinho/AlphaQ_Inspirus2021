import React, { Component } from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import {withRouter} from 'react-router-dom'
import "./NavBar.css"
import MainIcon from '../assets/Classroom_Buddy.svg';
import GoogleLoginComponents from './GoogleLoginComponents';
class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false,
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };
  logout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_details");
    this.props.history.push("/");
  }
  
  onClick = (link) => {
    this.props.history.push(link)
  }
render() {
    return (
        <nav className="menuBar">
          <div className="logo">
            <Row>
              <Col span={12}>
              <img src={MainIcon} width="60px" alt="" />
              </Col>
              <Col span={12}>
              <h1 style={{ fontSize: '1.2rem', marginTop:'0.3rem'}}>ClassBuddy</h1>
              </Col>
            </Row>
          </div>
          <div className="buttons">
          <Row justify="end">
            {localStorage.getItem("user_details")&&<Col span={8}><Button size="large" onClick={() => this.onClick("/courses")}>
              Courses
            </Button></Col>}
            {localStorage.getItem("user_details")&&<Col span={8}><Button size="large" onClick={()=>this.onClick("/notes")}>
              All Notes
            </Button></Col>}
            <Col span={8}>
              <GoogleLoginComponents/>
           </Col>
          </Row>
          </div>
         
        </nav>
    );
  }
}
export default withRouter(Navbar);