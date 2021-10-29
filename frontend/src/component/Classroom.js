import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Skeleton, Card, Button } from "antd";
import Select from "react-select";
import { Row, Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


import { updateCourseNames, setCourseResources } from "../store/courseData";

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

  useEffect(() => {
    window.gapi?.client?.classroom?.courses
      .list({
        pageSize: 10,
      })
      .then((response) => {
        setCourses(response.result.courses);
        setSelectedCourse({
          value: response.result.courses[0].id,
          label: response.result.courses[0].name,
        });
        dispatch(updateCourseNames({ data: response.result.courses }));
      });
  }, [dispatch]);

  useEffect(() => {
    if (
      typeof courseResources[selectedCourse.value] === "undefined" &&
      window?.gapi?.client
    )
      window.gapi.client.classroom.courses.courseWorkMaterials
        .list({
          courseId: selectedCourse.value,
        })
        .then((response) => {
          setCoursesResources((prevState) => ({
            ...prevState,
            [selectedCourse.value]: response.result.courseWorkMaterial,
          }));
          dispatch(
            setCourseResources({
              data: response.result.courseWorkMaterial,
              courseId: selectedCourse.value,
            })
          );
        });
  }, [selectedCourse, courseResources, dispatch]);

  const handleSelectChange = ({ value, label }) => {
    setSelectedCourse({ value, label });
  };

  const redirectLecture = (id, title) => {
    history.push("/courses/" + title + "/" + id + "/" + selectedCourse.value);
  };

  return (
    <div style={{ maxWidth: '60%', marginLeft:"24rem"}}>
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
      <h1 style={{textAlign: 'center'}}>Lectures for the Course:</h1>
      <div style={{marginTop: '2rem', marginLeft: '8.5%'}}>
      
      <Row gutter={[24, 16]}>
                {Array.isArray(courseResources[selectedCourse.value]) ? (
          courseResources[selectedCourse.value].map((element) => (
            <Col span={8}>
            <Card key={element.id} hoverable
            style={{ width: 240, marginBottom: "2rem" }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            onClick={() => redirectLecture(element.id, element.title)}>
              
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
            <Card
          style={{ width: 300, marginTop: 16 }}>
          <Skeleton avatar active>
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
            </Col>
            <Col span={8}>
            <Card
          style={{ width: 300, marginTop: 16 }}>
          <Skeleton avatar active>
            <Meta
              title="Card title"
              description="This is the description"
            />
          </Skeleton>
        </Card>
            </Col>
            <Col span={8}>
            <Card
          style={{ width: 300, marginTop: 16 }}>
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
