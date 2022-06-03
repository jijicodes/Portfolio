import React, { useContext } from "react";
import "./LandingPage.css";
import { Reactjs } from "grommet-icons";
import { Box, Text, ResponsiveContext, Paragraph, Anchor } from "grommet";
export const LandingPage = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box className="landingBackground">
      {size === "small" ? (
        <Box></Box>
      ) : (
        <Box
          className="greetingMsg"
          justify="center"
          align="center"
          background="rgba(236, 228, 224,0.5)"
          fill
        >
          <Box pad="small">
            <Text className="typeWriter" size="45px">
              Hello, I'm Jieun Seo.
            </Text>
          </Box>
          <Text size="19px">
            I used to teach little kids in pre-school. <br></br> Now I am on my
            journey of becoming a better programmer everyday.<br></br>
            <Anchor>#frontend </Anchor>
            <Anchor>#developer</Anchor>
            <Anchor>#reactJS</Anchor>
            <Anchor> #denver</Anchor>
          </Text>
        </Box>
      )}
    </Box>
  );
};
