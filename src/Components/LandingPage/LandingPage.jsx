import React, { useContext } from "react";
import "./LandingPage.css";
import { Reactjs, Github, Linkedin, Compliance } from "grommet-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Text,
  ResponsiveContext,
  Paragraph,
  Anchor,
} from "grommet";
import { Nav } from "../Nav/Nav";

export const LandingPage = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box className="landingBackground">
      {size === "small" ? (
        <Box></Box>
      ) : (
        <Box
          className="greetingMsg"
          background="rgba(236, 228, 224,0.5)"
          justify="between"
          align="center"
          fill
        >
          <Nav />
          <Box pad="small" gap="small">
            <Text className="typeWriter" size="45px">
              Hello, I'm Jieun Seo.
            </Text>
            <Box
              pad="small"
              gap="small"
              direction="row"
              align="center"
              justify="center"
            >
              <Compliance color="black" />
              <Anchor color="black">frontend</Anchor>
              <Anchor color="black">developer</Anchor>
              <Anchor color="black">reactJS</Anchor>
            </Box>
            <Text size="19px" color="#524127" weight="bold">
              I used to teach little kids in pre-school. <br></br> Now I am on
              my journey of becoming a better programmer everyday.<br></br>{" "}
            </Text>

            <Box direction="row" justify="center" align="center" gap="medium">
              <Anchor href="https://github.com/jijicodes" target="_blank">
                <Github color="#423c22" size="30px" />
              </Anchor>
              <Anchor
                href="https://www.linkedin.com/in/jennacodes/"
                target="_blank"
              >
                <Linkedin color="#423c22" size="27px" />
              </Anchor>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      )}
    </Box>
  );
};
