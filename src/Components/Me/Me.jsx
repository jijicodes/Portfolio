import React, { useContext } from "react";
import { Box, Text, ResponsiveContext } from "grommet";

export const Me = () => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box>{size === "small" ? <Box></Box> : <Box>This is about Me</Box>}</Box>
  );
};
