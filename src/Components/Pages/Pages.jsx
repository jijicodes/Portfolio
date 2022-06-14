import React from "react";
import { Box, Text, Anchor } from "grommet";
import "./Pages.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../LandingPage/LandingPage";
import { Me } from "../Me/Me";
import { Portfolio } from "../Portfolio/Portfolio";
import { HeaderNav } from "../HeaderNav/HeaderNav";
import { Resume } from "../Resume/Resume";

export const Pages = () => {
  return (
    <Box className="pagesBackground">
      <Box background="rgba(236, 228, 224,0.5)" fill>
        <HeaderNav />
        <Box fill align="center">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="me" element={<Me />}></Route>
            <Route path="portfolio" element={<Portfolio />}></Route>
            <Route path="resume" element={<Resume />}></Route>
          </Routes>
        </Box>
        <Box align="center" pad="small">
          {" "}
          <Text>
            2022 | Designed & Coded with ❤️ by{" "}
            <Anchor
              href="https://github.com/jijicodes"
              target="_blank"
              label="Jieun"
              color="black"
            />{" "}
            (aka Jenna)
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
