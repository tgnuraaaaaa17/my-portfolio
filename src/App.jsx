import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Contact />
      <footer className="footer">
        <p>© {new Date().getFullYear()} — Made with React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;
