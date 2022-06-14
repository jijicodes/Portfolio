import React from "react";
import { Mail, Map, Copy, Phone } from "grommet-icons";
import { Box, Button, Image, Text } from "grommet";
import { saveAs } from "file-saver";

export const Resume = () => {
  const saveFile = () => {
    saveAs(`${process.env.PUBLIC_URL}/Images/download.png`, "JS_CV.png");
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
        <Image src={`${process.env.PUBLIC_URL}/Images/resumePrint.png`} />
      </Box>
      <Box pad="small">
        <Box className="title">Contact Detail</Box>
        <Box direction="row" gap="small">
          <Map />
          <Text>Denver</Text>
        </Box>
        <Box direction="row" gap="small">
          <Mail />
          <Text>sjieun1@gmail.com</Text>
          <Copy size="small" />
        </Box>
      </Box>
    </Box>
  );
};
