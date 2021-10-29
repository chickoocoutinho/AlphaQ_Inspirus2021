import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = () => {
  const quill = useRef(null);
  const quillImage = useRef(null);
  const [value, setValue] = useState("");

  return (
    <>
      <button onClick={() => console.log(quill.current)}>Button</button>
      <pre>{JSON.stringify(value, null, 2)}</pre>
      <div style={{ paddingBottom: 500 }}>
        <ReactQuill
          theme="snow"
          ref={quill}
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default QuillEditor;
