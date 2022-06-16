import React, { useContext } from "react";
import { Box, Text, Anchor, ResponsiveContext } from "grommet";
import "./Pages.css";
import { BrowserRouter, Routes, Route, useMatch } from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage";
import { Me } from "../Me/Me";
import { Portfolio } from "../Portfolio/Portfolio";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { Resume } from "../Resume/Resume";

export const Pages = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  const landingPageMatch = !!useMatch("");
  return (
    <Box fill>
      <HeaderNav />
      <Box
        style={{ minHeight: "auto" }}
        align="center"
        {...(landingPageMatch ? { fill: true } : {})}
      >
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="me" element={<Me />}></Route>
          <Route path="portfolio" element={<Portfolio />}></Route>
          <Route path="resume" element={<Resume />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};
