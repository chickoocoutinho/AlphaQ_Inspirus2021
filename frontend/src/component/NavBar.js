import React, { Component } from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import "./NavBar.css"
import MainIcon from '../assets/Classroom_Buddy.svg';
class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
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
          <Row >
            <Col span={8}><Button size="large">
              Courses
            </Button></Col>
            <Col span={8}><Button size="large">
              All Notes
            </Button></Col>
            <Col span={8}><Button type="primary" size="large">
             Login
           </Button></Col>
          </Row>
          </div>
         
        </nav>
    );
  }
}
export default Navbar;