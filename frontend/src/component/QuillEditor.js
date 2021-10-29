import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import baseUrl from "../baseURL";
import { Button } from "antd";

const QuillEditor = ({ title, lectureId, courseId, searchData }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (searchData) setValue(searchData);
    else {
      axios
        .get(
          baseUrl +
            "algolia?user_id=" +
            localStorage.getItem("user_id") +
            "&lecture_id=" +
            lectureId
        )
        .then((response) => {
          if (response.data.exists) setValue(response.data.note);
        });
    }
  }, [searchData, lectureId]);

  const handleSave = () => {
    console.log("sdfbhsd")
    axios
      .post(baseUrl + "algolia", {
        user_id: localStorage.getItem("user_id"),
        lecture_id: lectureId,
        lecture_name: title,
        course_id: courseId,
        html: value,
      })
      .then((response) => console.log(response));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Notes Editor</h1>
        <Button type="primary" onClick={handleSave}>
          SAVE
        </Button>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "calc(100vh - 100px)" }}
      />
    </>
  );
};

export default QuillEditor;
