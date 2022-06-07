import "./App.css";
import { Grommet } from "grommet";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Pages } from "../src/Components/Pages/Pages";

function App() {
  return (
    <Grommet>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Grommet>
  );
}

export default App;
