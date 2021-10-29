import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import baseUrl from "../baseURL";

const QuillEditor = ({ title, lectureId, courseId, searchData }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (searchData) setValue(searchData);
    else {
      axios
        .get(
          baseUrl +
            "algolia?user_id=" +
            localStorage.getItem("user_details") +
            "&lecture_id=" +
            lectureId
        )
        .then((response) => {
          if (response.data.exists) setValue(response.data.note);
        });
    }
  }, [searchData, lectureId]);

  const handleSave = () => {
    axios
      .post(baseUrl + "algolia", {
        user_id: localStorage.getItem("user_details"),
        lecture_id: lectureId,
        lecture_name: title,
        course_id: courseId,
        html: value,
      })
      .then((response) => console.log(response));
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Quil Editor</h1>
        <button onClick={handleSave}>SAVE</button>
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
