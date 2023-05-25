import React, { useState } from "react";
import { Box, Tab, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Case = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return <Box></Box>;
};
export default Case;
