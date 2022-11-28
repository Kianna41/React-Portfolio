import React from "react";

export default function Header({ setPage }) {
  return (
    <div>
      <nav class="container-fluid flex w-screen h-12 sm:grid sm:grid-cols-1 bg-black sm:flex">
        <div class="navbar">
          <button
            className="navList hover:bg-amber-500"
            onClick={() => setPage("home")}
          >
            {" "}
            Home
          </button>
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
