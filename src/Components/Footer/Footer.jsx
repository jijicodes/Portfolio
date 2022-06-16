import React, { useContext } from "react";
import { Box, Text, Anchor, ResponsiveContext } from "grommet";

export const Footer = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";
  return (
    <Box
      margin-top="auto"
      // height={isSmall ? "10vh" : "3rem"}
      align="center"
      // pad={isSmall ? "large" : undefined}
    >
      <Text size={isSmall ? "xsmall" : "medium"}>
        2022 | Designed &amp; Coded with ❤️ by
        <Anchor
          href="https://github.com/jijicodes"
          target="_blank"
          label="Jieun"
          color="black"
        />
        (aka Jenna)
      </Text>
    </Box>
  );
};
