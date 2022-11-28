import React from "react";
import AboutMePic from "../assets/AboutMe.jpg";
export default function AboutMe() {
  return (
    <div>
      <div className="flex flex-col bg-black ">
        <div className="m-1 h-full col-span-3 grid grid-rows-1 gap-2  sm:grid-cols-1 ">
          <div className="grid grid-cols-1 bg-black pl-64 items-center gap-20 content-center">
            <div className="aboutSection card p-5 border-amber-500">
              <div className="aboutTitle">ABOUT ME...</div>
              Hi! I am Kianna Reid, a current Software Engineer Immersive
              student at Georgia Tech University. I am also a graduate of
              Georgia Southern University where I received a Bachelors Degree in
              Biology. My eclectic background, filled with data analytics, skill
              in collaboratively working with peers, and creating my own
              start-up supports my belief that I can excel at whatever I put my
              focus on. I am looking forward to serve in a position that
              provides software engineering experience and I am always open to
              challenging endeavors and new experiences.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
