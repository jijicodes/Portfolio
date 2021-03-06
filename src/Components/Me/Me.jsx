import React, { useState, useContext } from "react";
import "./Me.css";
import { Mail } from "grommet-icons";
import copy from "copy-to-clipboard";
import {
  Box,
  Button,
  Paragraph,
  Image,
  Text,
  Anchor,
  ResponsiveContext,
} from "grommet";
import { Footer } from "../Footer/Footer";

export const Me = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  const [copied, setCopied] = useState("copy");
  return (
    <Box>
      <Box align="center" width="80vw">
        <Box background="#FBFBDE" gap="large" pad={{ bottom: "large" }}>
          <Box pad={{ top: "large" }} className="title" align="center">
            About Me
          </Box>
          <Box
            direction={isSmall ? "column" : "row"}
            pad="small"
            gap="large"
            justify="center"
            margin="none"
          >
            <Box
              alignSelf={isSmall ? "center" : "stretch"}
              width={isSmall ? "60vw " : "30%"}
            >
              <Image
                fit="cover"
                src={`${process.env.PUBLIC_URL}/Images/seoul.jpg`}
              />
              <Text size="xsmall" alignSelf="center" truncate>
                â¬ï¸ Picture of Seoul, South Korea
              </Text>
            </Box>
            <Box direction="column" pad={isSmall ? "small" : undefined}>
              <Paragraph margin="none">
                <Text weight="bold" size={isSmall ? "small" : "medium"}>
                  Hið my name is <b>Jieun Seo</b> (aka Jenna). <br />I used to
                  teach kids in pre-school ðð©âð«
                  <br /> Now I am currently 2 years into my coding journey
                  everyday getting a little bit better and studying a little bit
                  more ð©âð»
                </Text>
              </Paragraph>
              <Paragraph>
                <Text weight="bold" size={isSmall ? "small" : "medium"}>
                  I have experience creating apps mainly using JavaScript and
                  React but also TypeScript and using a bunch of different
                  libraries for different things building UIs, routing, and APIs
                  âï¸
                </Text>
              </Paragraph>
              <Paragraph>
                <Text color="#d04764" size="large" weight="bolder">
                  â¨Fun Fact About Meâ¨
                </Text>
                <Text weight="bold" size={isSmall ? "small" : "medium"}>
                  <br />I moved to the US ðºð¸ at the age of 16 without knowing
                  any English and eventually got a bachelors degree from UNLV in
                  2019 ð©ð»âð <br />
                  Then I started studying programming, now I build React apps
                  daily ð» ð±
                  <br /> Also, I speak English ðºð¸ - Korean ð°ð· - and Japanese ð¯ðµ
                </Text>
              </Paragraph>{" "}
              <Box direction="row" justify="center" align="center" gap="small">
                <Mail size={isSmall ? "small" : "medium"} />
                <Anchor
                  size={isSmall ? "small" : "medium"}
                  color="#524127"
                  href="mailto:sjieun11@gmail.com"
                >
                  sjieun11@gmail.com
                </Anchor>
                <Button
                  primary
                  color="#524127"
                  size={isSmall ? "small" : "medium"}
                  label={copied}
                  onClick={() => {
                    setCopied(() => "copied!");
                    copy("sjieun11@gmail.com");
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
