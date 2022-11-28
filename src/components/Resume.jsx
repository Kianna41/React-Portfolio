import React from "react";
import ResumeFile from "/Users/kiannna/Desktop/GT-Bootcamp/Homework/react-portfolio/src/assets/ResumeFile.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudfare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function resumeFile() {
  return (
    <div className="flex flex-col bg-black ">
      <div className="res">
        <h2 className="heading">Resume</h2>
        <Document
          file={ResumeFile}
          onLoadError={console.error}
          style={{ width: "100vw", height: "auto" }}
        >
          <Page pageIndex={0} />
        </Document>
      </div>
    </div>
  );
}
