import React from "react";
import { Box, Button, Heading, Text, Image, Pagination } from "grommet";
import { Reactjs, Js, Grommet } from "grommet-icons";

export const Portfolio = () => {
  return (
    <Box className="portfolioBackround" fill>
      <Box align="center" pad="large" gap="large">
        <Box pad="medium">
          <Text weight="bold" size="xlarge">
            The Apps that I've built
          </Text>
        </Box>

        <Box direction="row" gap="large">
          <Box gap="medium" direction="column">
            <Text size="xlarge" weight="bold" color="#A47042">
              Piano App
            </Text>
            <Text size="20px">
              Are you bored? come play the piano. <br></br>You can either press
              the key on your keyboard <br></br> or click the key with mouse.
            </Text>
            <Box direction="row" gap="small">
              <Js color="white" />
              <Reactjs color="aqua" />
              <Grommet color="purple" />
            </Box>
          </Box>

          <Box direction="column" gap="small">
            <Box width="30vw">
              <Image
                fit="contain"
                src={`${process.env.PUBLIC_URL}/Images/piano.png`}
              />
            </Box>

            <Box direction="row" justify="center" gap="small">
              <Button
                color="#524127"
                primary
                target="_blank"
                label="Github Repo"
                href="https://github.com/jijicodes/Piano"
                hoverIndicator
              />
              <Button
                color="#524127"
                primary
                target="_blank"
                label="View the App"
                href="https://jijicodes.github.io/Piano/"
                hoverIndicator
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
