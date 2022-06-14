import React from "react";
import "./LandingPage.css";
import { Github, Linkedin, Compliance } from "grommet-icons";
import { Box, Text, ResponsiveContext, Anchor } from "grommet";

export const LandingPage = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box>
      <Box
        className="greetingMsg"
        direction="column"
        align="center"
        justify="center"
        gap="medium"
        height="100vh"
      >
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
        <Text size="19px" textAlign="center" color="#524127" weight="bold">
          Thank you for checking my portfolio app<br></br> I built my app
          written in React JS with Grommet library
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
    </Box>
  );
};
