import React, { useContext } from "react";
import { Anchor, Box, Button, Image, Text, ResponsiveContext } from "grommet";
import { saveAs } from "file-saver";

export const Resume = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = size === "small";

  const saveFile = () => {
    saveAs(`${process.env.PUBLIC_URL}/Images/download.png`, "JS_CV.png");
  };
  return (
    <Box direction="column" gap="large" width={isSmall ? "90vw" : "60vw"}>
      <Box align="end">
        <Button
          size="small"
          primary
          hoverIndicator
          color="#524127"
          label="Download CV"
          onClick={saveFile}
        />
      </Box>
      <Image src={`${process.env.PUBLIC_URL}/Images/resumePrint.png`} />
      <Box
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
    </Box>
  );
};
