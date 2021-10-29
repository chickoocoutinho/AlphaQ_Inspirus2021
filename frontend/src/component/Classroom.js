import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Card, Button } from "antd";
import Select from "react-select";

import { updateCourseNames, setCourseResources } from "../store/courseData";

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
    <>
      {courses.length === 0 && <h1>GLOBAL LOADING</h1>}
      <Select
        isLoading={courses.length === 0}
        value={selectedCourse}
        options={courses.map((element) => ({
          value: element.id,
          label: element.name,
        }))}
        onChange={handleSelectChange}
      />
      <div>
        {Array.isArray(courseResources[selectedCourse.value]) ? (
          courseResources[selectedCourse.value].map((element) => (
            <Card key={element.id}>
              <Button
                type="primary"
                onClick={() => redirectLecture(element.id, element.title)}
              >
                GO TO LECTURE
              </Button>

              <pre>{JSON.stringify(element, null, 2)}</pre>
            </Card>
          ))
        ) : (
          <h1>LOADING</h1>
        )}
      </div>
    </>
  );
};

export default Classroom;
