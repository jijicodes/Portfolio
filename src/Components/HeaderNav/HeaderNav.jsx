import React from "react";
import { Anchor, Nav } from "grommet";
import { Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <Nav height="5vh" direction="row" pad="medium" justify="center">
      <Anchor as={Link} color="#524127" href="#" to="/" label="home" />
      <Anchor as={Link} color="#524127" href="#" to="/me" label="me" />
      <Anchor
        as={Link}
        color="#524127"
        href="#"
        to="/portfolio"
        label="portfolio"
      />
      <Anchor as={Link} color="#524127" href="#" to="/resume" label="resume" />
    </Nav>
  );
};
