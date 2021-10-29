import QuillEditor from "../component/QuillEditor";
import ScrapUI from "../component/ScrapUI";
import { Row, Col, Space } from 'antd';
import { Menu } from 'antd';

function Editor() {
  const state = {
    current: 'mail',
  };

  const handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  return (
    <div style={{ marginLeft: '3rem',marginRight: '3rem',marginTop: '5rem'}}>
      <Row justify="center" align="top" gutter={[32, 16]}>
      <Col span={12}><QuillEditor /></Col>
      <Col span={12}><ScrapUI /></Col>
    </Row>
    <div style={{ marginTop: '1rem'}}>
    <Menu onClick={handleClick}  mode="horizontal">
        <Menu.Item key="mail" >
          Mind Maps
        </Menu.Item>
        <Menu.Item key="mail" >
          Flowcharts
        </Menu.Item>
        <Menu.Item key="mail" >
          Render
        </Menu.Item>
        <Menu.Item key="mail" >
          PDF 
        </Menu.Item>
      </Menu>
    </div>
    <iframe id="theFrame" src="https://zh.1lib.in/book/2079252/21276b" width='100%' height='600' >
    </iframe>
    </div>
  );
}

export default Editor;
