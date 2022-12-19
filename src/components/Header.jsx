import React from "react";

export default function Header({ setPage }) {
  return (
    <div>
      <nav className="container-fluid flex w-screen h-12 sm:grid sm:grid-cols-1 bg-black sm:flex">
        <div className="navbar">
          <button
            className="navList hover:bg-amber-500"
            onClick={() => setPage("about")}
          >
            About Me{" "}
          </button>
          <button
            className="navList hover:bg-amber-500"
            onClick={() => setPage("portfolio")}
          >
            Portfolio
          </button>
          <button
            className="navList hover:bg-amber-500"
            onClick={() => setPage("contact")}
          >
            Contact Me
          </button>
          <button
            className="navList hover:bg-amber-500"
            onClick={() => setPage("resume")}
          >
            Resume
          </button>
        </div>
      </nav>
    </div>
  );
}
