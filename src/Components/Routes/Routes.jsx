import React from "react";
import { LandingPage } from "../LandingPage/LandingPage";
import { Me } from "../Me/Me";
import { Routes as ReactRoutes, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/me" element={<Me />} />
      {/* <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} /> */}
    </ReactRoutes>
  );
};
