import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
};

export default QuillEditor;
