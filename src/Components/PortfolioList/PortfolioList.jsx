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
    <Box direction="column" gap="large" align="center">
      <Box direction={isSmall ? "column" : "row"} gap="medium">
        <Box
          direction="column"
          gap="medium"
          width={isSmall ? undefined : "45vw"}
        >
          <Text direction="row" size="30px" color="#FF9A76" weight="bold">
            {title}
          </Text>
          <Text size="25px" color="#637373">
            {detail}
          </Text>
        </Box>

        <Box
          direction="column"
          gap="small"
          margin="none"
          width={{ max: isSmall ? undefined : "33.3%" }}
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

      <Box
        direction={isSmall ? "column-reverse" : "row"}
        gap="large"
        align="center"
      >
        <Box
          width={{ max: isSmall ? undefined : "33.3%" }}
          direction="column"
          gap="small"
        >
          <Box>
            <Image width="100%" fit="cover" src={image2} alignSelf="center" />
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
        <Box gap="medium" direction="column" width="45vw" justify="start">
          <Text size="30px" color="#FF9A76" weight="bold">
            {title2}
          </Text>
          <Text size="25px" color="#637373">
            {detail2}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
