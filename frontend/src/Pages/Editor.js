import QuillEditor from "../component/QuillEditor";
import ScrapUI from "../component/ScrapUI";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import baseUrl from "../baseURL";
import DataDisplay from "../component/DataDisplay";
const DEFAULT_MENU = "Reference";

function Editor() {
  let { title, lectureId, courseId } = useParams();
  const [lectureMaterial, setLectureMaterial] = useState([]);
  const [lectureBooks, setLectureBooks] = useState([]);
  const [lectureProjects, setLectureProjects] = useState([]);
  const [lecturePapers, setLecturePapers] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(DEFAULT_MENU);

  const courseData = useSelector((state) => state.courseData.courseResources);

  useEffect(() => {
    let courseIndex = courseData[courseId].findIndex(
      (element) => element.id === lectureId
    );
    let courseMaterial = courseData[courseId][courseIndex];
    setLectureMaterial(courseMaterial.materials);
    console.log(baseUrl);
    axios
      .get(baseUrl + "scrapper?q=" + courseMaterial.title)
      .then((response) => {
        setLectureBooks(response.data.books);
        setLectureProjects(response.data.projects);
        setLecturePapers(response.data.papers);
      });
  }, [courseData, lectureId, courseId]);

  const displayIframe = () => {
    setSelectedMenu("Reference");
  };

  return (
    <>
      <div
        style={{
          padding: "0 3rem",
          marginTop: "2rem",
        }}
      >
        <Row
          justify="center"
          align="top"
          gutter={[32, 16]}
          style={{ minHeight: "100vh" }}
        >
          <Col span={12}>
            <QuillEditor
              lectureId={lectureId}
              courseId={courseId}
              searchData={null}
              title={title}
            />
          </Col>
          <Col span={12}>
            <ScrapUI
              books={lectureBooks}
              projects={lectureProjects}
              papers={lecturePapers}
              references={lectureMaterial}
              displayIframe={displayIframe}
            />
          </Col>
        </Row>
      </div>
      <DataDisplay
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
    </>
  );
}

export default Editor;
