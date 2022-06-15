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

export const Me = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  const [copied, setCopied] = useState("copy");
  return (
    <Box background="#FBFBDE">
      <Box gap="large" pad={{ bottom: "large" }} width="80vw">
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
            height={isSmall ? "50vh " : "50%"}
          >
            <Image
              fit="cover"
              src={`${process.env.PUBLIC_URL}/Images/seoul.jpg`}
            />
            <Text size="xsmall" alignSelf="center" truncate>
              ⬆️ Picture of Seoul, South Korea
            </Text>
          </Box>
          <Box direction="column" pad={isSmall ? "small" : "none"}>
            <Paragraph margin="none">
              <Text weight="bold" size={isSmall ? "small" : "medium"}>
                Hi👋 my name is <b>Jieun Seo</b> (aka Jenna). <br />I used to
                teach kids in pre-school 🍎👩‍🏫
                <br /> Now I am currently 2 years into my coding journey
                everyday getting a little bit better and studying a little bit
                more 👩‍💻
              </Text>
            </Paragraph>
            <Paragraph>
              <Text weight="bold" size={isSmall ? "small" : "medium"}>
                I have experience creating apps mainly using JavaScript and
                React but also TypeScript and using a bunch of different
                libraries for different things building UIs, routing, and APIs
                ⚛️
              </Text>
            </Paragraph>
            <Paragraph>
              <Text color="#d04764" size="large" weight="bolder">
                ✨Fun Fact About Me✨
              </Text>
              <Text weight="bold" size={isSmall ? "small" : "medium"}>
                <br />I moved to the US 🇺🇸 at the age of 16 without knowing any
                English and eventually got a bachelors degree from UNLV in 2019
                👩🏻‍🎓 <br />
                Then I started studying programming, now I build React apps
                daily 💻 📱
                <br /> Also, I speak English 🇺🇸 - Korean 🇰🇷 - and Japanese 🇯🇵
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
      </Box>{" "}
    </Box>
  );
};
