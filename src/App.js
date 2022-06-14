import "./App.css";
import { Grommet, grommet } from "grommet";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Pages } from "../src/Components/Pages/Pages";
import { hpe } from "grommet-theme-hpe";

function App() {
  const customTheme = {
    text: {
      extend: "line-height:2.1rem",
    },
    paragraph: {
      extend: "color:#222205",
      font: {
        family: "arial, sans-serif",
      },
    },
  };
  return (
    <Grommet theme={customTheme}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
