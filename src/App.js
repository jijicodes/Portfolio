import { LandingPage } from "../src/Components/LandingPage/LandingPage";
import "./App.css";
import { Grommet, Box, Nav, Anchor } from "grommet";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Grommet>
      {/* <Link to="/">Me</Link> | <Link to="/portfolio">Portfolio</Link> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      <LandingPage />
    </Grommet>
  );
}

export default App;
