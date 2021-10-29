import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const QuillEditor = () => {
  const [value, setValue] = useState("");
  

  return (
    <>
      <h1>Quil Editor</h1>
      <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: '48.5vh'}} />
      
    </>
  );
};

export default QuillEditor;
