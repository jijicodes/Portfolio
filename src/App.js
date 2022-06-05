import { LandingPage } from "../src/Components/LandingPage/LandingPage";
import "./App.css";
import { Grommet, Box, Nav, Anchor } from "grommet";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Components/Routes/Routes";

function App() {
  return (
    <Grommet>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
