import React from "react";
import ResumeFile from "../assets/ResumeFile.pdf#FitV";

export default function resumeFile() {
  return (
    <div className="flex flex-col bg-black ">
      <div className="res">
        <h2 className="heading">Resume</h2>
        <iframe
          src={ResumeFile}
          height="800"
          width="900"
          style={{ margin: 190 }}
        ></iframe>
      </div>
    </div>
  );
}
