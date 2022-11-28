import React from "react";
import Project from "../assets/Project.png";

export default function Card({ text, githubLink }) {
  return (
    <div class="m-3 workout-text card bg-amber-400 rounded-none project-card">
      <img src={Project} alt="ProjectPicture" className="project-img"></img>
      <div className="project-text">
        <h3>
          <a href="#">{text}</a>
          <a href="#">{githubLink}</a>
        </h3>
      </div>
    </div>
  );
}

//Use for projects
