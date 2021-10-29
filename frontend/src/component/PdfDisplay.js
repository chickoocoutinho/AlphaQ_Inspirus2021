import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import PDFObject from "pdfobject";
import { Spin } from "antd";

const PdfDisplay = () => {
  const containerRef = useRef(null);
  const pdfUrl = useSelector((state) => state.courseData.pdfUrl);

  useEffect(() => {
    PDFObject.embed(pdfUrl, containerRef.current);
  }, [pdfUrl]);

  return (
    <>
      {pdfUrl ? (
        <div
          ref={containerRef}
          style={{
            height: 600,
            width: "100%",
            backgroundColor: "#f1f1f1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin size="large" />
        </div>
      ) : (
        <p>NO PDF</p>
      )}
    </>
  );
};

export default PdfDisplay;
