import React, { useContext } from "react";
import "./LandingPage.css";
import { Github, Linkedin, Compliance } from "grommet-icons";
import { Box, Text, ResponsiveContext, Anchor } from "grommet";

export const LandingPage = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";

  return (
    <Box fill>
      <Box
        className="greetingMsg"
        direction="column"
        align="center"
        justify="center"
        gap="medium"
        fill
      >
        {isSmall ? (
          <Text className="small" size="25px" textAlign="center">
            Hello,
            <br /> I'm Jieun Seo
          </Text>
        ) : (
          <Text className="typeWriter" size="45px">
            Hello, I'm Jieun Seo.
          </Text>
        )}
        {isSmall ? (
          <></>
        ) : (
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
        )}

        <Text
          size={isSmall ? "15px" : "19px"}
          textAlign="center"
          color="#524127"
          weight="bold"
        >
          Thank you for checking my portfolio app<br></br> I built my app
          written in <span style={{ color: "#1859E6" }}>React JS </span>
          <br></br>with
          <span style={{ color: "purple" }}> Grommet library </span>
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
      <Box
        // height={isSmall ? "10vh" : "3rem"}
        align="center"
        // pad={isSmall ? "large" : undefined}
      >
        <Text size={isSmall ? "xsmall" : "medium"}>
          2022 | Designed &amp; Coded with ❤️ by
          <Anchor
            href="https://github.com/jijicodes"
            target="_blank"
            label="Jieun"
            color="black"
          />
          (aka Jenna)
        </Text>
      </Box>
    </Box>
  );
};
