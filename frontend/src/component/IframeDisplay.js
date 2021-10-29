import { useSelector } from "react-redux";
import { Empty } from "antd";
const IframeDisplay = () => {
  const iframeUrl = useSelector((state) => state.courseData.iframeUrl);

  return iframeUrl ? (
    <iframe
      title="resource_material"
      id="theFrame"
      src={iframeUrl}
      width="100%"
      height="600"
    />
  ) : (
    <div style={{ marginTop: "5rem" }}>
      <Empty />
    </div>
  );
};

export default IframeDisplay;
