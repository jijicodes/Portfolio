import React, { useContext } from "react";
import { Anchor, Box, Text, ResponsiveContext } from "grommet";
import { PortfolioList } from "../PortfolioList/PortfolioList";
import { Footer } from "../Footer/Footer";

export const Portfolio = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  return (
    <Box background="#FBFBDE" width="80vw">
      <Box align="center" pad="small" gap="large">
        <Box pad="medium">
          <Text weight="bold" size="xlarge" className="title">
            The Apps that I've built
          </Text>
        </Box>
        <PortfolioList
          title="Piano App"
          detail="Are you bored? come play the piano.
          You can either press the
        key on your keyboard or click the key with the mouse."
          image={`${process.env.PUBLIC_URL}/Images/piano.png`}
          githubRepo="https://github.com/jijicodes/Piano"
          website="https://jijicodes.github.io/Piano/"
          title2="Weather"
          detail2="Enter your city to check the temperature. It also displays the country, the current time, and the date the city you entered."
          image2={`${process.env.PUBLIC_URL}/Images/weather.png`}
          githubRepo2="https://github.com/jijicodes/weather-app"
          website2="https://jijicodes.github.io/weather-app/"
        />

        <PortfolioList
          title="Password Generator"
          detail="Do you need a random password to create an account? I made a perfect app for you to modify random password length, numbers, symbols, and upeer/lower cases.
          If you like it, just click the copy button, it will automatically copy for you on your clipboard. If you don't like it, click refresh until you find the right one for you."
          image={`${process.env.PUBLIC_URL}/Images/password.png`}
          githubRepo="https://github.com/jijicodes/Password-Generator"
          website="https://jijicodes.github.io/Password-Generator/"
          title2="Memory Game"
          detail2="Play my matching card game to stimulate your brain!!"
          image2={`${process.env.PUBLIC_URL}/Images/memory.png`}
          githubRepo2="https://github.com/jijicodes/MatchingGame"
          website2="https://jijicodes.github.io/MatchingGame/"
        />
      </Box>
      <Footer />
    </Box>
  );
};
