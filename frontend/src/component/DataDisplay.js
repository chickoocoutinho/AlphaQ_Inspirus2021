import IframeDisplay from "./IframeDisplay";
import { Menu, Divider } from "antd";

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

      default:
        return (
          <div style={{ padding: "auto 3rem" }}>
            <IframeDisplay />
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: 500 }}>
      <Divider />
      <div
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 3rem 0 3rem",
          backgroundColor: "#f1f1f1",
        }}
      >
        <Menu
          selectedKeys={[selectedMenu]}
          onClick={handleClick}
          mode="horizontal"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <Menu.Item key="Reference">Document</Menu.Item>
          <Menu.Item key="Mind_Maps">Mind Maps</Menu.Item>
        </Menu>
      </div>
      {display()}
    </div>
  );
};

export default DataDisplay;
