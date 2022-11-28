import React from "react";
import Card from "./Card";
const projects = [
  { githubLink: "https://github.com/Kianna41/PWA-Text-Editor" },
  { githubLink: "https://github.com/Kianna41/Note-Taker" },
  { githubLink: "https://github.com/Kianna41/Team-Profile-Generator-" },
  { githubLink: "https://github.com/Kianna41/Employee-Tracker" },
  { githubLink: "https://github.com/Kianna41/Social-Network-API" },
  {
    githubLink:
      "https://github.com/Kianna41/Server-Side-APIs-Weather-Dashboard",
  },
];
export default function Projects() {
  return (
    <div class="grid grid-cols-3 gap-5 bg-black">
      {projects.map(function (project) {
        return <Card {...project} />;
      })}
    </div>
  );
}
