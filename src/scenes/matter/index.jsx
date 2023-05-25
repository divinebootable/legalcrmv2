import React, { useState } from "react";
import { Box, Tab, Typography } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";

const Case = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Category" />
          <Tab label="Court Case" />
          <Tab label="Settlement" />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Box>
            <Typography>The first tab</Typography>
          </Box>
        )}
        {tabIndex === 1 && (
          <Box>
            <Typography>The second tab</Typography>
          </Box>
        )}
        {tabIndex === 2 && (
          <Box>
            <Typography>The third tab</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default Case;
