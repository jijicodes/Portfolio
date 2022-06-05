import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Anchor, Nav as GrommetNav } from "grommet";
import "./Nav.css";

export const Nav = () => {
  return (
    <Box className="navAnchor">
      <GrommetNav direction="row" pad="medium">
        <Anchor href="me" label="me" />
        <Anchor href="portfolio" label="portfolio" />
        <Anchor href="resume" label="resume" />
      </GrommetNav>
    </Box>
  );
};
