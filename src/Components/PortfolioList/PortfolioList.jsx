import React, { useContext } from "react";
import { Box, Image, Text, Button, ResponsiveContext } from "grommet";

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
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";

  return (
    <Box direction="column" gap="large">
      <Box direction={isSmall ? "column" : "row"} gap="medium">
        <Box direction="column" gap="medium" width={isSmall ? "80vw" : "45vw"}>
          <Text
            direction="row"
            size={isSmall ? "26px" : "30px"}
            color="#FF9A76"
            weight="bold"
          >
            {title}
          </Text>
          <Text size={isSmall ? "22px" : "25px"} color="#637373">
            {detail}
          </Text>
        </Box>

        <Box
          direction="column"
          gap="small"
          margin="none"
          alignSelf="center"
          width={{ max: isSmall ? "60vw" : "33.3%" }}
        >
          <Image
            width="100%"
            fit="contain"
            src={image}
            alignSelf="center"
            margin="none"
          />
          <Box direction="row" justify="center" gap="small">
            <Button
              size={isSmall ? "small" : "medium"}
              alignSelf="center"
              color="#524127"
              primary
              target="_blank"
              label="Github Repo"
              href={githubRepo}
              hoverIndicator
            />
            <Button
              size={isSmall ? "small" : "medium"}
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

      <Box
        direction={isSmall ? "column-reverse" : "row"}
        gap="large"
        alignContent="stretch"
      >
        <Box
          width={{ max: isSmall ? "60vw" : "33.3%" }}
          direction="column"
          gap="small"
          alignSelf="center"
        >
          <Box>
            <Image
              width="100%"
              fit="contain"
              src={image2}
              alignSelf="center"
              margin="none"
            />
          </Box>
          <Box direction="row" justify="center" gap="small">
            <Button
              size={isSmall ? "small" : "medium"}
              alignSelf="center"
              color="#524127"
              primary
              target="_blank"
              label="Github Repo"
              href={githubRepo2}
              hoverIndicator
            />
            <Button
              size={isSmall ? "small" : "medium"}
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
        <Box
          gap="medium"
          direction="column"
          width={isSmall ? "80vw" : "45vw"}
          justify="start"
        >
          <Text size={isSmall ? "26px" : "30px"} color="#FF9A76" weight="bold">
            {title2}
          </Text>
          <Text size={isSmall ? "22px" : "25px"} color="#637373">
            {detail2}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
