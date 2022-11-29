import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Font from "./.src/fonts/Quicksand.ttf";
import Resume from "./components/Resume";

function App() {
  const [page, setPage] = useState("about");
  return (
    <div className="App">
      <Header setPage={setPage} />
      <Banner></Banner>
      {page == "resume" && <Resume></Resume>}
      {page == "about" && <AboutMe></AboutMe>}
      {page == "portfolio" && <Projects></Projects>}
      {page == "contact" && <Contact></Contact>}
      <Footer></Footer>
    </div>
  );
}

export default App;
