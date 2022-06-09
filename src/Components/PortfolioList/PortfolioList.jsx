import React from "react";
import { Box, Text, Button, Image } from "grommet";
import { Reactjs, Js, Grommet } from "grommet-icons";

export const PortfolioList = ({
  title,
  detail,
  image,
  githubRepo,
  website,
  title2,
  detail2,
  image2,
  githubRepo2,
  website2,
}) => {
  return (
    <Box direction="column" gap="large">
      <Box direction="row" gap="large">
        <Box direction="column" gap="medium" width="45vw">
          <Text direction="row" size="30px" color="#FF9A76">
            {title}
          </Text>
          <Text size="25px" color="#637373">
            {detail}
          </Text>
          <Box direction="row" gap="small">
            <Js color="white" />
            <Reactjs color="aqua" />
            <Grommet color="purple" />
          </Box>
        </Box>

        <Box direction="column" gap="medium">
          <Box width="34vw" height="34vw" align="center">
            <Image fit="contain" src={image} alignSelf="center" />
          </Box>

          <Box direction="row" justify="center" gap="small">
            <Button
              alignSelf="center"
              color="#524127"
              primary
              target="_blank"
              label="Github Repo"
              href={githubRepo}
              hoverIndicator
            />
            <Button
              alignSelf="center"
              color="#524127"
              primary
              target="_blank"
              label="App"
              href={website}
              hoverIndicator
            />
          </Box>
        </Box>
      </Box>

      <Box direction="row" gap="large">
        <Box direction="column" gap="medium">
          <Box width="30vw" height="30vw">
            <Image fit="contain" src={image2} alignSelf="center" />
          </Box>

          <Box direction="row" justify="center" gap="small">
            <Button
              alignSelf="center"
              color="#524127"
              primary
              target="_blank"
              label="Github Repo"
              href={githubRepo2}
              hoverIndicator
            />
            <Button
              alignSelf="center"
              color="#524127"
              primary
              target="_blank"
              label="App"
              href={website2}
              hoverIndicator
            />
          </Box>
        </Box>
        <Box gap="medium" direction="column" width="45vw">
          <Text alignSelf="end" size="30px" color="#FF9A76">
            {title2}
          </Text>
          <Text size="25px" color="#637373">
            {detail2}
          </Text>
          <Box direction="row" gap="small">
            <Js color="white" />
            <Reactjs color="aqua" />
            <Grommet color="purple" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
