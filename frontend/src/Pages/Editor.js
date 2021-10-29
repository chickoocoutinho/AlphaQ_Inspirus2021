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
    </div>
  );
}

export default Editor;
