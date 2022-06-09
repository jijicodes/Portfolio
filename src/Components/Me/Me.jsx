import React, { useContext } from "react";
import { Mail, Map, Copy, Phone } from "grommet-icons";
import "./Me.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Box, Paragraph, Text, Image } from "grommet";

export const Me = () => {
  return (
    <Box className="meBody" justify="start" fill>
      <Box pad="medium" className="title" align="center">
        About Me
      </Box>
      <Box direction="row" gap="small" justify="center">
        <Box width="25%">
          <Image
            fit="cover"
            src={`${process.env.PUBLIC_URL}/Images/seoul.jpg`}
          />
        </Box>
        <Box width="25%" direction="column">
          <Text>
            Hi, I am Jieun Seo. <br></br>I used to teach little kids in
            pre-school.<br></br> Now I am on my journey of becoming a better
            programmer everyday as a self-taught React Developer. <br></br>I
            have been working on
            mostfjslfjklasdjfklasdjfklajfkljlkasfjsflkajlfkjsdlkfj
            sdjflasjfksldajfjlskdjflskjflkas jflksjflksj I speak English 🇺🇸 -
            Korean 🇰🇷 - and Japanese 🇯🇵 I love building frontend apps
          </Text>
          <Box pad="small">
            <Box className="title">Contact Detail</Box>
            <Box direction="row" gap="small">
              <Map />
              <Text>Denver</Text>
            </Box>
            <Box direction="row" gap="small">
              <Mail />
              <Text>sjieun1@gmail.com</Text>
              <Copy size="small" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
