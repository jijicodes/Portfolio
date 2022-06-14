import React, { useState } from "react";
import "./Me.css";
import { Mail } from "grommet-icons";
import copy from "copy-to-clipboard";
import { Box, Button, Paragraph, Image, Text, Anchor } from "grommet";

export const Me = () => {
  const [copied, setCopied] = useState("copy");
  return (
    <Box background="#FBFBDE" justify="start" gap="large">
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
          </Paragraph>{" "}
          <Box direction="column" align="center">
            <Box direction="row" align="center" gap="small">
              <Mail />
              <Text>sjieun11@gmail.com</Text>
              <Button
                primary
                color="#524127"
                size="small"
                label={copied}
                onClick={() => {
                  setCopied(() => "copied!");
                  copy("sjieun11@gmail.com");
                }}
              />
            </Box>
            <Box>
              <Anchor color="#524127" href="mailto:sjieun11@gmail.com">
                Send email
              </Anchor>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
