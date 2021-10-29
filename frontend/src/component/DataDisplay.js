import IframeDisplay from "./IframeDisplay";
import { Menu } from "antd";

import MindMap from "./MindMap";

const DataDisplay = ({ selectedMenu, setSelectedMenu }) => {
  const handleClick = (e) => {
    console.log(e.key);
    setSelectedMenu(e.key);
  };

  const display = () => {
    switch (selectedMenu) {
      case "Mind_Maps":
        return <MindMap />;
      case "Flow_Charts":
        return <h1>FLOW CHART WILL GO HERE</h1>;
      default:
        return <IframeDisplay />;
    }
  };

  return (
    <div style={{ marginTop: "1rem", minHeight: 500 }}>
      <Menu
        style={{ marginBottom: "1rem" }}
        selectedKeys={[selectedMenu]}
        onClick={handleClick}
        mode="horizontal"
      >
        <Menu.Item key="Reference">Document</Menu.Item>
        <Menu.Item key="Mind_Maps">Mind Maps</Menu.Item>
        <Menu.Item key="Flow_Charts">Flowcharts</Menu.Item>
      </Menu>
      {display()}
    </div>
  );
};

export default DataDisplay;
