import React from "react";
import { Box, Button, Image, Text } from "grommet";
import { saveAs } from "file-saver";

export const Resume = () => {
  const saveFile = () => {
    saveAs(`${process.env.PUBLIC_URL}/Images/download.png`, "JS_CV.png");
  };
  return (
    <Box direction="column" gap="medium" width="60vw">
      <Box align="end">
        {" "}
        <Button
          primary
          hoverIndicator
          color="#524127"
          label="Download CV"
          onClick={saveFile}
        />
      </Box>
      <Image src={`${process.env.PUBLIC_URL}/Images/resumePrint.png`} />
    </Box>
  );
};
