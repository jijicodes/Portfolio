import React, { useContext } from "react";
import { Box, Anchor, Nav, ResponsiveContext, Menu } from "grommet";
import { Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon } from "grommet-icons";

export const HeaderNav = () => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  return isSmall ? (
    <Box height="10vh">
      <Menu
        icon={<MenuIcon />}
        alignSelf="end"
        dropBackground="#fceed1"
        dropAlign={{ left: "left", top: "bottom" }}
        items={[
          {
            label: "Home",
            onClick: () => navigate("/"),
          },
          {
            label: "Me",
            onClick: () => navigate("/me"),
          },
          { label: "Portfolio", onClick: () => navigate("/portfolio") },
          { label: "Resume", onClick: () => navigate("/resume") },
        ]}
      />
    </Box>
  ) : (
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
