import React from "react";
import { Box, Button, Image } from "grommet";
import { saveAs } from "file-saver";

export const Resume = () => {
  const saveFile = () => {
    saveAs(`${process.env.PUBLIC_URL}/Images/resume1.png`, "Jieun-CV.png");
  };
  return (
    <Box direction="column" gap="medium">
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

      <Box width="70vw" height="90vh">
        <Image src={`${process.env.PUBLIC_URL}/Images/resume1.png`} />
      </Box>
    </Box>
  );
};
