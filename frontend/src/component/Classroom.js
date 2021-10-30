import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Skeleton, Card } from "antd";
import Select from "react-select";
import { Row, Col } from "antd";

import { getData } from "../store/courseData";

var myImgLinks = [
  "https://i.ibb.co/Ry9V0tR/anamnesis33-pj-X8-VSNo2-Ts-unsplash.jpg",
  "https://i.ibb.co/RjD1S2Z/faraz-arshad-hj-Ydr-Ujo7-JY-unsplash.jpg",
  "https://i.ibb.co/pZvz41G/ospan-ali-V-77-Fxf-Ge-QU-unsplash.jpg",
  "https://i.ibb.co/hmSWWrp/patrick-fore-M1-Vo1-MFMv-XI-unsplash.jpg",
  "https://i.ibb.co/xSyVptB/raimond-klavins-Afm-By-Tk-HK-Q-unsplash.jpg",
  "https://i.ibb.co/PM2Xxp9/raimond-klavins-Ql6-Jh-Gdb-Qg0-unsplash.jpg",
  "https://i.ibb.co/RQnm2j1/ransel-yoho-arkg-Tj3-XJq-A-unsplash.jpg",
  "https://i.ibb.co/bvvvx8h/s-o-c-i-a-l-c-u-t-g-REi-9t-I5-Mg-unsplash.jpg",
];
const { Meta } = Card;
const Classroom = () => {
  const [courses, setCourses] = useState([]);
  const [courseResources, setCoursesResources] = useState({});
  const [selectedCourse, setSelectedCourse] = useState({
    value: 0,
    label: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const courseNames = useSelector((state) => state.courseData.courseNames);
  const courseData = useSelector((state) => state.courseData.courseResources);

  useEffect(() => {
    console.log(courseNames, courseData);
    if (courseNames.length === 0) dispatch(getData());
    else {
      setCourses(courseNames);
      setCoursesResources(courseData);
      setSelectedCourse({
        value: courseNames[0].id,
        label: courseNames[0].name,
      });
    }
  }, [courseNames, courseData, dispatch]);

  const handleSelectChange = ({ value, label }) => {
    setSelectedCourse({ value, label });
  };

  const redirectLecture = (id, title) => {
    history.push("/courses/" + title + "/" + id + "/" + selectedCourse.value);
  };

  return (
    <div style={{ maxWidth: "60%", marginLeft: "24rem" }}>
      <Select
        isLoading={courses.length === 0}
        value={selectedCourse}
        options={courses.map((element) => ({
          value: element.id,
          label: element.name,
        }))}
        onChange={handleSelectChange}
      />
      <br />
      <h1 style={{ textAlign: "center" }}>Lectures for the Course:</h1>
      <div style={{ marginTop: "2rem", marginLeft: "8.5%" }}>
        <Row gutter={[24, 16]}>
          {Array.isArray(courseResources[selectedCourse.value]) ? (
            courseResources[selectedCourse.value].map((element) => (
              <Col span={8}>
                <Card
                  key={element.id}
                  hoverable
                  style={{ width: 240, marginBottom: "2rem" }}
                  cover={
                    <img
                      alt="example"
                      src={
                        myImgLinks[
                          Math.floor(Math.random() * myImgLinks.length)
                        ]
                      }
                    />
                  }
                  onClick={() => redirectLecture(element.id, element.title)}
                >
                  {/* <Button
                type="primary"
                onClick={() => redirectLecture(element.id, element.title)}
              >
                GO TO LECTURE
              </Button> */}

                  {/* <pre>{JSON.stringify(element.title, null, 2)}</pre> */}
                  {element.title}
                </Card>
              </Col>
            ))
          ) : (
            <>
              <Col span={8}>
                <Card style={{ width: 300, marginTop: 16 }}>
                  <Skeleton avatar active>
                    <Meta
                      title="Card title"
                      description="This is the description"
                    />
                  </Skeleton>
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ width: 300, marginTop: 16 }}>
                  <Skeleton avatar active>
                    <Meta
                      title="Card title"
                      description="This is the description"
                    />
                  </Skeleton>
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ width: 300, marginTop: 16 }}>
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
  );
};

export default Classroom;
