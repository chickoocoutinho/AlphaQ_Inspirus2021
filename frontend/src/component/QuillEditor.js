import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import baseUrl from "../baseURL";
import { Button } from "antd";
import jsPDF from "jspdf";

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
          if (response.data.exits) setValue(response.data.note);
        });
    }
  }, [searchData, lectureId]);

  const handleSave = () => {
    console.log("sdfbhsd");
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

  const handlePDFDownload = () => {
    var doc = new jsPDF();
    doc.setFontSize(10);
    doc.html(value, {
      callback: function (doc) {
        doc.setFontSize(10).save();
      },
      width: 180,
      windowWidth: 180,
      autoPaging: true,
      x: 10,
      y: 20,
    });
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
        <div>
          <Button
            type="primary"
            onClick={handleSave}
            style={{ marginRight: "1rem" }}
          >
            Save
          </Button>
          <Button onClick={handlePDFDownload}>Download</Button>
        </div>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "calc(100vh - 435px)" }}
      />
    </>
  );
};

export default QuillEditor;
