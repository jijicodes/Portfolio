import React, { useContext } from "react";
import "./Me.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Box, Paragraph, Image, Text } from "grommet";

export const Me = () => {
  return (
    <Box
      background="#FBFBDE"
      className="meBody"
      justify="start"
      gap="large"
      fill
    >
      <Box pad={{ top: "large" }} className="title" align="center">
        About Me
      </Box>
      <Box direction="row" gap="large" justify="center">
        <Box width="30%" height="50%">
          <Image
            fit="cover"
            src={`${process.env.PUBLIC_URL}/Images/seoul.jpg`}
          />
          <Text alignSelf="center"> ⬆️ Picture of Seoul, South Korea</Text>
        </Box>
        <Box width="35%" direction="column">
          <Paragraph margin="none">
            <Text weight="bold">
              Hi👋 my name is <b>Jieun Seo</b> (aka Jenna). <br />I used to
              teach kids in pre-school 🍎👩‍🏫
              <br /> Now I am currently 2 years into my coding journey everyday
              getting a little bit better and studying a little bit more 👩‍💻{" "}
            </Text>
          </Paragraph>

          <Paragraph>
            <Text weight="bold">
              I have experience creating apps mainly using JavaScript and React
              but also TypeScript and using a bunch of different libraries for
              differnet things building UIs, routing, and APIs ⚛️
            </Text>
          </Paragraph>

          <Paragraph>
            <Text color="#d04764" size="large" weight="bolder">
              ✨Fun Fact About Me✨
            </Text>
            <Text weight="bold">
              <br />I moved to the US 🇺🇸 at the age of 16 without knowing any
              English and eventually got a bachelors degree from UNLV in 2019
              👩🏻‍🎓. <br />
              Then I started studying programming, now I build React apps daily
              💻 📱
              <br /> Also, I speak English 🇺🇸 - Korean 🇰🇷 - and Japanese 🇯🇵
            </Text>
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
};
