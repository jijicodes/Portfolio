import React from "react";
import { Anchor, Nav } from "grommet";

export const HeaderNav = () => {
  return (
    <Nav direction="row" pad="medium" justify="center">
      <Anchor color="#524127" href="home" label="home" />
      <Anchor color="#524127" href="me" label="me" />
      <Anchor color="#524127" href="portfolio" label="portfolio" />
      <Anchor color="#524127" href="resume" label="resume" />
    </Nav>
  );
};
